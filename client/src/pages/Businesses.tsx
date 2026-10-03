import { Link } from 'wouter';
import { Stethoscope, Ship, Waves, Mountain, Handshake, ArrowRight, Pill, Gem, } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const businesses = [
  {
    id: 'medical',
    icon: Stethoscope,
    name: {
      en: 'Medical Center',
      ar: 'المركز الطبي',
    },
    description: {
      en: 'Comprehensive healthcare services with modern facilities and experienced medical professionals. We provide specialized care across multiple medical disciplines.',
      ar: 'خدمات رعاية صحية شاملة مع مرافق حديثة وأطباء ذوي خبرة. نقدم رعاية متخصصة في العديد من المجالات الطبية.',
    },
    href: '/businesses/medical',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'shipping',
    icon: Ship,
    name: {
      en: 'Shipping Agency',
      ar: 'التوكيلات الملاحية',
    },
    description: {
      en: 'Professional maritime shipping and port agency services supporting international trade. We provide cargo handling, vessel coordination, and logistics solutions across major Egyptian ports.',
      ar: 'خدمات احترافية للشحن البحري والتوكيلات الملاحية لدعم التجارة الدولية، تشمل مناولة البضائع وتنسيق السفن والحلول اللوجستية عبر الموانئ المصرية الرئيسية.',
    },
    href: '/businesses/shipping',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'marine',
    icon: Waves,
    name: {
      en: 'Marine Works',
      ar: 'الأشغال البحرية',
    },
    description: {
      en: 'Specialized marine engineering services including coastal works, harbor construction, and marine infrastructure development for complex maritime projects.',
      ar: 'خدمات متخصصة في الهندسة والأشغال البحرية تشمل الأعمال الساحلية وبناء الموانئ وتطوير البنية التحتية للمشروعات البحرية المعقدة.',
    },
    href: '/businesses/marine',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    id: 'mining',
    icon: Mountain,
    name: {
      en: 'Mining Factory',
      ar: 'مصنع التعدين',
    },
    description: {
      en: 'Advanced mineral processing and extraction with a focus on quality, efficiency, and responsible operations while maintaining high environmental and safety standards.',
      ar: 'معالجة واستخراج المعادن باستخدام تقنيات متقدمة مع التركيز على الجودة والكفاءة والتشغيل المسؤول، مع الالتزام بأعلى معايير البيئة والسلامة.',
    },
    href: '/businesses/mining',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'trade',
    icon: Handshake,
    name: {
      en: 'Trade & Agency',
      ar: 'التجارة والوكالات',
    },
    description: {
      en: 'Local and international trade representation, business agency, and commercial partnerships connecting international businesses with opportunities in the Egyptian market.',
      ar: 'تمثيل تجاري محلي ودولي، ووكالات أعمال، وشراكات تجارية تربط الشركات الدولية بالفرص المتاحة في السوق المصري.',
    },
    href: '/businesses/trade',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'medical-products',
    icon: Pill,
    name: {
      en: 'Medical Products',
      ar: 'المنتجات الطبية',
    },
    description: {
      en: 'Supply and distribution of medical products and healthcare solutions supporting healthcare professionals, facilities, and patients with reliable products and services.',
      ar: 'توفير وتوزيع المنتجات الطبية وحلول الرعاية الصحية لدعم الأطباء والمنشآت الصحية والمرضى من خلال منتجات وخدمات موثوقة.',
    },
    href: '/businesses/medical-products',
    color: 'from-rose-500 to-pink-500',
  },
];

