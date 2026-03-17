import { Link } from "wouter";
import { Stethoscope, Clock, Award, Users, Calendar, Phone, ChevronDown, Key } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import medicalImage from "@assets/generated_images/Medical_center_interior_image_d55bb764.png";
import { getDoctorImage } from "@/extras/doctorImages";

import { AboutIntroCard } from "@/extras/AboutIntroCard";
import { InstallmentInfoCard } from "@/extras/InstallmentInfoCard";
import { MedicalContactSection } from "@/pages/businesses/ContactSection/MedicalContactSection";

type LocalizedString = {
  en: string;
  ar: string;
};

type Doctor = LocalizedString & {
  image?: string;
};

type Department = LocalizedString & {
  desc: LocalizedString;
  doctors: Doctor[];
};

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

const departments: Department[] = [
  {
    en: "Cardiology",
    ar: "أمراض القلب",
    desc: { en: "Heart care services.", ar: "خدمات رعاية القلب." },
    doctors: [],
  },
  {
    en: "Orthopedics",
    ar: "جراحة العظام",
    desc: { en: "Bone & joint treatments.", ar: "علاج العظام والمفاصل." },
    doctors: [],
  },
  {
    en: "Pediatrics",
    ar: "طب الأطفال",
    desc: { en: "Children healthcare.", ar: "رعاية الأطفال." },
    doctors: [],
  },
  {
    en: "Gynecology",
    ar: "أمراض النساء",
    desc: { en: "Women’s health.", ar: "صحة المرأة." },
    doctors: [],
  },
  {
    en: "Dermatology",
    ar: "جلدية",
    desc: { en: "Skin treatments.", ar: "علاج الجلد." },
    doctors: [
      {
        en: "Dr. Emad Zohran",
        ar: "د. عماد زهران",
        image: getDoctorImage("emad_zohran.jpeg"),
      },
    ],
  },
  {
    en: "Dentistry",
    ar: "أسنان",
    desc: { en: "Dental services.", ar: "خدمات الأسنان." },
    doctors: [
      {
        en: "Dr. Yasmin Samir",
        ar: "د. ياسمين سمير",
        image: getDoctorImage("yasmen.jpeg"),
      },
      {
        en: "Dr. Osama Arafat",
        ar: "د. اسامة عرفات",
        image: getDoctorImage("osama_farahat.jpeg"),
      },
      {
        en: "Dr. Basem Mohab",
        ar: "د. باسم مهاب",
        image: getDoctorImage("bassem_hahap.jpeg"),
      },
      {
        en: "Dr. Mohamed Nagy",
        ar: "د. محمد ناجي",
        image: getDoctorImage("mohamed_nagy.jpeg"),
      },
      {
        en: "Dr. Dalia",
        ar: "د. داليا",
        image: getDoctorImage("dalia.jpeg"),
      },
      {
        en: "Dr. Ahmed Abdelhamid",
        ar: "د. احمد عبد المجيد",
        image: getDoctorImage("ahmed_abdelhamed.jpeg"),
      },
    ],
  },
  {
    en: "Internal Medicine",
    ar: "باطنة",
    desc: { en: "", ar: "" },
    doctors: [
      {
        en: "Dr. Amr Mohab",
        ar: "د. عمرو مهاب",
        image: getDoctorImage("amr_mohab.jpeg"),
      },
    ],
  },
  {
    en: "ENT",
    ar: "أنف وأذن",
    desc: { en: "", ar: "" },
    doctors: [
      {
        en: "Dr. Islam Abdel Meguid",
        ar: "د. اسلام عبدالمجيد",
        image: getDoctorImage("islam_abdel_meguid.jpeg"),
      },
    ],
  },
  {
    en: "Psychiatry & Addiction",
    ar: "طب نفسي وعلاج إدمان",
    desc: { en: "", ar: "" },
    doctors: [
      {
        en: "Dr. Mohamed El_Moselmani",
        ar: "د. محمد المسلماني",
        image: getDoctorImage("mohamed_moselmani.jpeg"),
      },
    ],
  },
  {
    en: "Psychologist",
    ar: "أخصائي نفسي",
    desc: { en: "", ar: "" },
    doctors: [
      {
        en: "Aya Gamal",
        ar: "آية جمال",
        image: getDoctorImage("aya_gamal.jpeg"),
      },
    ],
  },
  {
    en: "Neurosurgery",
    ar: "جراحة مخ وأعصاب",
    desc: { en: "", ar: "" },
    doctors: [
      {
        en: "Dr. Ahmed Emam",
        ar: "د. احمد امام",
        image: getDoctorImage("ahmed_emam.jpeg"),
      },
    ],
  },
  {
    en: "Radiology",
    ar: "أشعة",
    desc: { en: "", ar: "" },
    doctors: [
      {
        en: "Dr. Ali Said",
        ar: "د. علي سعيد",
        image: getDoctorImage("ali_said.jpeg"),
      },
    ],
  },
  {
    en: "General Surgery",
    ar: "جراحة عامة",
    desc: { en: "", ar: "" },
    doctors: [
      {
        en: "Ezzat Khalaf",
        ar: "عزت خلف",
        image: getDoctorImage("ezzat_khalaf.jpeg"),
      },
    ],
  },
];

export default function Medical() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        <AboutIntroCard t={t} />
        <InstallmentInfoCard t={t} />

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          {services.map((service) => (
            <Card key={service.title.en} className="text-center hover-elevate">
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

        <div className="space-y-4">
          {departments.map((dept, index) => (
            <div
              key={dept.en}
              className="border rounded-lg overflow-hidden bg-card"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-muted transition"
              >
                <div>
                  <h3 className="font-semibold text-lg">{t(dept)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t(dept.desc)}
                  </p>
                </div>
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 space-y-4">
                  {dept.doctors.length > 0 ? (
                    dept.doctors.map((doc) => (
                      <div
                        key={doc.en}
                        className="flex items-center gap-4 border-b pb-3"
                      >
                        <img
                          src={doc.image || getDoctorImage("fallback.png")}
                          alt={doc.en}
                          className="w-14 h-14 rounded-full object-cover border"
                          onError={(e) => {
                            e.currentTarget.src = getDoctorImage("fallback.png");
                          }}
                        />
                        <span className="font-medium">{t(doc)}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground col-span-full text-center"> {t({ en: "Coming Soon", ar: "قريبًا" })}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* BOOK APPOINTMENT MOVED UNDER */}
        <Card className="mt-16 bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              {t({ en: "Book an Appointment", ar: "احجز موعد" })}
            </h3>
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

            <div className="mt-6 flex justify-center items-center gap-3 text-sm">
              <Phone className="h-5 w-5 text-gold" />
              <span dir="ltr">+20 123 456 7890</span>
            </div>
          </CardContent>
        </Card>

        <MedicalContactSection t={t} />
      </section>
    </div>
  );
}