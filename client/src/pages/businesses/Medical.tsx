import { Link } from 'wouter';
import { Stethoscope, Clock, Award, Users, Calendar, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import medicalImage from '@assets/generated_images/Medical_center_interior_image_d55bb764.png';
import { AboutIntroCard } from "@/extras/AboutIntroCard";
import { InstallmentInfoCard } from "@/extras/InstallmentInfoCard";
import { MedicalContactSection } from "@/pages/businesses/ContactSection/MedicalContactSection";
import { useState } from "react";

export default function Medical() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Stethoscope,
      title: { en: 'General Medicine', ar: 'الطب العام' },
      description: { en: 'Comprehensive primary healthcare services', ar: 'خدمات رعاية صحية أولية شاملة' },
    },
    {
      icon: Users,
      title: { en: 'Specialist Consultations', ar: 'استشارات متخصصة' },
      description: { en: 'Expert care from certified specialists', ar: 'رعاية متخصصة من أطباء معتمدين' },
    },
    {
      icon: Clock,
      title: { en: '24/7 Emergency Care', ar: 'رعاية طوارئ على مدار الساعة' },
      description: { en: 'Round-the-clock emergency medical services', ar: 'خدمات طوارئ طبية على مدار الساعة' },
    },
    {
      icon: Award,
      title: { en: 'Advanced Diagnostics', ar: 'تشخيص متقدم' },
      description: { en: 'State-of-the-art diagnostic equipment', ar: 'أحدث معدات التشخيص' },
    },
  ];

  type Department = {
  en: string;
  ar: string;
  desc: {
    en: string;
    ar: string;
  };
  doctors: {
    en: string;
    ar: string;
    
  }[];
};
const departments: Department[] = [
  { en: 'Cardiology', ar: 'أمراض القلب', desc: { en: 'Heart and cardiovascular care.', ar: 'رعاية القلب والجهاز القلبي الوعائي.' }, doctors: [] },
  { en: 'Orthopedics', ar: 'جراحة العظام', desc: { en: 'Bone, joint, and musculoskeletal treatments.', ar: 'علاج مشاكل العظام والمفاصل والجهاز العضلي الهيكلي.' }, doctors: [] },
  { en: 'Pediatrics', ar: 'طب الأطفال', desc: { en: 'Healthcare services for children.', ar: 'خدمات الرعاية الصحية للأطفال.' }, doctors: [] },
  { en: 'Gynecology', ar: 'أمراض النساء', desc: { en: 'Women’s reproductive health services.', ar: 'خدمات صحة المرأة والجهاز التناسلي.' }, doctors: [] },

  // Merged Dermatology department
  { en: 'Dermatology', ar: 'جلدية', desc: { en: 'Skin, hair, and nail treatments.', ar: 'علاج مشاكل الجلد والشعر والأظافر.' }, doctors: [
      { en: 'Dr. Emad Zohran', ar: 'د\ عماد زهران' },
    ] },

  // Merged Dentistry department
  { en: 'Dentistry', ar: 'أسنان', desc: { en: 'Dental and oral health services.', ar: 'خدمات صحة الفم والأسنان.' }, doctors: [
      { en: 'Dr. Yasmin Samir', ar: 'د\ ياسمين سمير' },
      { en: 'Dr. Osama Arafat - Implant & Oral Surgery', ar: 'د\ اسامة عرفات: زراعة و جراحة وجه و فكين' },
      { en: 'Dr. Basem Mohab - Orthodontics', ar: 'د\ باسم مهاب : تقويم' },
      { en: 'Dr. Mohamed Nagy', ar: 'د\ محمد نجيت' },
      { en: 'Dr. Dalia', ar: 'د\ داليا' },
      { en: 'Dr. Ahmed Abdel Meguid', ar: 'د\ احمد عبد المجيد' },
    ] },

  { en: 'Ophthalmology', ar: 'طب العيون', desc: { en: 'Eye care and vision-related treatments.', ar: 'رعاية العيون وعلاج مشاكل البصر.' }, doctors: [] },
  { en: 'Laboratory Services', ar: 'خدمات المختبر', desc: { en: 'Medical testing and diagnostic laboratory services.', ar: 'خدمات التحاليل الطبية والفحوصات المخبرية.' }, doctors: [] },

  { en: 'Internal Medicine', ar: 'باطنة', desc: { en: '', ar: '' }, doctors: [
      { en: 'Dr. Amr Mohab - Endocrinology & Diabetes', ar: 'د\ عمرو مهاب : غدد و سكري' },
    ] },

  { en: 'ENT', ar: 'انف و اذن', desc: { en: '', ar: '' }, doctors: [
      { en: 'Dr. Islam Abdel Meguid', ar: 'د\ اسلام عبدالمجيد' },
    ] },

  { en: 'Psychiatry & Addiction Treatment', ar: 'طب نفس و علاج ادمان', desc: { en: '', ar: '' }, doctors: [
      { en: 'Dr. Mohamed El-Moselmani', ar: 'د\محمد المسلماني' },
    ] },

  { en: 'Psychologist', ar: 'اخصائي نفسي', desc: { en: '', ar: '' }, doctors: [
      { en: 'Aya Gamal', ar: 'ايه جمال' },
    ] },

  { en: 'Neurosurgery', ar: 'جراحة مخ و اعصاب', desc: { en: '', ar: '' }, doctors: [
      { en: 'Dr. Ahmed Emam', ar: 'د\ احمد امام' },
    ] },

  { en: 'Radiology', ar: 'اشاعة', desc: { en: '', ar: '' }, doctors: [
      { en: 'Dr. Ali Said', ar: 'د\ علي سعيد' },
    ] },

  { en: 'General Surgery', ar: 'جراحة عامة', desc: { en: '', ar: '' }, doctors: [
      { en: 'Ezzat Khalaf', ar: 'عزت خلف' },
    ] },
];



  // 🔥 COLLAPSE STATE FOR DEPARTMENTS
  const [open, setOpen] = useState(Array(departments.length).fill(false));

  const toggle = (i: number) => {
    const updated = [...open];
    updated[i] = !updated[i];
    setOpen(updated);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          {language === 'ar'
            ? 'المركز الطبي | المرعي جروب'
            : 'Medical Center | El-Maraei Group'}
        </title>
      </Helmet>
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
            {t({ en: 'El-Maraei for Medical Center', ar:' العيادات الطبية الحديثة' })}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {t({ en: "About Our Medical Center", ar: "عن مركزنا الطبي" })}
            </h2>
            <div className="space-y-8">
              <AboutIntroCard t={t} />
              <InstallmentInfoCard t={t} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {t({ en: 'Our Departments', ar: 'أقسامنا' })}
              </h2>
                <div className="grid grid-cols-2 gap-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="space-y-1">
                      <div
                        className="flex items-center gap-2 cursor-pointer select-none"
                        onClick={() => toggle(index)}
                      >
                        <div
                          className={`
                            w-2 h-2 rounded-full bg-gold transition-transform duration-300
                            ${open[index] ? "rotate-90" : "rotate-0"}
                          `}
                        ></div>

                        <span className="text-muted-foreground">{t(dept)}</span>
                      </div>
                      <div
                        className={`
                          overflow-hidden transition-all duration-300
                          ${open[index] ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
                        `}
                      >
                        <div className="pl-5 text-sm text-muted-foreground">
                          {dept.desc && (dept.desc.en || dept.desc.ar) && <p><span style={{ color: 'hsl(160 35% 30%)' }}>{t(dept.desc)}</span></p>}

                          {dept.doctors && dept.doctors.length > 0 ? (
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              {dept.doctors.map((doc, i) => (
                                <li key={i}>{t(doc)}</li>
                              ))}
                            </ul>
                          ) : (
                            // If no doctors, show "Coming Soon" 
                            <p className="mt-1 text-sm text-muted-foreground">{t({ en: 'Coming Soon', ar: 'قريبًا' })}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  {t({ en: 'Book an Appointment', ar: 'احجز موعد' })}
                </h3>
                <p className="mb-6 text-primary-foreground/90">
                  {t({
                    en: 'Schedule your visit with our expert medical team.',
                    ar: 'حدد موعد زيارتك مع فريقنا الطبي المتخصص.',
                  })}
                </p>
                <Link href="/businesses/medical/appointment">
                  <Button className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
                    {t({ en: 'Book Now', ar: 'احجز الآن' })}
                  </Button>
                </Link>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-5 w-5 text-gold" />
                    <div>
                      <div className="font-semibold">{t({ en: 'Emergency Line', ar: 'خط الطوارئ' })}</div>
                      <div dir="ltr" className="text-primary-foreground/80">+20 123 456 7890</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <MedicalContactSection t={t} />
        </div>
      </section>
    </div>
  );
}
