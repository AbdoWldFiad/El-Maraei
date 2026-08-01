import { useState, useEffect } from "react";
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from "../../favicon.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const navigation = [
    { 
      name: { en: 'Home', ar: 'الرئيسية' }, 
      href: '/' 
    },
    { 
      name: { en: 'About Us', ar: 'من نحن' }, 
      href: '/about' 
    },
    { 
      name: { en: 'Businesses', ar: 'أعمالنا' }, 
      href: '/businesses',
      submenu: [
        { name: { en: 'Medical Center', ar: 'المركز الطبي' }, href: '/businesses/medical' },
        { name: { en: 'Medical Products', ar: ' منتجات طبية' }, href: '/businesses/midicalproduts' },
        { name: { en: 'Shipping Agency', ar: 'التوكيلات الملاحية' }, href: '/businesses/shipping' },
        { name: { en: 'Marine Works', ar: 'الأشغال البحرية' }, href: '/businesses/marine' },
        { name: { en: 'Mining Factory', ar: 'مصنع التعدين' }, href: '/businesses/mining' },
        { name: { en: 'Trade & Agency', ar: 'التجارة والوكالات' }, href: '/businesses/trade' },
      ]
    },
    { 
      name: { en: 'News', ar: 'الأخبار' }, 
      href: '/news' 
    },
    { 
      name: { en: 'Careers', ar: 'الوظائف' }, 
      href: '/careers' 
    },
    { 
      name: { en: 'Contact', ar: 'اتصل بنا' }, 
      href: '/contact' 
    },
  ];

  return (
    <header className={` sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-white/10 ${ isScrolled ? "bg-primary/95 shadow-[0_10px_40px_rgba(0,0,0,.2)]" : "bg-primary/60 backdrop-blur-2xl border-b border-white/5" } `} >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={` flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16" : "h-20"} `} >

          {/* Logo */}

          <div className="flex items-center gap-3">
            <img src={logo} className={` transition-all duration-500 ${isScrolled ? "w-10 h-10 rotate-0" : "w-12 h-12 rotate-3"} hover:scale-110`} />

            <Link href="/">
              <span className="cursor-pointer text-2xl font-bold tracking-tight text-primary-foreground">
                {t({
                  en: "El Maraie Group",
                  ar: "المرعي جروب",
                })}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">

                <Link href={item.href}>
                  <span className={` relative flex items-center gap-1 px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-300 ${ location === item.href ? "text-gold" : "text-primary-foreground hover:text-gold" } `} >
                    {t(item.name)}
                    {item.submenu && ( <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" /> )}
                    <span className={` absolute left-4 right-4 -bottom-1 h-[2px] rounded-full bg-gold origin-center transition-transform duration-300 ${ location === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100" } `} />
                  </span>
                </Link>

                {item.submenu && (
                  <div className=" absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-xl border border-white/10 bg-card/95 backdrop-blur-xl shadow-2xl opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 overflow-hidden z-50 " > {item.submenu.map((subitem) => (
                      <Link key={subitem.href} href={subitem.href}>
                        <span className="block cursor-pointer px-5 py-3 text-sm text-card-foreground transition-colors hover:bg-gold/10 hover:text-gold">
                          {t(subitem.name)}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">

            <Button variant="ghost" size="icon"
             onClick={toggleLanguage} className="text-primary-foreground hover:bg-white/10 hover:text-gold" >
              <Globe className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-foreground hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 space-y-2">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link href={item.href}>
                    <span
                      onClick={() => setMobileMenuOpen(false)}
                      className={` flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium cursor-pointer transition-colors ${ location === item.href ? "bg-gold/15 text-gold" : "text-primary-foreground hover:bg-white/10" } `} >
                      {t(item.name)}
                      {item.submenu && (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </span>
                  </Link>

                  {item.submenu && (
                    <div className="mt-2 ml-5 space-y-1 border-l border-white/10 pl-3">
                      {item.submenu.map((subitem) => (
                        <Link key={subitem.href} href={subitem.href}>
                          <span
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-primary-foreground/80 hover:bg-white/5 hover:text-gold" >
                            {t(subitem.name)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </nav>
    </header>
  );
}