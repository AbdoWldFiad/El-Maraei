import { Waves, Wrench, Building, Anchor, HardHat, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import marineImage from '@assets/generated_images/Marine_works_construction_image_d652c626.png';

export default function Marine() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Building,
      title: { en: 'El-Maraei for Harbor Construction', ar: ' المرعي لبناء الموانئ' },
      description: { en: 'Design and construction of modern harbor facilities', ar: 'تصميم وبناء مرافق موانئ حديثة' },
    },
    {
      icon: Anchor,
      title: { en: 'Dredging Services', ar: 'خدمات التجريف' },
      description: { en: 'Professional underwater excavation and maintenance', ar: 'حفر وصيانة تحت الماء احترافية' },
    },
    {
      icon: Waves,
      title: { en: 'Coastal Engineering', ar: 'الهندسة الساحلية' },
      description: { en: 'Erosion control and coastal protection solutions', ar: 'حلول مكافحة التآكل وحماية السواحل' },
    },
    {
      icon: Wrench,
      title: { en: 'Marine Maintenance', ar: 'الصيانة البحرية' },
      description: { en: 'Ongoing maintenance of maritime structures', ar: 'صيانة مستمرة للهياكل البحرية' },
    },
    {
      icon: HardHat,
      title: { en: 'Underwater Construction', ar: 'البناء تحت الماء' },
      description: { en: 'Specialized submarine construction projects', ar: 'مشاريع بناء تحت الماء متخصصة' },
    },
    {
      icon: TrendingUp,
      title: { en: 'Infrastructure Development', ar: 'تطوير البنية التحتية' },
      description: { en: 'Marine infrastructure planning and execution', ar: 'تخطيط وتنفيذ البنية التحتية البحرية' },
    },
  ];

  const projects = [
    {
      name: { en: 'Port Expansion Project', ar: 'مشروع توسعة الميناء' },
      description: { en: 'Major harbor expansion in Alexandria', ar: 'توسعة كبرى للميناء في الإسكندرية' },
    },
    {
      name: { en: 'Coastal Protection', ar: 'حماية السواحل' },
      description: { en: 'Erosion prevention along Red Sea coast', ar: 'منع التآكل على طول ساحل البحر الأحمر' },
    },
    {
      name: { en: 'Marina Development', ar: 'تطوير المارينا' },
      description: { en: 'Luxury yacht marina construction', ar: 'بناء مارينا يخوت فاخرة' },
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'ar' ? 'المرعي لي الأشغال البحرية | المرعي جروب' : 'El-Maraei for Marine Works | El-Maraei Group'}</title>
        <meta name="description" content={language === 'ar' ? 'هندسة ساحلية وبناء موانئ وتطوير بنية تحتية بحرية من قبل خبراء الصناعة' : 'Coastal engineering, harbor construction, and marine infrastructure development by industry experts'} />
        <meta property="og:title" content={language === 'ar' ? 'الأشغال البحرية | المرعي جروب' : 'Marine Works | El-Maraei Group'} />
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
            {t({ en: 'El-Maraei for Marine Works', ar: 'المرعي للأشغال البحرية' })}
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {t({ en: 'About Our Marine Works', ar: 'عن أشغالنا البحرية' })}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t({ 
                en: 'El-Maraei Marine Works specializes in coastal engineering, harbor construction, and marine infrastructure development. Our team of experts delivers innovative solutions for complex maritime projects.', 
                ar: 'تتخصص أشغال المرعي البحرية في الهندسة الساحلية وبناء الموانئ وتطوير البنية التحتية البحرية. يقدم فريق خبرائنا حلولاً مبتكرة للمشاريع البحرية المعقدة.' 
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`service-card-${index}`}>
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
              {t({ en: 'Featured Projects', ar: 'مشاريع مميزة' })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover-elevate" data-testid={`project-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                      <Waves className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {t(project.name)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(project.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">{t({ en: 'Projects Completed', ar: 'مشروع مكتمل' })}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">{t({ en: 'Expert Engineers', ar: 'مهندس خبير' })}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">{t({ en: 'Safety Record', ar: 'سجل السلامة' })}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {t({ en: 'Have a Marine Project?', ar: 'لديك مشروع بحري؟' })}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t({ 
              en: 'Let\'s discuss how we can bring your maritime infrastructure vision to life.', 
              ar: 'دعنا نناقش كيف يمكننا تحقيق رؤيتك للبنية التحتية البحرية.' 
            })}
          </p>
          <a href="/contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2 font-medium" data-testid="button-contact">
              {t({ en: 'Contact Us', ar: 'اتصل بنا' })}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
