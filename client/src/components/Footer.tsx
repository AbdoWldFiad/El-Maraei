import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const businesses = [
    { name: { en: 'Medical Center', ar: 'المركز الطبي' }, href: '/businesses/medical' },
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
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">
              {t({ en: 'El maraie Group', ar: 'المرعي جروب' })}
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              {t({ 
                en: 'A leading Egyptian business conglomerate committed to excellence across multiple industries.', 
                ar: 'مجموعة أعمال مصرية رائدة ملتزمة بالتميز في مختلف الصناعات.' 
              })}
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-instagram">
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
                    <span className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
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
                    <span className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
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
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{t({ en: 'Cairo, Egypt', ar: 'القاهرة، مصر' })}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span dir="ltr">+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span dir="ltr">info@elmaraeigroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
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
