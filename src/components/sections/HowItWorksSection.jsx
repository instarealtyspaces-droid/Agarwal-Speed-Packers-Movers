import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../../data/whyChooseUsData';
import { ClipboardList, CalendarClock, Package, CheckCircle2 } from 'lucide-react';

const STEP_ICONS = [ClipboardList, CalendarClock, Package, CheckCircle2];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-surface-light border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-royal-600 tracking-widest uppercase bg-royal-50 px-3 py-1 rounded-full border border-royal-100">
            Our Proven 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-900 mt-3">
            How Relocation Works
          </h2>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            From your first inquiry to final setup in your new home, our relocation workflow guarantees accountability and care at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || CheckCircle2;
            return (
              <div
                key={step.number}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-heading font-black text-royal-600/20">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent-amber" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
