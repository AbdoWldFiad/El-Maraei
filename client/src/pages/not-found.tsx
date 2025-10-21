import { Link } from 'wouter';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <Helmet>
        <title>{language === 'ar' ? 'الصفحة غير موجودة | المرعي جروب' : 'Page Not Found | El-Maraei Group'}</title>
        <meta name="description" content={language === 'ar' ? 'الصفحة التي تبحث عنها غير موجودة. العودة إلى الصفحة الرئيسية للمرعي جروب' : 'The page you\'re looking for cannot be found. Return to El-Maraei Group homepage'} />
        <meta property="og:title" content={language === 'ar' ? 'الصفحة غير موجودة | المرعي جروب' : 'Page Not Found | El-Maraei Group'} />
        <meta property="og:description" content={language === 'ar' ? 'الصفحة التي تبحث عنها غير موجودة' : 'The page you\'re looking for cannot be found'} />
      </Helmet>
      <div className="text-center px-4 max-w-2xl">
        <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          {t({ en: 'Page Not Found', ar: 'الصفحة غير موجودة' })}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t({ 
            en: 'Sorry, we couldn\'t find the page you\'re looking for. It might have been moved or deleted.', 
            ar: 'عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو حذفها.' 
          })}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="min-w-[200px]" data-testid="button-home">
              <Home className="h-4 w-4" />
              {t({ en: 'Go Home', ar: 'الصفحة الرئيسية' })}
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="min-w-[200px]"
            data-testid="button-back"
          >
            <ArrowLeft className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            {t({ en: 'Go Back', ar: 'العودة' })}
          </Button>
        </div>
      </div>
    </div>
  );
}
