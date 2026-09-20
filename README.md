# Agarwal Speed Packers & Movers Frontend

Premium, production-ready React.js frontend built with Vite, Tailwind CSS, React Router DOM, and Lucide React for **Agarwal Speed Packers & Movers** (Hyderabad, Telangana, India).

## Overview

* **Business Name:** Agarwal Speed Packers & Movers
* **Operating City:** Hyderabad, Telangana, India
* **Primary Domain:** agarwalspeedpackers.in
* **Core Focus:** Household shifting, corporate office relocation, local shifting, inter-city moves, car & bike transport, and secure warehousing.

## Key Features

1. **Brand Aesthetic:** Professional Deep Navy, Royal Blue, and Warm Amber color scheme tailored for authentic logistics operations without generic AI templates or exaggerated claims.
2. **Complete Routing:**
   - `/` — Homepage with Hero, 9 Services, Why Choose Us, 4-step workflow, and Hyderabad-focused SEO section.
   - `/about` — Operational standards, story, and values.
   - `/services` — Complete catalog of 9 specialized services.
   - `/services/:slug` — Dedicated dynamic service pages (`household-shifting`, `office-shifting`, `local-shifting`, `domestic-relocation`, `car-transportation`, `bike-transportation`, `storage`).
   - `/gallery` — Filterable operations gallery with lightbox modal.
   - `/faq` — Searchable accordion knowledge base for moving queries.
   - `/contact` — Comprehensive contact page with responsive inquiry form and Google Maps embed.
   - `/quote` — Detailed multi-field moving quote calculator form with real validation.
3. **Mobile Experience:**
   - Sticky navigation header with mobile drawer.
   - Fixed mobile bottom quick-action bar with direct Call, WhatsApp, and Quote buttons.
4. **API Architecture Ready:**
   - Clean Axios client in `src/services/api.js` structured for upcoming Node.js / Express / MongoDB endpoints (`/api/quotes`, `/api/contact`).
   - Configurable environment variable `VITE_API_BASE_URL`.
5. **SEO & Structured Data:**
   - Meta title, description, canonical tags, and OpenGraph headers per page using `react-helmet-async`.
   - JSON-LD structured schema for `MovingCompany`.

## Tech Stack

* **Framework:** React 18 (Vite)
* **Styling:** Tailwind CSS with custom typography (`Outfit` and `Plus Jakarta Sans`)
* **Routing:** React Router DOM v6
* **Icons:** Lucide React
* **SEO:** React Helmet Async
* **HTTP Client:** Axios

## Getting Started Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

## Environment Configuration

Copy `.env.example` to `.env`:

```env
VITE_API_BASE_URL=
VITE_SITE_URL=https://agarwalspeedpackers.in
VITE_PHONE=+919154209876
VITE_WHATSAPP=+919154209876
VITE_EMAIL=info@agarwalspeedpackers.in
```