export default function Businesses() {
  const { t, language } = useLanguage();

  const isArabic = language === 'ar';

  return (
    <>
      <Helmet> <html lang={language} dir={isArabic ? 'rtl' : 'ltr'} />
        <title>
          {isArabic
            ? 'أعمالنا - مجموعة المرعي | ستة قطاعات أعمال'
            : 'Our Businesses - El Maraie Group | Six Business Sectors'}
        </title>

        <meta
          name="description"
          content={
            isArabic
              ? 'استكشف قطاعات أعمال مجموعة المرعي الستة: المركز الطبي، التوكيلات الملاحية، الأشغال البحرية، مصنع التعدين، التجارة والوكالات، والمنتجات الطبية.'
              : 'Explore El Maraie Group’s six business sectors: Medical Center, Shipping Agency, Marine Works, Mining Factory, Trade & Agency, and Medical Products.'
          }
        />

        <meta
          property="og:title"
          content={
            isArabic
              ? 'أعمالنا - مجموعة المرعي'
              : 'Our Businesses - El Maraie Group'
          }
        />

        <meta
          property="og:description"
          content={
            isArabic
              ? 'ستة قطاعات أعمال متنوعة تقدم خدمات وحلولاً متخصصة في الرعاية الصحية، الملاحة، الأشغال البحرية، التعدين، التجارة والمنتجات الطبية.'
              : 'Six diverse business sectors delivering specialized services across healthcare, maritime, marine works, mining, trade, and medical products.'
          }
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-24">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`max-w-3xl ${
                isArabic ? 'mr-auto ml-auto text-center' : 'mx-auto text-center'
              }`} >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                {t({
                  en: 'El Maraie Group',
                  ar: 'مجموعة المرعي',
                })}
              </p>

              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {t({
                  en: 'Our Businesses',
                  ar: 'أعمالنا',
                })}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                {t({
                  en: 'A diverse portfolio of businesses delivering specialized services, trusted expertise, and sustainable solutions across multiple industries.',
                  ar: 'محفظة متنوعة من الأنشطة تقدم خدمات متخصصة وخبرات موثوقة وحلولاً مستدامة عبر مجموعة من القطاعات.',
                })}
              </p>
            </div>
          </div>
        </section>

        {/* Businesses */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {t({
                  en: 'Our Business Sectors',
                  ar: 'قطاعات أعمالنا',
                })}
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {t({
                  en: 'Discover the businesses that make up El Maraie Group and explore the expertise behind each division.',
                  ar: 'اكتشف الأنشطة التي تشكل مجموعة المرعي وتعرّف على الخبرات التي تقف وراء كل قطاع.',
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {businesses.map((business, index) => (
                <Card key={business.id}
                  className="group overflow-hidden border-border/60 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                  data-testid={`business-card-${index}`} >
                  <CardContent className="p-0">
                    {/* Gradient top border */}
                    <div className={`h-1.5 bg-gradient-to-r ${business.color}`} />

                    <div className="flex h-full flex-col p-7">
                      {/* Icon + number */}
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${business.color} shadow-sm transition-transform duration-300 group-hover:scale-110`} >
                          <business.icon className="h-7 w-7 text-white" />
                        </div>

                        <span className="rounded-full border border-border bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="mb-3 text-xl font-bold text-foreground">
                        {t(business.name)}
                      </h3>

                      <p className="mb-6 min-h-[96px] text-sm leading-relaxed text-muted-foreground">
                        {t(business.description)}
                      </p>

                      {/* CTA */}
                      <div className="mt-auto">
                        <Link href={business.href}>
                          <Button
                            variant="ghost"
                            className={`h-auto gap-2 p-0 font-semibold text-primary hover:bg-transparent hover:text-primary ${
                              isArabic
                                ? 'group-hover:gap-3'
                                : 'group-hover:gap-3'
                            }`}
                            data-testid={`button-learn-more-${index}`}
                          >
                            {t({
                              en: 'Explore Business',
                              ar: 'استكشف النشاط',
                            })}

                            <ArrowRight
                              className={`h-4 w-4 transition-transform duration-300 ${
                                isArabic
                                  ? 'rotate-180 group-hover:-translate-x-1'
                                  : 'group-hover:translate-x-1'
                              }`}
                            />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/90 p-8 md:p-12 lg:p-16 text-center">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative max-w-3xl mx-auto">
              <Gem className="h-10 w-10 text-gold mx-auto mb-5" />

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                {t({
                  en: 'Interested in Our Services?',
                  ar: 'مهتم بخدماتنا؟',
                })}
              </h2>

              <p className="text-lg text-white/70 leading-relaxed mb-8">
                {t({
                  en: 'Get in touch with our team to learn more about our businesses, services, and how we can work together.',
                  ar: 'تواصل مع فريقنا لمعرفة المزيد عن أنشطتنا وخدماتنا وكيف يمكننا التعاون معاً.',
                })}
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-gold text-primary font-semibold transition-all duration-300 hover:bg-gold/90 hover:scale-[1.02]"
              >
                {t({
                  en: 'Discuss Opportunities',
                  ar: 'ناقش فرص التعاون',
                })}

                <ArrowRight
                  className={`h-5 w-5 ${language === 'ar' ? 'rotate-180' : ''}`}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
