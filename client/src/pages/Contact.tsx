import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { insertContactSubmissionSchema } from '@shared/schema';
import { useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import emailjs from "@emailjs/browser";


export default function Contact() {
  const { t, language } = useLanguage();
  const { toast } = useToast();


  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const form = useForm({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      business: '',
      message: '',
    },
  });


  const sendEmailJS = async (data: any) => {
    setIsSendingEmail(true);

    try {
      await emailjs.send(
        "service_vg4xdwl",
        "template_8pdmeoj",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          business: data.business,
          message: data.message,
        },
        "uKR7iZnQnJ7Qb9Ib0"
      );

      toast({
        title: t({ en: "Email Sent", ar: "تم إرسال البريد" }),
        description: t({
          en: "We've received your message and will get back shortly.",
          ar: "لقد استلمنا رسالتك وسنعاود التواصل قريبًا.",
        }),
      });

    } catch (error) {
      toast({
        title: t({ en: "Email Error", ar: "خطأ في البريد" }),
        description: t({
          en: "There was an issue sending your message. Try again.",
          ar: "حدثت مشكلة أثناء إرسال الرسالة. حاول مرة أخرى.",
        }),
        variant: "destructive",
      });
    } finally {
      setIsSendingEmail(false);
    }
  };

  const mutation = useMutation({
    mutationFn: (data: any) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
      toast({
        title: t({ en: 'Message Sent', ar: 'تم إرسال الرسالة' }),
        description: t({
          en: 'Thank you for contacting us. We will get back to you soon.',
          ar: 'شكرًا لتواصلك معنا. سنرد عليك قريبًا.'
        }),
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t({ en: 'Error', ar: 'خطأ' }),
        description: t({
          en: 'Failed to send message. Please try again.',
          ar: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.'
        }),
        variant: 'destructive',
      });
    },
  });


  const onSubmit = async (data: any) => {
    await sendEmailJS(data);     // Send email via EmailJS with improved UI
    mutation.mutate(data);       // Save to backend
  };

  const businesses = [
    { value: 'general', label: { en: 'General Inquiry', ar: 'استفسار عام' } },
    { value: 'medical', label: { en: 'Medical Center', ar: 'المركز الطبي' } },
    { value: 'shipping', label: { en: 'Shipping Agency', ar: 'التوكيلات الملاحية' } },
    { value: 'marine', label: { en: 'Marine Works', ar: 'الأشغال البحرية' } },
    { value: 'mining', label: { en: 'Mining Factory', ar: 'مصنع التعدين' } },
    { value: 'trade', label: { en: 'Trade & Agency', ar: 'التجارة والوكالات' } },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'ar' ? 'اتصل بنا | المرعي جروب' : 'Contact Us | El-Maraei Group'}</title>
        <meta name="description" content={language === 'ar' ? 'تواصل مع المرعي جروب. نحن هنا للمساعدة في استفساراتك عبر جميع أقسام أعمالنا' : 'Get in touch with El-Maraei Group. We\'re here to help with inquiries across all our business divisions'} />
      </Helmet>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t({ en: 'Contact Us', ar: 'اتصل بنا' })}
          </h1>
          <p className="text-lg opacity-90">
            {t({
              en: "We're here to help and answer any questions you might have",
              ar: 'نحن هنا للمساعدة والإجابة على أي أسئلة قد تكون لديك'
            })}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card><CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex justify-center items-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t({ en: 'Visit Us', ar: 'زرنا' })}</h3>
              <p className="text-muted-foreground text-sm">{t({ en: 'Cairo, Egypt', ar: 'القاهرة، مصر' })}</p>
            </CardContent></Card>

            <Card><CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex justify-center items-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t({ en: 'Call Us', ar: 'اتصل بنا' })}</h3>
              <p className="text-muted-foreground text-sm" dir="ltr">+20 123 456 7890</p>
            </CardContent></Card>

            <Card><CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex justify-center items-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t({ en: 'Email Us', ar: 'راسلنا' })}</h3>
              <p className="text-muted-foreground text-sm" dir="ltr">info@elmaraeigroup.com</p>
            </CardContent></Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t({ en: 'Send Us a Message', ar: 'أرسل لنا رسالة' })}</h2>

              <Card>
                <CardContent className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t({ en: 'Name', ar: 'الاسم' })}</FormLabel>
                            <FormControl><Input {...field} /></FormControl>
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
                            <FormControl><Input type="email" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t({ en: 'Phone (Optional)', ar: 'الهاتف (اختياري)' })}</FormLabel>
                            <FormControl><Input {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="business"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t({ en: 'Department', ar: 'القسم' })}</FormLabel>
                            <Select onValueChange={field.onChange}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={t({ en: 'Select department', ar: 'اختر القسم' })} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {businesses.map((business) => (
                                  <SelectItem key={business.value} value={business.value}>
                                    {t(business.label)}
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
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t({ en: 'Message', ar: 'الرسالة' })}</FormLabel>
                            <FormControl>
                              <Textarea rows={5} {...field} placeholder={t({ en: 'How can we help you?', ar: 'كيف يمكننا مساعدتك؟' })}/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit"
                        className="w-full bg-primary text-primary-foreground"
                        disabled={mutation.isPending || isSendingEmail}
                      >
                        {mutation.isPending || isSendingEmail ? (
                          <div className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                            </svg>
                            {t({ en: 'Sending...', ar: 'جارٍ الإرسال...' })}
                          </div>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            {t({ en: 'Send Message', ar: 'إرسال الرسالة' })}
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">{t({ en: 'Our Location', ar: 'موقعنا' })}</h2>

              <Card className="mb-6">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37706308143!2d31.233334!3d30.044444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Egypt!5e0!3m2!1sen!2s!4v1234567890"
                      width="100%" height="100%" style={{ border: 0 }}
                      allowFullScreen loading="lazy"
                      title="El-Maraei Group Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">{t({ en: 'Business Hours', ar: 'ساعات العمل' })}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>{t({ en: 'Sunday - Thursday', ar: 'الأحد - الخميس' })}</span>
                          <span dir="ltr">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t({ en: 'Friday - Saturday', ar: 'الجمعة - السبت' })}</span>
                          <span>{t({ en: 'Closed', ar: 'مغلق' })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
