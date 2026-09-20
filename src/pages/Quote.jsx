import React from 'react';
import SEO from '../components/common/SEO';
import QuoteForm from '../components/forms/QuoteForm';
import { COMPANY_CONFIG } from '../constants/config';
import { ShieldCheck, Clock, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

export default function Quote() {
  const whatsappMessage = encodeURIComponent(
    `Hello Agarwal Speed Packers & Movers! I would like to get a moving quotation for my relocation in Hyderabad.`
  );

  return (
    <>
      <SEO
        title="Get a Free Moving Quote | Agarwal Speed Packers & Movers Hyderabad"
        description="Request a free, transparent moving estimate for household shifting, office relocation, vehicle carriage, or warehouse storage in Hyderabad."
        canonicalPath="/quote"
      />

      <section className="bg-navy-900 text-white py-16 pattern-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold text-royal-300 tracking-widest uppercase bg-royal-800/80 px-3 py-1 rounded-full border border-royal-600">
            Instant Estimate
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Request Your Free Relocation Quote
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            No hidden charges. Clear itemized pricing based on your inventory, vehicle selection, and moving schedule.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Form */}
            <div className="lg:col-span-7">
              <QuoteForm compact={false} />
            </div>

            {/* Right Information & Assurances */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-heading font-bold text-lg text-navy-900">
                  What Happens After You Submit?
                </h3>
                
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-royal-50 text-royal-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <strong className="text-navy-900">Requirements Review:</strong> Our Hyderabad operations coordinator examines your route, volume, and date.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-royal-50 text-royal-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <strong className="text-navy-900">Itemized Estimate:</strong> We provide a clear quotation covering packing materials, vehicle type, and labor.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-royal-50 text-royal-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <strong className="text-navy-900">Move Day Confirmation:</strong> We lock your preferred time slot and assign your designated moving supervisor.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Direct Touch Options */}
              <div className="bg-navy-900 text-white p-6 rounded-xl shadow-card space-y-4">
                <h4 className="font-heading font-bold text-base text-white flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-amber" />
                  Prefer Immediate Phone Assistance?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our coordinators in Hyderabad can evaluate your moving inventory directly over the phone.
                </p>
                
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                    className="flex-1 py-3 px-4 rounded-lg bg-royal-700 hover:bg-royal-600 text-white font-bold text-xs text-center uppercase tracking-wider transition"
                  >
                    Call: {COMPANY_CONFIG.phone}
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center uppercase tracking-wider transition flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Our Promise: Clear Pricing Guarantee</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  No hidden elevator fees, no unexpected packing surcharges. All conditions are documented before work begins.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
