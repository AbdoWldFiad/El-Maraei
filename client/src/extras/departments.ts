import { getDoctorImage } from "@/extras/doctorImages";

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

export const departments = [
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