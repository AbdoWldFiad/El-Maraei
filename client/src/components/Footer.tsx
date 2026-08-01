import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from "../../favicon.png";

export function Footer() {
  const { t } = useLanguage();

  const businesses = [
    { name: { en: 'Medical Center', ar: 'المركز الطبي' }, href: '/businesses/medical' },
    { name: { en: 'Medical Products', ar: ' منتجات طبية' }, href: '/businesses/midicalproduts' },
    { name: { en: 'Shipping Agency', ar: 'التوكيلات الملاحية' }, href: '/businesses/shipping' },
    { name: { en: 'Marine Works', ar: 'الأشغال البحرية' }, href: '/businesses/marine' },
    { name: { en: 'Mining Factory', ar: 'مصنع التعدين' }, href: '/businesses/mining' },
    { name: { en: 'Trade & Agency', ar: 'التجارة والوكالات' }, href: '/businesses/trade' },
  ];

  const quickLinks = [
    { name: { en: 'About Us', ar: 'من نحن' }, href: '/about' },
    { name: { en: 'News', ar: 'الأخبار' }, href: '/news' },
    { name: { en: 'Careers', ar: 'الوظائف' }, href: '/careers' },
    { name: { en: 'Contact', ar: 'اتصل بنا' }, href: '/contact' },
  ];

  return (
    <footer className="bg-primary relative overflow-hidden text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="El Maraie Group" className="h-10 w-10 object-contain" />
              <h3 className="text-xl font-bold text-gold">
                {t({
                  en: "El Maraie Group",
                  ar: "المرعي جروب",
                })}
              </h3>
            </div>
            <p className=" text-primary-foreground/80 mb-4">
              {t({ 
                en: 'A leading Egyptian business conglomerate committed to excellence across multiple industries.', 
                ar: 'مجموعة أعمال مصرية رائدة ملتزمة بالتميز في مختلف الصناعات.' 
              })}
            </p>
            <div className="flex gap-3">
              <a href="#" className=" group h-10 w-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-primary hover:-translate-y-1 " data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className=" group h-10 w-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-primary hover:-translate-y-1 " data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className=" group h-10 w-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-primary hover:-translate-y-1 " data-testid="link-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className=" group h-10 w-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-primary hover:-translate-y-1 " data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">{t({ en: 'Our Businesses', ar: 'أعمالنا' })}</h4>
            <ul className="space-y-2">
              {businesses.map((business) => (
                <li key={business.href}>
                  <Link href={business.href} data-testid={`footer-link-${business.href}`}>
                    <span className=" group inline-flex items-center gap-2 transition-all duration-300 hover:text-gold hover:translate-x-1 ">
                      {t(business.name)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">{t({ en: 'Quick Links', ar: 'روابط سريعة' })}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`footer-link-${link.href}`}>
                    <span className=" group inline-flex items-center gap-2 transition-all duration-300 hover:text-gold hover:translate-x-1 ">
                      {t(link.name)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">{t({ en: 'Contact Info', ar: 'معلومات الاتصال' })}</h4>
            <ul className="space-y-3">
              <li className=" flex items-center gap-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 transition hover:bg-white/10 ">
                <MapPin className="text-red-600" />
                <span>{t({ en: 'Cairo, Egypt', ar: 'القاهرة، مصر' })}</span>
              </li>
              <li className=" flex items-center gap-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 transition hover:bg-white/10 ">
                <Phone className="text-green-600" />
                <span dir="ltr">+20 111 796 6644</span>
              </li>
              <li className=" flex items-center gap-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 transition hover:bg-white/10 ">
                <Phone className="text-green-600" />
                <span dir="ltr">+20 109 104 4200</span>
              </li>
              <li className=" flex items-center gap-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 transition hover:bg-white/10 ">
                <MessageCircle className="text-green-400" />
                <span dir="ltr">+20 155 310 1188</span>
              </li>
              <li className=" flex items-center gap-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 transition hover:bg-white/10 ">
                <Mail className="text-red-400" />
                <span dir="ltr">elmaraie4js@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t  mt-8 pt-8 text-center  ">
          <p>
            {t({ 
              en: `© ${new Date().getFullYear()} El maraie Group. All rights reserved.`, 
              ar: `© ${new Date().getFullYear()} المرعي جروب. جميع الحقوق محفوظة.` 
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
