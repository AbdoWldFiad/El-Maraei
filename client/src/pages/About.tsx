import { Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

export default function About() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Award,
      title: { en: 'Excellence', ar: 'التميز' },
      description: { 
        en: 'We strive for excellence in every aspect of our business operations.', 
        ar: 'نسعى للتميز في كل جانب من جوانب عملياتنا التجارية.' 
      },
    },
    {
      icon: Users,
      title: { en: 'Integrity', ar: 'النزاهة' },
      description: { 
        en: 'We conduct business with the highest ethical standards and transparency.', 
        ar: 'نمارس أعمالنا بأعلى معايير أخلاقية وشفافية.' 
      },
    },
    {
      icon: Target,
      title: { en: 'Innovation', ar: 'الابتكار' },
      description: { 
        en: 'We continuously innovate to meet evolving market demands.', 
        ar: 'نبتكر باستمرار لتلبية متطلبات السوق المتطورة.' 
      },
    },
    {
      icon: Eye,
      title: { en: 'Sustainability', ar: 'الاستدامة' },
      description: { 
        en: 'We are committed to sustainable practices that benefit our community.', 
        ar: 'نلتزم بالممارسات المستدامة التي تعود بالنفع على مجتمعنا.' 
      },
    },
  ];

  const milestones = [
    {
      year: '1998',
      title: { en: 'Company Founded', ar: 'تأسيس الشركة' },
      description: { 
        en: 'El maraie Group established with a vision for excellence.', 
        ar: 'تأسست مجموعة المرعي برؤية للتميز.' 
      },
    },
    {
      year: '2005',
      title: { en: 'Expansion', ar: 'التوسع' },
      description: { 
        en: 'Diversified into maritime and construction sectors.', 
        ar: 'التنويع في قطاعات الملاحة والإنشاءات.' 
      },
    },
    {
      year: '2012',
      title: { en: 'Healthcare Division', ar: 'قسم الرعاية الصحية' },
      description: { 
        en: 'Launched state-of-the-art medical center.', 
        ar: 'إطلاق مركز طبي حديث.' 
      },
    },
    {
      year: '2020',
      title: { en: 'Industry Leadership', ar: 'الريادة في الصناعة' },
      description: { 
        en: 'Recognized as a leading business conglomerate in Egypt.', 
        ar: 'الاعتراف بنا كمجموعة أعمال رائدة في مصر.' 
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'ar' ? 'عن المرعي جروب | مجموعة الأعمال الرائدة في مصر' : 'About Us | El maraie Group'}</title>
        <meta name="description" content={language === 'ar' ? 'اكتشف رحلتنا وقيمنا ورؤيتنا. أكثر من 25 عامًا من التميز في الأعمال المصرية عبر صناعات متعددة' : 'Discover our journey, values, and vision. Over 25 years of excellence in Egyptian business across multiple industries'} />
        <meta property="og:title" content={language === 'ar' ? 'عن المرعي جروب | مجموعة الأعمال الرائدة في مصر' : 'About Us | El maraie Group'} />
        <meta property="og:description" content={language === 'ar' ? 'اكتشف رحلتنا وقيمنا ورؤيتنا. أكثر من 25 عامًا من التميز في الأعمال المصرية' : 'Our journey, values, and vision. Over 25 years of excellence in Egyptian business'} />
      </Helmet>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t({ en: 'About El maraie Group', ar: 'عن المرعي جروب' })}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              {t({ 
                en: 'Founded in 1998, El maraie Group has grown to become one of Egypt\'s most respected business conglomerates, with a diverse portfolio spanning healthcare, maritime services, construction, mining, and international trade.', 
                ar: 'تأسست مجموعة المرعي في عام 1998، ونمت لتصبح واحدة من أكثر تكتلات الأعمال احترامًا في مصر، مع محفظة متنوعة تشمل الرعاية الصحية والخدمات البحرية والإنشاءات والتعدين والتجارة الدولية.' 
              })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="h-10 w-10 text-gold" />
                <h2 className="text-3xl font-bold text-foreground">
                  {t({ en: 'Our Vision', ar: 'رؤيتنا' })}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t({ 
                  en: 'To be the most trusted and innovative business conglomerate in Egypt, setting industry standards and creating sustainable value for all stakeholders while contributing to the nation\'s economic growth and development.', 
                  ar: 'أن نكون مجموعة الأعمال الأكثر موثوقية وابتكارًا في مصر، نضع معايير الصناعة ونخلق قيمة مستدامة لجميع أصحاب المصلحة مع المساهمة في النمو الاقتصادي والتنمية للدولة.' 
                })}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-10 w-10 text-gold" />
                <h2 className="text-3xl font-bold text-foreground">
                  {t({ en: 'Our Mission', ar: 'مهمتنا' })}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t({ 
                  en: 'To deliver excellence through our diverse business portfolio, focusing on quality, innovation, and sustainable growth while maintaining the highest ethical standards and fostering long-term relationships with our clients and partners.', 
                  ar: 'تقديم التميز من خلال محفظتنا التجارية المتنوعة، مع التركيز على الجودة والابتكار والنمو المستدام مع الحفاظ على أعلى المعايير الأخلاقية وتعزيز العلاقات طويلة الأمد مع عملائنا وشركائنا.' 
                })}
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              {t({ en: 'Our Core Values', ar: 'قيمنا الأساسية' })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`value-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {t(value.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(value.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              {t({ en: 'Our Journey', ar: 'رحلتنا' })}
            </h2>
            <div className="relative">
              <div className="absolute ltr:left-1/2 rtl:right-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative" data-testid={`milestone-${index}`}>
                    <div className={`flex flex-col md:flex-row gap-6 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="flex-1 text-center md:text-right rtl:md:text-left">
                        {index % 2 === 0 && (
                          <Card className="p-6 hover-elevate">
                            <div className="text-2xl font-bold text-gold mb-2">{milestone.year}</div>
                            <h3 className="text-xl font-semibold mb-2 text-foreground">{t(milestone.title)}</h3>
                            <p className="text-muted-foreground">{t(milestone.description)}</p>
                          </Card>
                        )}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gold border-4 border-background flex-shrink-0 z-10"></div>
                      <div className="flex-1 text-center md:text-left rtl:md:text-right">
                        {index % 2 !== 0 && (
                          <Card className="p-6 hover-elevate">
                            <div className="text-2xl font-bold text-gold mb-2">{milestone.year}</div>
                            <h3 className="text-xl font-semibold mb-2 text-foreground">{t(milestone.title)}</h3>
                            <p className="text-muted-foreground">{t(milestone.description)}</p>
                          </Card>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {t({ en: 'Join Our Team', ar: 'انضم إلى فريقنا' })}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t({ 
              en: 'We are always looking for talented individuals to join our growing team.', 
              ar: 'نحن نبحث دائمًا عن الأفراد الموهوبين للانضمام إلى فريقنا المتنامي.' 
            })}
          </p>
          <a href="/careers">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 font-medium" data-testid="button-view-careers">
              {t({ en: 'View Career Opportunities', ar: 'عرض الفرص الوظيفية' })}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
