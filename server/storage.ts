import { randomUUID } from "crypto";
import type {
  NewsArticle,
  InsertNewsArticle,
  JobListing,
  InsertJobListing,
  CareerApplication,
  InsertCareerApplication,
  ContactSubmission,
  InsertContactSubmission,
  Appointment,
  InsertAppointment,
} from "@shared/schema";

export interface IStorage {
  getNewsArticles(): Promise<NewsArticle[]>;
  getNewsArticle(id: string): Promise<NewsArticle | undefined>;
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
  
  getJobListings(): Promise<JobListing[]>;
  getJobListing(id: string): Promise<JobListing | undefined>;
  createJobListing(job: InsertJobListing): Promise<JobListing>;
  
  getCareerApplications(): Promise<CareerApplication[]>;
  createCareerApplication(application: InsertCareerApplication): Promise<CareerApplication>;
  
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  getAppointments(): Promise<Appointment[]>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
}

export class MemStorage implements IStorage {
  private newsArticles: Map<string, NewsArticle>;
  private jobListings: Map<string, JobListing>;
  private careerApplications: Map<string, CareerApplication>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private appointments: Map<string, Appointment>;

  constructor() {
    this.newsArticles = new Map();
    this.jobListings = new Map();
    this.careerApplications = new Map();
    this.contactSubmissions = new Map();
    this.appointments = new Map();
    
    this.seedData();
  }

