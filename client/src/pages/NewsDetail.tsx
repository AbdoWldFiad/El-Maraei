import { useRoute, Link } from 'wouter';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import type { NewsArticle } from '@shared/schema';

export default function NewsDetail() {
  const [, params] = useRoute('/news/:id');
  const { t, language } = useLanguage();

  const { data: article, isLoading } = useQuery<NewsArticle>({
    queryKey: ['/api/news', params?.id],
    enabled: !!params?.id,
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'ar' 
      ? date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      medical: 'bg-chart-1 text-white',
      shipping: 'bg-chart-2 text-white',
      marine: 'bg-chart-3 text-white',
      mining: 'bg-chart-4 text-white',
      trade: 'bg-chart-5 text-white',
      general: 'bg-primary text-primary-foreground',
    };
    return colors[category] || 'bg-secondary text-secondary-foreground';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-6"></div>
            <div className="h-12 bg-muted rounded mb-4"></div>
            <div className="h-6 bg-muted rounded w-1/3 mb-6"></div>
            <div className="aspect-video bg-muted rounded mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold mb-4 text-foreground">
            {t({ en: 'Article Not Found', ar: 'المقال غير موجود' })}
          </h1>
          <Link href="/news">
            <Button>{t({ en: 'Back to News', ar: 'العودة إلى الأخبار' })}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <Helmet>
        <title>{article ? (language === 'ar' ? `${article.titleAr} | المرعي جروب` : `${article.titleEn} | El-Maraei Group`) : (language === 'ar' ? 'مقال إخباري | المرعي جروب' : 'News Article | El-Maraei Group')}</title>
        <meta name="description" content={article ? (language === 'ar' ? article.excerptAr : article.excerptEn) : (language === 'ar' ? 'اقرأ آخر الأخبار والتحديثات من المرعي جروب' : 'Read the latest news and updates from El-Maraei Group')} />
        <meta property="og:title" content={article ? (language === 'ar' ? `${article.titleAr} | المرعي جروب` : `${article.titleEn} | El-Maraei Group`) : (language === 'ar' ? 'مقال إخباري | المرعي جروب' : 'News Article | El-Maraei Group')} />
        <meta property="og:description" content={article ? (language === 'ar' ? article.excerptAr : article.excerptEn) : (language === 'ar' ? 'آخر الأخبار من المرعي جروب' : 'Latest news from El-Maraei Group')} />
      </Helmet>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/news">
          <Button variant="ghost" className="mb-6" data-testid="button-back-to-news">
            <ArrowLeft className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            {t({ en: 'Back to News', ar: 'العودة إلى الأخبار' })}
          </Button>
        </Link>

        <article>
          <div className="mb-6">
            <Badge className={getCategoryColor(article.category)}>
              {article.category}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {language === 'ar' ? article.titleAr : article.titleEn}
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(article.publishedAt.toString())}</span>
            </div>
            <Button variant="ghost" size="sm" data-testid="button-share">
              <Share2 className="h-4 w-4" />
              {t({ en: 'Share', ar: 'مشاركة' })}
            </Button>
          </div>

          {article.imageUrl && (
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={article.imageUrl} 
                alt={language === 'ar' ? article.titleAr : article.titleEn}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6 font-medium leading-relaxed">
              {language === 'ar' ? article.excerptAr : article.excerptEn}
            </p>
            <div className="text-foreground leading-relaxed whitespace-pre-line">
              {language === 'ar' ? article.contentAr : article.contentEn}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
