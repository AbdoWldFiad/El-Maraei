import { Waves, Wrench, Building, Anchor, HardHat, TrendingUp, MailIcon, Truck, Construction, Settings, Factory, Ship, ChevronLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import marineImage from '@assets/generated_images/Marine_works_construction_image_d652c626.png';
import { useState } from 'react';
import CountUp from "@/extras/countup.tsx";
import { getMarineOperationImage } from '@/extras/marineImages.ts';


export default function Marine() {
  const { t, language } = useLanguage();

  const [copied, setCopied] = useState(false);

  const [operationIndex, setOperationIndex] = useState(0);


  const handleCopy = () => {
    navigator.clipboard.writeText("elmaraie@elmaraie-marine-eg.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const services = [
    { icon: Building, title: { en: 'El maraie for Harbor Construction', ar: 'المرعي لبناء الموانئ' }, description: { en: 'Design and construction of modern harbor facilities.', ar: 'تصميم وبناء مرافق موانئ حديثة.' } },
    { icon: Anchor, title: { en: 'Dredging Services', ar: 'خدمات التجريف' }, description: { en: 'Professional underwater excavation and maintenance.', ar: 'حفر وصيانة تحت الماء باحترافية.' } },
    { icon: Waves, title: { en: 'Coastal Engineering', ar: 'الهندسة الساحلية' }, description: { en: 'Erosion control and coastal protection solutions.', ar: 'حلول مكافحة التآكل وحماية السواحل.' } },
    { icon: Wrench, title: { en: 'Marine Maintenance', ar: 'الصيانة البحرية' }, description: { en: 'Ongoing maintenance of maritime structures.', ar: 'صيانة مستمرة للهياكل والمنشآت البحرية.' } },
    { icon: HardHat, title: { en: 'Underwater Construction', ar: 'البناء تحت الماء' }, description: { en: 'Specialized underwater construction projects.', ar: 'مشاريع بناء متخصصة تحت الماء.' } },
    { icon: TrendingUp, title: { en: 'Infrastructure Development', ar: 'تطوير البنية التحتية' }, description: { en: 'Marine infrastructure planning and execution.', ar: 'تخطيط وتنفيذ البنية التحتية البحرية.' } },
    { icon: Truck, title: { en: 'Marine Trailer Rental', ar: 'تأجير المقطورات البحرية' }, description: { en: 'Reliable marine trailer rental solutions for transporting heavy, oversized, and specialized cargo.', ar: 'حلول موثوقة لتأجير المقطورات البحرية لنقل البضائع الثقيلة وكبيرة الحجم والمتخصصة.' } },
  ];

  const operations = [
  {image: 'operation1Image.png', name: { en: 'Heavy Equipment Transport', ar: 'نقل المعدات الثقيلة' }, description: { en: 'Successful transportation of heavy construction equipment using specialized transport solutions and careful operational planning.', ar: 'نجحنا في نقل معدات إنشائية ثقيلة باستخدام حلول نقل متخصصة وتخطيط تشغيلي دقيق.' } },
  {image: 'operation2Image.png', name: { en: 'Industrial Cargo Delivery', ar: 'نقل وتسليم البضائع الصناعية' }, description: { en: 'Coordinated transportation of industrial cargo while focusing on efficient handling, scheduling, and delivery requirements.', ar: 'تنسيق عمليات نقل البضائع الصناعية مع التركيز على كفاءة المناولة والجدولة ومتطلبات التسليم.' } },
  {image: 'operation3Image.png', name: { en: 'Oversized Project Cargo', ar: 'نقل البضائع كبيرة الحجم' }, description: { en: 'Transportation of oversized project cargo using suitable equipment and specialized logistics planning.', ar: 'نقل بضائع كبيرة الحجم خاصة بالمشروعات باستخدام المعدات المناسبة والتخطيط اللوجستي المتخصص.' } },
  {image: 'operation4Image.png', name: { en: 'Marine Construction Materials', ar: 'نقل مواد الإنشاءات البحرية' }, description: { en: 'Supporting marine construction operations through coordinated transportation of equipment and project materials.', ar: 'دعم عمليات الإنشاءات البحرية من خلال النقل المنسق للمعدات ومواد المشروعات.' } },
  {image: 'operation5Image.png', name: { en: 'Specialized Marine Logistics', ar: 'الخدمات اللوجستية البحرية المتخصصة' }, description: { en: 'Providing flexible transportation and logistics support for specialized marine and infrastructure requirements.', ar: 'توفير حلول مرنة للنقل والخدمات اللوجستية لتلبية المتطلبات البحرية ومتطلبات البنية التحتية المتخصصة.' } },
];


  const cargoTypes = [
    { icon: Construction, title: { en: 'Heavy Construction Equipment', ar: 'معدات الإنشاءات الثقيلة' }, description: { en: 'Transportation solutions for construction machinery and heavy-duty equipment.', ar: 'حلول نقل لمعدات وآلات الإنشاءات والمعدات الثقيلة.' } },
    { icon: Settings, title: { en: 'Industrial Machinery', ar: 'المعدات والآلات الصناعية' }, description: { en: 'Safe and coordinated transportation of industrial machinery and equipment.', ar: 'نقل آمن ومنسق للآلات والمعدات الصناعية.' } },
    { icon: Truck, title: { en: 'Oversized Cargo', ar: 'البضائع كبيرة الحجم' }, description: { en: 'Specialized transportation support for large and non-standard cargo.', ar: 'دعم متخصص لنقل البضائع الكبيرة وغير التقليدية.' } },
    { icon: Factory, title: { en: 'Project Cargo', ar: 'بضائع المشروعات' }, description: { en: 'Flexible logistics solutions for specialized project cargo requirements.', ar: 'حلول لوجستية مرنة لمتطلبات بضائع المشروعات المتخصصة.' } },
    { icon: Ship, title: { en: 'Marine Materials', ar: 'المواد والمعدات البحرية' }, description: { en: 'Transportation support for marine construction and infrastructure materials.', ar: 'دعم نقل مواد ومعدات الإنشاءات والبنية التحتية البحرية.' } },
    { icon: Wrench, title: { en: 'Specialized Equipment', ar: 'المعدات المتخصصة' }, description: { en: 'Transport solutions designed around the specific requirements of specialized equipment.', ar: 'حلول نقل مصممة وفقاً للمتطلبات الخاصة بالمعدات المتخصصة.' } },
  ];


  return (
    <div className="min-h-screen">
      <Helmet>
        <title> {language === 'ar' ? 'المرعي للأشغال البحرية | المرعي جروب' : 'El maraie for Marine Works | El maraie Group'} </title>
        <meta name="description" content={ language === 'ar' ? 'حلول بحرية متكاملة تشمل الهندسة الساحلية وبناء الموانئ ونقل البضائع وتأجير المقطورات البحرية وتطوير البنية التحتية.' : 'Integrated marine solutions including coastal engineering, harbor construction, cargo transportation, marine trailer rental, and infrastructure development.' } />
        <meta property="og:title" content={ language === 'ar' ? 'الأشغال البحرية | المرعي جروب' : 'Marine Works | El maraie Group' } />
        <meta property="og:description" content={ language === 'ar' ? 'حلول بحرية متكاملة ونقل البضائع وتأجير المقطورات البحرية.' : 'Integrated marine solutions, cargo transportation, and marine trailer rental.' } />
      </Helmet>
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${marineImage})` }} >
          <div className="absolute inset-0 bg-primary/75"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Waves className="h-16 w-16 text-gold mx-auto mb-5" />

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
            {t({
              en: 'Marine Works & Heavy Cargo Transportation',
              ar: 'الأشغال البحرية ونقل البضائع الثقيلة'
            })}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            {t({
              en: 'Reliable marine solutions for infrastructure, industrial, and project cargo.',
              ar: 'حلول بحرية موثوقة للبنية التحتية والمشروعات الصناعية ونقل البضائع الخاصة بالمشروعات.'
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="inline-block px-8 py-3 bg-gold text-primary rounded-md hover-elevate active-elevate-2 font-medium" >
              {t({
                en: 'Explore Our Services',
                ar: 'استكشف خدماتنا'
              })}
            </a>

            <a href="/contact" className="inline-block px-8 py-3 bg-white/10 border border-white/40 text-white rounded-md hover:bg-white/20 font-medium" >
              {t({
                en: 'Request Trailer Rental',
                ar: 'طلب تأجير مقطورة'
              })}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border bg-card p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-foreground">
              {t({
                en: 'About Our Marine Works',
                ar: 'عن أشغالنا البحرية'
              })}
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              {t({
                en: 'El maraie Marine Works provides integrated marine solutions covering coastal engineering, harbor construction, marine infrastructure, cargo transportation, and marine trailer rental. Our team combines practical experience with reliable equipment and careful planning to support demanding marine and logistics operations.',
                ar: 'تقدم المرعي للأشغال البحرية حلولاً بحرية متكاملة تشمل الهندسة الساحلية وبناء الموانئ والبنية التحتية البحرية ونقل البضائع وتأجير المقطورات البحرية. ويجمع فريقنا بين الخبرة العملية والمعدات الموثوقة والتخطيط الدقيق لدعم العمليات البحرية واللوجستية المختلفة.'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              {t({
                en: 'Our Marine Services',
                ar: 'خدماتنا البحرية'
              })}
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t({
                en: 'Integrated marine and transportation solutions designed to support a wide range of projects and operational requirements.',
                ar: 'حلول بحرية ونقل متكاملة مصممة لدعم مجموعة واسعة من المشروعات والمتطلبات التشغيلية.'
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                data-testid={`service-card-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-chart-3/20 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-chart-3" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">
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

      {/* WHAT WE TRANSPORT */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              {t({
                en: 'What We Transport',
                ar: 'ما نقوم بنقله'
              })}
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t({
                en: 'Transportation solutions for heavy, oversized, industrial, and specialized cargo.',
                ar: 'حلول نقل للبضائع الثقيلة وكبيرة الحجم والصناعية والمتخصصة.'
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cargoTypes.map((cargo, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <cargo.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">
                      {t(cargo.title)}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(cargo.description)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESSFUL OPERATIONS */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t({
                en: 'Successful Marine Operations',
                ar: 'عمليات بحرية ناجحة'
              })}
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t({
                en: 'Explore examples of transportation and logistics operations carried out by our marine team.',
                ar: 'استكشف نماذج من عمليات النقل والخدمات اللوجستية التي نفذها فريقنا البحري.'
              })}
            </p>
          </div>

          {/* Slider */}
          <div className="relative">

            {/* Previous Button */}
            <button
              type="button"
              onClick={() =>
                setOperationIndex((prev) =>
                  prev === 0 ? operations.length - 1 : prev - 1
                )
              }
              aria-label="Previous operation"
              className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Cards */}
            <div className="overflow-hidden mx-4 md:mx-8">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${operationIndex * 100}%)`
                }}
              >
                {operations.map((operation, index) => (
                  <div key={index} className="min-w-full px-2" >
                    <Card className="overflow-hidden shadow-lg border-0">
                      
                      {/* Temporary Image Placeholder */}
                      <div className="relative h-[350px] md:h-[500px] overflow-hidden">
                        <img
                          src={getMarineOperationImage(operation.image)}
                          alt={t(operation.name)}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Operation Number */}
                        <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-gold text-primary flex items-center justify-center font-bold text-lg shadow-lg">
                          {String(index + 1).padStart(2, '0')}
                        </div>

                        {/* Image Label */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="inline-flex items-center gap-2 text-sm text-white/80 mb-2">
                            <CheckCircle2 className="h-4 w-4 text-gold" />
                            {t({
                              en: 'Successful Operation',
                              ar: 'عملية ناجحة'
                            })}
                          </span>

                          <h3 className="text-2xl md:text-3xl font-bold text-white">
                            {t(operation.name)}
                          </h3>
                        </div>
                      </div>

                      {/* Card Content */}
                      <CardContent className="p-6 md:p-8">
                        <p className="text-muted-foreground leading-relaxed max-w-3xl">
                          {t(operation.description)}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
                          <Anchor className="h-4 w-4" />

                          {t({
                            en: 'Marine Transportation & Logistics',
                            ar: 'النقل البحري والخدمات اللوجستية'
                          })}
                        </div>
                      </CardContent>

                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() =>
                setOperationIndex((prev) =>
                  prev === operations.length - 1 ? 0 : prev + 1
                )
              }
              aria-label="Next operation"
              className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-7">
            {operations.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setOperationIndex(index)}
                aria-label={`Go to operation ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  operationIndex === index
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Temporary Media Notice */}
          <p className="text-center text-xs text-muted-foreground mt-5">
            {t({
              en: 'Project images shown are temporary placeholders and will be replaced with approved media.',
              ar: 'الصور المعروضة للمشروعات مؤقتة وسيتم استبدالها بالصور المعتمدة.'
            })}
          </p>

        </div>
      </section>

            <section className="py-16 bg-muted/30">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    {t({ en: 'Marine Capabilities', ar: 'قدراتنا البحرية' })}
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

      {/* MARINE TRAILER RENTAL */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-5">
              <Truck className="h-8 w-8 text-gold" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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

            <a href="/contact" className="inline-block px-8 py-3 bg-gold text-primary rounded-md hover-elevate active-elevate-2 font-medium" >
              {t({
                en: 'Request Trailer Rental',
                ar: 'طلب تأجير مقطورة'
              })}
            </a>
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
                { icon: HardHat, title: { en: 'Experienced Team', ar: 'فريق ذو خبرة' }, description: { en: 'Experienced professionals supporting complex marine, construction, and transportation operations.', ar: 'فريق من المتخصصين ذوي الخبرة في دعم العمليات البحرية والإنشائية وعمليات النقل المعقدة.' } },
                { icon: Wrench, title: { en: 'Specialized Equipment', ar: 'معدات متخصصة' }, description: { en: 'Access to suitable equipment and marine trailer solutions for demanding cargo transportation requirements.', ar: 'توفير المعدات المناسبة وحلول المقطورات البحرية لتلبية متطلبات نقل البضائع المختلفة.' } },
                { icon: TrendingUp, title: { en: 'Operational Planning', ar: 'التخطيط التشغيلي' }, description: { en: 'Careful planning and coordination help ensure efficient movement of cargo and smooth project execution.', ar: 'يساعد التخطيط والتنسيق الدقيقان على ضمان كفاءة نقل البضائع وسلاسة تنفيذ المشروعات.' } },
                { icon: Anchor, title: { en: 'Marine Expertise', ar: 'خبرة بحرية' }, description: { en: 'Marine-focused capabilities supporting infrastructure, logistics, and specialized transportation projects.', ar: 'قدرات متخصصة في المجال البحري لدعم مشروعات البنية التحتية والخدمات اللوجستية والنقل المتخصص.' } },
                { icon: Waves, title: { en: 'Reliable Execution', ar: 'تنفيذ موثوق' }, description: { en: 'We focus on dependable coordination and execution throughout each stage of the operation.', ar: 'نركز على التنسيق والتنفيذ الموثوق في جميع مراحل العملية.' } },
                { icon: Building, title: { en: 'Flexible Solutions', ar: 'حلول مرنة' }, description: { en: 'Solutions can be adapted to the requirements of construction, industrial, infrastructure, and marine projects.', ar: 'حلول مرنة يمكن تكييفها لتناسب متطلبات المشروعات الإنشائية والصناعية والبنية التحتية والبحرية.' } }
              ].map((item, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" >
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
                { number: '01', title: { en: 'Tell Us Your Requirements', ar: 'أخبرنا بمتطلباتك' }, description: { en: 'Share details about your cargo, dimensions, weight, destination, and schedule.', ar: 'شاركنا تفاصيل البضائع والأبعاد والوزن والوجهة والجدول الزمني.' } },
                { number: '02', title: { en: 'We Plan the Operation', ar: 'نخطط للعملية' }, description: { en: 'Our team evaluates the transportation requirements and identifies the appropriate solution.', ar: 'يقوم فريقنا بتقييم متطلبات النقل وتحديد الحل المناسب.' } },
                { number: '03', title: { en: 'Equipment & Logistics', ar: 'المعدات والخدمات اللوجستية' }, description: { en: 'The required marine trailer and supporting logistics are arranged according to the project needs.', ar: 'يتم توفير المقطورة البحرية والخدمات اللوجستية المطلوبة وفقًا لاحتياجات المشروع.' } },
                { number: '04', title: { en: 'Safe Transportation', ar: 'النقل الآمن' }, description: { en: 'The cargo is transported according to the agreed operational plan and requirements.', ar: 'يتم نقل البضائع وفقًا لخطة التشغيل والمتطلبات المتفق عليها.' } }
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
                { icon: Building, title: { en: 'Construction', ar: 'الإنشاءات' } },
                { icon: TrendingUp, title: { en: 'Infrastructure', ar: 'البنية التحتية' } },
                { icon: Wrench, title: { en: 'Industrial Projects', ar: 'المشروعات الصناعية' } },
                { icon: Anchor, title: { en: 'Ports & Marine', ar: 'الموانئ والقطاع البحري' } },
                { icon: HardHat, title: { en: 'Heavy Equipment', ar: 'المعدات الثقيلة' } },
                { icon: Waves, title: { en: 'Project Logistics', ar: 'الخدمات اللوجستية للمشروعات' } }
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