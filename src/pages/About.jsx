import React from 'react';
import SEO from '../components/common/SEO';
import { COMPANY_CONFIG } from '../constants/config';
import { ShieldCheck, Truck, Users, MapPin, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <SEO
        title="About Agarwal Speed Packers & Movers | Hyderabad"
        description="Learn more about Agarwal Speed Packers & Movers in Hyderabad. Built on rigorous packaging standards, trained handlers, and transparent relocation logistics."
        canonicalPath="/about"
      />

      {/* Header */}
      <section className="bg-navy-900 text-white py-16 pattern-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold text-royal-300 tracking-widest uppercase bg-royal-800/80 px-3 py-1 rounded-full border border-royal-600">
            About Our Company
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Agarwal Speed Packers & Movers
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Professional relocation operations serving homeowners, tech professionals, and corporate organizations across Hyderabad and all India.
          </p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-heading font-extrabold text-navy-900">
                A Principled Approach to Packers & Movers in Hyderabad
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Relocating a home or office is often one of the most critical transitions an individual or company undertakes. Fragile crockery, heavy modular furniture, sensitive IT equipment, and cherished personal belongings require genuine craftsmanship, not casual labor.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong>Agarwal Speed Packers & Movers</strong>, we built our operational framework around accountability: multi-layer packaging utilizing industrial bubble wrap, corrugated sheets, waterproof shrink films, and dedicated closed container trucks. We maintain an uncompromising stance on transit safety and transparent billing.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-surface-light border border-slate-200">
                  <h3 className="font-heading font-bold text-navy-900 text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-royal-600" />
                    Zero Hidden Costs
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Itemized quotes detailing packing material grades, vehicle sizing, and transit guidelines.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface-light border border-slate-200">
                  <h3 className="font-heading font-bold text-navy-900 text-sm flex items-center gap-2">
                    <Truck className="w-4 h-4 text-royal-600" />
                    Closed Containers
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Weatherproof transit ensuring goods remain free of dust, rain damage, and road vibration impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Packers and Movers Logistics in Hyderabad"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Operational Values */}
      <section className="py-16 bg-surface-light border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-extrabold text-navy-900">
              Our Core Operational Standards
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              The foundational pillars that guide each move executed by Agarwal Speed Packers & Movers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-navy-900 text-lg">Skilled Logistics Personnel</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our moving personnel are trained in systematic dismantle and assembly, heavy appliance handling, and apartment elevator safety regulations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-navy-900 text-lg">Quality Packaging Materials</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We only deploy virgin bubble wraps, multi-layer corrugated rolls, heavy carton boxes, stretch films, and corner guards for every assignment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-navy-900 text-lg">Deep Hyderabad Coverage</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From Madhapur and Hitec City IT corridors to residential townships in Kukatpally, Banjara Hills, and Secunderabad, we navigate local routes seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900">
            Have Questions About Relocating in Hyderabad?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Reach out to our logistics team to discuss your moving checklist, inventory volume, or packing preferences.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/quote"
              className="py-3 px-6 rounded-lg bg-accent-orange text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition shadow"
            >
              Request Moving Quote
            </Link>
            <Link
              to="/contact"
              className="py-3 px-6 rounded-lg border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