  private seedData() {
    const sampleNews: InsertNewsArticle[] = [
      {
        titleEn: "El maraie Medical Center Expands Services",
        titleAr: "المركز الطبي للمرعي يوسع خدماته",
        excerptEn: "Our medical center introduces new specialized departments to better serve the community.",
        excerptAr: "مركزنا الطبي يقدم أقسام متخصصة جديدة لخدمة المجتمع بشكل أفضل.",
        contentEn: "El maraie Medical Center is proud to announce the expansion of our services with the addition of three new specialized departments. The new Cardiology, Neurology, and Orthopedics departments will provide comprehensive care with state-of-the-art equipment and experienced medical professionals.\n\nThis expansion reflects our commitment to delivering excellence in healthcare and meeting the growing needs of our community. The new facilities feature advanced diagnostic equipment and comfortable patient areas designed with modern healthcare standards in mind.\n\nWe invite patients to schedule appointments at our new departments and experience the El maraie Group standard of care.",
        contentAr: "يفخر المركز الطبي للمرعي بالإعلان عن توسيع خدماتنا بإضافة ثلاثة أقسام متخصصة جديدة. ستوفر أقسام أمراض القلب والأعصاب وجراحة العظام الجديدة رعاية شاملة بأحدث المعدات وأطباء ذوي خبرة.\n\nيعكس هذا التوسع التزامنا بتقديم التميز في الرعاية الصحية وتلبية الاحتياجات المتزايدة لمجتمعنا. تتميز المرافق الجديدة بمعدات تشخيصية متقدمة ومناطق مرضى مريحة مصممة وفقًا لمعايير الرعاية الصحية الحديثة.\n\nندعو المرضى لتحديد مواعيد في أقسامنا الجديدة وتجربة معيار الرعاية الخاص بمجموعة المرعي.",
        category: "medical",
        imageUrl: null,
      },
      {
        titleEn: "New Shipping Routes Established",
        titleAr: "إنشاء طرق شحن جديدة",
        excerptEn: "El maraie Shipping Agency announces new international shipping routes to enhance global trade connectivity.",
        excerptAr: "وكالة المرعي للملاحة تعلن عن طرق شحن دولية جديدة لتعزيز الاتصال التجاري العالمي.",
        contentEn: "El maraie Shipping Agency is pleased to announce the establishment of new shipping routes connecting Egyptian ports with major international trade hubs. These new routes will significantly reduce transit times and provide more efficient logistics solutions for our clients.\n\nThe expansion includes regular services to European, Asian, and African ports, offering comprehensive cargo handling and customs clearance support. Our team has worked diligently to secure partnerships with leading maritime carriers to ensure reliable and cost-effective shipping solutions.\n\nThis development positions El maraie Group as a key player in facilitating international trade and supporting Egypt's economic growth.",
        contentAr: "يسر وكالة المرعي للملاحة الإعلان عن إنشاء طرق شحن جديدة تربط الموانئ المصرية بمراكز التجارة الدولية الرئيسية. ستقلل هذه الطرق الجديدة بشكل كبير من أوقات العبور وتوفر حلول لوجستية أكثر كفاءة لعملائنا.\n\nيشمل التوسع خدمات منتظمة إلى الموانئ الأوروبية والآسيوية والأفريقية، مع تقديم دعم شامل لمناولة البضائع والتخليص الجمركي. عمل فريقنا بجد لتأمين شراكات مع شركات نقل بحرية رائدة لضمان حلول شحن موثوقة وفعالة من حيث التكلفة.\n\nيضع هذا التطور مجموعة المرعي كلاعب رئيسي في تسهيل التجارة الدولية ودعم النمو الاقتصادي لمصر.",
        category: "shipping",
        imageUrl: null,
      },
      {
        titleEn: "Sustainability Initiative in Mining Operations",
        titleAr: "مبادرة الاستدامة في عمليات التعدين",
        excerptEn: "El maraie Mining Factory implements new environmental protection measures and sustainable practices.",
        excerptAr: "مصنع المرعي للتعدين يطبق تدابير جديدة لحماية البيئة وممارسات مستدامة.",
        contentEn: "El maraie Mining Factory has launched a comprehensive sustainability initiative aimed at reducing environmental impact while maintaining operational excellence. The program includes advanced water recycling systems, renewable energy integration, and land rehabilitation projects.\n\nOur commitment to sustainable mining practices demonstrates that economic growth and environmental stewardship can go hand in hand. The new measures have already shown promising results in reducing water consumption by 40% and carbon emissions by 25%.\n\nWe continue to invest in green technology and work closely with environmental experts to ensure our operations meet and exceed international sustainability standards.",
        contentAr: "أطلق مصنع المرعي للتعدين مبادرة استدامة شاملة تهدف إلى تقليل التأثير البيئي مع الحفاظ على التميز التشغيلي. يشمل البرنامج أنظمة متقدمة لإعادة تدوير المياه ودمج الطاقة المتجددة ومشاريع إعادة تأهيل الأراضي.\n\nيوضح التزامنا بممارسات التعدين المستدامة أن النمو الاقتصادي والرعاية البيئية يمكن أن يسيرا جنبًا إلى جنب. أظهرت التدابير الجديدة بالفعل نتائج واعدة في تقليل استهلاك المياه بنسبة 40٪ وانبعاثات الكربون بنسبة 25٪.\n\nنواصل الاستثمار في التكنولوجيا الخضراء والعمل عن كثب مع خبراء البيئة لضمان أن عملياتنا تلبي وتتجاوز معايير الاستدامة الدولية.",
        category: "mining",
        imageUrl: null,
      },
    ];

    const sampleJobs: InsertJobListing[] = [
      {
        titleEn: "Senior Physician - Cardiology",
        titleAr: "طبيب أول - أمراض القلب",
        business: "Medical Center",
        locationEn: "Cairo, Egypt",
        locationAr: "القاهرة، مصر",
        descriptionEn: "El maraie Medical Center is seeking an experienced Cardiologist to join our expanding cardiology department. The ideal candidate will have extensive experience in diagnosing and treating heart conditions.",
        descriptionAr: "يبحث المركز الطبي للمرعي عن طبيب قلب ذو خبرة للانضمام إلى قسم أمراض القلب المتوسع لدينا. المرشح المثالي سيكون لديه خبرة واسعة في تشخيص وعلاج أمراض القلب.",
        requirementsEn: "MD degree, 5+ years cardiology experience, Board certification in Cardiology, Excellent communication skills in Arabic and English",
        requirementsAr: "درجة دكتوراه في الطب، خبرة 5+ سنوات في أمراض القلب، شهادة البورد في أمراض القلب، مهارات تواصل ممتازة بالعربية والإنجليزية",
        employmentType: "full-time",
      },
      {
        titleEn: "Logistics Coordinator",
        titleAr: "منسق لوجستيات",
        business: "Shipping Agency",
        locationEn: "Alexandria, Egypt",
        locationAr: "الإسكندرية، مصر",
        descriptionEn: "Join our shipping operations team as a Logistics Coordinator. You will manage cargo operations, coordinate with international partners, and ensure efficient port handling.",
        descriptionAr: "انضم إلى فريق عمليات الشحن لدينا كمنسق لوجستيات. ستدير عمليات الشحن وتنسق مع الشركاء الدوليين وتضمن مناولة فعالة في الموانئ.",
        requirementsEn: "Bachelor's degree in Logistics or related field, 3+ years experience in shipping/logistics, Knowledge of customs procedures, Fluency in English",
        requirementsAr: "درجة بكالوريوس في اللوجستيات أو مجال ذي صلة، خبرة 3+ سنوات في الشحن/اللوجستيات، معرفة بالإجراءات الجمركية، إتقان اللغة الإنجليزية",
        employmentType: "full-time",
      },
      {
        titleEn: "Civil Engineer - Marine Projects",
        titleAr: "مهندس مدني - مشاريع بحرية",
        business: "Marine Works",
        locationEn: "Port Said, Egypt",
        locationAr: "بورسعيد، مصر",
        descriptionEn: "Exciting opportunity for a Civil Engineer specializing in marine and coastal projects. Work on cutting-edge harbor development and coastal protection initiatives.",
        descriptionAr: "فرصة مثيرة لمهندس مدني متخصص في المشاريع البحرية والساحلية. العمل على مبادرات رائدة لتطوير الموانئ وحماية السواحل.",
        requirementsEn: "Bachelor's degree in Civil Engineering, 4+ years experience in marine construction, AutoCAD proficiency, Project management skills",
        requirementsAr: "درجة بكالوريوس في الهندسة المدنية، خبرة 4+ سنوات في البناء البحري، إتقان AutoCAD، مهارات إدارة المشاريع",
        employmentType: "full-time",
      },
      {
        titleEn: "Mining Engineer",
        titleAr: "مهندس تعدين",
        business: "Mining Factory",
        locationEn: "Various locations",
        locationAr: "مواقع مختلفة",
        descriptionEn: "Seeking a qualified Mining Engineer to oversee extraction operations and ensure compliance with safety and environmental standards.",
        descriptionAr: "نبحث عن مهندس تعدين مؤهل للإشراف على عمليات الاستخراج وضمان الامتثال لمعايير السلامة والبيئة.",
        requirementsEn: "Bachelor's degree in Mining Engineering, 3+ years field experience, Knowledge of sustainable mining practices, Safety certification",
        requirementsAr: "درجة بكالوريوس في هندسة التعدين، خبرة 3+ سنوات في الميدان، معرفة بممارسات التعدين المستدامة، شهادة السلامة",
        employmentType: "full-time",
      },
      {
        titleEn: "Business Development Manager",
        titleAr: "مدير تطوير الأعمال",
        business: "Trade & Agency",
        locationEn: "Cairo, Egypt",
        locationAr: "القاهرة، مصر",
        descriptionEn: "Lead our business development efforts in identifying new trade opportunities and establishing partnerships with international companies.",
        descriptionAr: "قيادة جهود تطوير الأعمال في تحديد فرص تجارية جديدة وإقامة شراكات مع شركات دولية.",
        requirementsEn: "MBA or equivalent, 5+ years in business development, Strong network in international trade, Excellent negotiation skills",
        requirementsAr: "ماجستير إدارة أعمال أو ما يعادلها، خبرة 5+ سنوات في تطوير الأعمال، شبكة قوية في التجارة الدولية، مهارات تفاوض ممتازة",
        employmentType: "full-time",
      },
    ];

    sampleNews.forEach((news) => {
      const id = randomUUID();
      this.newsArticles.set(id, {
        ...news,
        id,
        publishedAt: new Date(),
      });
    });

    sampleJobs.forEach((job) => {
      const id = randomUUID();
      this.jobListings.set(id, {
        ...job,
        id,
        postedAt: new Date(),
      });
    });
  }

