import { Waves, Wrench, Building, Anchor, HardHat, TrendingUp, MailIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import marineImage from '@assets/generated_images/Marine_works_construction_image_d652c626.png';
import { useState } from 'react';
import CountUp from "@/extras/countup.tsx";

export default function Marine() {
  const { t, language } = useLanguage();

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("elmaraie@elmaraie-marine-eg.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const services = [
    { icon: Building, title: { en: 'El maraie for Harbor Construction', ar: ' المرعي لبناء الموانئ' }, description: { en: 'Design and construction of modern harbor facilities', ar: 'تصميم وبناء مرافق موانئ حديثة' } },
    { icon: Anchor, title: { en: 'Dredging Services', ar: 'خدمات التجريف' }, description: { en: 'Professional underwater excavation and maintenance', ar: 'حفر وصيانة تحت الماء احترافية' } },
    { icon: Waves, title: { en: 'Coastal Engineering', ar: 'الهندسة الساحلية' }, description: { en: 'Erosion control and coastal protection solutions', ar: 'حلول مكافحة التآكل وحماية السواحل' } },
    { icon: Wrench, title: { en: 'Marine Maintenance', ar: 'الصيانة البحرية' }, description: { en: 'Ongoing maintenance of maritime structures', ar: 'صيانة مستمرة للهياكل البحرية' } },
    { icon: HardHat, title: { en: 'Underwater Construction', ar: 'البناء تحت الماء' }, description: { en: 'Specialized submarine construction projects', ar: 'مشاريع بناء تحت الماء متخصصة' } },
    { icon: TrendingUp, title: { en: 'Infrastructure Development', ar: 'تطوير البنية التحتية' }, description: { en: 'Marine infrastructure planning and execution', ar: 'تخطيط وتنفيذ البنية التحتية البحرية' } },
    { icon: Anchor, title: { en: 'Marine Trailer Rental', ar: 'تأجير المقطورات البحرية' }, description: { en: 'Reliable marine trailer rental solutions for transporting heavy, oversized, and specialized cargo.', ar: 'حلول موثوقة لتأجير المقطورات البحرية لنقل البضائع الثقيلة والكبيرة الحجم والمتخصصة.' } },
  ];

  const operations = [
  { name: { en: 'Heavy Equipment Transport', ar: 'نقل المعدات الثقيلة' }, description: { en: 'Successful transportation of heavy construction equipment between marine facilities using specialized transport solutions and careful route planning.', ar: 'نجحنا في نقل معدات إنشائية ثقيلة بين المنشآت البحرية باستخدام حلول نقل متخصصة وتخطيط دقيق للمسار.' } },
  { name: { en: 'Industrial Cargo Delivery', ar: 'نقل وتسليم البضائع الصناعية' }, description: { en: 'Coordinated the safe movement of industrial cargo, ensuring efficient handling and delivery while meeting demanding project requirements.', ar: 'تنسيق عملية نقل آمنة للبضائع الصناعية، مع ضمان كفاءة المناولة والتسليم وتلبية متطلبات المشروع.' } },
  { name: { en: 'Oversized Project Cargo', ar: 'نقل البضائع كبيرة الحجم' }, description: { en: 'Transported oversized project cargo using suitable marine trailers and specialized logistics planning to support a smooth operation.', ar: 'نقل بضائع كبيرة الحجم خاصة بالمشروعات باستخدام المقطورات البحرية المناسبة وتخطيط لوجستي متخصص لضمان تنفيذ العملية بسلاسة.' } },
];


  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'ar' ? 'المرعي لي الأشغال البحرية | المرعي جروب' : 'El maraie for Marine Works | El maraie Group'}</title>
        <meta name="description" content={language === 'ar' ? 'هندسة ساحلية وبناء موانئ وتطوير بنية تحتية بحرية من قبل خبراء الصناعة' : 'Coastal engineering, harbor construction, and marine infrastructure development by industry experts'} />
        <meta property="og:title" content={language === 'ar' ? 'الأشغال البحرية | المرعي جروب' : 'Marine Works | El maraie Group'} />
        <meta property="og:description" content={language === 'ar' ? 'هندسة ساحلية وبناء موانئ وتطوير بنية تحتية بحرية' : 'Coastal engineering, harbor construction, and marine infrastructure development'} />
      </Helmet>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${marineImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Waves className="h-16 w-16 text-gold mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t({ en: 'El maraie for Marine Works', ar: 'المرعي للأشغال البحرية' })}
          </h1>
          <p className="text-xl text-white/90">
            {t({ 
              en: 'Building Tomorrow\'s Maritime Infrastructure', 
              ar: 'نبني البنية التحتية البحرية للغد' 
            })}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border bg-card p-6 mb-12 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-center text-foreground">
              {t({ en: 'About Our Marine Works', ar: 'عن أشغالنا البحرية' })}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t({
                en: 'El maraie Marine Works provides integrated marine solutions covering coastal engineering, harbor construction, marine infrastructure, cargo transportation, and marine trailer rental. Our team combines practical experience with reliable equipment and careful planning to support demanding marine and logistics operations.',
                ar: 'تقدم المرعي للأشغال البحرية حلولاً بحرية متكاملة تشمل الهندسة الساحلية وبناء الموانئ والبنية التحتية البحرية ونقل البضائع وتأجير المقطورات البحرية. ويجمع فريقنا بين الخبرة العملية والمعدات الموثوقة والتخطيط الدقيق لدعم العمليات البحرية واللوجستية المختلفة.'
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-testid={`service-card-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-chart-3/20 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-chart-3" />
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

          <div>
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              {t({
                en: 'Successful Marine Operations',
                ar: 'عمليات بحرية ناجحة'
              })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {operations.map((operation, index) => (
                <Card key={index} className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" 
                  data-testid={`operation-card-${index}`} >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                      <Anchor className="h-6 w-6 text-gold" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {t(operation.name)}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(operation.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Anchor className="h-12 w-12 text-gold mx-auto mb-4" />

            <h2 className="text-3xl font-bold mb-4">
              {t({
                en: 'Marine Trailer Rental',
                ar: 'تأجير المقطورات البحرية'
              })}
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              {t({
                en: 'We offer marine trailer rental solutions for heavy, oversized, and specialized cargo transportation. Our rental services are designed to support construction, industrial, infrastructure, and marine logistics operations.',
                ar: 'نوفر حلول تأجير المقطورات البحرية لنقل البضائع الثقيلة وكبيرة الحجم والمتخصصة. وقد تم تصميم خدمات التأجير لدينا لدعم عمليات الإنشاءات والمشروعات الصناعية والبنية التحتية والخدمات اللوجستية البحرية.'
              })}
            </p>

            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gold text-primary rounded-md hover-elevate active-elevate-2 font-medium"
            >
              {t({
                en: 'Request Trailer Rental',
                ar: 'طلب تأجير مقطورة'
              })}
            </a>
          </div>
        </div>
      </section>


      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {t({ en: 'Our Capabilities', ar: 'قدراتنا' })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2"> <CountUp end={50} suffix="+" /> </div>
                <div className="text-muted-foreground">
                  {t({ en: "Projects Completed", ar: "مشروع مكتمل" })}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2"> <CountUp end={30} suffix="+" /> </div>
                <div className="text-muted-foreground">
                  {t({ en: "Expert Engineers", ar: "مهندس خبير" })}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2"> <CountUp end={20} suffix="+" /> </div>
                <div className="text-muted-foreground">
                  {t({ en: "Industrial & Project Cargo Moves", ar: "نقل البضائع الصناعية والمشاريع" })}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2"> <CountUp end={10} suffix="+" /> </div>
                <div className="text-muted-foreground">
                  {t({ en: "Marine Trailers", ar:" المقطورات البحرية" })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose El Maraie Marine */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                {t({
                  en: 'Why Choose El Maraie Marine?',
                  ar: 'لماذا تختار المرعي للأشغال البحرية؟'
                })}
              </h2>

              <p className="text-lg text-muted-foreground">
                {t({
                  en: 'We combine experience, specialized equipment, careful planning, and reliable execution to support demanding marine and transportation operations.',
                  ar: 'نجمع بين الخبرة والمعدات المتخصصة والتخطيط الدقيق والتنفيذ الموثوق لدعم العمليات البحرية وعمليات النقل المختلفة.'
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: HardHat,
                  title: {
                    en: 'Experienced Team',
                    ar: 'فريق ذو خبرة'
                  },
                  description: {
                    en: 'Experienced professionals supporting complex marine, construction, and transportation operations.',
                    ar: 'فريق من المتخصصين ذوي الخبرة في دعم العمليات البحرية والإنشائية وعمليات النقل المعقدة.'
                  }
                },
                {
                  icon: Wrench,
                  title: {
                    en: 'Specialized Equipment',
                    ar: 'معدات متخصصة'
                  },
                  description: {
                    en: 'Access to suitable equipment and marine trailer solutions for demanding cargo transportation requirements.',
                    ar: 'توفير المعدات المناسبة وحلول المقطورات البحرية لتلبية متطلبات نقل البضائع المختلفة.'
                  }
                },
                {
                  icon: TrendingUp,
                  title: {
                    en: 'Operational Planning',
                    ar: 'التخطيط التشغيلي'
                  },
                  description: {
                    en: 'Careful planning and coordination help ensure efficient movement of cargo and smooth project execution.',
                    ar: 'يساعد التخطيط والتنسيق الدقيقان على ضمان كفاءة نقل البضائع وسلاسة تنفيذ المشروعات.'
                  }
                },
                {
                  icon: Anchor,
                  title: {
                    en: 'Marine Expertise',
                    ar: 'خبرة بحرية'
                  },
                  description: {
                    en: 'Marine-focused capabilities supporting infrastructure, logistics, and specialized transportation projects.',
                    ar: 'قدرات متخصصة في المجال البحري لدعم مشروعات البنية التحتية والخدمات اللوجستية والنقل المتخصص.'
                  }
                },
                {
                  icon: Waves,
                  title: {
                    en: 'Reliable Execution',
                    ar: 'تنفيذ موثوق'
                  },
                  description: {
                    en: 'We focus on dependable coordination and execution throughout each stage of the operation.',
                    ar: 'نركز على التنسيق والتنفيذ الموثوق في جميع مراحل العملية.'
                  }
                },
                {
                  icon: Building,
                  title: {
                    en: 'Flexible Solutions',
                    ar: 'حلول مرنة'
                  },
                  description: {
                    en: 'Solutions can be adapted to the requirements of construction, industrial, infrastructure, and marine projects.',
                    ar: 'حلول مرنة يمكن تكييفها لتناسب متطلبات المشروعات الإنشائية والصناعية والبنية التحتية والبحرية.'
                  }
                }
              ].map((item, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-chart-3/20 flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-chart-3" />
                    </div>

                    <h3 className="font-semibold mb-2 text-foreground">
                      {t(item.title)}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(item.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                {t({
                  en: 'How It Works',
                  ar: 'كيف نعمل'
                })}
              </h2>

              <p className="text-lg text-muted-foreground">
                {t({
                  en: 'From your initial requirements to the completion of the operation, our team coordinates each stage with care.',
                  ar: 'بدءًا من متطلباتك الأولية وحتى إتمام العملية، يقوم فريقنا بتنسيق كل مرحلة بعناية.'
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: '01',
                  title: {
                    en: 'Tell Us Your Requirements',
                    ar: 'أخبرنا بمتطلباتك'
                  },
                  description: {
                    en: 'Share details about your cargo, dimensions, weight, destination, and schedule.',
                    ar: 'شاركنا تفاصيل البضائع والأبعاد والوزن والوجهة والجدول الزمني.'
                  }
                },
                {
                  number: '02',
                  title: {
                    en: 'We Plan the Operation',
                    ar: 'نخطط للعملية'
                  },
                  description: {
                    en: 'Our team evaluates the transportation requirements and identifies the appropriate solution.',
                    ar: 'يقوم فريقنا بتقييم متطلبات النقل وتحديد الحل المناسب.'
                  }
                },
                {
                  number: '03',
                  title: {
                    en: 'Equipment & Logistics',
                    ar: 'المعدات والخدمات اللوجستية'
                  },
                  description: {
                    en: 'The required marine trailer and supporting logistics are arranged according to the project needs.',
                    ar: 'يتم توفير المقطورة البحرية والخدمات اللوجستية المطلوبة وفقًا لاحتياجات المشروع.'
                  }
                },
                {
                  number: '04',
                  title: {
                    en: 'Safe Transportation',
                    ar: 'النقل الآمن'
                  },
                  description: {
                    en: 'The cargo is transported according to the agreed operational plan and requirements.',
                    ar: 'يتم نقل البضائع وفقًا لخطة التشغيل والمتطلبات المتفق عليها.'
                  }
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative text-center p-6"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5 text-xl font-bold">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {t(step.title)}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(step.description)}
                  </p>

                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%-8px)] w-4 border-t-2 border-dashed border-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Contact CTA */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Waves className="h-12 w-12 text-gold mx-auto mb-5" />

            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
              {t({
                en: 'Planning a Marine Transportation Project?',
                ar: 'هل تخطط لمشروع نقل بحري؟'
              })}
            </h2>

            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t({
                en: 'Tell us about your cargo, transportation requirements, or marine trailer rental needs. Our team is ready to discuss the right solution for your project.',
                ar: 'أخبرنا عن بضائعك أو متطلبات النقل أو احتياجاتك من تأجير المقطورات البحرية. فريقنا مستعد لمناقشة الحل المناسب لمشروعك.'
              })}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-gold text-primary rounded-md hover-elevate active-elevate-2 font-medium"
              >
                {t({
                  en: 'Request a Quote',
                  ar: 'طلب عرض سعر'
                })}
              </a>
            </div>
            <div
            onClick={handleCopy}
            className="mt-12 mx-auto flex items-center justify-between gap-4 max-w-xl px-5 py-3 bg-muted/60 backdrop-blur rounded-lg border border-border hover:border-primary/40 hover:bg-muted transition-all duration-200 cursor-pointer group" >
            <div className="flex items-center  gap-3">
              <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition">
                <MailIcon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </div>

              <span dir="ltr" className="text-sm font-medium">
                elmaraie@elmaraie-marine-eg.com
              </span>
            </div>

            <span className="text-xs text-muted-foreground group-hover:text-primary transition">
              {copied ? "Copied!" : "Click to copy"}
            </span>
          </div>
          </div>
        </section>

                {/* Industries We Serve */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                {t({
                  en: 'Industries We Serve',
                  ar: 'القطاعات التي نخدمها'
                })}
              </h2>

              <p className="text-lg text-muted-foreground">
                {t({
                  en: 'Our marine and transportation solutions support a wide range of industries and project requirements.',
                  ar: 'تدعم حلولنا البحرية وحلول النقل مجموعة واسعة من القطاعات ومتطلبات المشروعات المختلفة.'
                })}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                {
                  icon: Building,
                  title: {
                    en: 'Construction',
                    ar: 'الإنشاءات'
                  }
                },
                {
                  icon: TrendingUp,
                  title: {
                    en: 'Infrastructure',
                    ar: 'البنية التحتية'
                  }
                },
                {
                  icon: Wrench,
                  title: {
                    en: 'Industrial Projects',
                    ar: 'المشروعات الصناعية'
                  }
                },
                {
                  icon: Anchor,
                  title: {
                    en: 'Ports & Marine',
                    ar: 'الموانئ والقطاع البحري'
                  }
                },
                {
                  icon: HardHat,
                  title: {
                    en: 'Heavy Equipment',
                    ar: 'المعدات الثقيلة'
                  }
                },
                {
                  icon: Waves,
                  title: {
                    en: 'Project Logistics',
                    ar: 'الخدمات اللوجستية للمشروعات'
                  }
                }
              ].map((industry, index) => (
                <div
                  key={index}
                  className="rounded-xl border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3">
                    <industry.icon className="h-6 w-6 text-gold" />
                  </div>

                  <h3 className="text-sm font-semibold text-foreground">
                    {t(industry.title)}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}