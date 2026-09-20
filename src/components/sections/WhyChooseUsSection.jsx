import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Award, 
  Truck, 
  Receipt, 
  Headphones, 
  Clock 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/whyChooseUsData';

const ICON_MAP = {
  ShieldCheck,
  Users,
  Award,
  Truck,
  ReceiptCheck: Receipt,
  Headphones,
  Clock
};

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-royal-600 tracking-widest uppercase bg-royal-50 px-3 py-1 rounded-full border border-royal-100">
            Reliability & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-900 mt-3">
            Why Choose Agarwal Speed Packers & Movers?
          </h2>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            We focus on systematic logistics principles: high-density multi-layer packing materials, trained loading crew, dedicated closed containers, and transparent billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = ICON_MAP[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="p-6 rounded-xl border border-slate-200 bg-surface-light/60 hover:bg-white hover:border-royal-200 hover:shadow-card transition duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-royal-600" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
