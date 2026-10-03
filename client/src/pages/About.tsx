import { Target, Eye, Award, Users, Building2, TrendingUp, Globe2, ArrowRight, } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet-async";
import CountUp from "@/extras/countup.tsx";

const values = [
  {
    icon: Award,
    title: {
      en: "Excellence",
      ar: "التميز",
    },
    description: {
      en: "We strive for excellence in every aspect of our business operations and the value we create for our clients.",
      ar: "نسعى للتميز في كل جانب من جوانب أعمالنا والقيمة التي نقدمها لعملائنا.",
    },
  },
  {
    icon: Users,
    title: {
      en: "Integrity",
      ar: "النزاهة",
    },
    description: {
      en: "We conduct our business with high ethical standards, transparency, accountability, and respect.",
      ar: "نمارس أعمالنا وفق أعلى المعايير الأخلاقية والشفافية والمسؤولية والاحترام.",
    },
  },
  {
    icon: Target,
    title: {
      en: "Innovation",
      ar: "الابتكار",
    },
    description: {
      en: "We continuously seek better ways to serve our customers and respond to changing market needs.",
      ar: "نسعى باستمرار إلى إيجاد طرق أفضل لخدمة عملائنا والاستجابة لمتطلبات السوق المتغيرة.",
    },
  },
  {
    icon: Eye,
    title: {
      en: "Sustainability",
      ar: "الاستدامة",
    },
    description: {
      en: "We believe in responsible growth and sustainable practices that create lasting value for our community.",
      ar: "نؤمن بالنمو المسؤول والممارسات المستدامة التي تخلق قيمة طويلة الأمد لمجتمعنا.",
    },
  },
];

const milestones = [
  {
    year: "1998",
    title: {
      en: "Company Founded",
      ar: "تأسيس الشركة",
    },
    description: {
      en: "El Maraie Group was established with a vision focused on excellence, growth, and long-term value.",
      ar: "تأسست مجموعة المرعي برؤية تركز على التميز والنمو وخلق قيمة طويلة الأمد.",
    },
  },
  {
    year: "2005",
    title: {
      en: "Business Expansion",
      ar: "التوسع في الأعمال",
    },
    description: {
      en: "The Group expanded its portfolio into maritime services and construction.",
      ar: "وسعت المجموعة محفظة أعمالها لتشمل الخدمات البحرية وقطاع الإنشاءات.",
    },
  },
  {
    year: "2012",
    title: {
      en: "Healthcare Division",
      ar: "قطاع الرعاية الصحية",
    },
    description: {
      en: "The Group expanded into healthcare with the launch of its modern medical center.",
      ar: "توسعت المجموعة في قطاع الرعاية الصحية من خلال إطلاق مركزها الطبي الحديث.",
    },
  },
  {
    year: "2020",
    title: {
      en: "Continued Growth",
      ar: "استمرار النمو",
    },
    description: {
      en: "The Group continued developing its diversified business portfolio across multiple sectors.",
      ar: "واصلت المجموعة تطوير محفظة أعمالها المتنوعة عبر عدة قطاعات.",
    },
  },
];

const companyStats = [
  {
    value: 20,
    suffix: "+",
    label: {
      en: "Years of Experience",
      ar: "عامًا من الخبرة",
    },
  },
  {
    value: 5,
    suffix: "+",
    label: {
      en: "Business Sectors",
      ar: "قطاعات أعمال",
    },
  },
  {
    value: 4,
    suffix: "+",
    label: {
      en: "Major Milestones",
      ar: "محطات رئيسية",
    },
  },
  {
    value: 1,
    suffix: "",
    label: {
      en: "Growing Group",
      ar: "مجموعة متنامية",
    },
  },
];

const businessHighlights = [
  {
    icon: Building2,
    title: {
      en: "Diversified Portfolio",
      ar: "محفظة أعمال متنوعة",
    },
    description: {
      en: "Our activities span multiple industries, allowing us to build experience across different markets and sectors.",
      ar: "تمتد أنشطتنا عبر قطاعات متعددة، مما يتيح لنا بناء خبرات متنوعة في أسواق ومجالات مختلفة.",
    },
  },
  {
    icon: TrendingUp,
    title: {
      en: "Long-Term Growth",
      ar: "نمو طويل الأمد",
    },
    description: {
      en: "We focus on sustainable growth and building businesses that can create lasting value.",
      ar: "نركز على النمو المستدام وبناء أعمال قادرة على خلق قيمة طويلة الأمد.",
    },
  },
  {
    icon: Globe2,
    title: {
      en: "Market Perspective",
      ar: "رؤية للسوق",
    },
    description: {
      en: "We continue to adapt to market opportunities while maintaining a strong foundation built over decades.",
      ar: "نواصل التكيف مع فرص السوق مع الحفاظ على أساس قوي تم بناؤه على مدار عقود.",
    },
  },
];

