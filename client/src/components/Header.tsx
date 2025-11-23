import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

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
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <img src="/favicon.png" style={{ width: '50px', height: '50px' }}/>
              <Link href="/" data-testid="link-home">
                <span className="text-xl font-bold text-primary-foreground">
                  {t({ en: 'El-Maraei Group', ar: 'المرعي جروب' })}
                </span>
              </Link>
            </div>

          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link href={item.href} data-testid={`link-${item.href}`}>
                  <span className={`text-sm font-medium transition-colors hover:text-gold ${
                    location === item.href ? 'text-gold border-b-2 border-gold' : 'text-primary-foreground'
                  }`}>
                    {t(item.name)}
                  </span>
                </Link>
                {item.submenu && (
                  <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 top-full ltr:left-0 rtl:right-0 mt-2 w-56 bg-card border border-card-border rounded-md shadow-lg py-2">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.href} href={subitem.href} data-testid={`link-${subitem.href}`}>
                        <span className="block px-4 py-2 text-sm text-card-foreground hover-elevate">
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
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
              className="text-primary-foreground hover:text-gold"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Toggle language</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            {navigation.map((item) => (
              <div key={item.href} className="py-2">
                <Link href={item.href} data-testid={`mobile-link-${item.href}`}>
                  <span 
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location === item.href ? 'bg-primary-foreground/10 text-gold' : 'text-primary-foreground'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.name)}
                  </span>
                </Link>
                {item.submenu && (
                  <div className="ltr:ml-4 rtl:mr-4 mt-2 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.href} href={subitem.href} data-testid={`mobile-link-${subitem.href}`}>
                        <span 
                          className="block px-3 py-2 rounded-md text-sm text-primary-foreground/80 hover:text-gold"
                          onClick={() => setMobileMenuOpen(false)}
                        >
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
