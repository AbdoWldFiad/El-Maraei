import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '../../favicon.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileBusinessesOpen, setMobileBusinessesOpen] = useState(false);
  const [location] = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);

  const isArabic = language === 'ar';

  const navigation = [
    {
      name: { en: 'Home', ar: 'الرئيسية' },
      href: '/',
    },
    {
      name: { en: 'About Us', ar: 'من نحن' },
      href: '/about',
    },
    {
      name: { en: 'Businesses', ar: 'أعمالنا' },
      href: '/businesses',
      submenu: [
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
      ],
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
      name: { en: 'Contact', ar: 'اتصل بنا' },
      href: '/contact',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileBusinessesOpen(false);
  }, [location]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location === '/';
    }

    return location === href || location.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-primary/95 shadow-[0_10px_40px_rgba(0,0,0,.20)] backdrop-blur-xl'
          : 'border-white/5 bg-primary/80 backdrop-blur-xl'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header bar */}
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'h-16'
              : 'h-[72px] sm:h-20'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
            aria-label={t({
              en: 'El Maraie Group - Home',
              ar: 'المرعي جروب - الرئيسية',
            })}
          >
            <div
              className={`flex shrink-0 items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? 'h-9 w-9 sm:h-10 sm:w-10'
                  : 'h-10 w-10 sm:h-12 sm:w-12'
              }`}
            >
              <img
                src={logo}
                alt="El Maraie Group"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <span className="truncate text-lg font-bold tracking-tight text-primary-foreground sm:text-xl lg:text-2xl">
              {t({
                en: 'El Maraie Group',
                ar: 'المرعي جروب',
              })}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <div
                key={item.href}
                className="group relative"
              >
                <Link href={item.href}>
                  <span
                    className={`relative flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 xl:px-4 ${
                      isActive(item.href)
                        ? 'text-gold'
                        : 'text-primary-foreground/90 hover:text-gold'
                    }`}
                  >
                    {t(item.name)}

                    {item.submenu && (
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    )}

                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 origin-center rounded-full bg-gold transition-transform duration-300 xl:left-4 xl:right-4 ${
                        isActive(item.href)
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </span>
                </Link>

                {/* Desktop dropdown */}
                {item.submenu && (
                  <div
                    className={`invisible absolute top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-border/60 bg-card/95 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                      isArabic
                        ? 'right-0 translate-y-2'
                        : 'left-0 translate-y-2'
                    }`}
                  >
                    <div className="p-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                        >
                          <span
                            className={`group/subitem flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-sm transition-colors ${
                              isActive(subitem.href)
                                ? 'bg-gold/10 text-gold'
                                : 'text-card-foreground hover:bg-gold/10 hover:text-gold'
                            }`}
                          >
                            <span>{t(subitem.name)}</span>

                            <ArrowRight
                              className={`h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover/subitem:opacity-100 ${
                                isArabic
                                  ? 'rotate-180 translate-x-1 group-hover/subitem:translate-x-0'
                                  : '-translate-x-1 group-hover/subitem:translate-x-0'
                              }`}
                            />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* Language */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="h-9 gap-1.5 px-2.5 text-primary-foreground hover:bg-white/10 hover:text-gold sm:px-3"
              aria-label={t({
                en: 'Switch to Arabic',
                ar: 'التبديل إلى الإنجليزية',
              })}
            >
              <Globe className="h-4.5 w-4.5" />

              <span className="text-xs font-semibold sm:text-sm">
                {language === 'ar' ? 'EN' : 'عربي'}
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 text-primary-foreground hover:bg-white/10 hover:text-gold lg:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={
                mobileMenuOpen
                  ? t({
                      en: 'Close menu',
                      ar: 'إغلاق القائمة',
                    })
                  : t({
                      en: 'Open menu',
                      ar: 'فتح القائمة',
                    })
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5.5 w-5.5" />
              ) : (
                <Menu className="h-5.5 w-5.5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'max-h-[calc(100vh-72px)] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-white/10 py-3">
            <div className="max-h-[calc(100vh-90px)] overflow-y-auto pb-4">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <div key={item.href}>
                    {/* Main navigation item */}
                    {item.submenu ? (
                      <div className="flex items-center gap-1">
                        <Link
                          href={item.href}
                          className="min-w-0 flex-1"
                        >
                          <span
                            className={`flex items-center rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                              active
                                ? 'bg-gold/15 text-gold'
                                : 'text-primary-foreground hover:bg-white/10'
                            }`}
                          >
                            {t(item.name)}
                          </span>
                        </Link>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            setMobileBusinessesOpen((open) => !open)
                          }
                          className={`h-11 w-11 shrink-0 rounded-xl text-primary-foreground hover:bg-white/10 hover:text-gold ${
                            active ? 'text-gold' : ''
                          }`}
                          aria-label={t({
                            en: 'Toggle business menu',
                            ar: 'فتح قائمة الأعمال',
                          })}
                          aria-expanded={mobileBusinessesOpen}
                        >
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${
                              mobileBusinessesOpen
                                ? 'rotate-180'
                                : ''
                            }`}
                          />
                        </Button>
                      </div>
                    ) : (
                      <Link href={item.href}>
                        <span
                          className={`flex items-center rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                            active
                              ? 'bg-gold/15 text-gold'
                              : 'text-primary-foreground hover:bg-white/10'
                          }`}
                        >
                          {t(item.name)}
                        </span>
                      </Link>
                    )}

                    {/* Mobile business submenu */}
                    {item.submenu && (
                      <div
                        className={`grid transition-all duration-300 ${
                          mobileBusinessesOpen
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div
                            className={`my-2 space-y-1 border-gold/20 ${
                              isArabic
                                ? 'mr-4 border-r pr-3'
                                : 'ml-4 border-l pl-3'
                            }`}
                          >
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.href}
                                href={subitem.href}
                              >
                                <span
                                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                                    isActive(subitem.href)
                                      ? 'bg-gold/10 text-gold'
                                      : 'text-primary-foreground/75 hover:bg-white/5 hover:text-gold'
                                  }`}
                                >
                                  <span>{t(subitem.name)}</span>

                                  <ArrowRight
                                    className={`h-3.5 w-3.5 ${
                                      isArabic
                                        ? 'rotate-180'
                                        : ''
                                    }`}
                                  />
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile contact CTA */}
              <div className="mt-4 border-t border-white/10 pt-4">
                <Link href="/contact">
                  <Button
                    className="w-full rounded-xl bg-gold py-6 font-semibold text-primary hover:bg-gold/90"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t({
                      en: 'Contact Us',
                      ar: 'اتصل بنا',
                    })}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}