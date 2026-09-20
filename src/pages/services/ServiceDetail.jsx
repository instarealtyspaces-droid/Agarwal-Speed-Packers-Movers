import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import QuoteForm from '../../components/forms/QuoteForm';
import { getServiceBySlug, SERVICES } from '../../data/servicesData';
import { COMPANY_CONFIG } from '../../constants/config';
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <SEO
        title={`${service.title} in Hyderabad`}
        description={`${service.title} in Hyderabad by Agarwal Speed Packers & Movers. ${service.shortDescription}`}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-14 pattern-dots-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-royal-300 uppercase tracking-widest mb-3">
              <Link to="/services" className="hover:text-white transition">Services</Link>
              <span>/</span>
              <span className="text-accent-amber">{service.title}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
              {service.title} in Hyderabad
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Quote Form */}
      <section className="py-16 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Feature Image */}
              <div className="rounded-xl overflow-hidden shadow-card border border-slate-200 h-80 sm:h-96">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Comprehensive Description */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-2xl font-heading font-bold text-navy-900">
                  Service Overview
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {service.fullDescription}
                </p>
                {service.idealFor && (
                  <div className="mt-4 p-4 rounded-lg bg-royal-50 border border-royal-100 text-xs text-royal-900">
                    <strong>Recommended For:</strong> {service.idealFor}
                  </div>
                )}
              </div>

              {/* Key Features */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-heading font-bold text-navy-900">
                  What’s Included in {service.title}
                </h3>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Process */}
              {service.process && (
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
                  <h3 className="text-xl font-heading font-bold text-navy-900">
                    Step-by-Step Moving Execution
                  </h3>
                  <div className="space-y-6">
                    {service.process.map((step) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="w-9 h-9 rounded-full bg-navy-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-navy-900 text-base">
                            {step.title}
                          </h4>
                          <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Services Link */}
              <div className="pt-4">
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-4">
                  Explore Other Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {otherServices.map((other) => (
                    <Link
                      key={other.slug}
                      to={`/services/${other.slug}`}
                      className="p-4 rounded-lg border border-slate-200 bg-white hover:border-royal-400 hover:shadow-sm transition flex items-center justify-between"
                    >
                      <span className="text-sm font-semibold text-navy-900">{other.title}</span>
                      <ArrowRight className="w-4 h-4 text-royal-600" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Quote Form & Direct Helpline */}
            <div className="lg:col-span-5 space-y-6">
              <div className="sticky top-24 space-y-6">
                <QuoteForm compact={true} />

                {/* Direct Call Card */}
                <div className="bg-navy-900 text-white p-6 rounded-xl shadow-card space-y-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent-amber" />
                    <span className="font-semibold text-sm">Need Urgent Relocation Advice?</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Speak directly with our move coordinator in Hyderabad for scheduled dates and instant cost breakdown.
                  </p>
                  <a
                    href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-royal-700 hover:bg-royal-600 text-white font-bold text-sm transition"
                  >
                    <Phone className="w-4 h-4 text-accent-amber" />
                    <span>Call Now: {COMPANY_CONFIG.phone}</span>
                  </a>
                </div>

                {/* Hyderabad Local Coverage Tag */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    <MapPin className="w-4 h-4 text-royal-600" />
                    <span>Operating Localities</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Doorstep pickup and delivery available across Hitec City, Gachibowli, Kukatpally, Madhapur, Kondapur, Banjara Hills, Secunderabad, and all greater Hyderabad areas.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
