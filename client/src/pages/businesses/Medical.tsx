import { Link } from "wouter";
import { Stethoscope, Clock, Award, Users, Calendar, Phone, ChevronDown, MessageCircle, MapPin, CheckCircle2, } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import medicalImage from "@assets/generated_images/Medical_center_interior_image_d55bb764.png";
import { getDoctorImage } from "@/extras/doctorImages";
import { MedicalContactSection } from "@/pages/businesses/ContactSection/MedicalContactSection";
import { Department, getDepartments } from "@/extras/departments";
import CountUp from "@/extras/countup.tsx";

const services = [
  {
    icon: Stethoscope,
    title: {
      en: "General Medicine",
      ar: "الطب العام",
    },
    description: {
      en: "Comprehensive primary healthcare services",
      ar: "خدمات رعاية صحية أولية شاملة",
    },
  },
  {
    icon: Users,
    title: {
      en: "Specialist Consultations",
      ar: "استشارات متخصصة",
    },
    description: {
      en: "Expert care from certified specialists",
      ar: "رعاية متخصصة من أطباء معتمدين",
    },
  },
  {
    icon: Clock,
    title: {
      en: "Emergency Care",
      ar: "رعاية الطوارئ",
    },
    description: {
      en: "Medical support when you need it",
      ar: "رعاية طبية عند الحاجة",
    },
  },
  {
    icon: Award,
    title: {
      en: "Advanced Diagnostics",
      ar: "تشخيص متقدم",
    },
    description: {
      en: "Modern diagnostic equipment and technology",
      ar: "أحدث معدات وتقنيات التشخيص",
    },
  },
];

const trustStats = [
  {
    value: 28,
    suffix: "+",
    label: {
      en: "Medical Specialists",
      ar: "طبيب ومتخصص",
    },
  },
  {
    value: 15,
    suffix: "+",
    label: {
      en: "Medical Departments",
      ar: "تخصصات طبية",
    },
  },
  {
    value: 1000,
    suffix: "+",
    label: {
      en: "Patients Served",
      ar: "مريض تم خدمتهم",
    },
  },
  {
    value: 24,
    suffix: "/7",
    label: {
      en: "Care & Support",
      ar: "رعاية ودعم",
    },
  },
];

const whyChooseUs = [
  {
    title: {
      en: "Experienced Medical Team",
      ar: "فريق طبي ذو خبرة",
    },
    description: {
      en: "Our doctors and specialists are committed to providing professional, patient-focused care.",
      ar: "يلتزم أطباؤنا والمتخصصون لدينا بتقديم رعاية احترافية تضع المريض في المقام الأول.",
    },
  },
  {
    title: {
      en: "Modern Medical Technology",
      ar: "تقنيات طبية حديثة",
    },
    description: {
      en: "We use modern diagnostic and treatment technologies to support accurate medical care.",
      ar: "نستخدم أحدث تقنيات التشخيص والعلاج لدعم الرعاية الطبية الدقيقة.",
    },
  },
  {
    title: {
      en: "Convenient Appointments",
      ar: "حجز مواعيد بسهولة",
    },
    description: {
      en: "Choose your department and doctor, then request your appointment in just a few steps.",
      ar: "اختر القسم والطبيب ثم اطلب موعدك في خطوات بسيطة.",
    },
  },
  {
    title: {
      en: "Patient-Centered Care",
      ar: "رعاية تضع المريض أولاً",
    },
    description: {
      en: "We aim to provide a comfortable and welcoming environment for every patient and family.",
      ar: "نحرص على توفير بيئة مريحة ومرحبة لكل مريض وعائلة.",
    },
  },
];

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

const getAppointmentUrl = (department: string, doctor?: string) => {
  const params = new URLSearchParams({
    department: department.trim(),
  });

  if (doctor) {
    params.set("doctor", doctor.trim());
  }

  return `/businesses/medical/appointment?${params.toString()}`;
};

