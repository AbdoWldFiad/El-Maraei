import { useState } from 'react';
import { Briefcase, MapPin, Clock, Upload, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { apiRequest, queryClient } from '@/lib/queryClient';
import type { JobListing } from '@shared/schema';

export default function Careers() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

  const { data: jobs, isLoading } = useQuery<JobListing[]>({
    queryKey: ['/api/jobs'],
  });

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const reader = new FileReader();
      const fileData = await new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(cvFile!);
      });

      return apiRequest('POST', '/api/career-applications', {
        ...data,
        cvFileName: cvFile!.name,
        cvFileData: fileData,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/career-applications'] });
      toast({
        title: t({ en: 'Application Submitted', ar: 'تم إرسال الطلب' }),
        description: t({ 
          en: 'Your application has been submitted successfully.', 
          ar: 'تم إرسال طلبك بنجاح.' 
        }),
      });
      setSelectedJob(null);
      setApplicationData({ fullName: '', email: '', phone: '', coverLetter: '' });
      setCvFile(null);
    },
    onError: () => {
      toast({
        title: t({ en: 'Error', ar: 'خطأ' }),
        description: t({ 
          en: 'Failed to submit application. Please try again.', 
          ar: 'فشل إرسال الطلب. يرجى المحاولة مرة أخرى.' 
        }),
        variant: 'destructive',
      });
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob || !cvFile) return;

    mutation.mutate({
      jobId: selectedJob.id,
      ...applicationData,
    });
  };

  const getEmploymentTypeBadge = (type: string) => {
    const types: Record<string, { color: string; label: { en: string; ar: string } }> = {
      'full-time': { color: 'bg-primary text-primary-foreground', label: { en: 'Full Time', ar: 'دوام كامل' } },
      'part-time': { color: 'bg-chart-2 text-white', label: { en: 'Part Time', ar: 'دوام جزئي' } },
      'contract': { color: 'bg-chart-3 text-white', label: { en: 'Contract', ar: 'عقد' } },
    };
    const config = types[type] || types['full-time'];
    return <Badge className={config.color}>{t(config.label)}</Badge>;
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'ar' ? 'الوظائف | انضم إلى فريق المرعي جروب' : 'Careers | Join El-Maraei Group'}</title>
        <meta name="description" content={language === 'ar' ? 'انضم إلى فريقنا في المرعي جروب. استكشف الفرص الوظيفية في الرعاية الصحية والملاحة والإنشاءات والتعدين والتجارة' : 'Join our team at El-Maraei Group. Explore career opportunities across healthcare, maritime, construction, mining, and trade'} />
        <meta property="og:title" content={language === 'ar' ? 'الوظائف | انضم إلى فريق المرعي جروب' : 'Careers | Join El-Maraei Group'} />
        <meta property="og:description" content={language === 'ar' ? 'استكشف الفرص الوظيفية في المرعي جروب عبر صناعات متعددة' : 'Explore career opportunities at El-Maraei Group across multiple industries'} />
      </Helmet>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t({ en: 'Join Our Team', ar: 'انضم إلى فريقنا' })}
            </h1>
            <p className="text-lg text-primary-foreground/90">
              {t({ 
                en: 'Build your career with Egypt\'s leading business conglomerate', 
                ar: 'ابنِ مسيرتك المهنية مع مجموعة الأعمال الرائدة في مصر' 
              })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {t({ en: 'Why Work With Us?', ar: 'لماذا تعمل معنا؟' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t({ 
                en: 'At El-Maraei Group, we believe in nurturing talent and providing opportunities for growth across our diverse business portfolio.', 
                ar: 'في مجموعة المرعي، نؤمن برعاية المواهب وتوفير فرص النمو عبر محفظتنا التجارية المتنوعة.' 
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">
                  {t({ en: 'Career Growth', ar: 'النمو الوظيفي' })}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t({ en: 'Opportunities for advancement', ar: 'فرص للتقدم الوظيفي' })}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">
                  {t({ en: 'Great Location', ar: 'موقع رائع' })}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t({ en: 'Multiple offices across Egypt', ar: 'مكاتب متعددة في مصر' })}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">
                  {t({ en: 'Work-Life Balance', ar: 'التوازن بين العمل والحياة' })}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t({ en: 'Flexible working arrangements', ar: 'ترتيبات عمل مرنة' })}
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              {t({ en: 'Open Positions', ar: 'الوظائف المتاحة' })}
            </h2>

            {isLoading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-6 bg-muted rounded mb-2 w-1/3"></div>
                      <div className="h-4 bg-muted rounded w-1/4"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : jobs && jobs.length > 0 ? (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <Card key={job.id} className="hover-elevate transition-all duration-300" data-testid={`job-card-${job.id}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-2">
                            <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-semibold text-foreground">
                                {language === 'ar' ? job.titleAr : job.titleEn}
                              </h3>
                              <p className="text-muted-foreground">
                                {language === 'ar' ? job.locationAr : job.locationEn}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                            {language === 'ar' ? job.descriptionAr : job.descriptionEn}
                          </p>
                          <div className="flex gap-2 mt-3">
                            {getEmploymentTypeBadge(job.employmentType)}
                            <Badge variant="outline">{job.business}</Badge>
                          </div>
                        </div>
                        <Dialog open={selectedJob?.id === job.id} onOpenChange={(open) => !open && setSelectedJob(null)}>
                          <DialogTrigger asChild>
                            <Button onClick={() => setSelectedJob(job)} data-testid={`button-apply-${job.id}`}>
                              {t({ en: 'Apply Now', ar: 'قدم الآن' })}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>
                                {t({ en: 'Apply for Position', ar: 'التقديم للوظيفة' })}
                              </DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium mb-2">
                                  {t({ en: 'Full Name', ar: 'الاسم الكامل' })}
                                </label>
                                <Input
                                  value={applicationData.fullName}
                                  onChange={(e) => setApplicationData({ ...applicationData, fullName: e.target.value })}
                                  required
                                  data-testid="input-full-name"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2">
                                  {t({ en: 'Email', ar: 'البريد الإلكتروني' })}
                                </label>
                                <Input
                                  type="email"
                                  value={applicationData.email}
                                  onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                                  required
                                  data-testid="input-application-email"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2">
                                  {t({ en: 'Phone', ar: 'رقم الهاتف' })}
                                </label>
                                <Input
                                  value={applicationData.phone}
                                  onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                                  required
                                  data-testid="input-application-phone"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2">
                                  {t({ en: 'Upload CV/Resume', ar: 'تحميل السيرة الذاتية' })}
                                </label>
                                <div className="border-2 border-dashed rounded-md p-4 text-center">
                                  <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="cv-upload"
                                    required
                                  />
                                  <label htmlFor="cv-upload" className="cursor-pointer" data-testid="label-cv-upload">
                                    {cvFile ? (
                                      <div className="flex items-center justify-center gap-2">
                                        <span className="text-sm">{cvFile.name}</span>
                                        <Button
                                          type="button"
                                          variant="ghost"
                                          size="icon"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setCvFile(null);
                                          }}
                                        >
                                          <X className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    ) : (
                                      <div>
                                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                                        <span className="text-sm text-muted-foreground">
                                          {t({ en: 'Click to upload CV', ar: 'انقر لتحميل السيرة الذاتية' })}
                                        </span>
                                      </div>
                                    )}
                                  </label>
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2">
                                  {t({ en: 'Cover Letter (Optional)', ar: 'خطاب تقديم (اختياري)' })}
                                </label>
                                <Textarea
                                  value={applicationData.coverLetter}
                                  onChange={(e) => setApplicationData({ ...applicationData, coverLetter: e.target.value })}
                                  rows={4}
                                  data-testid="input-cover-letter"
                                />
                              </div>
                              <Button 
                                type="submit" 
                                className="w-full" 
                                disabled={mutation.isPending}
                                data-testid="button-submit-application"
                              >
                                {mutation.isPending 
                                  ? t({ en: 'Submitting...', ar: 'جارٍ الإرسال...' })
                                  : t({ en: 'Submit Application', ar: 'إرسال الطلب' })
                                }
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {t({ en: 'No open positions at the moment. Check back soon!', ar: 'لا توجد وظائف متاحة في الوقت الحالي. تحقق مرة أخرى قريبًا!' })}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
