import { Ship, Anchor, Globe, Package, Clock, Shield, Users, Headphones, FileCheck, ArrowRight, Gem, } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import shippingImage from '@assets/generated_images/Shipping_agency_port_image_bb7e32b1.png';

type LocalizedText = {
  en: string;
  ar: string;
};

type Service = {
  icon: typeof Ship;
  title: LocalizedText;
  description: LocalizedText;
};

type Advantage = {
  icon: typeof Users;
  title: LocalizedText;
  description: LocalizedText;
};

const services: Service[] = [
  {
    icon: Ship,
    title: {
      en: 'Vessel Agency',
      ar: 'وكالة السفن',
    },
    description: {
      en: 'Complete port agency services for vessels calling at Egyptian ports.',
      ar: 'خدمات وكالة موانئ متكاملة للسفن التي تصل إلى الموانئ المصرية.',
    },
  },
  {
    icon: Package,
    title: {
      en: 'Cargo Handling',
      ar: 'مناولة البضائع',
    },
    description: {
      en: 'Efficient coordination of loading, unloading, and cargo operations.',
      ar: 'تنسيق فعال لعمليات تحميل وتفريغ ومناولة البضائع.',
    },
  },
  {
    icon: Globe,
    title: {
      en: 'International Shipping',
      ar: 'الشحن الدولي',
    },
    description: {
      en: 'Reliable maritime logistics solutions connecting Egypt with global markets.',
      ar: 'حلول لوجستية بحرية موثوقة تربط مصر بالأسواق العالمية.',
    },
  },
  {
    icon: Clock,
    title: {
      en: 'Transit Services',
      ar: 'خدمات العبور',
    },
    description: {
      en: 'Fast and reliable coordination for cargo and vessel transit requirements.',
      ar: 'تنسيق سريع وموثوق لمتطلبات عبور السفن والبضائع.',
    },
  },
  {
    icon: Shield,
    title: {
      en: 'Customs Clearance',
      ar: 'التخليص الجمركي',
    },
    description: {
      en: 'Professional customs documentation and clearance coordination.',
      ar: 'تنسيق احترافي للوثائق وإجراءات التخليص الجمركي.',
    },
  },
  {
    icon: Anchor,
    title: {
      en: 'Port Operations',
      ar: 'عمليات الموانئ',
    },
    description: {
      en: 'Comprehensive support for vessel calls and port-related operations.',
      ar: 'دعم شامل لزيارات السفن والعمليات المتعلقة بالموانئ.',
    },
  },
];

const ports: LocalizedText[] = [
  {
    en: 'Alexandria Port',
    ar: 'ميناء الإسكندرية',
  },
  {
    en: 'Port Said Port',
    ar: 'ميناء بورسعيد',
  },
  {
    en: 'Suez Port',
    ar: 'ميناء السويس',
  },
  {
    en: 'Damietta Port',
    ar: 'ميناء دمياط',
  },
  {
    en: 'Ain Sokhna Port',
    ar: 'ميناء العين السخنة',
  },
];

const advantages: Advantage[] = [
  {
    icon: Users,
    title: {
      en: 'Experienced Team',
      ar: 'فريق ذو خبرة',
    },
    description: {
      en: 'Experienced maritime professionals focused on reliable operations.',
      ar: 'محترفون في القطاع البحري يركزون على تنفيذ العمليات بكفاءة وموثوقية.',
    },
  },
  {
    icon: Headphones,
    title: {
      en: '24/7 Support',
      ar: 'دعم على مدار الساعة',
    },
    description: {
      en: 'Round-the-clock assistance for vessel and cargo requirements.',
      ar: 'مساعدة على مدار الساعة لمتطلبات السفن والبضائع.',
    },
  },
  {
    icon: FileCheck,
    title: {
      en: 'Reliable Documentation',
      ar: 'وثائق موثوقة',
    },
    description: {
      en: 'Professional coordination of shipping and port documentation.',
      ar: 'تنسيق احترافي لوثائق الشحن والموانئ.',
    },
  },
  {
    icon: Globe,
    title: {
      en: 'Global Connections',
      ar: 'اتصالات عالمية',
    },
    description: {
      en: 'Maritime logistics support connecting Egyptian ports with international trade.',
      ar: 'دعم لوجستي بحري يربط الموانئ المصرية بالتجارة الدولية.',
    },
  },
];

