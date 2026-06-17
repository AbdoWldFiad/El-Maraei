import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Mail, Phone, FileText } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { insertAppointmentSchema } from '@shared/schema';
import emailjs from "@emailjs/browser";
import { Department, getDepartments } from "@/extras/departments";

export default function MedicalAppointment() {
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      patientName: '',
      email: '',
      phone: '',
      department: '',
      doctor: '',
      appointmentDate: '',
      appointmentTime: '',
      notes: '',
    },
  });


const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);

const onSubmit = (data: any) => {
  console.log("Submitting form:", data); // debug log
  setIsSubmitting(true); // mark as submitting
  emailjs.send(
    "service_od0i4qq",
    "template_0185ig7",
    data,
    "fIUf7yHJdcdp1l_ap"
  )
  .then(() => {
    setIsSubmitted(true); // mark as successfully submitted
    toast({
      title: 'Appointment Booked',
      description: 'Your appointment has been successfully scheduled.'
    });
    form.reset();
  })
  .catch((err) => {
    console.error("EmailJS error:", err);
    toast({
      title: 'Error',
      description: 'Failed to book appointment. Please try again.',
      variant: 'destructive'
    });
  })
  .finally(() => {
    setIsSubmitting(false); // always reset submitting state
  });
};

const [departments, setDepartments] = useState<Department[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  getDepartments()
    .then(setDepartments)
    .catch(console.error)
    .finally(() => setLoading(false));
}, []);

const departmentValue = form.watch("department");

const selectedDepartment = useMemo(() => {
  return departments.find(d => d.en === departmentValue);
}, [departments, departmentValue]);

const doctorValue = form.watch("doctor");

const selectedDoctor = useMemo(() => {
  return selectedDepartment?.doctors.find(
    (d) => d.en === doctorValue
  );
}, [selectedDepartment, doctorValue]);


const allowedDays = useMemo(() => {
  return selectedDoctor?.schedule?.map((s) => s.day_en) ?? [];
}, [selectedDoctor]);

const isAllowedDate = (dateString: string) => {
  if (!allowedDays.length) return true;

  const [year, month, day] = dateString.split("-").map(Number);

  const date = new Date(year, month - 1, day);

  const dayName = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return allowedDays.includes(dayName);
};

const formatDateLocal = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const CLINIC_END_TIME = "23:30";
const SLOT_INTERVAL = 30;

const generateSlots = (
  start: string,
  end: string,
  interval = 30
) => {
  const slots: string[] = [];

  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  let current = sh * 60 + sm;
  const finish = eh * 60 + em;

  while (current <= finish) {
    const h = Math.floor(current / 60);
    const m = current % 60;

    const displayHour = h % 12 || 12;
    const period = h >= 12 ? "PM" : "AM";

    slots.push(
      `${displayHour}:${String(m).padStart(2, "0")} ${period}`
    );

    current += interval;
  }

  return slots;
};

const appointmentDate = form.watch("appointmentDate");

const locale = language === "ar" ? "ar-EG" : "en-US";

const availableSlots = useMemo(() => {
  if (!selectedDoctor || !appointmentDate) return [];

  const date = new Date(appointmentDate);

  const dayName = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const schedule = selectedDoctor.schedule?.find(
    (s) => s.day_en === dayName
  );

  if (!schedule) return [];

  const endTime = schedule.end ?? CLINIC_END_TIME;

  return generateSlots(schedule.time, endTime, SLOT_INTERVAL);
}, [selectedDoctor, appointmentDate]);