  async getNewsArticles(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getNewsArticle(id: string): Promise<NewsArticle | undefined> {
    return this.newsArticles.get(id);
  }

  async createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle> {
    const id = randomUUID();
    const newArticle: NewsArticle = {
      ...article,
      id,
      publishedAt: new Date(),
    };
    this.newsArticles.set(id, newArticle);
    return newArticle;
  }

  async getJobListings(): Promise<JobListing[]> {
    return Array.from(this.jobListings.values()).sort(
      (a, b) => b.postedAt.getTime() - a.postedAt.getTime()
    );
  }

  async getJobListing(id: string): Promise<JobListing | undefined> {
    return this.jobListings.get(id);
  }

  async createJobListing(job: InsertJobListing): Promise<JobListing> {
    const id = randomUUID();
    const newJob: JobListing = {
      ...job,
      id,
      postedAt: new Date(),
    };
    this.jobListings.set(id, newJob);
    return newJob;
  }

  async getCareerApplications(): Promise<CareerApplication[]> {
    return Array.from(this.careerApplications.values()).sort(
      (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }

  async createCareerApplication(
    application: InsertCareerApplication
  ): Promise<CareerApplication> {
    const id = randomUUID();
    const newApplication: CareerApplication = {
      ...application,
      id,
      submittedAt: new Date(),
    };
    this.careerApplications.set(id, newApplication);
    return newApplication;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }

  async createContactSubmission(
    submission: InsertContactSubmission
  ): Promise<ContactSubmission> {
    const id = randomUUID();
    const newSubmission: ContactSubmission = {
      ...submission,
      id,
      submittedAt: new Date(),
    };
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createAppointment(appointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const newAppointment: Appointment = {
      ...appointment,
      id,
      createdAt: new Date(),
    };
    this.appointments.set(id, newAppointment);
    return newAppointment;
  }
}

export const storage = new MemStorage();
