import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle, ArrowRight, } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '../../favicon.png';

export function Footer() {
  const { t, language } = useLanguage();

  const currentYear = new Date().getFullYear();
  const isArabic = language === 'ar';

  const businesses = [
    {
      name: { en: 'Medical Center', ar: 'المركز الطبي' },
      href: '/businesses/medical',
    },
    {
      name: { en: 'Medical Products', ar: 'المنتجات الطبية' },
      href: '/businesses/medical-products',
    },
    {
      name: { en: 'Shipping Agency', ar: 'التوكيلات الملاحية' },
      href: '/businesses/shipping',
    },
    {
      name: { en: 'Marine Works', ar: 'الأشغال البحرية' },
      href: '/businesses/marine',
    },
    {
      name: { en: 'Mining Factory', ar: 'مصنع التعدين' },
      href: '/businesses/mining',
    },
    {
      name: { en: 'Trade & Agency', ar: 'التجارة والوكالات' },
      href: '/businesses/trade',
    },
  ];

  const companyLinks = [
    {
      name: { en: 'About Us', ar: 'من نحن' },
      href: '/about',
    },
    {
      name: { en: 'News', ar: 'الأخبار' },
      href: '/news',
    },
    {
      name: { en: 'Careers', ar: 'الوظائف' },
      href: '/careers',
    },
    {
      name: { en: 'Contact Us', ar: 'اتصل بنا' },
      href: '/contact',
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-primary text-primary-foreground"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          
          {/* Company */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 p-1.5 backdrop-blur-sm">
                <img
                  src={logo}
                  alt="El Maraie Group"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gold">
                  {t({
                    en: 'El Maraie Group',
                    ar: 'المرعي جروب',
                  })}
                </h3>
              </div>
            </Link>

            <p className="mt-5 max-w-sm leading-relaxed text-primary-foreground/70">
              {t({
                en: 'A diversified Egyptian business group delivering trusted services and solutions across healthcare, maritime, mining, trade, and medical products.',
                ar: 'مجموعة أعمال مصرية متنوعة تقدم خدمات وحلولاً موثوقة في مجالات الرعاية الصحية والملاحة والتعدين والتجارة والمنتجات الطبية.',
              })}
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-foreground/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-primary"
                    data-testid={`link-${social.name.toLowerCase()}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Businesses */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gold">
              {t({
                en: 'Our Businesses',
                ar: 'أعمالنا',
              })}
            </h4>

            <ul className="space-y-3">
              {businesses.map((business) => (
                <li key={business.href}>
                  <Link
                    href={business.href}
                    data-testid={`footer-link-${business.href}`}
                    className="group inline-flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors duration-200 hover:text-gold"
                  >
                    <ArrowRight
                      className={`h-3.5 w-3.5 opacity-0 transition-all duration-200 ${
                        isArabic
                          ? 'translate-x-2 rotate-180 group-hover:translate-x-0'
                          : '-translate-x-2 group-hover:translate-x-0'
                      } group-hover:opacity-100`}
                    />

                    <span>{t(business.name)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gold">
              {t({
                en: 'Company',
                ar: 'الشركة',
              })}
            </h4>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-testid={`footer-link-${link.href}`}
                    className="group inline-flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors duration-200 hover:text-gold"
                  >
                    <ArrowRight
                      className={`h-3.5 w-3.5 opacity-0 transition-all duration-200 ${
                        isArabic
                          ? 'translate-x-2 rotate-180 group-hover:translate-x-0'
                          : '-translate-x-2 group-hover:translate-x-0'
                      } group-hover:opacity-100`}
                    />

                    <span>{t(link.name)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gold">
              {t({
                en: 'Contact Us',
                ar: 'اتصل بنا',
              })}
            </h4>

            <ul className="space-y-3">
              {/* Location */}
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Cairo%2C%20Egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-primary-foreground/80 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

                  <span>
                    {t({
                      en: 'Cairo, Egypt',
                      ar: 'القاهرة، مصر',
                    })}
                  </span>
                </a>
              </li>

              {/* Phone */}
              <li>
                <a
                  href="tel:+201117966644"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-primary-foreground/80 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 shrink-0 text-green-400" />

                  <span dir="ltr">+20 111 796 6644</span>
                </a>
              </li>

              {/* Phone */}
              <li>
                <a
                  href="tel:+201091044200"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-primary-foreground/80 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 shrink-0 text-green-400" />

                  <span dir="ltr">+20 109 104 4200</span>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/201553101188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-primary-foreground/80 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 text-green-400" />

                  <span dir="ltr">+20 155 310 1188</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:elmaraie4js@gmail.com"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-primary-foreground/80 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <Mail className="h-5 w-5 shrink-0 text-gold" />

                  <span className="break-all" dir="ltr">
                    elmaraie4js@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/50 md:flex-row">
            <p>
              {t({
                en: `© ${currentYear} El Maraie Group. All rights reserved.`,
                ar: `© ${currentYear} المرعي جروب. جميع الحقوق محفوظة.`,
              })}
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="transition-colors hover:text-gold"
              >
                {t({
                  en: 'Privacy Policy',
                  ar: 'سياسة الخصوصية',
                })}
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-gold"
              >
                {t({
                  en: 'Terms of Use',
                  ar: 'شروط الاستخدام',
                })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
