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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
                <div className="text-4xl font-bold text-primary mb-2"> <CountUp end={100} suffix="%" /> </div>
                <div className="text-muted-foreground">
                  {t({ en: "Safety Record", ar: "سجل السلامة" })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="rounded-xl border bg-card p-6 mb-12 shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-center text-foreground">
            {t({ en: 'Have a Marine Project?', ar: 'لديك مشروع بحري؟' })}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
            {t({ 
              en: 'Let\'s discuss how we can bring your maritime infrastructure vision to life.', 
              ar: 'دعنا نناقش كيف يمكننا تحقيق رؤيتك للبنية التحتية البحرية.' 
            })}
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 font-medium" >
              {t({ en: "Discuss Opportunities", ar: "مناقشة الفرص" })}
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
    </div>
  );
}