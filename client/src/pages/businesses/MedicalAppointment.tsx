import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, Clock, User, Mail, Phone, FileText } from 'lucide-react';
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
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

export default function MedicalAppointment() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      patientName: '',
      email: '',
      phone: '',
      department: '',
      appointmentDate: '',
      appointmentTime: '',
      notes: '',
    },
  });

  const mutation = useMutation({
    mutationFn: (data: any) => apiRequest('POST', '/api/appointments', data),
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: t({ en: 'Appointment Booked', ar: 'تم حجز الموعد' }),
        description: t({ 
          en: 'Your appointment has been successfully scheduled.', 
          ar: 'تم جدولة موعدك بنجاح.' 
        }),
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t({ en: 'Error', ar: 'خطأ' }),
        description: t({ 
          en: 'Failed to book appointment. Please try again.', 
          ar: 'فشل حجز الموعد. يرجى المحاولة مرة أخرى.' 
        }),
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  const departments = [
    { value: 'cardiology', label: { en: 'Cardiology', ar: 'أمراض القلب' } },
    { value: 'orthopedics', label: { en: 'Orthopedics', ar: 'جراحة العظام' } },
    { value: 'pediatrics', label: { en: 'Pediatrics', ar: 'طب الأطفال' } },
    { value: 'gynecology', label: { en: 'Gynecology', ar: 'أمراض النساء' } },
    { value: 'dermatology', label: { en: 'Dermatology', ar: 'الأمراض الجلدية' } },
    { value: 'ophthalmology', label: { en: 'Ophthalmology', ar: 'طب العيون' } },
    { value: 'dentistry', label: { en: 'Dentistry', ar: 'طب الأسنان' } },
    { value: 'general', label: { en: 'General Medicine', ar: 'الطب العام' } },
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  ];

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
                  en: 'Thank you for booking an appointment with El-Maraei Medical Center. We will contact you shortly to confirm your appointment details.', 
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
        <title>{language === 'ar' ? 'احجز موعد | المركز الطبي | المرعي جروب' : 'Book Appointment | Medical Center | El-Maraei Group'}</title>
        <meta name="description" content={language === 'ar' ? 'احجز موعدك الطبي مع المركز الطبي للمرعي. رعاية متخصصة عبر تخصصات متعددة' : 'Schedule your medical appointment with El-Maraei Medical Center. Expert care across multiple specialties'} />
        <meta property="og:title" content={language === 'ar' ? 'احجز موعد | المركز الطبي | المرعي جروب' : 'Book Appointment | Medical Center | El-Maraei Group'} />
        <meta property="og:description" content={language === 'ar' ? 'احجز موعدك الطبي مع المركز الطبي للمرعي' : 'Schedule your medical appointment with El-Maraei Medical Center'} />
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
                              <SelectItem key={dept.value} value={dept.value}>
                                {t(dept.label)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="appointmentDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t({ en: 'Preferred Date', ar: 'التاريخ المفضل' })}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Calendar className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                              {...field} 
                              type="date" 
                              min={new Date().toISOString().split('T')[0]}
                              className="ltr:pl-9 rtl:pr-9" 
                              data-testid="input-date" 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                            {timeSlots.map((time) => (
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
                  disabled={mutation.isPending}
                  data-testid="button-submit-appointment"
                >
                  {mutation.isPending 
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
