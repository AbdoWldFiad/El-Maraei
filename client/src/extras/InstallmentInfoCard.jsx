// @ts-nocheck

// InstallmentInfoCard.jsx
export function InstallmentInfoCard({ t }) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm mt-6">
      <h3 className="text-xl font-semibold mb-3 text-foreground">
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
  );
}
