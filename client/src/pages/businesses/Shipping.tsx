import { Ship, Anchor, Globe, Package, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import shippingImage from '@assets/generated_images/Shipping_agency_port_image_bb7e32b1.png';

export default function Shipping() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Ship,
      title: { en: 'Vessel Agency', ar: 'وكالة السفن' },
      description: { en: 'Complete port agency services for all vessel types', ar: 'خدمات وكالة موانئ كاملة لجميع أنواع السفن' },
    },
    {
      icon: Package,
      title: { en: 'Cargo Handling', ar: 'مناولة البضائع' },
      description: { en: 'Efficient loading and unloading operations', ar: 'عمليات تحميل وتفريغ فعالة' },
    },
    {
      icon: Globe,
      title: { en: 'International Shipping', ar: 'الشحن الدولي' },
      description: { en: 'Global maritime logistics solutions', ar: 'حلول لوجستية بحرية عالمية' },
    },
    {
      icon: Clock,
      title: { en: 'Transit Services', ar: 'خدمات العبور' },
      description: { en: 'Fast and reliable cargo transit management', ar: 'إدارة عبور بضائع سريعة وموثوقة' },
    },
    {
      icon: Shield,
      title: { en: 'Customs Clearance', ar: 'التخليص الجمركي' },
      description: { en: 'Expert customs documentation and clearance', ar: 'خبرة في الوثائق والتخليص الجمركي' },
    },
    {
      icon: Anchor,
      title: { en: 'Port Operations', ar: 'عمليات الموانئ' },
      description: { en: 'Comprehensive port management services', ar: 'خدمات إدارة موانئ شاملة' },
    },
  ];

  const ports = [
    { en: 'Alexandria Port', ar: 'ميناء الإسكندرية' },
    { en: 'Port Said Port', ar: 'ميناء بورسعيد' },
    { en: 'Suez Port', ar: 'ميناء السويس' },
    { en: 'Damietta Port', ar: 'ميناء دمياط' },
    { en: 'Ain Sokhna Port', ar: 'ميناء العين السخنة' },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'ar' ? 'التوكيلات الملاحية | المرعي جروب' : 'Shipping Agency | El-Maraei Group'}</title>
        <meta name="description" content={language === 'ar' ? 'حلول شحن بحري احترافية وخدمات وكالة موانئ عبر الموانئ المصرية الرئيسية' : 'Professional maritime shipping solutions and port agency services across major Egyptian ports'} />
        <meta property="og:title" content={language === 'ar' ? 'التوكيلات الملاحية | المرعي جروب' : 'Shipping Agency | El-Maraei Group'} />
        <meta property="og:description" content={language === 'ar' ? 'حلول شحن بحري احترافية وخدمات وكالة موانئ' : 'Professional maritime shipping and port agency services'} />
      </Helmet>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${shippingImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Ship className="h-16 w-16 text-gold mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t({ en: 'Shipping Agency', ar: 'التوكيلات الملاحية' })}
          </h1>
          <p className="text-xl text-white/90">
            {t({ 
              en: 'Your Trusted Partner in Maritime Logistics', 
              ar: 'شريكك الموثوق في اللوجستيات البحرية' 
            })}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {t({ en: 'About Our Shipping Services', ar: 'عن خدماتنا الملاحية' })}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t({ 
                en: 'El-Maraei Shipping Agency provides comprehensive maritime services across major Egyptian ports. With decades of experience, we ensure efficient and reliable shipping solutions for our clients worldwide.', 
                ar: 'توفر وكالة المرعي للملاحة خدمات بحرية شاملة عبر الموانئ المصرية الرئيسية. بفضل عقود من الخبرة، نضمن حلول شحن فعالة وموثوقة لعملائنا في جميع أنحاء العالم.' 
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`service-card-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-chart-2/20 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-chart-2" />
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                {t({ en: 'Ports We Serve', ar: 'الموانئ التي نخدمها' })}
              </h2>
              <div className="space-y-3">
                {ports.map((port, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-md hover-elevate" data-testid={`port-${index}`}>
                    <Anchor className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-muted-foreground">{t(port)}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {t({ en: 'Why Choose Us?', ar: 'لماذا تختارنا؟' })}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {t({ en: 'Expert Team', ar: 'فريق خبراء' })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'Experienced maritime professionals', ar: 'محترفون بحريون ذوو خبرة' })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {t({ en: '24/7 Support', ar: 'دعم على مدار الساعة' })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'Round-the-clock assistance', ar: 'مساعدة على مدار الساعة' })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {t({ en: 'Competitive Rates', ar: 'أسعار تنافسية' })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'Cost-effective shipping solutions', ar: 'حلول شحن فعالة من حيث التكلفة' })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {t({ en: 'Global Network', ar: 'شبكة عالمية' })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'Worldwide shipping connections', ar: 'اتصالات شحن عالمية' })}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t({ en: 'Ready to Ship?', ar: 'مستعد للشحن؟' })}
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {t({ 
              en: 'Contact us today for a customized shipping solution tailored to your needs.', 
              ar: 'اتصل بنا اليوم للحصول على حل شحن مخصص يناسب احتياجاتك.' 
            })}
          </p>
          <a href="/contact">
            <button className="px-8 py-3 bg-gold text-gold-foreground rounded-md hover-elevate active-elevate-2 font-medium" data-testid="button-contact">
              {t({ en: 'Get a Quote', ar: 'احصل على عرض سعر' })}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
