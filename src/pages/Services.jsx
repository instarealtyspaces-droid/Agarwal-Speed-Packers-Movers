import React from 'react';
import SEO from '../components/common/SEO';
import ServiceCard from '../components/services/ServiceCard';
import { SERVICES } from '../data/servicesData';
import { COMPANY_CONFIG } from '../constants/config';
import { Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <SEO
        title="Relocation Services in Hyderabad"
        description="Explore our specialized packing and moving services in Hyderabad: household shifting, office relocation, local moving, car & bike transport, and warehouse storage."
        canonicalPath="/services"
      />

      <section className="bg-navy-900 text-white py-16 pattern-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold text-royal-300 tracking-widest uppercase bg-royal-800/80 px-3 py-1 rounded-full border border-royal-600">
            Professional Moving Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Packers & Movers Services in Hyderabad
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Engineered packaging materials, skilled manual handling crews, and closed container vehicles tailored for safe intra-city and interstate moves.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Standards Banner */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-navy-900 rounded-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="space-y-2">
                <ShieldCheck className="w-8 h-8 text-accent-amber mx-auto md:mx-0" />
                <h3 className="font-heading font-bold text-lg text-white">Verified Packaging Standards</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  5-ply corrugated cartons, virgin air bubble wrap, edge protectors, and waterproof shrink wrap on all dispatches.
                </p>
              </div>
              <div className="space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto md:mx-0" />
                <h3 className="font-heading font-bold text-lg text-white">Clear, Itemized Pricing</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Honest estimates detailing material costs, vehicle sizes, and labor breakdown without hidden surcharges.
                </p>
              </div>
              <div className="space-y-2">
                <Phone className="w-8 h-8 text-royal-400 mx-auto md:mx-0" />
                <h3 className="font-heading font-bold text-lg text-white">Dedicated Support</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Call our Hyderabad dispatch helpline at {COMPANY_CONFIG.phone} for scheduled coordination.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-navy-800 text-center">
              <Link
                to="/quote"
                className="inline-block py-3 px-8 rounded-lg bg-accent-orange text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition shadow"
              >
                Get Custom Moving Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
