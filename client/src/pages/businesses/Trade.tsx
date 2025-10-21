import { Handshake, Globe, TrendingUp, Package, FileCheck, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import tradeImage from '@assets/generated_images/Trade_and_agency_partnership_image_05aaebf1.png';

export default function Trade() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Handshake,
      title: { en: 'Business Representation', ar: 'تمثيل الأعمال' },
      description: { en: 'Professional representation for international brands in Egypt', ar: 'تمثيل احترافي للعلامات التجارية الدولية في مصر' },
    },
    {
      icon: Globe,
      title: { en: 'Import & Export', ar: 'الاستيراد والتصدير' },
      description: { en: 'Comprehensive international trade solutions', ar: 'حلول تجارية دولية شاملة' },
    },
    {
      icon: Package,
      title: { en: 'Distribution Services', ar: 'خدمات التوزيع' },
      description: { en: 'Nationwide distribution network and logistics', ar: 'شبكة توزيع ولوجستيات على مستوى الدولة' },
    },
    {
      icon: FileCheck,
      title: { en: 'Trade Compliance', ar: 'الامتثال التجاري' },
      description: { en: 'Expert handling of trade regulations and documentation', ar: 'معالجة خبيرة للوائح التجارية والتوثيق' },
    },
    {
      icon: TrendingUp,
      title: { en: 'Market Analysis', ar: 'تحليل السوق' },
      description: { en: 'In-depth market research and business intelligence', ar: 'أبحاث سوق متعمقة وذكاء أعمال' },
    },
    {
      icon: Users,
      title: { en: 'Partnership Development', ar: 'تطوير الشراكات' },
      description: { en: 'Building strategic business relationships', ar: 'بناء علاقات أعمال استراتيجية' },
    },
  ];

  const sectors = [
    { en: 'Industrial Equipment', ar: 'المعدات الصناعية' },
    { en: 'Construction Materials', ar: 'مواد البناء' },
    { en: 'Consumer Goods', ar: 'السلع الاستهلاكية' },
    { en: 'Automotive Parts', ar: 'قطع غيار السيارات' },
    { en: 'Medical Supplies', ar: 'المستلزمات الطبية' },
    { en: 'Agricultural Products', ar: 'المنتجات الزراعية' },
    { en: 'Technology & Electronics', ar: 'التكنولوجيا والإلكترونيات' },
    { en: 'Food & Beverages', ar: 'الأغذية والمشروبات' },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'ar' ? 'التجارة والوكالات | المرعي جروب' : 'Trade & Agency | El-Maraei Group'}</title>
        <meta name="description" content={language === 'ar' ? 'خدمات تمثيل التجارة الدولية والوكالات التجارية. بوابتك إلى الأسواق المصرية والعالمية' : 'International trade representation and business agency services. Your gateway to Egyptian and global markets'} />
        <meta property="og:title" content={language === 'ar' ? 'التجارة والوكالات | المرعي جروب' : 'Trade & Agency | El-Maraei Group'} />
        <meta property="og:description" content={language === 'ar' ? 'خدمات تمثيل التجارة الدولية والوكالات التجارية' : 'International trade representation and business agency services'} />
      </Helmet>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tradeImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Handshake className="h-16 w-16 text-gold mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t({ en: 'Trade & Agency', ar: 'التجارة والوكالات' })}
          </h1>
          <p className="text-xl text-white/90">
            {t({ 
              en: 'Your Gateway to Egyptian and International Markets', 
              ar: 'بوابتك إلى الأسواق المصرية والدولية' 
            })}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {t({ en: 'About Our Trade Services', ar: 'عن خدماتنا التجارية' })}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t({ 
                en: 'El-Maraei Trade & Agency serves as a trusted bridge between international businesses and the Egyptian market. With extensive experience and a robust network, we facilitate successful business partnerships and trade operations.', 
                ar: 'تعمل شركة المرعي للتجارة والوكالات كجسر موثوق بين الشركات الدولية والسوق المصري. بفضل خبرتنا الواسعة وشبكتنا القوية، نسهل شراكات أعمال وعمليات تجارية ناجحة.' 
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`service-card-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-chart-5/20 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-chart-5" />
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
                {t({ en: 'Sectors We Serve', ar: 'القطاعات التي نخدمها' })}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sectors.map((sector, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 rounded-md hover-elevate" data-testid={`sector-${index}`}>
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <span className="text-sm text-muted-foreground">{t(sector)}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {t({ en: 'Why Choose Us as Your Agent?', ar: 'لماذا تختارنا كوكيل لك؟' })}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {t({ en: 'Market Expertise', ar: 'خبرة السوق' })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'Deep understanding of Egyptian business landscape', ar: 'فهم عميق لمشهد الأعمال المصري' })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {t({ en: 'Established Network', ar: 'شبكة راسخة' })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'Strong relationships with key industry players', ar: 'علاقات قوية مع اللاعبين الرئيسيين في الصناعة' })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {t({ en: 'Full-Service Support', ar: 'دعم كامل الخدمة' })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'From market entry to ongoing operations', ar: 'من دخول السوق إلى العمليات المستمرة' })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {t({ en: 'Proven Track Record', ar: 'سجل حافل مثبت' })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t({ en: 'Successful partnerships with global brands', ar: 'شراكات ناجحة مع علامات تجارية عالمية' })}
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
              {t({ en: 'Our Success in Numbers', ar: 'نجاحنا بالأرقام' })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-gold mb-2">100+</div>
                <div className="text-primary-foreground/80">{t({ en: 'Partner Companies', ar: 'شركة شريكة' })}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">30+</div>
                <div className="text-primary-foreground/80">{t({ en: 'Countries Represented', ar: 'دولة ممثلة' })}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">$50M+</div>
                <div className="text-primary-foreground/80">{t({ en: 'Annual Trade Volume', ar: 'حجم التجارة السنوية' })}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {t({ en: 'Interested in Partnership?', ar: 'مهتم بالشراكة؟' })}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t({ 
              en: 'Whether you\'re looking to expand into Egypt or export to international markets, we\'re here to help.', 
              ar: 'سواء كنت تتطلع إلى التوسع في مصر أو التصدير إلى الأسواق الدولية، نحن هنا للمساعدة.' 
            })}
          </p>
          <a href="/contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 font-medium" data-testid="button-contact">
              {t({ en: 'Discuss Opportunities', ar: 'مناقشة الفرص' })}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