export default function Medical() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDepartments()
      .then(setDepartments)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="min-h-screen"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>
          {language === "ar"
            ? "مركز المرعي الطبي | الأطباء والتخصصات وحجز المواعيد"
            : "El Maraie Medical Center | Doctors, Departments & Appointments"}
        </title>

        <meta
          name="description"
          content={
            language === "ar"
              ? "مركز المرعي الطبي يقدم خدمات طبية متخصصة واستشارات وحجز مواعيد مع الأطباء."
              : "El Maraie Medical Center provides specialized medical care, consultations, modern diagnostics, and convenient appointment booking."
          }
        />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${medicalImage})` }} >
          <div className="absolute inset-0 bg-primary/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/85" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Stethoscope className="h-16 w-16 md:h-20 md:w-20 text-gold mx-auto mb-6" />

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
            {t({
              en: "El Maraie Medical Center",
              ar: "مركز المرعي الطبي",
            })}
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            {t({
              en: "Specialized medical care for you and your family, delivered by experienced doctors in a comfortable and professional environment.",
              ar: "رعاية طبية متخصصة لك ولعائلتك يقدمها أطباء ذوو خبرة في بيئة مريحة واحترافية.",
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/businesses/medical/appointment">
              <Button className="w-full sm:w-auto bg-gold text-gold-foreground hover:bg-gold/90 px-8 py-6 text-base">
                <Calendar className="h-5 w-5 me-2" />
                {t({
                  en: "Book an Appointment",
                  ar: "احجز موعدًا",
                })}
              </Button>
            </Link>

            <a href="tel:+201091044200">
              <Button variant="outline"
                className="w-full sm:w-auto border-white text-white bg-transparent hover:bg-white hover:text-primary px-8 py-6 text-base" >
                <Phone className="h-5 w-5 me-2" />
                {t({
                  en: "Call Us",
                  ar: "اتصل بنا",
                })}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="relative z-20 -mt-10 px-4">
        <div className="max-w-5xl mx-auto rounded-2xl border bg-card shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x rtl:divide-x-reverse divide-border">
            {trustStats.map((stat) => (
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

      <main className="py-20 max-w-6xl mx-auto px-4">
        {/* ABOUT */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t({
                en: "About Us",
                ar: "من نحن",
              })}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              {t({
                en: "Your Family's Trusted Medical Home",
                ar: "وجهتكم الطبية الموثوقة للعائلة",
              })}
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t({
                en: "Welcome to El Maraie Medical Center, where comfort and well-being come first. Our team of experienced doctors and consultants provides comprehensive medical care using modern diagnostic and treatment technologies. We strive to create a safe, welcoming environment where every patient feels supported.",
                ar: "نرحب بكم في مركز المرعي الطبي، حيث تأتي راحتكم وصحتكم في المقام الأول. يضم فريقنا نخبة من الأطباء والاستشاريين الذين يقدمون رعاية طبية شاملة باستخدام أحدث تقنيات التشخيص والعلاج، مع الحرص على توفير بيئة آمنة ومريحة يشعر فيها كل مريض بالاهتمام والدعم.",
              })}
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t({
                en: "Our Services",
                ar: "خدماتنا",
              })}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              {t({
                en: "Medical Care Designed Around You",
                ar: "رعاية طبية مصممة من أجلك",
              })}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title.en}
                className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" >
                <CardContent className="p-7 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {t(service.title)}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(service.description)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                {t({
                  en: "Why Choose Us",
                  ar: "لماذا نحن",
                })}
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                {t({
                  en: "Care You Can Feel Confident About",
                  ar: "رعاية طبية يمكنك الوثوق بها",
                })}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {t({
                  en: "From your first consultation to ongoing care, our goal is to make your medical experience clear, comfortable, and professional.",
                  ar: "من الاستشارة الأولى وحتى المتابعة المستمرة، هدفنا هو جعل تجربتك الطبية واضحة ومريحة واحترافية.",
                })}
              </p>

              <div className="space-y-6">
                {whyChooseUs.map((item) => (
                  <div
                    key={item.title.en}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold mb-1">
                        {t(item.title)}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(item.description)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={medicalImage}
                alt={t({
                  en: "El Maraie Medical Center",
                  ar: "مركز المرعي الطبي",
                })}
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
              />

              <div className="absolute bottom-5 start-5 end-5 md:start-8 md:end-auto md:max-w-sm">
                <div className="rounded-xl bg-background/95 backdrop-blur p-5 shadow-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Stethoscope className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <p className="font-semibold">
                        {t({
                          en: "Professional Medical Care",
                          ar: "رعاية طبية احترافية",
                        })}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {t({
                          en: "For you and your family",
                          ar: "لك ولعائلتك",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  ===
            DEPARTMENTS
            */}
        <section className="mb-20" id="departments">
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t({
                en: "Medical Departments",
                ar: "الأقسام الطبية",
              })}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              {t({
                en: "Find the Right Doctor for You",
                ar: "اعثر على الطبيب المناسب لك",
              })}
            </h2>

            <p className="mt-3 text-muted-foreground max-w-2xl">
              {t({
                en: "Explore our departments and view available doctors, consultation prices, and schedules.",
                ar: "استكشف أقسامنا الطبية وتعرف على الأطباء المتاحين وأسعار الكشف ومواعيدهم.",
              })}
            </p>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-24 rounded-xl bg-muted animate-pulse"
                />
              ))}
            </div>
          ) : departments.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-muted-foreground">
                {t({
                  en: "No departments are available at the moment.",
                  ar: "لا توجد أقسام متاحة حاليًا.",
                })}
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {departments.map((dept, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={dept.en}
                    className="border rounded-xl overflow-hidden bg-card shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-start hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                          <Stethoscope className="h-5 w-5 text-primary" />
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-lg">
                              {t(dept)}
                            </h3>

                            <span className="rounded-full bg-primary/10 text-primary px-2.5 py-1 text-xs font-medium">
                              {dept.doctors.length}{" "}
                              {t({
                                en: dept.doctors.length === 1
                                  ? "Doctor"
                                  : "Doctors",
                                ar: "أطباء",
                              })}
                            </span>
                          </div>

                          <p className="text-sm text-muted-foreground mt-1">
                            {t(dept.desc)}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2 text-sm font-medium text-primary">
                        <span className="hidden sm:inline">
                          {isOpen
                            ? t({
                                en: "Hide doctors",
                                ar: "إخفاء الأطباء",
                              })
                            : t({
                                en: `View ${dept.doctors.length} ${
                                  dept.doctors.length === 1
                                    ? "doctor"
                                    : "doctors"
                                }`,
                                ar: `عرض ${dept.doctors.length} أطباء`,
                              })}
                        </span>

                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="border-t bg-muted/20 p-4 md:p-6">
                        {dept.doctors.length > 0 ? (
                          <div className="grid gap-4">
                            {dept.doctors.map((doc) => (
                              <div
                                key={doc.en}
                                className="rounded-xl border bg-card p-4 md:p-5"
                              >
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                  <img
                                    src={
                                      doc.image ||
                                      getDoctorImage("fallback.png")
                                    }
                                    alt={doc.en}
                                    className="w-16 h-16 rounded-full object-cover border shrink-0"
                                  />

                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-lg text-primary">
                                      {t(doc)}
                                    </h4>

                                    {doc.price && (
                                      <div className="mt-2">
                                        <span className="inline-flex rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium">
                                          {t({
                                            en: "Consultation price:",
                                            ar: "سعر الكشف:",
                                          })}{" "}
                                          {doc.price} EGP
                                        </span>
                                      </div>
                                    )}

                                    {doc.schedule &&
                                      doc.schedule.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                          {doc.schedule.map((schedule) => (
                                            <span
                                              key={`${schedule.day_en}-${schedule.time}`}
                                              className="inline-flex items-center rounded-md bg-muted px-2.5 py-1.5 text-xs"
                                            >
                                              <Clock className="h-3.5 w-3.5 me-1.5 text-primary" />

                                              {t({
                                                en: `${schedule.day_en} ${formatTime(
                                                  schedule.time
                                                )}`,
                                                ar: `${schedule.day_ar} ${formatTime(
                                                  schedule.time
                                                )}`,
                                              })}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                  </div>

                                  <Link
                                    href={getAppointmentUrl(
                                      dept.en,
                                      doc.en
                                    )}
                                    className="w-full md:w-auto"
                                  >
                                    <Button className="w-full md:w-auto bg-gold text-gold-foreground hover:bg-gold/90">
                                      <Calendar className="h-4 w-4 me-2" />
                                      {t({
                                        en: "Book Appointment",
                                        ar: "احجز موعدًا",
                                      })}
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground text-center py-6">
                            {t({
                              en: "No doctors are available yet.",
                              ar: "لا يوجد أطباء متاحون حاليًا.",
                            })}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/*  ===
            INSTALLMENT PLANS
            */}
        <section className="mb-20">
          <Card className="overflow-hidden border-primary/20">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-[1fr_auto] items-center">
                <div className="p-7 md:p-10">
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {t({
                      en: "Flexible Payment Options",
                      ar: "خيارات دفع مرنة",
                    })}
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                    {t({
                      en: "Flexible Installment Plans",
                      ar: "خطط تقسيط ميسّرة",
                    })}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed max-w-3xl">
                    {t({
                      en: "To support our patients further, we offer convenient installment plans for surgical procedures in collaboration with trusted hospitals and medical financing partners. This service helps families access the care they need while reducing financial pressure.",
                      ar: "ولمزيد من دعم مرضانا، نوفر خدمة تقسيط العمليات الجراحية بالتعاون مع مستشفيات وجهات تمويل طبية موثوقة. تساعد هذه الخدمة العائلات على الحصول على الرعاية التي تحتاجها مع تقليل الأعباء المالية.",
                    })}
                  </p>
                </div>

                <div className="p-7 md:p-10 lg:pe-10">
                  <Link href="/businesses/medical/appointment">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      {t({
                        en: "Contact Us",
                        ar: "تواصل معنا",
                      })}
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/*  ===
            APPOINTMENT + LOCATION
            */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Appointment */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t({
                  en: "Book an Appointment",
                  ar: "احجز موعدًا",
                })}
              </h2>

              <Card className="bg-primary text-primary-foreground h-full">
                <CardContent className="p-8 md:p-10 text-center flex flex-col justify-center h-full">
                  <Calendar className="h-12 w-12 text-gold mx-auto mb-5" />

                  <h3 className="text-2xl font-semibold mb-3">
                    {t({
                      en: "Ready to schedule your visit?",
                      ar: "هل أنت مستعد لحجز موعدك؟",
                    })}
                  </h3>

                  <p className="text-primary-foreground/80 mb-7 max-w-md mx-auto">
                    {t({
                      en: "Choose your department and doctor, then book your appointment with our medical team.",
                      ar: "اختر القسم والطبيب ثم احجز موعدك مع فريقنا الطبي.",
                    })}
                  </p>

                  <Link href="/businesses/medical/appointment">
                    <Button className="bg-gold text-gold-foreground hover:bg-gold/90 px-8">
                      {t({
                        en: "Book Now",
                        ar: "احجز الآن",
                      })}
                    </Button>
                  </Link>

                  <div className="mt-8 pt-6 border-t border-white/20 space-y-4 text-sm">
                    <a
                      href="tel:+201091044200"
                      dir="ltr"
                      className="flex items-center justify-center gap-2 hover:text-gold transition-colors"
                    >
                      <Phone className="h-4 w-4 text-gold" />
                      +20 01091044200
                    </a>

                    <a
                      href="tel:+201117966644"
                      dir="ltr"
                      className="flex items-center justify-center gap-2 hover:text-gold transition-colors"
                    >
                      <Phone className="h-4 w-4 text-gold" />
                      +20 1117966644
                    </a>

                    <a
                      href="https://wa.me/201553101188"
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="flex items-center justify-center gap-2 hover:text-gold transition-colors"
                    >
                      <MessageCircle className="h-4 w-4 text-gold" />
                      WhatsApp: +20 1553101188
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t({
                  en: "Our Location",
                  ar: "موقعنا",
                })}
              </h2>

              <Card className="overflow-hidden h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps?q=29.9689246,32.54865&z=17&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="El Maraie Medical Center Location"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />

                      <div>
                        <h3 className="font-semibold mb-1">
                          {t({
                            en: "El Maraie Medical Center",
                            ar: "مركز المرعي الطبي",
                          })}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                          {t({
                            en: "Find us on the map above.",
                            ar: "يمكنك العثور علينا من خلال الخريطة أعلاه.",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/*  ===
            CONTACT
            */}
        <MedicalContactSection t={t} />
      </main>

      {/*  ===
          MOBILE STICKY BOOKING BUTTON
          */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-background/95 backdrop-blur border-t md:hidden">
        <Link href="/businesses/medical/appointment">
          <Button className="w-full bg-gold text-gold-foreground hover:bg-gold/90 py-6">
            <Calendar className="h-5 w-5 me-2" />
            {t({
              en: "Book an Appointment",
              ar: "احجز موعدًا",
            })}
          </Button>
        </Link>
      </div>
    </div>
  );
}
