import { Handshake, Globe, TrendingUp, Package, FileCheck, Users, Factory, HardHat, Car, Stethoscope, Wheat, Cpu, Utensils, ShoppingBag, ArrowRight, CheckCircle2, Search, Network, Truck, BarChart3, } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import tradeImage from '@assets/generated_images/Trade_and_agency_partnership_image_05aaebf1.png';
import CountUp from '@/extras/countup';

export default function Trade() {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const services = [
  {
    slug: 'commercial-representation',
    icon: Handshake,
    title: {
      en: 'Commercial Representation',
      ar: 'التمثيل التجاري',
    },
    description: {
      en: 'Represent your brand locally and build the relationships needed to establish a strong presence in the Egyptian market.',
      ar: 'نمثل علامتك التجارية محليًا ونبني العلاقات اللازمة لتأسيس حضور قوي في السوق المصري.',
    },
  },
  {
    slug: 'import-export',
    icon: Globe,
    title: {
      en: 'Import & Export',
      ar: 'الاستيراد والتصدير',
    },
    description: {
      en: 'Coordinate international trade operations and help businesses navigate the process of moving products across borders.',
      ar: 'ننسق عمليات التجارة الدولية ونساعد الشركات على إدارة عمليات نقل المنتجات عبر الحدود.',
    },
  },
  {
    slug: 'distribution',
    icon: Package,
    title: {
      en: 'Distribution',
      ar: 'التوزيع',
    },
    description: {
      en: 'Connect products with the right channels through our local commercial and distribution network.',
      ar: 'نربط المنتجات بقنوات التوزيع المناسبة من خلال شبكتنا التجارية والمحلية.',
    },
  },
  {
    slug: 'trade-compliance',
    icon: FileCheck,
    title: {
      en: 'Trade & Regulatory Support',
      ar: 'الدعم التجاري والتنظيمي',
    },
    description: {
      en: 'Support with trade documentation, requirements and the practical details involved in international commerce.',
      ar: 'دعم في مستندات التجارة والمتطلبات والتفاصيل العملية المرتبطة بالتجارة الدولية.',
    },
  },
  {
    slug: 'market-intelligence',
    icon: BarChart3,
    title: {
      en: 'Market Intelligence',
      ar: 'ذكاء السوق',
    },
    description: {
      en: 'Understand market opportunities, customer needs, competition and potential routes to growth.',
      ar: 'فهم فرص السوق واحتياجات العملاء والمنافسة ومسارات النمو المحتملة.',
    },
  },
  {
    slug: 'partnership-development',
    icon: Users,
    title: {
      en: 'Partnership Development',
      ar: 'تطوير الشراكات',
    },
    description: {
      en: 'Identify and develop strategic relationships that create sustainable commercial opportunities.',
      ar: 'تحديد وتطوير العلاقات الاستراتيجية التي تخلق فرصًا تجارية مستدامة.',
    },
  },
];


  const getServiceDetails = (slug: string) => {
  const details: Record<
    string,
    {
      en: string;
      ar: string;
    }
  > = {
    'commercial-representation': {
      en: 'We act as a local commercial partner for international brands, helping establish market presence, develop relationships and identify relevant business opportunities in Egypt.',
      ar: 'نعمل كشريك تجاري محلي للعلامات التجارية الدولية، ونساعد على تأسيس حضورها في السوق وبناء العلاقات وتحديد الفرص التجارية المناسبة في مصر.',
    },

    'import-export': {
      en: 'We support businesses with the practical requirements of international trade, helping coordinate import and export activities and the documentation involved in moving products across borders.',
      ar: 'ندعم الشركات في المتطلبات العملية للتجارة الدولية، ونساعد في تنسيق عمليات الاستيراد والتصدير والمستندات المرتبطة بنقل المنتجات عبر الحدود.',
    },

    distribution: {
      en: 'We help connect products with suitable local channels and commercial partners, supporting businesses as they develop their presence and reach customers in the Egyptian market.',
      ar: 'نساعد على ربط المنتجات بقنوات التوزيع والشركاء التجاريين المناسبين، وندعم الشركات في تطوير حضورها والوصول إلى العملاء في السوق المصري.',
    },

    'trade-compliance': {
      en: 'We provide practical support around trade documentation, requirements and regulatory considerations, helping businesses navigate the administrative side of international commerce.',
      ar: 'نقدم دعمًا عمليًا في مستندات التجارة والمتطلبات والاعتبارات التنظيمية، لمساعدة الشركات على التعامل مع الجوانب الإدارية للتجارة الدولية.',
    },

    'market-intelligence': {
      en: 'We help businesses understand market conditions, customer needs, competitive activity and potential opportunities before making important commercial decisions.',
      ar: 'نساعد الشركات على فهم ظروف السوق واحتياجات العملاء والمنافسة والفرص المحتملة قبل اتخاذ القرارات التجارية المهمة.',
    },

    'partnership-development': {
      en: 'We identify and develop relevant business relationships that can create new commercial opportunities and support long-term market growth.',
      ar: 'نحدد ونطور علاقات الأعمال المناسبة التي يمكن أن تخلق فرصًا تجارية جديدة وتدعم النمو طويل الأمد في السوق.',
    },
  };

  return (
    details[slug] || {
      en: 'Our team provides practical commercial support tailored to your business objectives and market requirements.',
      ar: 'يقدم فريقنا دعمًا تجاريًا عمليًا يتناسب مع أهداف عملك ومتطلبات السوق.',
    }
  );
};


  const process = [
    {
      number: '01',
      icon: Search,
      title: {
        en: 'Assess',
        ar: 'التقييم',
      },
      description: {
        en: 'We understand your product, objectives and target market before defining the right approach.',
        ar: 'نفهم منتجك وأهدافك والسوق المستهدف قبل تحديد النهج المناسب.',
      },
    },
    {
      number: '02',
      icon: Network,
      title: {
        en: 'Connect',
        ar: 'التواصل',
      },
      description: {
        en: 'We use our local knowledge and network to identify relevant commercial opportunities.',
        ar: 'نستخدم معرفتنا بالسوق وشبكتنا المحلية لتحديد الفرص التجارية المناسبة.',
      },
    },
    {
      number: '03',
      icon: Truck,
      title: {
        en: 'Execute',
        ar: 'التنفيذ',
      },
      description: {
        en: 'We support the commercial and trade processes needed to move from opportunity to operation.',
        ar: 'ندعم العمليات التجارية والإجرائية اللازمة للانتقال من الفرصة إلى التنفيذ.',
      },
    },
    {
      number: '04',
      icon: TrendingUp,
      title: {
        en: 'Grow',
        ar: 'النمو',
      },
      description: {
        en: 'We build relationships for long-term market development and sustainable growth.',
        ar: 'نبني علاقات طويلة الأمد لتطوير السوق وتحقيق نمو مستدام.',
      },
    },
  ];

  const sectors = [
    {
      icon: Factory,
      en: 'Industrial Equipment',
      ar: 'المعدات الصناعية',
    },
    {
      icon: HardHat,
      en: 'Construction Materials',
      ar: 'مواد البناء',
    },
    {
      icon: ShoppingBag,
      en: 'Consumer Goods',
      ar: 'السلع الاستهلاكية',
    },
    {
      icon: Car,
      en: 'Automotive Parts',
      ar: 'قطع غيار السيارات',
    },
    {
      icon: Stethoscope,
      en: 'Medical Supplies',
      ar: 'المستلزمات الطبية',
    },
    {
      icon: Wheat,
      en: 'Agricultural Products',
      ar: 'المنتجات الزراعية',
    },
    {
      icon: Cpu,
      en: 'Technology & Electronics',
      ar: 'التكنولوجيا والإلكترونيات',
    },
    {
      icon: Utensils,
      en: 'Food & Beverages',
      ar: 'الأغذية والمشروبات',
    },
  ];

  const advantages = [
    {
      title: {
        en: 'Local Market Expertise',
        ar: 'خبرة محلية في السوق',
      },
      description: {
        en: 'Practical knowledge of the Egyptian business environment and commercial landscape.',
        ar: 'معرفة عملية ببيئة الأعمال والمشهد التجاري في السوق المصري.',
      },
    },
    {
      title: {
        en: 'Established Business Network',
        ar: 'شبكة أعمال راسخة',
      },
      description: {
        en: 'Relationships that help international businesses identify relevant commercial opportunities.',
        ar: 'علاقات تساعد الشركات الدولية على الوصول إلى الفرص التجارية المناسبة.',
      },
    },
    {
      title: {
        en: 'End-to-End Support',
        ar: 'دعم متكامل',
      },
      description: {
        en: 'Support from initial market assessment through representation, trade and ongoing development.',
        ar: 'دعم يبدأ من تقييم السوق ويمتد إلى التمثيل والتجارة والتطوير المستمر.',
      },
    },
    {
      title: {
        en: 'Long-Term Partnerships',
        ar: 'شراكات طويلة الأمد',
      },
      description: {
        en: 'We focus on building sustainable commercial relationships rather than one-off transactions.',
        ar: 'نركز على بناء علاقات تجارية مستدامة وليس مجرد معاملات قصيرة الأجل.',
      },
    },
  ];

  return (
    <div
      className="min-h-screen overflow-hidden"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <Helmet>
        <title>
          {isArabic
            ? 'المرعي للتجارة والوكالات | المرعي جروب'
            : 'El Maraie Trade & Agency | El Maraie Group'}
        </title>

        <meta
          name="description"
          content={
            isArabic
              ? 'خدمات التمثيل التجاري والاستيراد والتصدير والتوزيع وتطوير الشراكات. شريكك للوصول إلى السوق المصري والأسواق الدولية.'
              : 'Commercial representation, import & export, distribution and partnership development. Your local partner for entering and growing in the Egyptian market.'
          }
        />

        <meta
          property="og:title"
          content={
            isArabic
              ? 'المرعي للتجارة والوكالات | المرعي جروب'
              : 'El Maraie Trade & Agency | El Maraie Group'
          }
        />

        <meta
          property="og:description"
          content={
            isArabic
              ? 'شريكك التجاري للوصول إلى السوق المصري والأسواق الدولية.'
              : 'Your commercial partner for entering and growing in the Egyptian market.'
          }
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tradeImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/55" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm">
                <Handshake
                  className="h-7 w-7 text-gold"
                  aria-hidden="true"
                />
              </div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {t({
                  en: 'Trade & Agency',
                  ar: 'التجارة والوكالات',
                })}
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t({
                en: 'Connecting Global Businesses with the Egyptian Market',
                ar: 'نربط الشركات العالمية بالسوق المصري',
              })}
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              {t({
                en: 'Commercial representation, trade, distribution and partnership development backed by local market knowledge and an established business network.',
                ar: 'التمثيل التجاري والتجارة والتوزيع وتطوير الشراكات، بدعم من خبرة محلية في السوق وشبكة أعمال راسخة.',
              })}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 font-semibold text-primary transition-all hover:brightness-110 active:scale-[0.98]"
              >
                {t({
                  en: 'Discuss a Partnership',
                  ar: 'ناقش فرصة الشراكة',
                })}
                <ArrowRight
                  className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
              >
                {t({
                  en: 'Explore Our Services',
                  ar: 'اكتشف خدماتنا',
                })}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Numbers */}
      <section className="border-b bg-primary py-10 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:rtl:divide-x-reverse">
            {/* Partner Companies */}
            <div className="px-6 py-4 text-center">
              <div className="mb-1 text-4xl font-bold text-gold">
                <CountUp end={100} suffix="+" />
              </div>

              <div className="text-sm text-primary-foreground/70">
                {t({
                  en: 'Partner Companies',
                  ar: 'شركة شريكة',
                })}
              </div>
            </div>

            {/* Markets */}
            <div className="px-6 py-4 text-center">
              <div className="mb-1 text-4xl font-bold text-gold">
                <CountUp end={50} suffix="+" />
              </div>

              <div className="text-sm text-primary-foreground/70">
                {t({
                  en: 'Egyptian & International Markets',
                  ar: 'سوقًا مصريًا ودوليًا',
                })}
              </div>
            </div>

            {/* Relationships */}
            <div className="px-6 py-4 text-center">
              <div className="mb-1 text-4xl font-bold text-gold">
                <CountUp end={30} suffix="+" />
              </div>

              <div className="text-sm text-primary-foreground/70">
                {t({
                  en: 'Long-Term Business Relationships',
                  ar: 'علاقة أعمال طويلة الأمد',
                })}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Introduction */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                {t({
                  en: 'Your Local Commercial Partner',
                  ar: 'شريكك التجاري المحلي',
                })}
              </span>

              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t({
                  en: 'Turning Market Opportunities into Business Relationships',
                  ar: 'نحوّل فرص السوق إلى علاقات أعمال',
                })}
              </h2>

              <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                {t({
                  en: 'El Maraie Trade & Agency helps international businesses navigate the Egyptian market through commercial representation, trade services, distribution and strategic partnership development.',
                  ar: 'تساعد المرعي للتجارة والوكالات الشركات الدولية على دخول السوق المصري من خلال التمثيل التجاري وخدمات التجارة والتوزيع وتطوير الشراكات الاستراتيجية.',
                })}
              </p>

              <p className="leading-relaxed text-muted-foreground">
                {t({
                  en: 'Our role is to connect businesses with the local knowledge, relationships and practical support they need to build sustainable commercial opportunities.',
                  ar: 'يتمثل دورنا في ربط الشركات بالمعرفة المحلية والعلاقات والدعم العملي الذي تحتاجه لبناء فرص تجارية مستدامة.',
                })}
              </p>
            </div>

            <div className="rounded-2xl border bg-muted/40 p-8 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15">
                <Globe className="h-6 w-6 text-gold" aria-hidden="true" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-foreground">
                {t({
                  en: 'One Partner. Multiple Capabilities.',
                  ar: 'شريك واحد. قدرات متعددة.',
                })}
              </h3>

              <p className="leading-relaxed text-muted-foreground">
                {t({
                  en: 'From understanding the market to developing partnerships and supporting trade operations, we help simplify the path from international opportunity to local execution.',
                  ar: 'من فهم السوق إلى تطوير الشراكات ودعم عمليات التجارة، نساعد على تبسيط الطريق من الفرصة الدولية إلى التنفيذ المحلي.',
                })}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Services */}
      <section
        id="services"
        className="bg-muted/30 py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              {t({
                en: 'What We Do',
                ar: 'ما نقدمه',
              })}
            </span>

            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              {t({
                en: 'Trade & Agency Services Built Around Your Goals',
                ar: 'خدمات التجارة والوكالات المصممة حول أهدافك',
              })}
            </h2>

            <p className="text-lg text-muted-foreground">
              {t({
                en: 'Practical commercial support designed to help businesses enter, operate and grow in the Egyptian market.',
                ar: 'دعم تجاري عملي يساعد الشركات على دخول السوق المصري والعمل والنمو فيه.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.slug}
                  className="group h-[300px] [perspective:1200px]"
                >
                  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* FRONT */}
                    <Card className="absolute inset-0 h-full w-full border bg-card [backface-visibility:hidden]">
                      <CardContent className="flex h-full flex-col p-7">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                          <Icon
                            className="h-7 w-7 text-gold"
                            aria-hidden="true"
                          />
                        </div>

                        <h3 className="mb-3 text-xl font-semibold text-foreground">
                          {t(service.title)}
                        </h3>

                        <p className="leading-relaxed text-muted-foreground">
                          {t(service.description)}
                        </p>

                        <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-gold">
                          <span>
                            {t({
                              en: 'Hover to learn more',
                              ar: 'مرر المؤشر لمعرفة المزيد',
                            })}
                          </span>

                          <ArrowRight
                            className={`h-4 w-4 transition-transform ${
                              isArabic ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* BACK */}
                    <Card className="absolute inset-0 h-full w-full border border-gold/30 bg-primary text-primary-foreground [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <CardContent className="flex h-full flex-col p-7">
                        <div className="mb-5 flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15">
                            <Icon
                              className="h-5 w-5 text-gold"
                              aria-hidden="true"
                            />
                          </div>

                          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                            {t({
                              en: 'Our Approach',
                              ar: 'نهجنا',
                            })}
                          </span>
                        </div>

                        <h3 className="mb-3 text-xl font-bold text-white">
                          {t(service.title)}
                        </h3>

                        <p className="flex-1 text-sm leading-relaxed text-white/75">
                          {t({
                            en: getServiceDetails(service.slug).en,
                            ar: getServiceDetails(service.slug).ar,
                          })}
                        </p>
                      </CardContent>
                    </Card>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Process */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              {t({
                en: 'How We Work',
                ar: 'كيف نعمل',
              })}
            </span>

            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              {t({
                en: 'From Market Opportunity to Long-Term Growth',
                ar: 'من فرصة السوق إلى النمو طويل الأمد',
              })}
            </h2>

            <p className="text-lg text-muted-foreground">
              {t({
                en: 'A practical process that keeps your objectives at the center of every step.',
                ar: 'منهج عملي يضع أهدافك في صميم كل خطوة.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl border bg-card p-7"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-sm font-bold text-gold">
                      {step.number}
                    </div>

                    <Icon
                      className="h-6 w-6 text-muted-foreground/60"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {t(step.title)}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(step.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              {t({
                en: 'Our Expertise',
                ar: 'مجالات خبرتنا',
              })}
            </span>

            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              {t({
                en: 'Sectors We Serve',
                ar: 'القطاعات التي نخدمها',
              })}
            </h2>

            <p className="text-lg leading-relaxed text-primary-foreground/70">
              {t({
                en: 'Our experience spans multiple industries, allowing us to connect businesses with relevant opportunities across the Egyptian market.',
                ar: 'تمتد خبرتنا عبر العديد من القطاعات، مما يتيح لنا ربط الشركات بالفرص المناسبة في السوق المصري.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.en}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-gold/40 hover:bg-white/10"
                >
                  <Icon
                    className="mb-5 h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-medium text-white">
                    {t({
                      en: sector.en,
                      ar: sector.ar,
                    })}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                {t({
                  en: 'Why El Maraie',
                  ar: 'لماذا المرعي',
                })}
              </span>

              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                {t({
                  en: 'A Local Partner for International Business',
                  ar: 'شريك محلي للأعمال الدولية',
                })}
              </h2>

              <p className="mb-6 leading-relaxed text-muted-foreground">
                {t({
                  en: 'Entering a new market requires more than moving products. It requires local understanding, trusted relationships and consistent commercial support.',
                  ar: 'دخول سوق جديد يحتاج إلى أكثر من مجرد نقل المنتجات. فهو يتطلب فهمًا محليًا وعلاقات موثوقة ودعمًا تجاريًا مستمرًا.',
                })}
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-gold hover:underline"
              >
                {t({
                  en: 'Start a conversation',
                  ar: 'ابدأ محادثة',
                })}
                <ArrowRight
                  className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((advantage) => (
                <div
                  key={advantage.title.en}
                  className="rounded-xl border bg-card p-6"
                >
                  <CheckCircle2
                    className="mb-4 h-6 w-6 text-gold"
                    aria-hidden="true"
                  />

                  <h3 className="mb-2 font-semibold text-foreground">
                    {t(advantage.title)}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(advantage.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center sm:px-10 lg:px-16">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <Handshake
                className="mx-auto mb-6 h-12 w-12 text-gold"
                aria-hidden="true"
              />

              <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
                {t({
                  en: 'Let’s Build Your Market Opportunity',
                  ar: 'لنبنِ معًا فرصتك في السوق',
                })}
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-white/75">
                {t({
                  en: 'Whether you are looking to enter Egypt, expand your distribution network or establish a local commercial presence, our team is ready to discuss your objectives.',
                  ar: 'سواء كنت تتطلع إلى دخول مصر أو توسيع شبكة التوزيع أو تأسيس حضور تجاري محلي، فإن فريقنا مستعد لمناقشة أهدافك.',
                })}
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-3.5 font-semibold text-primary transition-all hover:brightness-110 active:scale-[0.98]"
              >
                {t({
                  en: 'Discuss Opportunities',
                  ar: 'ناقش الفرص',
                })}
                <ArrowRight
                  className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
