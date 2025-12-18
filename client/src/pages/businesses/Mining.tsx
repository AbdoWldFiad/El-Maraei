import { Mountain, Gem, TrendingUp, Shield, Leaf, Factory } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import miningImage from '@assets/generated_images/Mining_factory_operations_image_ab02d1b7.png';

export default function Mining() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Mountain,
      title: { en: 'El-Maraei for Mineral Extraction', ar: 'المرعي لي استخراج المعادن' },
      description: { en: 'Advanced mining operations and ore extraction', ar: 'عمليات تعدين متقدمة واستخراج الخامات' },
    },
    {
      icon: Factory,
      title: { en: 'Processing & Refining', ar: 'المعالجة والتكرير' },
      description: { en: 'State-of-the-art mineral processing facilities', ar: 'مرافق معالجة معادن حديثة' },
    },
    {
      icon: Gem,
      title: { en: 'Quality Control', ar: 'مراقبة الجودة' },
      description: { en: 'Rigorous testing and quality assurance', ar: 'اختبار صارم وضمان الجودة' },
    },
    {
      icon: TrendingUp,
      title: { en: 'Resource Management', ar: 'إدارة الموارد' },
      description: { en: 'Sustainable resource utilization strategies', ar: 'استراتيجيات استخدام مستدامة للموارد' },
    },
    {
      icon: Shield,
      title: { en: 'Safety Standards', ar: 'معايير السلامة' },
      description: { en: 'Industry-leading safety protocols', ar: 'بروتوكولات سلامة رائدة في الصناعة' },
    },
    {
      icon: Leaf,
      title: { en: 'Environmental Care', ar: 'الرعاية البيئية' },
      description: { en: 'Commitment to environmental sustainability', ar: 'التزام بالاستدامة البيئية' },
    },
  ];

  const minerals = [
    { en: 'Limestone', ar: 'الحجر الجيري' },
    { en: 'Marble', ar: 'الرخام' },
    { en: 'Granite', ar: 'الجرانيت' },
    { en: 'Phosphate', ar: 'الفوسفات' },
    { en: 'Silica Sand', ar: 'رمل السيليكا' },
    { en: 'Kaolin', ar: 'الكاولين' },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'ar' ? 'مصنع التعدين | المرعي جروب' : 'Mining Factory | El-Maraei Group'}</title>
        <meta name="description" content={language === 'ar' ? 'معالجة معادن مستدامة واستخراج. تكنولوجيا متقدمة تلبي أعلى معايير السلامة والبيئة' : 'Sustainable mineral processing and extraction. Advanced technology meeting highest safety and environmental standards'} />
        <meta property="og:title" content={language === 'ar' ? 'مصنع التعدين | المرعي جروب' : 'Mining Factory | El-Maraei Group'} />
        <meta property="og:description" content={language === 'ar' ? 'معالجة معادن مستدامة بأعلى معايير السلامة والبيئة' : 'Sustainable mineral processing with highest safety and environmental standards'} />
      </Helmet>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${miningImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Mountain className="h-16 w-16 text-gold mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t({ en: 'Mining Factory', ar: 'مصنع التعدين' })}
          </h1>
          <p className="text-xl text-white/90">
            {t({ 
              en: 'Sustainable Mineral Processing Excellence', 
              ar: 'تميز في معالجة المعادن المستدامة' 
            })}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {t({ en: 'About Our Mining Operations', ar: 'عن عمليات التعدين لدينا' })}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t({ 
                en: 'El-Maraei Mining Factory combines advanced technology with sustainable practices to extract and process high-quality minerals. We are committed to responsible mining that benefits both industry and environment.', 
                ar: 'يجمع مصنع المرعي للتعدين بين التكنولوجيا المتقدمة والممارسات المستدامة لاستخراج ومعالجة معادن عالية الجودة. نحن ملتزمون بالتعدين المسؤول الذي يفيد الصناعة والبيئة.' 
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`service-card-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-chart-4/20 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-chart-4" />
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
                {t({ en: 'Minerals We Process', ar: 'المعادن التي نعالجها' })}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {minerals.map((mineral, index) => (
                  <div key={index} className="flex items-center gap-2" data-testid={`mineral-${index}`}>
                    <Gem className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-muted-foreground">{t(mineral)}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {t({ en: 'Our Commitment', ar: 'التزامنا' })}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {t({ en: 'Safety First', ar: 'السلامة أولاً' })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'Highest safety standards for our workers', ar: 'أعلى معايير السلامة لعمالنا' })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {t({ en: 'Environmental Protection', ar: 'حماية البيئة' })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'Sustainable practices and land rehabilitation', ar: 'ممارسات مستدامة وإعادة تأهيل الأراضي' })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {t({ en: 'Continuous Innovation', ar: 'الابتكار المستمر' })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'Investment in advanced technology', ar: 'الاستثمار في التكنولوجيا المتقدمة' })}
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t({ en: 'Production Excellence', ar: 'تميز الإنتاج' })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-gold mb-2">500K+</div>
                <div className="text-primary-foreground/80">{t({ en: 'Tons Processed Annually', ar: 'طن معالج سنويًا' })}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">20+</div>
                <div className="text-primary-foreground/80">{t({ en: 'Years Experience', ar: 'سنوات من الخبرة' })}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">99.5%</div>
                <div className="text-primary-foreground/80">{t({ en: 'Product Purity', ar: 'نقاء المنتج' })}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {t({ en: 'Partner With Us', ar: 'شارك معنا' })}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t({ 
              en: 'Looking for reliable mineral supply? Contact us for wholesale pricing and delivery options.', 
              ar: 'تبحث عن إمدادات معادن موثوقة؟ اتصل بنا للحصول على أسعار الجملة وخيارات التوصيل.' 
            })}
          </p>
          <a href="/contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 font-medium" data-testid="button-contact">
              {t({ en: 'Request Information', ar: 'طلب معلومات' })}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