const stats: LocalizedText[] = [
  {
    en: 'Major Egyptian Ports',
    ar: 'موانئ مصرية رئيسية',
  },
  {
    en: '24/7 Operational Support',
    ar: 'دعم تشغيلي على مدار الساعة',
  },
  {
    en: 'Maritime Services',
    ar: 'خدمات بحرية',
  },
];

const steps: {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}[] = [
  {
    number: '01',
    title: {
      en: 'Request',
      ar: 'الطلب',
    },
    description: {
      en: 'Share your vessel, cargo, port, or shipping requirements with our team.',
      ar: 'شارك متطلبات السفينة أو البضائع أو الميناء أو الشحن مع فريقنا.',
    },
  },
  {
    number: '02',
    title: {
      en: 'Planning',
      ar: 'التخطيط',
    },
    description: {
      en: 'We coordinate the required port, documentation, and logistics arrangements.',
      ar: 'نقوم بتنسيق ترتيبات الميناء والوثائق والخدمات اللوجستية المطلوبة.',
    },
  },
  {
    number: '03',
    title: {
      en: 'Execution',
      ar: 'التنفيذ',
    },
    description: {
      en: 'Our team manages the agreed maritime and port operations.',
      ar: 'يدير فريقنا العمليات البحرية وعمليات الموانئ المتفق عليها.',
    },
  },
  {
    number: '04',
    title: {
      en: 'Completion',
      ar: 'الإنجاز',
    },
    description: {
      en: 'We complete the required formalities and keep you informed throughout the process.',
      ar: 'نستكمل الإجراءات المطلوبة ونبقيك على اطلاع طوال العملية.',
    },
  },
];

