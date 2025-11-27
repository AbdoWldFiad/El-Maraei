# El-Maraei Group Corporate Website

A comprehensive bilingual (Arabic/English) corporate website showcasing El-Maraei Group's five business divisions.

## Project Overview

**Purpose**: Corporate website for El-Maraei Group (المرعي جروب), a leading Egyptian business conglomerate  
**Tech Stack**: React + TypeScript, Tailwind CSS, Express.js, PostgreSQL (in-memory for development)  
**Status**: In Development  

## Business Divisions

1. **Medical Center** (مركز طبي) - Healthcare services with appointment booking
2. **Shipping Agency** (توكيلات ملاحية) - Maritime logistics and port services
3. **Marine Works** (أشغال بحرية) - Coastal engineering and harbor construction
4. **Mining Factory** (مصنع تعدين) - Mineral extraction and processing
5. **Trade & Agency** (التجارة والوكالات) - International trade representation

## Features Implemented

### Frontend (Task 1 - Completed)
- ✅ Bilingual support with RTL/LTR automatic switching
- ✅ Responsive design (mobile-first approach)
- ✅ Professional homepage with hero section and business cards
- ✅ About Us page with company history, mission, vision, and values
- ✅ Five dedicated business pages with services and details
- ✅ News/Blog system with listing and detail pages
- ✅ Careers page with job listings
- ✅ Contact page with form and Google Maps integration
- ✅ Medical Center appointment booking system
- ✅ Navigation header with language toggle
- ✅ Footer with quick links and contact information
- ✅ SEO-optimized meta tags in index.html

### Design System
- **Primary Colors**: Navy Blue (220 45% 25%), Deep Green (160 35% 30%)
- **Accent**: Gold (45 85% 55%)
- **Typography**: 
  - Arabic: IBM Plex Sans Arabic
  - English: Inter
- **Components**: Shadcn UI with custom configurations
- **Dark Mode**: Full support with navy backgrounds and maintained gold accents

### Data Schemas
All schemas defined in `shared/schema.ts`:
- News Articles (bilingual content)
- Job Listings (bilingual with employment type)
- Career Applications (with CV upload support)
- Contact Submissions
- Appointments (medical center bookings)

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation with language toggle
│   │   ├── Footer.tsx          # Footer with links and contact
│   │   └── ui/                 # Shadcn components
│   ├── contexts/
│   │   └── LanguageContext.tsx # i18n context provider
│   ├── pages/
│   │   ├── Home.tsx            # Homepage with hero and business cards
│   │   ├── About.tsx           # Company information
│   │   ├── News.tsx            # News listing
│   │   ├── NewsDetail.tsx      # Individual news article
│   │   ├── Careers.tsx         # Job listings with application
│   │   ├── Contact.tsx         # Contact form and map
│   │   ├── businesses/
│   │   │   ├── Medical.tsx               # Medical center
│   │   │   ├── MedicalAppointment.tsx   # Appointment booking
│   │   │   ├── Shipping.tsx             # Shipping agency
│   │   │   ├── Marine.tsx               # Marine works
│   │   │   ├── Mining.tsx               # Mining factory
│   │   │   └── Trade.tsx                # Trade & agency
│   │   ├── not-found.tsx       # 404 page
|   |   └── UnderDevelopment.tsx  # My employar lazy ass will use this untel we find a  
│   ├── App.tsx                 # Main app with routes         |       way to implement the backend
│   └── index.css               # Global styles
├── index.html                  # SEO meta tags
└── attached_assets/
    └── generated_images/       # AI-generated business images

server/
├── routes.ts                   # API endpoints (to be implemented)
└── storage.ts                  # Data storage interface (to be implemented)

shared/
└── schema.ts                   # Data models and types
```

## Routes

- `/` - Homepage
- `/about` - About Us
- `/businesses/medical` - Medical Center
- `/businesses/medical/appointment` - Book Appointment
- `/businesses/shipping` - Shipping Agency
- `/businesses/marine` - Marine Works
- `/businesses/mining` - Mining Factory
- `/businesses/trade` - Trade & Agency
- `/news` - News Listing
- `/news/:id` - News Article Detail
- `/careers` - Career Opportunities
- `/contact` - Contact Us

## Images Generated

All professional images created for:
1. Hero section - Corporate headquarters
2. Medical center interior
3. Shipping port operations
4. Marine construction site
5. Mining factory operations
6. Trade partnership meeting

## Language System

The `LanguageContext` provides:
- `language`: Current language ('en' | 'ar')
- `toggleLanguage()`: Switch between languages
- `t()`: Translation function accepting `{ en: string, ar: string }`

Automatic features:
- HTML `dir` attribute (ltr/rtl)
- HTML `lang` attribute
- Font family switching
- LocalStorage persistence

## Next Steps (Task 2 - Backend)

- [ ] Implement API endpoints in `server/routes.ts`
- [ ] Set up storage interface in `server/storage.ts`
- [ ] Create endpoints for:
  - Contact form submissions
  - Appointment bookings
  - Career applications with CV upload
  - News articles CRUD
  - Job listings management

## Next Steps (Task 3 - Integration & Testing)

- [ ] Connect frontend to backend APIs
- [ ] Add error handling and loading states
- [ ] Test all user journeys
- [ ] Architect review
- [ ] End-to-end testing

## Running the Project

```bash
npm run dev
```

Server runs on port 5000 (both frontend and backend served from same port).

## Design Guidelines

See `design_guidelines.md` for comprehensive design system documentation including colors, typography, spacing, and component usage.

## Content Structure

All content is bilingual (Arabic/English) with:
- Professional Arabic copywriting
- English translations
- SEO-friendly meta descriptions
- Cultural sensitivity for Middle Eastern markets

## Notes

- Using in-memory storage for development (javascript_mem_db integration)
- All forms use react-hook-form with zod validation
- Shadcn UI components follow design guidelines strictly
- RTL support tested and working correctly
- Mobile-responsive across all breakpoints
