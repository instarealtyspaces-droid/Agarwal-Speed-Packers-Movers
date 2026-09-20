import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import { COMPANY_CONFIG } from '../constants/config';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { contactService } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (10+ digits)';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message cannot be empty';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, success: false, error: null });

    try {
      await contactService.submitContactForm(formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to submit contact request. Please call our direct helpline.'
      });
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Agarwal Speed Packers & Movers! I would like to get in touch regarding relocation in Hyderabad.`
  );

  return (
    <>
      <SEO
        title="Contact Agarwal Speed Packers & Movers | Hyderabad"
        description="Get in touch with Agarwal Speed Packers & Movers in Hyderabad. Call, email, or send an inquiry for household shifting, office moving, or storage."
        canonicalPath="/contact"
      />

      {/* Header */}
      <section className="bg-navy-900 text-white py-16 pattern-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold text-royal-300 tracking-widest uppercase bg-royal-800/80 px-3 py-1 rounded-full border border-royal-600">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Contact Agarwal Speed Packers & Movers
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Our relocation specialists are available to answer inquiries, schedule home surveys, and organize your move.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-16 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-card space-y-6">
                <h2 className="text-2xl font-heading font-bold text-navy-900">
                  Hyderabad Hub Details
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-royal-50 text-royal-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy-900 text-sm">Operating Location</h3>
                      <p className="text-slate-600 text-sm mt-0.5">{COMPANY_CONFIG.location}</p>
                      <p className="text-xs text-slate-400 mt-1">{COMPANY_CONFIG.addressPlaceholder}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-royal-50 text-royal-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy-900 text-sm">Phone Helpline</h3>
                      <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="text-royal-600 font-semibold text-sm hover:underline mt-0.5 block">
                        {COMPANY_CONFIG.phone}
                      </a>
                      <p className="text-xs text-slate-400">Available 7:00 AM – 10:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-royal-50 text-royal-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy-900 text-sm">Official Email</h3>
                      <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-royal-600 font-semibold text-sm hover:underline mt-0.5 block">
                        {COMPANY_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-royal-50 text-royal-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy-900 text-sm">Business Hours</h3>
                      <p className="text-slate-600 text-sm mt-0.5">{COMPANY_CONFIG.businessHours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-navy-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-royal-800 transition shadow"
                  >
                    <Phone className="w-4 h-4 text-accent-amber" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Map embed */}
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <iframe
                  title="Hyderabad Operational Area"
                  src={COMPANY_CONFIG.googleMapsEmbed}
                  width="100%"
                  height="260"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-card">
                <h2 className="text-2xl font-heading font-bold text-navy-900">
                  Send Us a Direct Message
                </h2>
                <p className="text-slate-500 text-sm mt-1 mb-6">
                  Fill out the form below and our Hyderabad logistics support team will reply promptly.
                </p>

                {status.success ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center space-y-4 animate-fadeIn">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-lg font-bold text-emerald-900">Message Delivered</h3>
                    <p className="text-sm text-emerald-800">
                      Thank you for contacting Agarwal Speed Packers & Movers. Our representative will respond shortly.
                    </p>
                    <button
                      onClick={() => setStatus({ loading: false, success: false, error: null })}
                      className="text-xs font-semibold px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {status.error && (
                      <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-sm flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{status.error}</span>
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Sharma"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                          errors.name ? 'border-rose-400' : 'border-slate-300 focus:border-royal-500'
                        } focus:outline-none focus:ring-2 focus:ring-royal-100`}
                      />
                      {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contactPhone" className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="contactPhone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 98765 43210"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                            errors.phone ? 'border-rose-400' : 'border-slate-300 focus:border-royal-500'
                          } focus:outline-none focus:ring-2 focus:ring-royal-100`}
                        />
                        {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="contactEmail" className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="contactEmail"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. anand@example.com"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                            errors.email ? 'border-rose-400' : 'border-slate-300 focus:border-royal-500'
                          } focus:outline-none focus:ring-2 focus:ring-royal-100`}
                        />
                        {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1">
                        Subject / Moving Type
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Household Shifting from Kondapur to Bengaluru"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-royal-100 focus:border-royal-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactMessage" className="block text-xs font-semibold text-slate-700 mb-1">
                        Message / Query Details <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="contactMessage"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your moving requirements, volume, or specific questions..."
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                          errors.message ? 'border-rose-400' : 'border-slate-300 focus:border-royal-500'
                        } focus:outline-none focus:ring-2 focus:ring-royal-100`}
                      />
                      {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full py-3.5 px-6 rounded-lg bg-accent-orange text-white font-bold text-sm tracking-wide uppercase hover:bg-accent-hover transition shadow flex items-center justify-center space-x-2 disabled:opacity-60"
                    >
                      {status.loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
