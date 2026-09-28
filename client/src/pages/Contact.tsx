import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, Loader2, ExternalLink, } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { insertContactSubmissionSchema } from '@shared/schema';

type ContactFormData = z.infer<typeof insertContactSubmissionSchema>;

export default function Contact() {
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isArabic = language === 'ar';

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      business: '',
      message: '',
    },
  });

  
  const businesses = [
    { value: 'general', label: { en: 'General Inquiry', ar: 'استفسار عام' }, },
    { value: 'medical', label: { en: 'Medical Center', ar: 'المركز الطبي' }, },
    { value: 'shipping', label: { en: 'Shipping Agency', ar: 'التوكيلات الملاحية' }, },
    { value: 'marine', label: { en: 'Marine Works', ar: 'الأشغال البحرية' }, },
    { value: 'mining', label: { en: 'Mining Factory', ar: 'مصنع التعدين' }, },
    { value: 'trade', label: { en: 'Trade & Agency', ar: 'التجارة والوكالات' }, },
  ];

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_od0i4qq',
        'template_8pdmeoj',
        {
          ...data,

          // Honeypot field.
          // This should remain empty for legitimate users.
          website: '',
        },
        'fIUf7yHJdcdp1l_ap'
      );

      setIsSubmitted(true);
      form.reset();

      toast({
        title: t({
          en: 'Message Sent',
          ar: 'تم إرسال الرسالة',
        }),
        description: t({
          en: 'We have received your message and will get back to you shortly.',
          ar: 'تم استلام رسالتك وسنتواصل معك قريبًا.',
        }),
      });
    } catch (error) {
      console.error('EmailJS error:', error);

      toast({
        title: t({
          en: 'Unable to Send',
          ar: 'تعذر إرسال الرسالة',
        }),
        description: t({
          en: 'There was a problem sending your message. Please try again or contact us directly.',
          ar: 'حدثت مشكلة أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.',
        }),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    form.reset();
  };

  return (
    <div
      className="min-h-screen"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <Helmet>
        <title>
          {isArabic
            ? 'اتصل بنا | مجموعة المرعي'
            : 'Contact Us | El Maraie Group'}
        </title>

        <meta
          name="description"
          content={
            isArabic
              ? 'تواصل مع مجموعة المرعي للاستفسارات والشراكات والخدمات عبر مختلف قطاعات أعمالنا.'
              : "Get in touch with El Maraie Group for inquiries, partnerships, and services across our business divisions."
          }
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {t({
              en: 'Contact El Maraie Group',
              ar: 'تواصل مع مجموعة المرعي',
            })}
          </h1>

          <p className="mx-auto max-w-2xl text-lg opacity-90 md:text-xl">
            {t({
              en: 'Have a question, partnership opportunity, or business inquiry? Our team is ready to assist you.',
              ar: 'لديك استفسار أو فرصة شراكة أو طلب تجاري؟ فريقنا جاهز لمساعدتك.',
            })}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">

          {/* Contact Cards */}
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Location */}
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-2 font-semibold">
                  {t({
                    en: 'Visit Us',
                    ar: 'زرنا',
                  })}
                </h3>

                <a href="https://www.google.com/maps?q=29.9689246,32.54865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary" >
                  {t({
                    en: 'Suez, Egypt',
                    ar: 'السويس، مصر',
                  })}

                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-2 font-semibold">
                  {t({
                    en: 'Call Us',
                    ar: 'اتصل بنا',
                  })}
                </h3>

                <div className="space-y-1">
                  <a href="tel:+201091044200" dir="ltr"
                    className="block text-sm text-muted-foreground transition-colors hover:text-primary" >
                    +20 109 104 4200
                  </a>

                  <a href="tel:+201117966644" dir="ltr"
                    className="block text-sm text-muted-foreground transition-colors hover:text-primary" >
                    +20 111 796 6644
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-2 font-semibold">
                  {t({
                    en: 'Email Us',
                    ar: 'راسلنا',
                  })}
                </h3>

                <a href="mailto:elmaraie4js@gmail.com" dir="ltr"
                  className="break-all text-sm text-muted-foreground transition-colors hover:text-primary" >
                  elmaraie4js@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-2 font-semibold">
                  {t({
                    en: 'WhatsApp',
                    ar: 'واتساب',
                  })}
                </h3>

                <a
                  href="https://wa.me/201091044200"
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary" >
                  +20 109 104 4200
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">

            {/* Contact Form */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  {t({
                    en: 'Send Us a Message',
                    ar: 'أرسل لنا رسالة',
                  })}
                </h2>

                <p className="mt-2 text-muted-foreground">
                  {t({
                    en: 'Tell us how we can help and our team will get back to you.',
                    ar: 'أخبرنا كيف يمكننا مساعدتك وسيتواصل معك فريقنا.',
                  })}
                </p>
              </div>

              <Card>
                <CardContent className="p-6 md:p-8">

                  {isSubmitted ? (
                    <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>

                      <h3 className="mb-3 text-2xl font-bold">
                        {t({
                          en: 'Thank You!',
                          ar: 'شكرًا لك!',
                        })}
                      </h3>

                      <p className="mb-6 max-w-md text-muted-foreground">
                        {t({
                          en: 'Your message has been successfully sent. Our team will review your inquiry and get back to you shortly.',
                          ar: 'تم إرسال رسالتك بنجاح. سيقوم فريقنا بمراجعة استفسارك والتواصل معك قريبًا.',
                        })}
                      </p>

                      <Button type="button" variant="outline" onClick={handleSendAnother} >
                        {t({
                          en: 'Send Another Message',
                          ar: 'إرسال رسالة أخرى',
                        })}
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="space-y-5"
                      >

                        {/* Honeypot */}
                        <div className="hidden" aria-hidden="true" >
                          <label htmlFor="website">
                            Website
                          </label>

                          <input
                            id="website"
                            name="website"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </div>

                        {/* Name */}
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {t({
                                  en: 'Full Name',
                                  ar: 'الاسم بالكامل',
                                })}
                              </FormLabel>

                              <FormControl>
                                <Input
                                  {...field}
                                  autoComplete="name"
                                  placeholder={t({
                                    en: 'Enter your full name',
                                    ar: 'أدخل اسمك بالكامل',
                                  })}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Email */}
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {t({
                                  en: 'Email Address',
                                  ar: 'البريد الإلكتروني',
                                })}
                              </FormLabel>

                              <FormControl>
                                <Input
                                  {...field}
                                  type="email"
                                  dir="ltr"
                                  autoComplete="email"
                                  placeholder={t({
                                    en: 'you@example.com',
                                    ar: 'you@example.com',
                                  })}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Phone */}
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {t({
                                  en: 'Phone (Optional)',
                                  ar: 'الهاتف (اختياري)',
                                })}
                              </FormLabel>

                              <FormControl>
                               <Input
                                {...field}
                                value={field.value ?? ''}
                                type="tel"
                                dir="ltr"
                                autoComplete="tel"
                                placeholder="+20 1XX XXX XXXX"
                              />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Business */}
                        <FormField
                          control={form.control}
                          name="business"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {t({
                                  en: 'Area of Interest',
                                  ar: 'مجال الاستفسار',
                                })}
                              </FormLabel>

                              <Select value={field.value} onValueChange={field.onChange} >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue
                                      placeholder={t({
                                        en: 'Select an area',
                                        ar: 'اختر المجال',
                                      })}
                                    />
                                  </SelectTrigger>
                                </FormControl>

                                <SelectContent>
                                  {businesses.map((business) => (
                                    <SelectItem key={business.value} value={business.value} >
                                      {t(business.label)}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Message */}
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {t({
                                  en: 'Message',
                                  ar: 'الرسالة',
                                })}
                              </FormLabel>

                              <FormControl>
                                <Textarea
                                  {...field}
                                  rows={6}
                                  className="resize-none"
                                  placeholder={t({
                                    en: 'How can we help you?',
                                    ar: 'كيف يمكننا مساعدتك؟',
                                  })}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Submit */}
                        <div>
                          <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className={ isArabic ? 'ml-2 h-4 w-4 animate-spin' : 'mr-2 h-4 w-4 animate-spin' } />

                                {t({
                                  en: 'Sending...',
                                  ar: 'جارٍ الإرسال...',
                                })}
                              </>
                            ) : (
                              <>
                                <Send className={ isArabic ? 'ml-2 h-4 w-4' : 'mr-2 h-4 w-4' } />

                                {t({
                                  en: 'Send Message',
                                  ar: 'إرسال الرسالة',
                                })}
                              </>
                            )}
                          </Button>
                        </div>

                        {/* Privacy */}
                        <p className="text-center text-xs leading-relaxed text-muted-foreground">
                          {t({
                            en: 'By submitting this form, you agree that we may use your information to respond to your inquiry.',
                            ar: 'بإرسال هذا النموذج، فإنك توافق على استخدام معلوماتك للرد على استفسارك.',
                          })}
                        </p>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Location */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  {t({
                    en: 'Our Location',
                    ar: 'موقعنا',
                  })}
                </h2>

                <p className="mt-2 text-muted-foreground">
                  {t({
                    en: 'Find us and get in touch with our team.',
                    ar: 'يمكنك العثور علينا والتواصل مع فريقنا.',
                  })}
                </p>
              </div>

              {/* Map */}
              <Card className="mb-6 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted">
                    <iframe
                      src="https://www.google.com/maps?q=29.9689246,32.54865&z=17&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={ isArabic ? 'موقع مجموعة المرعي' : 'El Maraie Group Location' } />
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>

                    <div className="w-full">
                      <h3 className="mb-4 font-semibold">
                        {t({
                          en: 'Business Hours',
                          ar: 'ساعات العمل',
                        })}
                      </h3>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-muted-foreground">
                            {t({
                              en: 'Sunday - Thursday',
                              ar: 'الأحد - الخميس',
                            })}
                          </span>

                          <span dir="ltr" className="font-medium" >
                            9:00 AM - 11:00 PM
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <span className="text-muted-foreground">
                            {t({
                              en: 'Friday - Saturday',
                              ar: 'الجمعة - السبت',
                            })}
                          </span>

                          <span className="font-medium">
                            {t({
                              en: 'Closed',
                              ar: 'مغلق',
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Direct Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold">
                    {t({
                      en: 'Prefer to contact us directly?',
                      ar: 'تفضل التواصل معنا مباشرة؟',
                    })}
                  </h3>

                  <div className="grid gap-3 sm:grid-cols-2">

                    <a
                      href="tel:+201091044200"
                      dir="ltr"
                      className="flex items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      +20 109 104 4200
                    </a>

                    <a
                      href="https://wa.me/201091044200"
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="flex items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      <MessageCircle className="h-4 w-4 text-primary" />
                      WhatsApp
                    </a>
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