const getNextAvailableDates = (
  allowedDays: string[],
  daysAhead = 30
) => {
  const dates: { label: string; value: string }[] = [];

  const today = new Date();

  for (let i = 0; i < daysAhead; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);

    const dayName = date.toLocaleDateString("en-US", {
      weekday: "long",
    });

    if (allowedDays.includes(dayName)) {
      const value = formatDateLocal(date);

      dates.push({
        value,
        label: date.toLocaleDateString(locale, {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      });
    }
  }
  return dates;
};

const availableDates = useMemo(() => {
  if (!selectedDoctor) return [];

  return getNextAvailableDates(allowedDays, 30);
}, [selectedDoctor, allowedDays]);

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-16 bg-muted/30">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardContent className="p-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {t({ en: 'Appointment Confirmed!', ar: 'تم تأكيد الموعد!' })}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t({ 
                  en: 'Thank you for booking an appointment with El maraie Medical Center. We will contact you shortly to confirm your appointment details.', 
                  ar: 'شكرًا لحجز موعد مع المركز الطبي للمرعي. سنتصل بك قريبًا لتأكيد تفاصيل موعدك.' 
                })}
              </p>
              <Button onClick={() => setIsSubmitted(false)} data-testid="button-book-another">
                {t({ en: 'Book Another Appointment', ar: 'احجز موعدًا آخر' })}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-muted/30">
      <Helmet>
        <title>{language === 'ar' ? 'احجز موعد | المركز الطبي | المرعي جروب' : 'Book Appointment | Medical Center | El maraie Group'}</title>
        <meta name="description" content={language === 'ar' ? 'احجز موعدك الطبي مع المركز الطبي للمرعي. رعاية متخصصة عبر تخصصات متعددة' : 'Schedule your medical appointment with El maraie Medical Center. Expert care across multiple specialties'} />
        <meta property="og:title" content={language === 'ar' ? 'احجز موعد | المركز الطبي | المرعي جروب' : 'Book Appointment | Medical Center | El maraie Group'} />
        <meta property="og:description" content={language === 'ar' ? 'احجز موعدك الطبي مع المركز الطبي للمرعي' : 'Schedule your medical appointment with El maraie Medical Center'} />
      </Helmet>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t({ en: 'Book an Appointment', ar: 'احجز موعد' })}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t({ 
              en: 'Schedule your visit with our expert medical team', 
              ar: 'حدد موعد زيارتك مع فريقنا الطبي المتخصص' 
            })}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {t({ en: 'Patient Information', ar: 'معلومات المريض' })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="patientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t({ en: 'Full Name', ar: 'الاسم الكامل' })}</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-patient-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* department */}
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t({ en: 'Department', ar: 'القسم' })}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-department">
                              <SelectValue placeholder={t({ en: 'Select department', ar: 'اختر القسم' })} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept.en} value={dept.en}>
                                {language === "ar" ? dept.ar : dept.en}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t({ en: 'Phone Number', ar: 'رقم الهاتف' })}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input {...field} className="ltr:pl-9 rtl:pr-9" data-testid="input-phone" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                    {/* doctor */}
                  <FormField
                    control={form.control}
                    name="doctor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {t({ en: "Doctor", ar: "الطبيب" })}
                        </FormLabel>

                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={!selectedDepartment}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={t({
                                  en: "Select doctor",
                                  ar: "اختر الطبيب",
                                })}
                              />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            {selectedDepartment ? (
                              selectedDepartment.doctors.length > 0 ? (
                                selectedDepartment.doctors.map((doctor) => (
                                  <SelectItem key={doctor.en} value={doctor.en}>
                                    {language === "ar" ? doctor.ar : doctor.en}
                                  </SelectItem>
                                ))
                              ) : (
                                <SelectItem value="none" disabled>
                                  {t({ en: "Coming soon", ar: "قريبًا" })}
                                </SelectItem>
                              )
                            ) : (
                              <SelectItem value="none" disabled>
                                {t({ en: "Select department first", ar: "اختر القسم أولاً" })}
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t({ en: 'Email', ar: 'البريد الإلكتروني' })}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input {...field} className="ltr:pl-9 rtl:pr-9" data-testid="input-email" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* appointmentDate */}
                  <FormField
                    control={form.control}
                    name="appointmentDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {t({ en: "Preferred Date", ar: "التاريخ المفضل" })}
                        </FormLabel>

                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => {
                              if (!selectedDoctor) return;

                              if (!isAllowedDate(value)) {
                                toast({
                                  title: t({
                                    en: "Invalid date",
                                    ar: "تاريخ غير متاح",
                                  }),
                                  description: t({
                                    en: "This doctor is not available on that day.",
                                    ar: "هذا الطبيب غير متاح في هذا اليوم.",
                                  }),
                                  variant: "destructive",
                                });
                                return;
                              }

                              field.onChange(value);
                            }}
                            disabled={!selectedDoctor}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={t({
                                    en: "Select date",
                                    ar: "اختر التاريخ",
                                  })}
                                />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              {availableDates.length > 0 ? (
                                availableDates.map((date) => (
                                  <SelectItem key={date.value} value={date.value}>
                                    {date.label}
                                  </SelectItem>
                                ))
                              ) : (
                                <SelectItem value="none" disabled>
                                  {t({ en: "No available dates", ar: "لا توجد مواعيد متاحة" })}
                                </SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                    {/* appointmentTime */}
                  <FormField
                    control={form.control}
                    name="appointmentTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t({ en: 'Preferred Time', ar: 'الوقت المفضل' })}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-time">
                              <SelectValue placeholder={t({ en: 'Select time', ar: 'اختر الوقت' })} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {availableSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t({ en: 'Additional Notes (Optional)', ar: 'ملاحظات إضافية (اختياري)' })}</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <FileText className="absolute ltr:left-3 rtl:right-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Textarea 
                            {...field} 
                            className="ltr:pl-9 rtl:pr-9 min-h-[100px]" 
                            placeholder={t({ 
                              en: 'Any specific concerns or questions?', 
                              ar: 'أي مخاوف أو أسئلة محددة؟' 
                            })}
                            data-testid="input-notes"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground"
                  disabled={isSubmitting}
                  data-testid="button-submit-appointment"
                >
                  {isSubmitting
                    ? t({ en: 'Booking...', ar: 'جارٍ الحجز...' })
                    : t({ en: 'Book Appointment', ar: 'احجز موعد' })
                  }
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
