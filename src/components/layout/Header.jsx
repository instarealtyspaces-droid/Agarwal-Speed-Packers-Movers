import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_CONFIG, NAV_LINKS } from '../../constants/config';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Notice Bar */}
      <div className="bg-navy-900 text-slate-300 text-xs py-2 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-accent-amber shrink-0" />
            <span className="truncate">Hyderabad, Telangana & All India Relocation Services</span>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Transit Safety
            </span>
            <span>Support: {COMPANY_CONFIG.phone}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label="Agarwal Speed Packers & Movers Home">
            <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center font-bold text-xl tracking-tight shadow-sm group-hover:bg-royal-700 transition">
              <span className="text-white">A</span>
              <span className="text-accent-amber">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-navy-900 text-lg leading-tight tracking-tight">
                Agarwal Speed
              </span>
              <span className="text-[11px] font-semibold text-royal-700 tracking-wider uppercase">
                Packers & Movers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-royal-600 font-bold' : 'text-slate-600 hover:text-navy-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call & Quote CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="flex items-center space-x-2 text-navy-900 font-semibold text-sm hover:text-royal-700 transition"
              aria-label={`Call us at ${COMPANY_CONFIG.phone}`}
            >
              <div className="w-8 h-8 rounded-full bg-royal-50 text-royal-600 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden xl:inline">{COMPANY_CONFIG.phone}</span>
            </a>

            <Link
              to="/quote"
              className="px-5 py-2.5 rounded-md bg-accent-orange text-white text-sm font-semibold shadow hover:bg-accent-hover transition flex items-center space-x-1.5"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              to="/quote"
              className="text-xs px-3 py-1.5 rounded bg-accent-orange text-white font-semibold"
            >
              QUOTE
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-royal-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'bg-royal-50 text-royal-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-md border border-slate-300 text-slate-800 font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-royal-600" />
                <span>Call: {COMPANY_CONFIG.phone}</span>
              </a>
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-md bg-accent-orange text-white font-semibold text-sm shadow"
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
