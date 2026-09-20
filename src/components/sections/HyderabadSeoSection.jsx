import React from 'react';
import { MapPin, CheckCircle2, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '../../constants/config';
import { Link } from 'react-router-dom';

export default function HyderabadSeoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-royal-600 tracking-widest uppercase bg-royal-50 px-3 py-1 rounded-full border border-royal-100">
              Hyderabad Relocation Specialists
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-900 leading-tight">
              Comprehensive Packers and Movers Across Hyderabad & Secunderabad
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Moving your home or business in Hyderabad comes with specific requirements: managing gated community permissions, navigating narrow inner colony lanes, handling high-rise elevator bookings, and timing transfers outside peak traffic hours on Outer Ring Road or PVNR Expressway.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>Agarwal Speed Packers & Movers</strong> brings deep local domain experience. Whether you require household shifting in Gachibowli, office relocation in Hitec City, or inter-state container transit from Hyderabad to Bangalore, Chennai, or Mumbai, our dedicated teams ensure swift packing, zero damage, and punctual doorstep delivery.
            </p>

            <div className="pt-2">
              <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-3">
                Key Localities Frequently Served in Hyderabad:
              </h3>
              <div className="flex flex-wrap gap-2">
                {COMPANY_CONFIG.keyAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                  >
                    <MapPin className="w-3 h-3 text-royal-600" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="px-5 py-3 rounded-lg bg-navy-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-royal-800 transition shadow"
              >
                Get Local Hyderabad Estimate
              </Link>
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="px-5 py-3 rounded-lg border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-royal-600" />
                <span>Call Hyderabad Desk</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-navy-900 text-white p-8 rounded-2xl shadow-elevated space-y-6">
              <h3 className="text-xl font-heading font-bold text-white">
                Hyderabad Service Highlights
              </h3>
              
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Same-Day Local Shifting:</strong> Rapid packing and relocation across Cyberabad and Secunderabad residential colonies.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Corporate Tech Relocations:</strong> Weekend IT asset relocations in Madhapur, Financial District, and Kondapur without weekday downtime.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">High-Rise Apartment Expertise:</strong> Lift padding, floor protection, and pre-approvals for gated townships.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Direct Inter-City Highway Routes:</strong> Daily closed-body containers departing Hyderabad for nationwide destinations.
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-navy-800 text-xs text-slate-400">
                Operating officially under Agarwal Speed Packers & Movers. All rights reserved.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
