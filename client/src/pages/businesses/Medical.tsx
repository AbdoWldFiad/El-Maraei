import { Link } from "wouter";
import { Stethoscope, Clock, Award, Users, Calendar, Phone, ChevronDown, Key, MessageSquare, MessageSquareCode, MessageSquareCodeIcon, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import medicalImage from "@assets/generated_images/Medical_center_interior_image_d55bb764.png";
import { getDoctorImage } from "@/extras/doctorImages";
import { MedicalContactSection } from "@/pages/businesses/ContactSection/MedicalContactSection";
import { Department, getDepartments } from "@/extras/departments";

const services = [
  {
    icon: Stethoscope,
    title: { en: "General Medicine", ar: "الطب العام" },
    description: {
      en: "Comprehensive primary healthcare services",
      ar: "خدمات رعاية صحية أولية شاملة",
    },
  },
  {
    icon: Users,
    title: { en: "Specialist Consultations", ar: "استشارات متخصصة" },
    description: {
      en: "Expert care from certified specialists",
      ar: "رعاية متخصصة من أطباء معتمدين",
    },
  },
  {
    icon: Clock,
    title: { en: "24/7 Emergency Care", ar: "رعاية طوارئ على مدار الساعة" },
    description: {
      en: "Round-the-clock emergency medical services",
      ar: "خدمات طوارئ طبية على مدار الساعة",
    },
  },
  {
    icon: Award,
    title: { en: "Advanced Diagnostics", ar: "تشخيص متقدم" },
    description: {
      en: "State-of-the-art diagnostic equipment",
      ar: "أحدث معدات التشخيص",
    },
  },
];

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
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

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          {language === "ar"
            ? "المركز الطبي | المرعي جروب"
            : "Medical Center | El maraie Group"}
        </title>
      </Helmet>

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${medicalImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Stethoscope className="h-16 w-16 text-gold mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t({ en: "El Maraie Medical Center", ar: "العيادات الطبية الحديثة" })}
          </h1>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4">
        {/* ABOUT INTRO */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-center text-foreground">
            {t({
              en: "About Our Medical Center",
              ar: "عن مركزنا الطبي",
            })}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t({
              en: "Welcome to Modern Specialized Clinics — your family’s trusted health home, where comfort and well-being come first. Our team of experienced doctors and consultants provides warm, comprehensive care using the latest diagnostic and treatment technologies. We strive to create a safe and compassionate environment where every family member feels supported.",
              ar: "نرحّب بكم في العيادات التخصصية الحديثة، بيتكم الصحي الذي نهتم فيه بكم وبعائلاتكم أولاً. يضم فريقنا نخبة من الأطباء والاستشاريين الذين يقدمون رعاية شاملة ومريحة باستخدام أحدث وسائل التشخيص والعلاج، مع الحرص على توفير بيئة آمنة وإنسانية يشعر فيها كل فرد من العائلة بالدعم والاهتمام."
            })}
          </p>
        </div>
        {/* INSTALLMENT INFO */}
        <div className="rounded-xl border bg-card p-6 shadow-sm mt-6">
          <h3 className="text-xl font-semibold mb-3 text-center text-foreground">
            {t({
              en: "Flexible Installment Plans",
              ar: "خطط تقسيط ميسّرة",
            })}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t({
              en: "To support our patients further, we offer convenient installment plans for surgical procedures in collaboration with trusted hospitals and medical financing partners. This service helps families access the care they need without financial stress, while maintaining the high quality of care they deserve.",
              ar: "ولمزيد من دعم مرضانا، نوفر خدمة تقسيط العمليات الجراحية بالتعاون مع مستشفيات وجهات تمويل طبية موثوقة. تهدف هذه الخدمة إلى تسهيل حصول العائلات على الرعاية التي تحتاجها دون أعباء مالية، مع الحفاظ على نفس مستوى الجودة والرعاية التي يستحقونها."
            })}
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          {services.map((service) => (
            <Card key={service.title.en} className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="p-6">
                <service.icon className="h-7 w-7 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t(service.title)}</h3>
                <p className="text-sm text-muted-foreground">
                  {t(service.description)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* DEPARTMENTS — FULL WIDTH LINES */}
        <h2 className="text-3xl font-bold mb-8">
          {t({ en: "Our Departments", ar: "أقسامنا" })}
        </h2>

        <div className="space-y-6">
          {departments.map((dept, index) => (
            <div
              key={dept.en} className="border rounded-lg overflow-hidden bg-card" >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-muted/60 transition cursor-pointer" >
                  <div className="flex items-start gap-6">
                    <Stethoscope className="h-5 w-5 text-primary mt-1" />

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-lg">{t(dept)}</h3>

                        <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium">
                          {dept.doctors.length}{" "}
                          {t({
                            en: "Doctors",
                            ar: "أطباء",
                          })}
                        </span>
                      </div>

                      <p className={`${language === "ar" ? "text-right" : "text-left"} text-sm text-muted-foreground`}>
                        {t(dept.desc)}
                      </p>
                    </div>
                  </div>
                <div className="flex items-center gap-2 text-sm text-primary">
                   <span>
                      {openIndex === index
                        ? t({ en: "Hide doctors", ar: "إخفاء الأطباء" })
                        : t({ en: "View doctors", ar: "عرض الأطباء" })}
                    </span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${ openIndex === index ? "rotate-180" : "" }`} />
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 space-y-6">
                  {dept.doctors.length > 0 ? (
                    dept.doctors.map((doc) => (
                      <div
                        key={doc.en} className="flex items-center gap-4 border-b pb-3" >
                        <img
                          src={doc.image || getDoctorImage("fallback.png")}
                          alt={doc.en}
                          className="w-14 h-14 rounded-full object-cover border" />

                        <div className="flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="font-semibold text-primary">
                              {t(doc)}
                            </span>

                            <Link
                              href={`/businesses/medical/appointment?department=${encodeURIComponent(
                                dept.en.trim()
                              )}&doctor=${encodeURIComponent(doc.en.trim())}`}
                              dir={language === "ar" ? "rtl" : "ltr"}
                            >
                              <Button className="bg-gold text-gold-foreground hover:bg-gold/90">
                                {t({
                                  en: "Book Now",
                                  ar: "احجز الآن",
                                })}
                              </Button>
                            </Link>
                          </div>

                           {doc.price && (
                            <span className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium">
                             {t({ en: "Consultation prise :", ar: "سعر الكشف:" })} {doc.price} EGP
                            </span>
                          )}

                          <div className="flex flex-wrap gap-2 mt-2">
                            {doc.schedule?.map((s) => (
                              <span
                                key={`${s.day_en}-${s.time}`}
                                className="rounded-md bg-muted px-2 py-1 text-xs"
                              >
                                {t({
                                  en: `${s.day_en} ${formatTime(s.time)}`,
                                  ar: `${s.day_ar} ${formatTime(s.time)}`,
                                })}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                     <p className="text-muted-foreground col-span-full text-center"> {t({ en: "No doctors available yet", ar: "لا يوجد أطباء حاليًا", })} </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* BOOK APPOINTMENT MOVED UNDER */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Appointment Card */}
          <div>
            <h2 className="text-3xl font-bold mb-6">{t({ en: "Book an Appointment", ar: "احجز موعد" })}</h2>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />

                <p className="mb-6">
                  {t({
                    en: "Schedule your visit with our expert medical team.",
                    ar: "حدد موعد زيارتك مع فريقنا الطبي المتخصص.",
                  })}
                </p>

                <Link href="/businesses/medical/appointment">
                  <Button className="bg-gold text-gold-foreground hover:bg-gold/90">
                    {t({ en: "Book Now", ar: "احجز الآن" })}
                  </Button>
                </Link>

                <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-gold" />
                    <span dir="ltr">+20 01091044200</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-gold" />
                    <span dir="ltr">+20 1117966644</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-gold" />
                    <span dir="ltr">+20 1553101188</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Location Card */}
          <div>
              <h2 className="text-3xl font-bold mb-6">{t({ en: 'Our Location', ar: 'موقعنا' })}</h2>
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=29.9689246,32.54865&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="El maraie Group Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <MedicalContactSection t={t} />
      </section>
    </div>
  );
}