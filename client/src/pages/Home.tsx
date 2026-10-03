import { Link } from 'wouter';
import { ArrowRight, Building2, Ship, Waves, Mountain, Handshake, Stethoscope, ChevronDown, Pill, CheckCircle2, Globe2, Users, Award, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import heroImage from '@assets/generated_images/Corporate_headquarters_hero_image_030060dd.png';
import logo from '/favicon.png';
import CountUp from '@/extras/countup.tsx';

const businesses = [
  {
    id: 'medical',
    icon: Stethoscope,
    name: { en: 'Medical Center', ar: 'المركز الطبي' },
    description: {
      en: 'Comprehensive healthcare services supported by experienced medical professionals and modern facilities.',
      ar: 'خدمات رعاية صحية متكاملة يقدمها فريق من المتخصصين ذوي الخبرة داخل مرافق حديثة.',
    },
    href: '/businesses/medical',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'shipping',
    icon: Ship,
    name: { en: 'Shipping Agency', ar: 'التوكيلات الملاحية' },
    description: {
      en: 'Professional maritime and port agency services supporting vessels, cargo, and international trade.',
      ar: 'خدمات ملاحية ووكالات موانئ احترافية لدعم السفن والبضائع والتجارة الدولية.',
    },
    href: '/businesses/shipping',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'marine',
    icon: Waves,
    name: { en: 'Marine Works', ar: 'الأشغال البحرية' },
    description: {
      en: 'Marine infrastructure and coastal engineering solutions for complex maritime projects.',
      ar: 'حلول للبنية التحتية البحرية والهندسة الساحلية للمشروعات البحرية المتخصصة.',
    },
    href: '/businesses/marine',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    id: 'mining',
    icon: Mountain,
    name: { en: 'Mining & Mineral Processing', ar: 'التعدين ومعالجة المعادن' },
    description: {
      en: 'Mineral extraction and processing focused on consistent quality and responsible operations.',
      ar: 'استخراج ومعالجة المعادن مع التركيز على الجودة المستمرة والعمليات المسؤولة.',
    },
    href: '/businesses/mining',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'trade',
    icon: Handshake,
    name: { en: 'Trade & Agency', ar: 'التجارة والوكالات' },
    description: {
      en: 'Commercial representation, business agency, and trade partnerships connecting local and international opportunities.',
      ar: 'التمثيل التجاري والوكالات والشراكات التجارية التي تربط الفرص المحلية والدولية.',
    },
    href: '/businesses/trade',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'medical-products',
    icon: Pill,
    name: { en: 'Medical Products', ar: 'المنتجات الطبية' },
    description: {
      en: 'Medical products and solutions supporting healthcare providers and professional medical environments.',
      ar: 'منتجات وحلول طبية لدعم مقدمي الرعاية الصحية والبيئات الطبية المتخصصة.',
    },
    href: '/businesses/midicalproduts',
    color: 'from-rose-500 to-pink-500',
  },
];

const stats = [
  {
    value: 25,
    suffix: '+',
    label: { en: 'Years of Experience', ar: 'سنوات من الخبرة' },
  },
  {
    value: 6,
    suffix: '',
    label: { en: 'Business Sectors', ar: 'قطاعات الأعمال' },
  },
  {
    value: 1000,
    suffix: '+',
    label: { en: 'Satisfied Clients', ar: 'عميل راضٍ' },
  },
  {
    value: 50,
    suffix: '+',
    label: { en: 'Expert Team', ar: 'فريق من الخبراء' },
  },
];

const strengths = [
  {
    icon: Award,
    title: {
      en: 'Proven Experience',
      ar: 'خبرة مثبتة',
    },
    description: {
      en: 'Years of experience across diverse industries and business environments.',
      ar: 'سنوات من الخبرة في قطاعات وبيئات أعمال متنوعة.',
    },
  },
  {
    icon: Handshake,
    title: {
      en: 'Trusted Partnerships',
      ar: 'شراكات موثوقة',
    },
    description: {
      en: 'Long-term relationships built around integrity, reliability, and mutual growth.',
      ar: 'علاقات طويلة الأمد مبنية على النزاهة والموثوقية والنمو المشترك.',
    },
  },
  {
    icon: Globe2,
    title: {
      en: 'Diverse Capabilities',
      ar: 'قدرات متنوعة',
    },
    description: {
      en: 'A growing portfolio connecting healthcare, maritime, industrial, and commercial activities.',
      ar: 'محفظة أعمال متنوعة تشمل الرعاية الصحية والمجالات البحرية والصناعية والتجارية.',
    },
  },
];

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          {language === 'ar'
            ? 'المرعي جروب | مجموعة أعمال متنوعة'
            : 'El Maraie Group | Diverse Business Solutions'}
        </title>

        <meta
          name="description"
          content={
            language === 'ar'
              ? 'المرعي جروب مجموعة أعمال متنوعة تعمل في الرعاية الصحية والملاحة والأشغال البحرية والتعدين والتجارة والمنتجات الطبية.'
              : 'El Maraie Group is a diversified Egyptian business group operating across healthcare, maritime services, marine works, mining, trade, and medical products.'
          }
        />

        <meta
          property="og:title"
          content={
            language === 'ar'
              ? 'المرعي جروب | مجموعة أعمال متنوعة'
              : 'El Maraie Group | Diverse Business Solutions'
          }
        />

        <meta
          property="og:description"
          content={
            language === 'ar'
              ? 'مجموعة أعمال متنوعة في قطاعات الرعاية الصحية والملاحة والتعدين والتجارة وغيرها.'
              : 'A diversified business group operating across healthcare, maritime, mining, trade, and other sectors.'
          }
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/55" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-7">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <img src={logo} alt="El Maraie Group" width={48} height={48} className="object-contain" />
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  {t({
                    en: 'El Maraie Group',
                    ar: 'المرعي جروب',
                  })}
                </div>

                <div className="text-sm text-white/60 mt-1">
                  {t({
                    en: 'Business • Excellence • Growth',
                    ar: 'أعمال • تميز • نمو',
                  })}
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-7">
              {t({
                en: 'Building Excellence Across Industries',
                ar: 'نبني التميز عبر مختلف القطاعات',
              })}
            </h1>

            <p className="text-xl md:text-2xl text-gold font-semibold mb-5">
              {t({
                en: 'One Group. Multiple Capabilities. One Standard of Excellence.',
                ar: 'مجموعة واحدة. قدرات متعددة. معيار واحد للتميز.',
              })}
            </p>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mb-9">
              {t({
                en: 'El Maraie Group brings together diverse businesses across healthcare, maritime services, marine works, mining, trade, and medical products.',
                ar: 'تجمع مجموعة المرعي مجموعة متنوعة من الأنشطة في مجالات الرعاية الصحية والخدمات الملاحية والأشغال البحرية والتعدين والتجارة والمنتجات الطبية.',
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button size="lg"
                  className="w-full sm:w-auto bg-gold text-gold-foreground hover:bg-gold/90 min-w-[190px] h-12"
                  data-testid="button-learn-more" >
                  {t({
                    en: 'Discover El Maraie',
                    ar: 'اكتشف المرعي',
                  })}

                  <ArrowRight
                    className={`h-5 w-5 ${
                      language === 'ar' ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
              </Link>

              <Link href="/contact">
                <Button size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 min-w-[190px] h-12"
                  data-testid="button-contact-us" >
                  {t({
                    en: 'Contact Us',
                    ar: 'تواصل معنا',
                  })}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div key={index}
                className="py-5 px-3 text-center"
                data-testid={`hero-stat-${index}`} >
                <div className="text-2xl md:text-3xl font-bold text-gold">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-xs md:text-sm text-white/65 mt-1">
                  {t(stat.label)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
          <ChevronDown className="h-7 w-7 text-white/50" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-gold font-semibold mb-5">
                <span className="h-px w-8 bg-gold" />

                {t({
                  en: 'WHO WE ARE',
                  ar: 'من نحن',
                })}
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                {t({
                  en: 'A diversified group with a clear focus on excellence',
                  ar: 'مجموعة متنوعة برؤية واضحة نحو التميز',
                })}
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                {t({
                  en: 'El Maraie Group operates across multiple sectors, bringing together specialized businesses under one trusted name.',
                  ar: 'تعمل مجموعة المرعي في عدة قطاعات، وتجمع بين أنشطة متخصصة تحت اسم تجاري موثوق.',
                })}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t({
                  en: 'Our approach combines experience, professional expertise, strong partnerships, and a commitment to delivering dependable services and solutions.',
                  ar: 'يجمع نهجنا بين الخبرة والكفاءة المهنية والشراكات القوية والالتزام بتقديم خدمات وحلول موثوقة.',
                })}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-7">
                  <Building2 className="h-8 w-8 text-gold mb-5" />

                  <div className="text-3xl font-bold mb-2">
                    <CountUp end={6} />
                  </div>

                  <p className="text-sm text-primary-foreground/70">
                    {t({
                      en: 'Business Sectors',
                      ar: 'قطاعات الأعمال',
                    })}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gold/20">
                <CardContent className="p-7">
                  <Users className="h-8 w-8 text-gold mb-5" />

                  <div className="text-3xl font-bold text-foreground mb-2">
                    <CountUp end={50} suffix="+" />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {t({
                      en: 'Team Members',
                      ar: 'عضو في الفريق',
                    })}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gold/20">
                <CardContent className="p-7">
                  <Globe2 className="h-8 w-8 text-gold mb-5" />

                  <div className="text-3xl font-bold text-foreground mb-2">
                    {t({
                      en: 'Local & Global',
                      ar: 'محلي ودولي',
                    })}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {t({
                      en: 'Business Reach',
                      ar: 'نطاق الأعمال',
                    })}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gold/20">
                <CardContent className="p-7">
                  <Award className="h-8 w-8 text-gold mb-5" />

                  <div className="text-3xl font-bold text-foreground mb-2">
                    <CountUp end={25} suffix="+" />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {t({
                      en: 'Years Experience',
                      ar: 'سنوات من الخبرة',
                    })}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Businesses */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-gold font-semibold mb-4">
                <span className="h-px w-8 bg-gold" />

                {t({
                  en: 'OUR BUSINESSES',
                  ar: 'أعمالنا',
                })}
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t({
                  en: 'Diverse businesses. Shared standards.',
                  ar: 'أعمال متنوعة. ومعايير مشتركة.',
                })}
              </h2>

              <p className="text-lg text-muted-foreground">
                {t({
                  en: 'Explore the specialized businesses that make up El Maraie Group.',
                  ar: 'اكتشف الأنشطة المتخصصة التي تشكل مجموعة المرعي.',
                })}
              </p>
            </div>

            <Link href="/businesses">
              <Button variant="outline" className="gap-2" >
                {t({
                  en: 'View All Businesses',
                  ar: 'عرض جميع الأعمال',
                })}

                <ArrowRight
                  className={`h-4 w-4 ${
                    language === 'ar' ? 'rotate-180' : ''
                  }`}
                />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business, index) => (
              <Card key={business.id}
                className="group overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                data-testid={`business-card-${index}`} >
                <CardContent className="p-0">
                  <div
                    className={`h-2 bg-gradient-to-r ${business.color}`}
                  />

                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${business.color} flex items-center justify-center shadow-sm`}
                      >
                        <business.icon className="h-7 w-7 text-white" />
                      </div>

                      <span className="text-xs font-medium text-muted-foreground border rounded-full px-3 py-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {t(business.name)}
                    </h3>

                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed min-h-[72px]">
                      {t(business.description)}
                    </p>

                    <Link href={business.href}>
                      <Button variant="ghost"
                        className="text-primary hover:text-gold p-0 h-auto gap-2 group-hover:gap-3 transition-all"
                        data-testid={`button-learn-more-${index}`} >
                        {t({
                          en: 'Explore Business',
                          ar: 'استكشف النشاط',
                        })}

                        <ArrowRight
                          className={`h-4 w-4 ${
                            language === 'ar' ? 'rotate-180' : ''
                          }`}
                        />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-gold font-semibold mb-4">
              <span className="h-px w-8 bg-gold" />

              {t({
                en: 'WHY EL MARAIE',
                ar: 'لماذا المرعي',
              })}

              <span className="h-px w-8 bg-gold" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              {t({
                en: 'Built on experience. Driven by trust.',
                ar: 'نبني على الخبرة. ونعمل بالثقة.',
              })}
            </h2>

            <p className="text-lg text-primary-foreground/70">
              {t({
                en: 'Across every business we operate, we focus on professionalism, reliability, and long-term value.',
                ar: 'في جميع أنشطتنا، نركز على الاحترافية والموثوقية وتحقيق قيمة طويلة الأمد.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengths.map((strength) => (
              <div
                key={strength.title.en}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 mb-6">
                  <strength.icon className="h-7 w-7 text-gold" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {t(strength.title)}
                </h3>

                <p className="text-sm text-primary-foreground/65 leading-relaxed">
                  {t(strength.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-gold/20">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                    <Globe2 className="h-6 w-6 text-gold" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {t({
                      en: 'Our Vision',
                      ar: 'رؤيتنا',
                    })}
                  </h2>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t({
                    en: 'To build a trusted and innovative business group that creates sustainable value across the industries we serve.',
                    ar: 'بناء مجموعة أعمال موثوقة ومبتكرة تخلق قيمة مستدامة عبر القطاعات التي نعمل بها.',
                  })}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-primary text-primary-foreground border-0">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                    <CheckCircle2 className="h-6 w-6 text-gold" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold">
                    {t({
                      en: 'Our Mission',
                      ar: 'مهمتنا',
                    })}
                  </h2>
                </div>

                <p className="text-primary-foreground/75 text-lg leading-relaxed">
                  {t({
                    en: 'To deliver dependable services and solutions through professional expertise, strong partnerships, continuous improvement, and high ethical standards.',
                    ar: 'تقديم خدمات وحلول موثوقة من خلال الخبرة المهنية والشراكات القوية والتطوير المستمر والالتزام بأعلى المعايير الأخلاقية.',
                  })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/90 p-8 md:p-14 lg:p-16 text-center">
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative max-w-3xl mx-auto">
              <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-gold/10 mb-6">
                <Handshake className="h-7 w-7 text-gold" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
                {t({
                  en: 'Let’s Build Something Together',
                  ar: 'لنبنِ شيئًا معًا',
                })}
              </h2>

              <p className="text-lg text-white/70 leading-relaxed mb-8">
                {t({
                  en: 'Whether you are looking for a business partner, professional services, or a new commercial opportunity, we would be glad to hear from you.',
                  ar: 'سواء كنت تبحث عن شريك أعمال أو خدمات متخصصة أو فرصة تجارية جديدة، يسعدنا التواصل معك.',
                })}
              </p>

              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gold text-gold-foreground hover:bg-gold/90 min-w-[190px] h-12"
                  data-testid="button-get-in-touch"
                >
                  {t({
                    en: 'Get In Touch',
                    ar: 'تواصل معنا',
                  })}

                  <ArrowRight
                    className={`h-5 w-5 ${
                      language === 'ar' ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
