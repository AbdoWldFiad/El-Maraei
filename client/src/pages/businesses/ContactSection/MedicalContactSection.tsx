import { Facebook, Instagram, Phone, Mail, Globe } from "lucide-react";

export function MedicalContactSection({ t }: { t: any }) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm mt-10">
      <h3 className="text-2xl font-semibold mb-4 text-foreground">
        {t({
          en: "Contact Us",
          ar: "تواصل معنا",
        })}
      </h3>

      <p className="text-muted-foreground mb-4 text-lg">
        {t({
          en: "We’re here to help. Reach out to us through any of the following platforms:",
          ar: "نحن هنا لخدمتكم. يمكنكم التواصل معنا عبر أي من المنصات التالية:",
        })}
      </p>

      <div className="flex items-center gap-6 text-foreground text-xl">
        <a href="https://www.facebook.com/imc.suez.midcal" target="_blank" className="hover:text-primary transition">
          <Facebook size={26} />
        </a>
        <a href="https://www.instagram.com/imc.suez.medical/" target="_blank" className="hover:text-primary transition">
          <Instagram size={26} />
        </a>
        <a href="tel: 01091044200" className="hover:text-primary transition">
          <Phone size={26} />
        </a>
        <a href="mailto:imcsuez@gmail.com" className="hover:text-primary transition">
          <Mail size={26} />
        </a>
      </div>
    </div>
  );
}
