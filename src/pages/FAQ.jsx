import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    q: "How do I request a moving quote?",
    a: "You can submit our quick online quotation form with your origin, destination, moving date, and home size. Alternatively, call our Hyderabad helpline directly. We will review your inventory and share a clear, itemized proposal."
  },
  {
    q: "What items can and cannot be packed?",
    a: "We pack all household furniture, electronics, kitchen crockery, clothing, books, and gym equipment. We cannot transport flammable liquids, gas cylinders (unless completely emptied and certified), perishables, liquid chemicals, or open fireworks."
  },
  {
    q: "How is household shifting handled?",
    a: "Our crew arrives on the scheduled morning with packing cartons, bubble wraps, and protective tapes. We dismantle modular beds and wardrobes, wrap fragile items in multiple layers, carefully load them into dedicated closed container trucks, and reassemble them at your new home."
  },
  {
    q: "Do you provide office relocation?",
    a: "Yes. We offer commercial and corporate shifting across Hyderabad, including Hitec City, Gachibowli, and Financial District. Our service includes IT server and desktop antistatic packing, file archive segregation, and workstation dismantling, usually coordinated over weekends to avoid workday disruptions."
  },
  {
    q: "Do you transport cars and bikes?",
    a: "Yes. Two-wheelers are wrapped with protective bubble sheets and crated or strapped securely inside closed vehicles. Cars are transported on dedicated hydraulic vehicle carriers with wheel stoppers to avoid transit movement."
  },
  {
    q: "Is storage and warehousing available?",
    a: "Yes, we provide secure, climate-controlled warehouse bays in Hyderabad for short-term or long-term requirements. Goods are palletized and sealed against dust, pests, and moisture."
  },
  {
    q: "How should I prepare before moving day?",
    a: "We recommend sorting personal documents, jewelry, and cash to carry with you personally. Defrost your refrigerator 24 hours prior to transit, and obtain necessary gate passes or elevator booking permissions from your society management."
  },
  {
    q: "What information is required for an accurate quotation?",
    a: "We need the exact pickup locality, destination city/locality, elevator availability at both locations, floor numbers, preferred date, and an overview of major furniture and electronic appliances."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Frequently Asked Questions | Agarwal Speed Packers & Movers Hyderabad"
        description="Find clear answers to common questions about household shifting, office relocation, vehicle moving, packing materials, and pricing in Hyderabad."
        canonicalPath="/faq"
      />

      <section className="bg-navy-900 text-white py-16 pattern-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold text-royal-300 tracking-widest uppercase bg-royal-800/80 px-3 py-1 rounded-full border border-royal-600">
            Relocation Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Honest, factual information to help you plan your move without surprises.
          </p>

          <div className="pt-4 max-w-lg mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. car, quote, packing)..."
              className="w-full px-4 py-3 pl-11 rounded-lg bg-navy-800 border border-navy-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-royal-500 placeholder-slate-400"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading font-bold text-navy-900 text-base sm:text-lg">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-royal-600 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-navy-900">No questions match your query</h3>
                <p className="text-slate-500 text-sm mt-1">
                  Try searching for another term or talk directly to our Hyderabad team.
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 p-8 bg-white rounded-xl border border-slate-200 text-center space-y-4">
            <h3 className="font-heading font-bold text-xl text-navy-900">
              Have a Question That Isn't Listed?
            </h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Our move coordinators are ready to clarify any transit questions or special packing requirements.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-navy-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-royal-800 transition"
              >
                Contact Our Helpdesk
              </Link>
              <Link
                to="/quote"
                className="px-6 py-3 rounded-lg bg-accent-orange text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition"
              >
                Request Moving Quote
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
