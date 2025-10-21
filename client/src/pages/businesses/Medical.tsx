import { Link } from 'wouter';
import { Stethoscope, Clock, Award, Users, Calendar, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import medicalImage from '@assets/generated_images/Medical_center_interior_image_d55bb764.png';

export default function Medical() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Stethoscope,
      title: { en: 'General Medicine', ar: 'الطب العام' },
      description: { en: 'Comprehensive primary healthcare services', ar: 'خدمات رعاية صحية أولية شاملة' },
    },
    {
      icon: Users,
      title: { en: 'Specialist Consultations', ar: 'استشارات متخصصة' },
      description: { en: 'Expert care from certified specialists', ar: 'رعاية متخصصة من أطباء معتمدين' },
    },
    {
      icon: Clock,
      title: { en: '24/7 Emergency Care', ar: 'رعاية طوارئ على مدار الساعة' },
      description: { en: 'Round-the-clock emergency medical services', ar: 'خدمات طوارئ طبية على مدار الساعة' },
    },
    {
      icon: Award,
      title: { en: 'Advanced Diagnostics', ar: 'تشخيص متقدم' },
      description: { en: 'State-of-the-art diagnostic equipment', ar: 'أحدث معدات التشخيص' },
    },
  ];

  const departments = [
    { en: 'Cardiology', ar: 'أمراض القلب' },
    { en: 'Orthopedics', ar: 'جراحة العظام' },
    { en: 'Pediatrics', ar: 'طب الأطفال' },
    { en: 'Gynecology', ar: 'أمراض النساء' },
    { en: 'Dermatology', ar: 'الأمراض الجلدية' },
    { en: 'Ophthalmology', ar: 'طب العيون' },
    { en: 'Dentistry', ar: 'طب الأسنان' },
    { en: 'Laboratory Services', ar: 'خدمات المختبر' },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'ar' ? 'المركز الطبي | المرعي جروب' : 'Medical Center | El-Maraei Group'}</title>
        <meta name="description" content={language === 'ar' ? 'خدمات رعاية صحية شاملة مع مرافق حديثة. رعاية طوارئ على مدار الساعة ومحترفون طبيون خبراء' : 'Comprehensive healthcare services with state-of-the-art facilities. 24/7 emergency care and expert medical professionals'} />
        <meta property="og:title" content={language === 'ar' ? 'المركز الطبي | المرعي جروب' : 'Medical Center | El-Maraei Group'} />
        <meta property="og:description" content={language === 'ar' ? 'خدمات رعاية صحية شاملة مع مرافق حديثة ومحترفون طبيون خبراء' : 'Comprehensive healthcare with state-of-the-art facilities and expert medical professionals'} />
      </Helmet>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${medicalImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Stethoscope className="h-16 w-16 text-gold mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t({ en: 'Medical Center', ar: 'المركز الطبي' })}
          </h1>
          <p className="text-xl text-white/90">
            {t({ 
              en: 'Your Health, Our Priority - Providing Excellence in Healthcare', 
              ar: 'صحتك، أولويتنا - نقدم التميز في الرعاية الصحية' 
            })}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {t({ en: 'About Our Medical Center', ar: 'عن مركزنا الطبي' })}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t({ 
                en: 'El-Maraei Medical Center is a state-of-the-art healthcare facility offering comprehensive medical services. Our team of experienced physicians and healthcare professionals is dedicated to providing the highest quality care to our patients.', 
                ar: 'المركز الطبي للمرعي هو منشأة رعاية صحية حديثة تقدم خدمات طبية شاملة. فريقنا من الأطباء وأخصائيي الرعاية الصحية ذوي الخبرة مكرس لتقديم أعلى جودة من الرعاية لمرضانا.' 
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`service-card-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    {t(service.title)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(service.description)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {t({ en: 'Our Departments', ar: 'أقسامنا' })}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-center gap-2" data-testid={`department-${index}`}>
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <span className="text-muted-foreground">{t(dept)}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  {t({ en: 'Book an Appointment', ar: 'احجز موعد' })}
                </h3>
                <p className="mb-6 text-primary-foreground/90">
                  {t({ 
                    en: 'Schedule your visit with our expert medical team. We offer convenient appointment times to suit your schedule.', 
                    ar: 'حدد موعد زيارتك مع فريقنا الطبي المتخصص. نقدم مواعيد مريحة تناسب جدولك.' 
                  })}
                </p>
                <Link href="/businesses/medical/appointment">
                  <Button className="w-full bg-gold text-gold-foreground hover:bg-gold/90" data-testid="button-book-appointment">
                    {t({ en: 'Book Now', ar: 'احجز الآن' })}
                  </Button>
                </Link>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-5 w-5 text-gold" />
                    <div>
                      <div className="font-semibold">{t({ en: 'Emergency Line', ar: 'خط الطوارئ' })}</div>
                      <div dir="ltr" className="text-primary-foreground/80">+20 123 456 7890</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {t({ en: 'Why Choose Our Medical Center?', ar: 'لماذا تختار مركزنا الطبي؟' })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">{t({ en: 'Years Experience', ar: 'سنوات من الخبرة' })}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">{t({ en: 'Medical Professionals', ar: 'محترف طبي' })}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">{t({ en: 'Patients Served', ar: 'مريض تم خدمته' })}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
