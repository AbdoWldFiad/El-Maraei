import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const newsArticles = pgTable("news_articles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  titleEn: text("title_en").notNull(),
  titleAr: text("title_ar").notNull(),
  excerptEn: text("excerpt_en").notNull(),
  excerptAr: text("excerpt_ar").notNull(),
  contentEn: text("content_en").notNull(),
  contentAr: text("content_ar").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  publishedAt: timestamp("published_at").notNull().defaultNow(),
});

export const jobListings = pgTable("job_listings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  titleEn: text("title_en").notNull(),
  titleAr: text("title_ar").notNull(),
  business: text("business").notNull(),
  locationEn: text("location_en").notNull(),
  locationAr: text("location_ar").notNull(),
  descriptionEn: text("description_en").notNull(),
  descriptionAr: text("description_ar").notNull(),
  requirementsEn: text("requirements_en").notNull(),
  requirementsAr: text("requirements_ar").notNull(),
  employmentType: text("employment_type").notNull(),
  postedAt: timestamp("posted_at").notNull().defaultNow(),
});

export const careerApplications = pgTable("career_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  jobId: varchar("job_id").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  cvFileName: text("cv_file_name").notNull(),
  cvFileData: text("cv_file_data").notNull(),
  coverLetter: text("cover_letter"),
  submittedAt: timestamp("submitted_at").notNull().defaultNow(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  business: text("business").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").notNull().defaultNow(),
});

export const appointments = pgTable("appointments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  patientName: text("patient_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  department: text("department").notNull(),
  appointmentDate: text("appointment_date").notNull(),
  appointmentTime: text("appointment_time").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertNewsArticleSchema = createInsertSchema(newsArticles).omit({
  id: true,
  publishedAt: true,
});

export const insertJobListingSchema = createInsertSchema(jobListings).omit({
  id: true,
  postedAt: true,
});

export const insertCareerApplicationSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  coverLetter: z.string().optional(),
  jobId: z.string().uuid(),
  cvFileName: z.string().optional(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  submittedAt: true,
}).extend({
  email: z.string().email(),
});

export const insertAppointmentSchema = createInsertSchema(appointments).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email(),
  phone: z.string().min(10),
});

export type NewsArticle = typeof newsArticles.$inferSelect;
export type InsertNewsArticle = z.infer<typeof insertNewsArticleSchema>;

export type JobListing = typeof jobListings.$inferSelect;
export type InsertJobListing = z.infer<typeof insertJobListingSchema>;

export type CareerApplication = typeof careerApplications.$inferSelect;
export type InsertCareerApplication = z.infer<typeof insertCareerApplicationSchema>;

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;

export type Appointment = typeof appointments.$inferSelect;
export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
