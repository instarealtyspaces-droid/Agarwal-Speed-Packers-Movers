import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../../constants/config';
import QuoteForm from '../forms/QuoteForm';

export default function Hero() {
  return (
    <section className="relative bg-navy-900 text-white overflow-hidden py-14 lg:py-20 pattern-dots-dark">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-royal-900/70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-royal-800/80 border border-royal-600/50 text-xs font-semibold text-royal-200">
              <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
              <span>Hyderabad's Trusted Packers & Movers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
              Move Smarter. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-400 via-blue-200 to-accent-yellow">
                Move Safer.
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-200">
              Professional Packers & Movers in Hyderabad
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Agarwal Speed Packers & Movers provides careful, structured relocation services across Hyderabad and all major cities in India. From multi-layer protective furniture wrapping to closed-container transportation, experience zero-damage and on-time moving assistance.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-accent-amber shrink-0" />
                <span>Multi-Layer Bubble & Corrugated Packing</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-accent-amber shrink-0" />
                <span>Closed Container Direct Transit</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-accent-amber shrink-0" />
                <span>Trained Loading & Unloading Staff</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-accent-amber shrink-0" />
                <span>Transparent Quotes with Zero Hidden Costs</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/quote"
                className="px-6 py-3.5 rounded-lg bg-accent-orange text-white font-bold text-sm tracking-wide uppercase hover:bg-accent-hover transition shadow-elevated flex items-center space-x-2"
              >
                <span>GET FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="px-6 py-3.5 rounded-lg bg-royal-800/90 hover:bg-royal-700 text-white font-semibold text-sm transition border border-royal-600/60 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-accent-amber" />
                <span>CALL NOW: {COMPANY_CONFIG.phone}</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Serving Hitec City, Gachibowli, Kukatpally, Secunderabad, and 40+ Hyderabad hubs</span>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-5">
            <QuoteForm compact={true} />
          </div>

        </div>
      </div>
    </section>
  );
}
