# Agent Architecture & Developer Guide

## Project Summary
This codebase is the production React + Vite frontend for **Agarwal Speed Packers & Movers** (`agarwalspeedpackers.in`), serving Hyderabad, Telangana and pan-India relocation needs.

## Directory Structure
```
src/
├── components/
│   ├── common/         # Generic utilities like SEO.jsx (React Helmet Async wrapper)
│   ├── forms/          # Form components with inline validation (QuoteForm.jsx)
│   ├── home/           # Homepage Hero and composite elements
│   ├── layout/         # Header.jsx, Footer.jsx, MobileBottomCTA.jsx
│   ├── sections/       # Reusable sections (HowItWorks, WhyChooseUs, HyderabadSeo)
│   └── services/       # ServiceCard.jsx and service-specific components
├── constants/
│   └── config.js       # Centralized business information, phone/email placeholders, NAV links
├── data/
│   ├── servicesData.js # Array of 9 structured relocation services with slugs & details
│   └── whyChooseUsData.js # Value propositions and 4-step workflow steps
├── layouts/
│   └── MainLayout.jsx  # Primary page wrapper integrating Header, Footer & Mobile Bottom CTA
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Gallery.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   ├── Quote.jsx
│   └── services/
│       └── ServiceDetail.jsx # Dynamic route handler for /services/:slug
├── routes/
│   └── AppRoutes.jsx   # Route mapping
└── services/
    └── api.js          # Axios API layer ready for Node/Express/Mongo endpoints
```

## Architectural Guidelines
1. **No Competitor References:** All content strictly represents Agarwal Speed Packers & Movers. Never introduce competitor names, copied texts, or unverified claims.
2. **Dynamic Service Pages:** Adding or modifying a service should be done in `src/data/servicesData.js`. The routes under `/services/:slug` dynamically read from this source of truth.
3. **Backend API Integration:**
   - Any backend endpoints (e.g. `POST /api/quotes`, `POST /api/contact`) must be added through `src/services/api.js`.
   - Never hardcode backend URLs inside React components. Always consume `import.meta.env.VITE_API_BASE_URL`.
4. **Form Handling:** Forms implement client-side validation, error banners, loading spinners, and accessible ARIA attributes.
