import { Link } from 'wouter';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import type { NewsArticle } from '@shared/schema';

export default function News() {
  const { t, language } = useLanguage();

  const { data: articles, isLoading } = useQuery<NewsArticle[]>({
    queryKey: ['/api/news'],
  });

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'ar' 
      ? date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'ar' ? 'آخر الأخبار والتحديثات | المرعي جروب' : 'Latest News & Updates | El maraie Group'}</title>
        <meta name="description" content={language === 'ar' ? 'ابق على اطلاع بآخر تطورات المرعي جروب وإنجازاتها ورؤى الصناعة عبر جميع قطاعات أعمالنا' : 'Stay informed about El maraie Group\'s latest developments, achievements, and industry insights across all business sectors'} />
        <meta property="og:title" content={language === 'ar' ? 'آخر الأخبار والتحديثات | المرعي جروب' : 'Latest News & Updates | El maraie Group'} />
        <meta property="og:description" content={language === 'ar' ? 'ابق على اطلاع بآخر تطورات وإنجازات المرعي جروب' : 'Stay informed about El maraie Group\'s latest developments and achievements'} />
      </Helmet>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t({ en: 'Latest News & Updates', ar: 'آخر الأخبار والتحديثات' })}
            </h1>
            <p className="text-lg text-primary-foreground/90">
              {t({ 
                en: 'Stay informed about our latest developments and industry insights', 
                ar: 'ابق على اطلاع بآخر تطوراتنا ورؤى الصناعة' 
              })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder={t({ en: 'Search news...', ar: 'ابحث في الأخبار...' })}
                className="ltr:pl-10 rtl:pr-10"
                data-testid="input-search-news"
              />
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-video bg-muted"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-muted rounded mb-2"></div>
                    <div className="h-6 bg-muted rounded mb-3"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : articles && articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link key={article.id} href={`/news/${article.id}`}>
                  <Card className="h-full hover-elevate transition-all duration-300 cursor-pointer" data-testid={`news-card-${article.id}`}>
                    {article.imageUrl && (
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={article.imageUrl} 
                          alt={language === 'ar' ? article.titleAr : article.titleEn}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(article.publishedAt.toString())}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground line-clamp-2">
                        {language === 'ar' ? article.titleAr : article.titleEn}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {language === 'ar' ? article.excerptAr : article.excerptEn}
                      </p>
                      <div className="flex items-center text-primary hover:text-gold transition-colors">
                        <span className="text-sm font-medium">
                          {t({ en: 'Read More', ar: 'اقرأ المزيد' })}
                        </span>
                        <ArrowRight className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {t({ en: 'No news articles available at the moment.', ar: 'لا توجد مقالات إخبارية متاحة في الوقت الحالي.' })}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
