import { Link } from 'wouter';
import { ArrowRight, Building2, Ship, Waves, Mountain, Handshake, Stethoscope, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import heroImage from '@assets/generated_images/Corporate_headquarters_hero_image_030060dd.png';
import logo from '/public/favicon.png'

export default function Home() {
  const { t, language } = useLanguage();

  const businesses = [
    {
      icon: Stethoscope,
      name: { en: 'Medical Center', ar: 'المركز الطبي' },
      description: { 
        en: 'Comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals.', 
        ar: 'خدمات رعاية صحية شاملة مع أحدث المرافق وأطباء ذوي خبرة عالية.' 
      },
      href: '/businesses/medical',
      color: 'bg-chart-1',
    },
    {
      icon: Ship,
      name: { en: 'Shipping Agency', ar: 'التوكيلات الملاحية' },
      description: { 
        en: 'Professional maritime shipping solutions and port agency services for international trade.', 
        ar: 'حلول شحن بحري احترافية وخدمات وكالة موانئ للتجارة الدولية.' 
      },
      href: '/businesses/shipping',
      color: 'bg-chart-2',
    },
    {
      icon: Waves,
      name: { en: 'Marine Works', ar: 'الأشغال البحرية' },
      description: { 
        en: 'Specialized in coastal engineering, harbor construction, and marine infrastructure development.', 
        ar: 'متخصصون في الهندسة الساحلية وبناء الموانئ وتطوير البنية التحتية البحرية.' 
      },
      href: '/businesses/marine',
      color: 'bg-chart-3',
    },
    {
      icon: Mountain,
      name: { en: 'Mining Factory', ar: 'مصنع التعدين' },
      description: { 
        en: 'Advanced mineral processing and extraction with commitment to sustainable practices.', 
        ar: 'معالجة واستخراج معادن متقدمة مع الالتزام بالممارسات المستدامة.' 
      },
      href: '/businesses/mining',
      color: 'bg-chart-4',
    },
    {
      icon: Handshake,
      name: { en: 'Trade & Agency', ar: 'التجارة والوكالات' },
      description: { 
        en: 'Local and international trade representation, business agency, and commercial partnerships.', 
        ar: 'تمثيل تجاري محلي ودولي، وكالات أعمال، وشراكات تجارية.' 
      },
      href: '/businesses/trade',
      color: 'bg-chart-5',
    },
  ];

  const stats = [
    { value: '25+', label: { en: 'Years Experience', ar: 'سنوات من الخبرة' } },
    { value: '5', label: { en: 'Business Sectors', ar: 'قطاعات أعمال' } },
    { value: '1000+', label: { en: 'Satisfied Clients', ar: 'عميل راضٍ' } },
    { value: '50+', label: { en: 'Expert Team', ar: 'فريق خبراء' } },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'ar' ? 'المرعي جروب - التميز في مختلف الصناعات' : 'El-Maraei Group - Excellence Across Industries'}</title>
        <meta name="description" content={language === 'ar' ? 'مجموعة أعمال مصرية رائدة في الرعاية الصحية والملاحة والإنشاءات والتعدين والتجارة الدولية منذ 1998' : 'Leading Egyptian business conglomerate in healthcare, maritime, construction, mining, and international trade since 1998'} />
        <meta property="og:title" content={language === 'ar' ? 'المرعي جروب - التميز في مختلف الصناعات' : 'El-Maraei Group - Excellence Across Industries'} />
        <meta property="og:description" content={language === 'ar' ? 'مجموعة أعمال مصرية رائدة في الرعاية الصحية والملاحة والإنشاءات والتعدين والتجارة الدولية' : 'Leading Egyptian conglomerate in healthcare, maritime, construction, mining, and international trade'} />
      </Helmet>
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden"> 
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <img src={logo} alt="Company Logo" width={140} height={140} style={{ display: "block", margin: "0 auto" }}/>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t({ 
              en: 'El-Maraei Group', 
              ar: 'المرعي جروب' 
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gold mb-4 font-semibold">
            {t({ 
              en: 'Excellence Across Industries', 
              ar: 'التميز في مختلف الصناعات' 
            })}
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t({ 
              en: 'A leading Egyptian business conglomerate delivering exceptional services in healthcare, maritime, construction, mining, and international trade.', 
              ar: 'مجموعة أعمال مصرية رائدة تقدم خدمات استثنائية في الرعاية الصحية والملاحة والإنشاءات والتعدين والتجارة الدولية.' 
            })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/about">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 min-w-[180px]" data-testid="button-learn-more">
                {t({ en: 'Learn More', ar: 'اعرف المزيد' })}
                <ArrowRight className={`h-5 w-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 min-w-[180px]"
                data-testid="button-contact-us"
              >
                {t({ en: 'Contact Us', ar: 'اتصل بنا' })}
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t({ en: 'Our Businesses', ar: 'أعمالنا' })}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t({ 
                en: 'Diverse portfolio of excellence spanning multiple industries', 
                ar: 'محفظة متنوعة من التميز تمتد عبر صناعات متعددة' 
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 border-card-border" data-testid={`business-card-${index}`}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full ${business.color} flex items-center justify-center mb-4`}>
                    <business.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {t(business.name)}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {t(business.description)}
                  </p>
                  <Link href={business.href}>
                    <Button variant="ghost" className="text-primary hover:text-gold p-0 h-auto" data-testid={`button-learn-more-${index}`}>
                      {t({ en: 'Learn More', ar: 'اعرف المزيد' })}
                      <ArrowRight className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t({ en: 'Why Choose El-Maraei Group', ar: 'لماذا تختار المرعي جروب' })}
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t({ en: 'Proven Excellence', ar: 'تميز مثبت' })}</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {t({ 
                        en: 'Over 25 years of delivering exceptional results across multiple industries.', 
                        ar: 'أكثر من 25 عامًا من تقديم نتائج استثنائية عبر صناعات متعددة.' 
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                    <Handshake className="h-6 w-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t({ en: 'Trusted Partner', ar: 'شريك موثوق' })}</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {t({ 
                        en: 'Building long-term relationships based on integrity and reliability.', 
                        ar: 'بناء علاقات طويلة الأمد على أساس النزاهة والموثوقية.' 
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                    <Mountain className="h-6 w-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t({ en: 'Innovation Focused', ar: 'التركيز على الابتكار' })}</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {t({ 
                        en: 'Continuous investment in technology and sustainable practices.', 
                        ar: 'استثمار مستمر في التكنولوجيا والممارسات المستدامة.' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-8 bg-card/10 backdrop-blur-sm border-primary-foreground/20">
                <h3 className="text-2xl font-bold mb-4 text-gold">
                  {t({ en: 'Our Vision', ar: 'رؤيتنا' })}
                </h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  {t({ 
                    en: 'To be the most trusted and innovative business conglomerate in Egypt, setting industry standards and creating sustainable value for all stakeholders.', 
                    ar: 'أن نكون مجموعة الأعمال الأكثر موثوقية وابتكارًا في مصر، نضع معايير الصناعة ونخلق قيمة مستدامة لجميع أصحاب المصلحة.' 
                  })}
                </p>
                <h3 className="text-2xl font-bold mb-4 text-gold">
                  {t({ en: 'Our Mission', ar: 'مهمتنا' })}
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  {t({ 
                    en: 'To deliver excellence through our diverse business portfolio, focusing on quality, innovation, and sustainable growth while maintaining the highest ethical standards.', 
                    ar: 'تقديم التميز من خلال محفظتنا التجارية المتنوعة، مع التركيز على الجودة والابتكار والنمو المستدام مع الحفاظ على أعلى المعايير الأخلاقية.' 
                  })}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {t({ en: 'Ready to Work With Us?', ar: 'هل أنت مستعد للعمل معنا؟' })}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t({ 
              en: 'Discover how El-Maraei Group can help your business grow and succeed.', 
              ar: 'اكتشف كيف يمكن لمجموعة المرعي مساعدة عملك على النمو والنجاح.' 
            })}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-get-in-touch">
              {t({ en: 'Get In Touch', ar: 'تواصل معنا' })}
              <ArrowRight className={`h-5 w-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
