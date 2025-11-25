// @ts-nocheck

// AboutIntroCard.jsx
export function AboutIntroCard({ t }) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-3 text-foreground">
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
  );
}