export default function About() {
  const { t, language } = useLanguage();

  return (
    <div
      className="min-h-screen"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>
          {language === "ar"
            ? "عن المرعي جروب | مجموعة أعمال متنوعة"
            : "About El Maraie Group | Diversified Business Group"}
        </title>

        <meta
          name="description"
          content={
            language === "ar"
              ? "تعرف على مجموعة المرعي ورؤيتها ورسالتها وقيمها ورحلتها عبر قطاعات الأعمال المختلفة."
              : "Discover El Maraie Group, our vision, mission, values, history, and diversified business activities across multiple sectors."
          }
        />

        <meta
          property="og:title"
          content={
            language === "ar"
              ? "عن المرعي جروب"
              : "About El Maraie Group"
          }
        />

        <meta
          property="og:description"
          content={
            language === "ar"
              ? "اكتشف رؤيتنا وقيمنا ورحلتنا ونمو مجموعة المرعي عبر قطاعات متعددة."
              : "Discover our vision, values, journey, and growth across multiple business sectors."
          }
        />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />

        <div className="absolute -top-32 -end-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -start-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium mb-6">
              {t({
                en: "About El Maraie Group",
                ar: "عن المرعي جروب",
              })}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {t({
                en: "Building Businesses. Creating Lasting Value.",
                ar: "نبني الأعمال ونصنع قيمة مستدامة",
              })}
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-3xl mx-auto">
              {t({
                en: "Since 1998, El Maraie Group has grown through a diversified portfolio of businesses, guided by a commitment to excellence, integrity, innovation, and sustainable growth.",
                ar: "منذ عام 1998، نمت مجموعة المرعي من خلال محفظة متنوعة من الأعمال، مسترشدة بالالتزام بالتميز والنزاهة والابتكار والنمو المستدام.",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY STATS */}
      <section className="relative z-10 -mt-10 px-4">
        <div className="max-w-5xl mx-auto rounded-2xl border bg-card shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x rtl:divide-x-reverse divide-border">
            {companyStats.map((stat) => (
              <div key={stat.label.en}
                className="p-5 md:p-7 text-center" >
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  <CountUp end={stat.value} />
                  <span>{stat.suffix}</span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  {t(stat.label)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* INTRO */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                {t({
                  en: "Who We Are",
                  ar: "من نحن",
                })}
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
                {t({
                  en: "A Group Built on Experience and Ambition",
                  ar: "مجموعة مبنية على الخبرة والطموح",
                })}
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                {t({
                  en: "El Maraie Group is a diversified business group with activities across healthcare, maritime services, construction, mining, and international trade.",
                  ar: "مجموعة المرعي هي مجموعة أعمال متنوعة تمتد أنشطتها عبر قطاعات الرعاية الصحية والخدمات البحرية والإنشاءات والتعدين والتجارة الدولية.",
                })}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {t({
                  en: "Our journey has been shaped by a long-term approach to business, strong relationships, and a continuous commitment to developing our people and operations.",
                  ar: "تشكلت رحلتنا من خلال نهج طويل الأمد في الأعمال، وعلاقات قوية، والتزام مستمر بتطوير كوادرنا وعملياتنا.",
                })}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {businessHighlights.map((item) => (
                <Card key={item.title.en}
                  className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>

                    <h3 className="font-semibold mb-2">
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

        {/* VISION + MISSION */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/10 overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>

                <h2 className="text-3xl font-bold mb-5">
                  {t({
                    en: "Our Vision",
                    ar: "رؤيتنا",
                  })}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t({
                    en: "To be a trusted and innovative business group, creating sustainable value across the industries we serve while contributing to Egypt's economic growth and development.",
                    ar: "أن نكون مجموعة أعمال موثوقة ومبتكرة تخلق قيمة مستدامة عبر القطاعات التي نعمل بها، مع المساهمة في النمو الاقتصادي والتنمية في مصر.",
                  })}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-primary overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-gold" />
                </div>

                <h2 className="text-3xl font-bold mb-5">
                  {t({
                    en: "Our Mission",
                    ar: "مهمتنا",
                  })}
                </h2>

                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  {t({
                    en: "To deliver excellence through our diverse portfolio, focusing on quality, innovation, responsible growth, and long-term relationships with our clients, partners, and communities.",
                    ar: "تقديم التميز من خلال محفظتنا المتنوعة، مع التركيز على الجودة والابتكار والنمو المسؤول وبناء علاقات طويلة الأمد مع عملائنا وشركائنا ومجتمعاتنا.",
                  })}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* VALUES */}
        <section className="mb-24">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t({
                en: "What Guides Us",
                ar: "ما يوجهنا",
              })}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              {t({
                en: "Our Core Values",
                ar: "قيمنا الأساسية",
              })}
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              {t({
                en: "The principles that shape how we work, make decisions, and build relationships.",
                ar: "المبادئ التي تشكل طريقة عملنا واتخاذ قراراتنا وبناء علاقاتنا.",
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title.en}
                className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                data-testid={`value-card-${index}`} >
                <CardContent className="p-7">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <value.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {t(value.title)}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(value.description)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* JOURNEY */}
        <section className="mb-24">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t({
                en: "Our History",
                ar: "تاريخنا",
              })}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              {t({
                en: "Our Journey",
                ar: "رحلتنا",
              })}
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              {t({
                en: "Key milestones that have shaped the growth of El Maraie Group.",
                ar: "أبرز المحطات التي شكلت مسيرة نمو مجموعة المرعي.",
              })}
            </p>
          </div>

          <div className="relative">

            {/* Desktop center line */}

            <div className="absolute top-0 bottom-0 start-1/2 w-px bg-border hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div key={milestone.year} className="relative" data-testid={`milestone-${index}`} >
                    <div className="md:grid md:grid-cols-[1fr_80px_1fr] md:items-center">
                      {/* Left / first side */}
                      <div className={isEven ? "md:pe-8" : ""}>
                        {isEven && (
                          <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 md:p-7">
                              <div className="text-3xl font-bold text-gold mb-2">
                                {milestone.year}
                              </div>

                              <h3 className="text-xl font-semibold mb-2">
                                {t(milestone.title)}
                              </h3>

                              <p className="text-muted-foreground leading-relaxed">
                                {t(milestone.description)}
                              </p>
                            </CardContent>
                          </Card>
                        )}
                      </div>

                      {/* Timeline dot */}
                      <div className="hidden md:flex justify-center relative z-10">
                        <div className="w-10 h-10 rounded-full bg-gold border-4 border-background shadow-sm flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        </div>
                      </div>

                      {/* Right / second side */}
                      <div className={!isEven ? "md:ps-8" : ""}>
                        {!isEven && (
                          <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 md:p-7">
                              <div className="text-3xl font-bold text-gold mb-2">
                                {milestone.year}
                              </div>

                              <h3 className="text-xl font-semibold mb-2">
                                {t(milestone.title)}
                              </h3>

                              <p className="text-muted-foreground leading-relaxed">
                                {t(milestone.description)}
                              </p>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </div>

                    {/* Mobile timeline */}
                    <div className="md:hidden flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-gold shrink-0 mt-7" />
                        {index !== milestones.length - 1 && (
                          <div className="w-px flex-1 bg-border mt-2" />
                        )}
                      </div>

                      <div className="flex-1">
                        <Card>
                          <CardContent className="p-6">
                            <div className="text-2xl font-bold text-gold mb-2">
                              {milestone.year}
                            </div>

                            <h3 className="text-xl font-semibold mb-2">
                              {t(milestone.title)}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                              {t(milestone.description)}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAREERS CTA */}
        <section>
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {t({
                      en: "Careers",
                      ar: "الوظائف",
                    })}
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    {t({
                      en: "Build Your Future With Us",
                      ar: "ابنِ مستقبلك معنا",
                    })}
                  </h2>

                  <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    {t({
                      en: "We are always looking for talented and motivated individuals who want to grow, contribute, and be part of our journey.",
                      ar: "نبحث دائمًا عن أفراد موهوبين وطموحين يرغبون في التطور والمساهمة وأن يكونوا جزءًا من رحلتنا.",
                    })}
                  </p>
                </div>

                <a href="/careers">
                  <Button className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-7 py-6">
                    {t({
                      en: "Explore Opportunities",
                      ar: "استكشف الفرص",
                    })}

                    <ArrowRight
                      className={`h-4 w-4 ms-2 ${
                        language === "ar" ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