export default function Shipping() {
  const { t, language } = useLanguage();

  const isArabic = language === 'ar';

  const pageTitle = isArabic
    ? 'المرعي للتوكيلات الملاحية | المرعي جروب'
    : 'El Maraie Shipping Agency | El Maraie Group';

  const pageDescription = isArabic
    ? 'حلول شحن بحري احترافية وخدمات وكالة موانئ عبر الموانئ المصرية الرئيسية.'
    : 'Professional maritime shipping solutions and port agency services across major Egyptian ports.';

  return (
    <div className="min-h-screen" dir={isArabic ? 'rtl' : 'ltr'} >
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={pageDescription} />

        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <section aria-labelledby="shipping-hero-title" className="relative min-h-[600px] flex items-center justify-center overflow-hidden" >
        <div className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${shippingImage})`, }} aria-hidden="true" >
          <div className="absolute inset-0 bg-primary/75" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gold/20 border border-gold/30 mb-6">
            <Ship className="h-10 w-10 text-gold" aria-hidden="true" />
          </div>

          <h1 id="shipping-hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" >
            {t({
              en: 'El Maraie Shipping Agency',
              ar: 'المرعي للتوكيلات الملاحية',
            })}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t({
              en: 'Reliable Port Agency & Maritime Logistics Across Egypt',
              ar: 'خدمات موثوقة لوكالة السفن والخدمات اللوجستية البحرية في مصر',
            })}
          </p>

          <p className="mt-4 text-base md:text-lg text-white/75 max-w-2xl mx-auto">
            {t({
              en: 'Vessel agency, cargo handling, customs clearance, transit services, and port operations.',
              ar: 'وكالة السفن، مناولة البضائع، التخليص الجمركي، خدمات العبور وعمليات الموانئ.',
            })}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-gold text-gold-foreground hover-elevate active-elevate-2 font-semibold min-w-[180px]"
              data-testid="button-hero-quote">
              {t({
                en: 'Request a Quote',
                ar: 'اطلب عرض سعر',
              })}

              <ArrowRight
                className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`}
                aria-hidden="true" />
            </a>

            <a href="#services"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors font-medium min-w-[180px]" >
              {t({
                en: 'Explore Services',
                ar: 'استكشف خدماتنا',
              })}
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              {t({
                en: 'About El Maraie',
                ar: 'عن المرعي',
              })}
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              {t({
                en: 'Your Maritime Operations Partner',
                ar: 'شريكك في العمليات البحرية',
              })}
            </h2>

            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              {t({
                en: 'El Maraie Shipping Agency provides comprehensive maritime services across major Egyptian ports. Our team works to coordinate reliable vessel, cargo, documentation, and port-related services for clients operating in local and international trade.',
                ar: 'توفر وكالة المرعي للملاحة خدمات بحرية شاملة عبر الموانئ المصرية الرئيسية. يعمل فريقنا على تنسيق خدمات موثوقة للسفن والبضائع والوثائق والعمليات المتعلقة بالموانئ للعملاء العاملين في التجارة المحلية والدولية.',
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse">
            <div className="py-8 px-6 text-center">
              <div className="text-3xl font-bold text-gold">
                5+
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {t(stats[0])}
              </div>
            </div>

            <div className="py-8 px-6 text-center">
              <div className="text-3xl font-bold text-gold">
                24/7
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {t(stats[1])}
              </div>
            </div>

            <div className="py-8 px-6 text-center">
              <div className="text-3xl font-bold text-gold">
                360°
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {t(stats[2])}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20" >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              {t({
                en: 'Our Services',
                ar: 'خدماتنا',
              })}
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              {t({
                en: 'Complete Maritime & Port Services',
                ar: 'خدمات بحرية ومينائية متكاملة',
              })}
            </h2>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t({
                en: 'From vessel arrival to cargo operations and documentation, we coordinate the services required for efficient port calls.',
                ar: 'من وصول السفن إلى عمليات البضائع والوثائق، نقوم بتنسيق الخدمات اللازمة لزيارات الموانئ بكفاءة.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.title.en}
                  className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="p-7 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-chart-2/20 flex items-center justify-center mb-5">
                      <Icon
                        className="h-7 w-7 text-chart-2"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {t(service.title)}
                    </h3>

                    <p className="text-sm leading-6 text-muted-foreground">
                      {t(service.description)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              {t({
                en: 'How We Work',
                ar: 'كيف نعمل',
              })}
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              {t({
                en: 'Simple, Coordinated, Reliable',
                ar: 'بسيط، منسق، وموثوق',
              })}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative bg-card border rounded-xl p-6" >
                <div className="text-4xl font-bold text-gold/30 mb-5">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(step.title)}
                </h3>

                <p className="text-sm text-muted-foreground leading-6">
                  {t(step.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports + Advantages */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ports */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">
                {t({
                  en: 'Port Coverage',
                  ar: 'تغطية الموانئ',
                })}
              </span>

              <h2 className="mt-3 text-3xl font-bold text-foreground">
                {t({
                  en: 'Ports We Serve',
                  ar: 'الموانئ التي نخدمها',
                })}
              </h2>

              <p className="mt-4 mb-7 text-muted-foreground leading-relaxed">
                {t({
                  en: 'Our services cover key Egyptian ports, supporting vessel and cargo operations across important maritime gateways.',
                  ar: 'تغطي خدماتنا الموانئ المصرية الرئيسية، مع دعم عمليات السفن والبضائع عبر أهم الموانئ البحرية.',
                })}
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {ports.map((port) => (
                  <div key={port.en}
                    className="flex items-center gap-3 p-3 rounded-md transition-all duration-300 hover:translate-x-2 hover-elevate">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <Anchor className="h-5 w-5 text-gold" aria-hidden="true" />
                    </div>

                    <span className="font-medium text-foreground">
                      {t(port)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <Card className="bg-muted/40 border-0">
              <CardContent className="p-7 md:p-9">
                <span className="text-sm font-semibold uppercase tracking-wider text-gold">
                  {t({
                    en: 'Why El Maraie',
                    ar: 'لماذا المرعي',
                  })}
                </span>

                <h2 className="mt-3 text-3xl font-bold text-foreground">
                  {t({
                    en: 'Built Around Reliable Service',
                    ar: 'خدمات مصممة حول الموثوقية',
                  })}
                </h2>

                <div className="grid sm:grid-cols-2 gap-7 mt-8">
                  {advantages.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title.en} className="flex items-start gap-4" >
                        <div className="w-10 h-10 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {t(item.title)}
                          </h3>

                          <p className="text-sm text-muted-foreground leading-5">
                            {t(item.description)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
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

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                {t({
                  en: 'Ready to Move Your Cargo?',
                  ar: 'هل أنت مستعد لشحن بضائعك؟',
                })}
              </h2>

              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
                {t({
                  en: 'Contact our team today to discuss your vessel, cargo, or port requirements and receive a tailored shipping solution.',
                  ar: 'تواصل مع فريقنا اليوم لمناقشة متطلبات السفينة أو البضائع أو الميناء والحصول على حل شحن مخصص.',
                })}
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-gold text-primary font-semibold transition-all duration-300 hover:bg-gold/90 hover:scale-[1.02]"
              >
                {t({
                  en: 'Get a Quote',
                  ar: 'احصل على عرض سعر',
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
  );
}