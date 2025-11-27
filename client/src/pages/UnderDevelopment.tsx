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
        <title>
          {language === 'ar'
            ? 'الصفحة تحت التطوير | المرعي جروب'
            : 'Still Under Development | El-Maraei Group'}
        </title>

        <meta
          name="description"
          content={
            language === 'ar'
              ? 'هذه الصفحة لا تزال تحت التطوير. سيتم توفير المحتوى قريبًا.'
              : 'This page is still under development. Content will be available soon.'
          }
        />

        <meta
          property="og:title"
          content={
            language === 'ar'
              ? 'الصفحة تحت التطوير | المرعي جروب'
              : 'Still Under Development | El-Maraei Group'
          }
        />

        <meta
          property="og:description"
          content={
            language === 'ar'
              ? 'هذه الصفحة لا تزال تحت التطوير.'
              : 'This page is still under development.'
          }
        />
      </Helmet>

      <div className="text-center px-4 max-w-2xl">
        <div className="text-9xl font-bold text-primary/20 mb-4">🛠️</div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          {t({ en: 'Still Under Development', ar: 'الصفحة تحت التطوير' })}
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          {t({
            en: 'This page is currently being developed. Please check back soon.',
            ar: 'هذه الصفحة قيد التطوير حاليًا. يرجى العودة لاحقًا.',
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
            <ArrowLeft
              className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`}
            />
            {t({ en: 'Go Back', ar: 'العودة' })}
          </Button>
        </div>
      </div>
    </div>
  );
}
