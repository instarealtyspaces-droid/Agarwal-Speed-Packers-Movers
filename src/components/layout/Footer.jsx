import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_CONFIG } from '../../constants/config';
import { SERVICES } from '../../data/servicesData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-royal-700 text-white flex items-center justify-center font-bold text-xl tracking-tight">
                <span>A</span>
                <span className="text-accent-amber">S</span>
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-white text-lg tracking-tight">
                  Agarwal Speed
                </h3>
                <p className="text-[11px] font-semibold text-royal-400 tracking-wider uppercase">
                  Packers & Movers
                </p>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional, verified packing and relocation services across Hyderabad and all major Indian cities. Secure transportation with zero hidden costs.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-Layer Protective Packing</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-amber shrink-0" />
                <span>{COMPANY_CONFIG.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-500" />
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-500" />
                  Work Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-500" />
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-500" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-white transition flex items-center gap-1.5 font-semibold text-accent-amber">
                  <ArrowRight className="w-3.5 h-3.5 text-accent-amber" />
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-4 tracking-wide">
              Relocation Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-white transition flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-royal-500" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-4 tracking-wide">
              Hyderabad Hub
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {COMPANY_CONFIG.location}
                  <br />
                  <span className="text-xs text-slate-400">Serving Hitec City, Gachibowli, Kukatpally, Banjara Hills & Secunderabad</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-royal-400 shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="hover:text-white transition">
                  {COMPANY_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-royal-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white transition">
                  {COMPANY_CONFIG.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-navy-800">
              <Link
                to="/quote"
                className="inline-block text-center w-full py-2.5 px-4 rounded bg-accent-orange text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition shadow"
              >
                Request Moving Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {currentYear} {COMPANY_CONFIG.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Hyderabad, Telangana, India</span>
            <span className="text-slate-600">|</span>
            <span>{COMPANY_CONFIG.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
