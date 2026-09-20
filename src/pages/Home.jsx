import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import ServiceCard from '../components/services/ServiceCard';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import HyderabadSeoSection from '../components/sections/HyderabadSeoSection';
import { SERVICES } from '../data/servicesData';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../constants/config';

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": COMPANY_CONFIG.name,
    "url": COMPANY_CONFIG.siteUrl,
    "telephone": COMPANY_CONFIG.phone,
    "email": COMPANY_CONFIG.email,
    "areaServed": [
      {
        "@type": "City",
        "name": "Hyderabad"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "description": "Professional packers and movers in Hyderabad providing safe household shifting, office relocation, vehicle transport, and warehousing."
  };

  return (
    <>
      <SEO
        title="Packers and Movers in Hyderabad"
        description="Agarwal Speed Packers & Movers provides safe, reliable household shifting, office relocation, car & bike transport in Hyderabad and across India. Get a free quote today."
        canonicalPath="/"
        schemaData={schemaData}
      />

      {/* Hero Section */}
      <Hero />

      {/* Services Grid Section */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-royal-600 tracking-widest uppercase bg-royal-50 px-3 py-1 rounded-full border border-royal-100">
                Logistics Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-900 mt-2">
                Our Comprehensive Moving Services
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-xl">
                Systematic packing, loading, and transit customized for residential and commercial relocations.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/services"
                className="text-xs font-bold text-royal-700 hover:text-navy-900 inline-flex items-center gap-1.5 uppercase tracking-wider"
              >
                <span>View All 9 Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Hyderabad Local SEO Section */}
      <HyderabadSeoSection />

      {/* Conversion Banner */}
      <section className="bg-navy-900 py-16 text-white border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-800/80 border border-royal-600 text-xs font-semibold text-royal-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Damage Packing Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white max-w-3xl mx-auto">
            Ready to Plan Your Relocation in Hyderabad?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Contact Agarwal Speed Packers & Movers today for an itemized estimate, scheduled survey, or immediate local shifting support.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="px-6 py-3.5 rounded-lg bg-accent-orange text-white font-bold text-sm tracking-wide uppercase hover:bg-accent-hover transition shadow-elevated flex items-center space-x-2"
            >
              <span>GET FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="px-6 py-3.5 rounded-lg bg-royal-800 hover:bg-royal-700 text-white font-semibold text-sm transition border border-royal-600 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-accent-amber" />
              <span>CALL: {COMPANY_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
