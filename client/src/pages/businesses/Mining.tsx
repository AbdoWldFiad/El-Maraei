import {
  Mountain,
  Gem,
  TrendingUp,
  Shield,
  Leaf,
  Factory,
  Truck,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  Building2,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import miningImage from '@assets/generated_images/Mining_factory_operations_image_ab02d1b7.png';
import CountUp from '@/extras/countup.tsx';

const services = [
  {
    id: 'extraction',
    icon: Mountain,
    title: {
      en: 'Mineral Extraction',
      ar: 'استخراج المعادن',
    },
    description: {
      en: 'Efficient extraction operations focused on consistent mineral quality and responsible resource utilization.',
      ar: 'عمليات استخراج فعالة تركز على جودة المعادن والاستخدام المسؤول للموارد.',
    },
  },
  {
    id: 'processing',
    icon: Factory,
    title: {
      en: 'Processing & Refining',
      ar: 'المعالجة والتكرير',
    },
    description: {
      en: 'Modern processing capabilities designed to deliver minerals that meet specific industrial requirements.',
      ar: 'قدرات معالجة حديثة لتوفير معادن تلبي المتطلبات الصناعية المختلفة.',
    },
  },
  {
    id: 'quality',
    icon: FlaskConical,
    title: {
      en: 'Quality Control',
      ar: 'مراقبة الجودة',
    },
    description: {
      en: 'Careful testing and quality checks throughout the production process to maintain reliable specifications.',
      ar: 'اختبارات وفحوصات دقيقة خلال مراحل الإنتاج للحفاظ على مواصفات موثوقة.',
    },
  },
  {
    id: 'resource',
    icon: TrendingUp,
    title: {
      en: 'Resource Management',
      ar: 'إدارة الموارد',
    },
    description: {
      en: 'Responsible resource planning and production practices designed for long-term operational efficiency.',
      ar: 'تخطيط مسؤول للموارد وممارسات إنتاج تهدف إلى الكفاءة التشغيلية على المدى الطويل.',
    },
  },
  {
    id: 'safety',
    icon: Shield,
    title: {
      en: 'Safety Standards',
      ar: 'معايير السلامة',
    },
    description: {
      en: 'A strong focus on workplace safety and operational procedures across our mining and processing activities.',
      ar: 'تركيز قوي على سلامة بيئة العمل والإجراءات التشغيلية في أنشطة التعدين والمعالجة.',
    },
  },
  {
    id: 'environment',
    icon: Leaf,
    title: {
      en: 'Environmental Care',
      ar: 'الحفاظ على البيئة',
    },
    description: {
      en: 'Sustainable practices that aim to reduce environmental impact and promote responsible operations.',
      ar: 'ممارسات مستدامة تهدف إلى تقليل التأثير البيئي وتعزيز العمليات المسؤولة.',
    },
  },
];

const minerals = [
  {
    id: 'limestone',
    name: { en: 'Limestone', ar: 'الحجر الجيري' },
    description: {
      en: 'A versatile industrial mineral used across construction and manufacturing applications.',
      ar: 'معدن صناعي متعدد الاستخدامات يدخل في العديد من تطبيقات البناء والتصنيع.',
    },
  },
  {
    id: 'marble',
    name: { en: 'Marble', ar: 'الرخام' },
    description: {
      en: 'Natural stone valued for its durability, appearance, and wide range of applications.',
      ar: 'حجر طبيعي يتميز بالمتانة والمظهر الجمالي وتعدد الاستخدامات.',
    },
  },
  {
    id: 'granite',
    name: { en: 'Granite', ar: 'الجرانيت' },
    description: {
      en: 'Durable natural stone suitable for construction, architectural, and industrial uses.',
      ar: 'حجر طبيعي متين مناسب للاستخدامات الإنشائية والمعمارية والصناعية.',
    },
  },
  {
    id: 'phosphate',
    name: { en: 'Phosphate', ar: 'الفوسفات' },
    description: {
      en: 'An important mineral resource used in industrial and agricultural applications.',
      ar: 'مورد معدني مهم يستخدم في التطبيقات الصناعية والزراعية.',
    },
  },
  {
    id: 'silica',
    name: { en: 'Silica Sand', ar: 'رمل السيليكا' },
    description: {
      en: 'High-value industrial material used in glass, construction, and manufacturing.',
      ar: 'مادة صناعية مهمة تستخدم في الزجاج والبناء والتصنيع.',
    },
  },
  {
    id: 'kaolin',
    name: { en: 'Kaolin', ar: 'الكاولين' },
    description: {
      en: 'A versatile clay mineral used in ceramics, manufacturing, and other industrial applications.',
      ar: 'معدن طيني متعدد الاستخدامات يدخل في صناعة السيراميك والعديد من التطبيقات الصناعية.',
    },
  },
];

const processSteps = [
  {
    id: 'extraction',
    number: '01',
    icon: Mountain,
    title: { en: 'Extraction', ar: 'الاستخراج' },
    description: {
      en: 'Responsible extraction of mineral resources using controlled operational practices.',
      ar: 'استخراج مسؤول للموارد المعدنية باستخدام ممارسات تشغيلية منظمة.',
    },
  },
  {
    id: 'processing',
    number: '02',
    icon: Factory,
    title: { en: 'Processing', ar: 'المعالجة' },
    description: {
      en: 'Processing and preparation to achieve the required mineral characteristics.',
      ar: 'معالجة وتجهيز المعادن للوصول إلى الخصائص المطلوبة.',
    },
  },
  {
    id: 'quality',
    number: '03',
    icon: FlaskConical,
    title: { en: 'Quality Testing', ar: 'اختبار الجودة' },
    description: {
      en: 'Quality checks throughout production to maintain consistent product standards.',
      ar: 'فحوصات للجودة خلال مراحل الإنتاج للحفاظ على معايير ثابتة للمنتج.',
    },
  },
  {
    id: 'delivery',
    number: '04',
    icon: Truck,
    title: { en: 'Delivery', ar: 'التوصيل' },
    description: {
      en: 'Reliable preparation and delivery to support our customers’ supply requirements.',
      ar: 'تجهيز وتوصيل موثوق لدعم احتياجات عملائنا من الإمدادات.',
    },
  },
];

const industries = [
  {
    id: 'construction',
    icon: Building2,
    title: { en: 'Construction', ar: 'البناء والتشييد' },
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: { en: 'Manufacturing', ar: 'التصنيع' },
  },
  {
    id: 'infrastructure',
    icon: Mountain,
    title: { en: 'Infrastructure', ar: 'البنية التحتية' },
  },
  {
    id: 'industrial',
    icon: Gem,
    title: { en: 'Industrial Applications', ar: 'التطبيقات الصناعية' },
  },
];

export default function Mining() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          {language === 'ar'
            ? 'المرعي للتعدين ومعالجة المعادن | مجموعة المرعي'
            : 'El Maraie Mining & Mineral Processing | El Maraie Group'}
        </title>

        <meta
          name="description"
          content={
            language === 'ar'
              ? 'المرعي للتعدين ومعالجة المعادن. استخراج ومعالجة وتوريد المعادن بجودة موثوقة وممارسات تشغيلية مسؤولة.'
              : 'El Maraie Mining and Mineral Processing. Mineral extraction, processing and supply with reliable quality and responsible operational practices.'
          }
        />

        <meta
          property="og:title"
          content={
            language === 'ar'
              ? 'المرعي للتعدين ومعالجة المعادن'
              : 'El Maraie Mining & Mineral Processing'
          }
        />

        <meta
          property="og:description"
          content={
            language === 'ar'
              ? 'استخراج ومعالجة وتوريد المعادن بجودة موثوقة.'
              : 'Mineral extraction, processing and supply with reliable quality.'
          }
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${miningImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/55" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 border border-gold/30">
                <Mountain className="h-6 w-6 text-gold" />
              </div>

              <span className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-gold">
                {t({
                  en: 'El Maraie Group',
                  ar: 'مجموعة المرعي',
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              {t({
                en: 'Mining & Mineral Processing',
                ar: 'التعدين ومعالجة المعادن',
              })}
            </h1>

            <p className="text-xl md:text-2xl text-white/85 max-w-3xl leading-relaxed mb-8">
              {t({
                en: 'Reliable mineral extraction and processing with a focus on quality, responsible operations, and long-term supply.',
                ar: 'استخراج ومعالجة موثوقة للمعادن مع التركيز على الجودة والعمليات المسؤولة واستمرارية التوريد.',
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#minerals"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-gold text-primary font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-gold/90"
              >
                {t({
                  en: 'Explore Our Minerals',
                  ar: 'اكتشف معادننا',
                })}
                <ArrowRight
                  className={`h-5 w-5 ${language === 'ar' ? 'rotate-180' : ''}`}
                />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md border border-white/30 bg-white/10 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                {t({
                  en: 'Contact Us',
                  ar: 'تواصل معنا',
                })}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-gold font-semibold mb-4">
                <span className="h-px w-8 bg-gold" />
                {t({
                  en: 'ABOUT EL MARAIE MINING',
                  ar: 'عن المرعي للتعدين',
                })}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t({
                  en: 'Mineral expertise built around quality and reliability',
                  ar: 'خبرة في المعادن ترتكز على الجودة والموثوقية',
                })}
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t({
                  en: 'El Maraie Mining combines modern processing capabilities with responsible operational practices to extract, process, and supply quality minerals for industrial applications.',
                  ar: 'يجمع قطاع التعدين في المرعي بين قدرات المعالجة الحديثة والممارسات التشغيلية المسؤولة لاستخراج ومعالجة وتوريد المعادن عالية الجودة للاستخدامات الصناعية.',
                })}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t({
                  en: 'Our approach is built around consistent quality, operational safety, resource efficiency, and dependable customer service.',
                  ar: 'يعتمد نهجنا على الجودة المستمرة والسلامة التشغيلية وكفاءة استخدام الموارد وخدمة العملاء الموثوقة.',
                })}
              </p>
            </div>

            <Card className="border-gold/20 bg-muted/40">
              <CardContent className="p-8">
                <div className="grid gap-6">
                  {[
                    {
                      icon: CheckCircle2,
                      title: {
                        en: 'Consistent Quality',
                        ar: 'جودة مستمرة',
                      },
                    },
                    {
                      icon: Shield,
                      title: {
                        en: 'Safety Focused',
                        ar: 'تركيز على السلامة',
                      },
                    },
                    {
                      icon: Leaf,
                      title: {
                        en: 'Responsible Operations',
                        ar: 'عمليات مسؤولة',
                      },
                    },
                    {
                      icon: TrendingUp,
                      title: {
                        en: 'Continuous Improvement',
                        ar: 'تطوير مستمر',
                      },
                    },
                  ].map((item) => (
                    <div key={item.title.en} className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <item.icon className="h-5 w-5 text-gold" />
                      </div>

                      <span className="font-semibold text-foreground">
                        {t(item.title)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Minerals */}
      <section id="minerals" className="py-20 md:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-gold font-semibold mb-4">
              <span className="h-px w-8 bg-gold" />
              {t({
                en: 'OUR MINERALS',
                ar: 'معادننا',
              })}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t({
                en: 'Minerals for diverse industrial applications',
                ar: 'معادن لمجموعة متنوعة من التطبيقات الصناعية',
              })}
            </h2>

            <p className="text-lg text-muted-foreground">
              {t({
                en: 'We process a range of mineral resources to support construction, manufacturing, infrastructure, and other industrial applications.',
                ar: 'نعالج مجموعة من الموارد المعدنية لدعم قطاعات البناء والتصنيع والبنية التحتية وغيرها من التطبيقات الصناعية.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minerals.map((mineral) => (
              <Card
                key={mineral.id}
                className="group overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-0">
                  <div className="h-2 bg-gradient-to-r from-gold/80 to-gold/20" />

                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                        <Gem className="h-6 w-6 text-gold" />
                      </div>

                      <span className="text-xs font-medium text-muted-foreground border rounded-full px-3 py-1">
                        {t({
                          en: 'Mineral',
                          ar: 'معدن',
                        })}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {t(mineral.name)}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(mineral.description)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-gold font-semibold mb-4">
              <span className="h-px w-8 bg-gold" />
              {t({
                en: 'OUR CAPABILITIES',
                ar: 'قدراتنا',
              })}
              <span className="h-px w-8 bg-gold" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t({
                en: 'From extraction to quality-controlled supply',
                ar: 'من الاستخراج إلى التوريد بجودة موثوقة',
              })}
            </h2>

            <p className="text-lg text-muted-foreground">
              {t({
                en: 'Our capabilities cover the key stages required to deliver reliable mineral products to our customers.',
                ar: 'تشمل قدراتنا المراحل الأساسية اللازمة لتوفير منتجات معدنية موثوقة لعملائنا.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-7">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-gold/20">
                    <service.icon className="h-7 w-7 text-gold" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {t(service.title)}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(service.description)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-gold font-semibold mb-4">
              <span className="h-px w-8 bg-gold" />
              {t({
                en: 'OUR PROCESS',
                ar: 'مراحل العمل',
              })}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t({
                en: 'A clear path from resource to finished product',
                ar: 'مسار واضح من الموارد إلى المنتج النهائي',
              })}
            </h2>

            <p className="text-primary-foreground/70 text-lg">
              {t({
                en: 'We focus on consistency and control throughout the mineral production process.',
                ar: 'نركز على الاتساق والرقابة طوال مراحل إنتاج المعادن.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%+8px)] w-[calc(100%-16px)] h-px bg-white/10" />
                )}

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20">
                      <step.icon className="h-7 w-7 text-gold" />
                    </div>

                    <span className="text-4xl font-bold text-white/10">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {t(step.title)}
                  </h3>

                  <p className="text-sm text-primary-foreground/65 leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-gold font-semibold mb-4">
              <span className="h-px w-8 bg-gold" />
              {t({
                en: 'INDUSTRIES WE SERVE',
                ar: 'القطاعات التي نخدمها',
              })}
              <span className="h-px w-8 bg-gold" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t({
                en: 'Supporting industries with dependable mineral supply',
                ar: 'دعم القطاعات الصناعية بإمدادات معدنية موثوقة',
              })}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="flex flex-col items-center justify-center text-center p-7 rounded-xl border bg-card transition-all duration-300 hover:border-gold/40 hover:-translate-y-1 hover:shadow-md"
              >
                <industry.icon className="h-8 w-8 text-gold mb-4" />

                <h3 className="font-semibold text-foreground">
                  {t(industry.title)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-7">
                <Shield className="h-8 w-8 text-gold mb-5" />

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t({
                    en: 'Safety First',
                    ar: 'السلامة أولاً',
                  })}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t({
                    en: 'We place workplace safety and responsible operating procedures at the center of our activities.',
                    ar: 'نضع سلامة بيئة العمل وإجراءات التشغيل المسؤولة في صميم أنشطتنا.',
                  })}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-7">
                <Leaf className="h-8 w-8 text-gold mb-5" />

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t({
                    en: 'Environmental Responsibility',
                    ar: 'المسؤولية البيئية',
                  })}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t({
                    en: 'We aim to operate responsibly by focusing on resource efficiency and reducing environmental impact.',
                    ar: 'نسعى للعمل بمسؤولية من خلال التركيز على كفاءة استخدام الموارد وتقليل التأثير البيئي.',
                  })}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-7">
                <TrendingUp className="h-8 w-8 text-gold mb-5" />

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t({
                    en: 'Continuous Improvement',
                    ar: 'التطوير المستمر',
                  })}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t({
                    en: 'We continue to improve our processes, technology, and operational capabilities to serve customers better.',
                    ar: 'نواصل تطوير عملياتنا وتقنياتنا وقدراتنا التشغيلية لتقديم خدمة أفضل لعملائنا.',
                  })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t({
                en: 'Built on experience and consistency',
                ar: 'نبني أعمالنا على الخبرة والاستمرارية',
              })}
            </h2>

            <p className="text-primary-foreground/70">
              {t({
                en: 'Our focus remains on reliable production, consistent quality, and long-term customer relationships.',
                ar: 'ينصب تركيزنا على الإنتاج الموثوق والجودة المستمرة والعلاقات طويلة الأمد مع العملاء.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gold mb-3">
                <CountUp end={50} suffix="+" />
              </div>

              <div className="text-primary-foreground/70">
                {t({
                  en: 'Tons Processed Annually',
                  ar: 'طن معالج سنويًا',
                })}
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gold mb-3">
                <CountUp end={15} suffix="+" />
              </div>

              <div className="text-primary-foreground/70">
                {t({
                  en: 'Years of Experience',
                  ar: 'سنوات من الخبرة',
                })}
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gold mb-3">
                <CountUp end={97.5} suffix="%" />
              </div>

              <div className="text-primary-foreground/70">
                {t({
                  en: 'Product Purity',
                  ar: 'نقاء المنتج',
                })}
              </div>
            </div>
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
                  en: 'Looking for a reliable mineral supply partner?',
                  ar: 'هل تبحث عن شريك موثوق لتوريد المعادن؟',
                })}
              </h2>

              <p className="text-lg text-white/70 leading-relaxed mb-8">
                {t({
                  en: 'Contact El Maraie to discuss your mineral requirements, specifications, and supply opportunities.',
                  ar: 'تواصل مع المرعي لمناقشة احتياجاتك من المعادن والمواصفات وفرص التوريد.',
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
  );
}
