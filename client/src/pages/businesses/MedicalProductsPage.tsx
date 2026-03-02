import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
/*import medicalStoreImage from "@assets/generated_images/Medical_store_banner.png";*/ /*TODO uncomment when ready*/ 
import doctorPlaceholder from "@assets/products/fallback.png";

type LocalizedString = { en: string; ar: string; };
type Product = LocalizedString & { image?: string; price?: string; };
type Category = LocalizedString & { products: Product[] };

const services = [
  { title: { en: "Fast Shipping", ar: "شحن سريع" }, description: { en: "Get products delivered quickly.", ar: "توصيل المنتجات بسرعة." } },
  { title: { en: "24/7 Support", ar: "دعم 24/7" }, description: { en: "Always here to help.", ar: "دائمًا هنا للمساعدة." } },
  { title: { en: "Warranty", ar: "ضمان" }, description: { en: "Quality assured products.", ar: "ضمان جودة المنتجات." } },
];

const categories: Category[] = [
  {
    en: "Cardiology Devices",
    ar: "أجهزة القلب",
    products: [
      { en: "Heart Monitor", ar: "جهاز مراقبة القلب", image: "/images/products/heart-monitor.png", price: "$120" },
      { en: "ECG Machine", ar: "جهاز تخطيط القلب", image: "/images/products/ecg-machine.png", price: "$450" },
    ],
  },
  {
    en: "Dental Tools",
    ar: "أدوات الأسنان",
    products: [],
  },
  {
    en: "Lab Equipment",
    ar: "معدات المختبر",
    products: [],
  },
];

export default function MedicalProducts() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => setOpenIndex(prev => (prev === index ? null : index));

  return (
    <div className="min-h-screen">

      {/* Helmet */}
      <Helmet>
        <title>{t({ en: "Medical Products | El Maraie", ar: "منتجات طبية | المرعي" })}</title>
      </Helmet>

      {/* Hero */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        /*style={{ backgroundImage: `url(${medicalStoreImage})` }}*/ /*TODO uncomment when ready*/ 
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white">
          {t({ en: "El Maraie Medical Store", ar: "متجر المرعي الطبي" })}
        </h1>
      </section>

      {/* Services */}
      <section className="py-12 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="font-semibold text-xl mb-2">{t(service.title)}</h3>
            <p className="text-muted-foreground">{t(service.description)}</p>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="py-16 max-w-5xl mx-auto px-4 space-y-6">
        {categories.map((cat, index) => (
          <div key={cat.en} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 bg-muted hover:bg-muted/70 transition"
            >
              <span className="font-semibold">{t(cat)}</span>
              <ChevronDown className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
            </button>

            {openIndex === index && (
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.products.length > 0 ? (
                  cat.products.map(prod => (
                    <div key={prod.en} className="flex flex-col items-center border rounded-lg p-4">
                      <img
                        src={prod.image || doctorPlaceholder}
                        alt={prod.en}
                        className="w-32 h-32 object-cover rounded mb-2"
                        onError={e => { e.currentTarget.src = doctorPlaceholder; }}
                      />
                      <h3 className="font-semibold text-center">{t(prod)}</h3>
                      {prod.price && <p className="text-primary font-bold">{prod.price}</p>}
                      <button className="mt-2 bg-gold text-gold-foreground px-4 py-2 rounded hover:bg-gold/90">
                        {t({ en: "Add to Cart", ar: "أضف للسلة" })}
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground col-span-full text-center">{t({ en: "Coming Soon", ar: "قريبًا" })}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Purchase Section */}
      <section className="py-12 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{t({ en: "Ready to Shop?", ar: "جاهز للتسوق؟" })}</h2>
        <p className="text-muted-foreground mb-6">{t({ en: "Browse our categories and add products to your cart.", ar: "تصفح الفئات وأضف المنتجات إلى سلتك." })}</p>
        <button className="bg-gold text-gold-foreground px-6 py-3 rounded hover:bg-gold/90">
          {t({ en: "Go to Cart", ar: "اذهب إلى السلة" })}
        </button>
      </section>
    </div>
  );
}