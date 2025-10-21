import { Link } from 'wouter';
import { Stethoscope, Ship, Waves, Mountain, Handshake, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

export default function Businesses() {
  const { t, language } = useLanguage();

  const businesses = [
    {
      icon: Stethoscope,
      name: { en: 'Medical Center', ar: 'المركز الطبي' },
      description: { 
        en: 'Comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals. We provide expert care across multiple specialties including cardiology, orthopedics, pediatrics, and more.', 
        ar: 'خدمات رعاية صحية شاملة مع أحدث المرافق وأطباء ذوي خبرة عالية. نقدم رعاية متخصصة في عدة تخصصات بما في ذلك أمراض القلب وجراحة العظام وطب الأطفال والمزيد.' 
      },
      href: '/businesses/medical',
      color: 'bg-chart-1',
    },
    {
      icon: Ship,
      name: { en: 'Shipping Agency', ar: 'التوكيلات الملاحية' },
      description: { 
        en: 'Professional maritime shipping solutions and port agency services for international trade. We operate across major Egyptian ports providing comprehensive cargo handling and logistics.', 
        ar: 'حلول شحن بحري احترافية وخدمات وكالة موانئ للتجارة الدولية. نعمل عبر الموانئ المصرية الرئيسية لتوفير مناولة بضائع ولوجستيات شاملة.' 
      },
      href: '/businesses/shipping',
      color: 'bg-chart-2',
    },
    {
      icon: Waves,
      name: { en: 'Marine Works', ar: 'الأشغال البحرية' },
      description: { 
        en: 'Specialized in coastal engineering, harbor construction, and marine infrastructure development. Our expert team delivers innovative solutions for complex maritime projects.', 
        ar: 'متخصصون في الهندسة الساحلية وبناء الموانئ وتطوير البنية التحتية البحرية. يقدم فريقنا المتخصص حلولاً مبتكرة للمشاريع البحرية المعقدة.' 
      },
      href: '/businesses/marine',
      color: 'bg-chart-3',
    },
    {
      icon: Mountain,
      name: { en: 'Mining Factory', ar: 'مصنع التعدين' },
      description: { 
        en: 'Advanced mineral processing and extraction with commitment to sustainable practices. We process high-quality minerals while maintaining strict environmental and safety standards.', 
        ar: 'معالجة واستخراج معادن متقدمة مع الالتزام بالممارسات المستدامة. نعالج معادن عالية الجودة مع الحفاظ على معايير بيئية وسلامة صارمة.' 
      },
      href: '/businesses/mining',
      color: 'bg-chart-4',
    },
    {
      icon: Handshake,
      name: { en: 'Trade & Agency', ar: 'التجارة والوكالات' },
      description: { 
        en: 'Local and international trade representation, business agency, and commercial partnerships. We connect international businesses with the Egyptian market through expert representation.', 
        ar: 'تمثيل تجاري محلي ودولي، وكالات أعمال، وشراكات تجارية. نربط الشركات الدولية بالسوق المصري من خلال تمثيل متخصص.' 
      },
      href: '/businesses/trade',
      color: 'bg-chart-5',
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {language === 'ar' 
            ? 'أعمالنا - المرعي جروب | خمسة قطاعات أعمال رائدة' 
            : 'Our Businesses - El-Maraei Group | Five Leading Business Sectors'}
        </title>
        <meta 
          name="description" 
          content={language === 'ar'
            ? 'استكشف قطاعات أعمال مجموعة المرعي الخمسة: المركز الطبي، التوكيلات الملاحية، الأشغال البحرية، مصنع التعدين، والتجارة والوكالات. نقدم خدمات متميزة في كل قطاع.'
            : 'Explore El-Maraei Group\'s five business sectors: Medical Center, Shipping Agency, Marine Works, Mining Factory, and Trade & Agency. We deliver excellence across all divisions.'}
        />
        <meta 
          property="og:title" 
          content={language === 'ar' ? 'أعمالنا - المرعي جروب' : 'Our Businesses - El-Maraei Group'} 
        />
        <meta 
          property="og:description" 
          content={language === 'ar'
            ? 'خمسة قطاعات أعمال رائدة: الرعاية الصحية، الملاحة، الأشغال البحرية، التعدين، والتجارة الدولية'
            : 'Five leading business sectors: Healthcare, Maritime, Marine Works, Mining, and International Trade'}
        />
      </Helmet>

      <div className="min-h-screen">
        <section className="bg-primary text-primary-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t({ en: 'Our Businesses', ar: 'أعمالنا' })}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                {t({ 
                  en: 'Diverse portfolio of excellence spanning multiple industries, delivering quality services and sustainable solutions', 
                  ar: 'محفظة متنوعة من التميز تمتد عبر صناعات متعددة، تقدم خدمات عالية الجودة وحلول مستدامة' 
                })}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businesses.map((business, index) => (
                <Card key={index} className="hover-elevate transition-all duration-300 border-card-border h-full" data-testid={`business-overview-card-${index}`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-20 h-20 rounded-full ${business.color} flex items-center justify-center mb-6`}>
                      <business.icon className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                      {t(business.name)}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {t(business.description)}
                    </p>
                    <Link href={business.href}>
                      <button 
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 font-medium"
                        data-testid={`button-view-details-${index}`}
                      >
                        {t({ en: 'View Details', ar: 'عرض التفاصيل' })}
                        <ArrowRight className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {t({ en: 'Interested in Our Services?', ar: 'مهتم بخدماتنا؟' })}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t({ 
                en: 'Contact us to learn more about how we can help your business grow.', 
                ar: 'اتصل بنا لمعرفة المزيد عن كيف يمكننا مساعدة عملك على النمو.' 
              })}
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 font-medium" data-testid="button-contact-us">
                {t({ en: 'Contact Us', ar: 'اتصل بنا' })}
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
