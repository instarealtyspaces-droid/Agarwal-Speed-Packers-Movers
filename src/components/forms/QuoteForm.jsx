import React, { useState } from 'react';
import { Phone, MessageSquare, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../../constants/config';
import { quoteService } from '../../services/api';

const SERVICE_OPTIONS = [
  "Household Shifting",
  "Office Shifting",
  "Local Shifting within Hyderabad",
  "Domestic / Interstate Relocation",
  "Car Transportation",
  "Bike Transportation",
  "Storage & Warehousing",
  "Packing & Unpacking Only"
];

export default function QuoteForm({ compact = false }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickupLocation: '',
    dropLocation: '',
    movingType: 'Household Shifting',
    preferredDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (10+ digits)';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.pickupLocation.trim()) errs.pickupLocation = 'Pickup locality in Hyderabad or origin is required';
    if (!formData.dropLocation.trim()) errs.dropLocation = 'Destination locality / city is required';
    if (!formData.preferredDate) errs.preferredDate = 'Estimated moving date is required';

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
      await quoteService.createQuote(formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        pickupLocation: '',
        dropLocation: '',
        movingType: 'Household Shifting',
        preferredDate: '',
        message: ''
      });
    } catch (err) {
      console.error('Quote submission error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to submit quote inquiry. Please reach out directly by calling our phone helpline.'
      });
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Agarwal Speed Packers & Movers! I would like to request an estimate for relocation from Hyderabad.`
  );

  return (
    <div className={`bg-white rounded-xl shadow-card border border-slate-200 overflow-hidden ${compact ? 'p-6' : 'p-6 sm:p-8'}`}>
      <div className="border-b border-slate-100 pb-4 mb-6">
        <h3 className="text-xl font-heading font-bold text-navy-900">
          Request a Free Moving Quote
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Instant call-back with estimated moving charges and packing plan.
        </p>
      </div>

      {status.success ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center space-y-4 animate-fadeIn">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-bold text-emerald-900">Thank You for Inquiring!</h4>
          <p className="text-sm text-emerald-800">
            Your relocation details have been received. Our Hyderabad move coordinator will contact you shortly with an itemized estimate.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => setStatus({ loading: false, success: false, error: null })}
              className="text-xs font-semibold px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {status.error && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-sm flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{status.error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Ramesh Reddy"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                  errors.fullName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-royal-500 focus:ring-royal-100'
                } focus:outline-none focus:ring-2 transition`}
              />
              {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 98765 43210"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                  errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-royal-500 focus:ring-royal-100'
                } focus:outline-none focus:ring-2 transition`}
              />
              {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pickupLocation" className="block text-xs font-semibold text-slate-700 mb-1">
                Pickup Locality / City <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="e.g. Gachibowli, Hyderabad"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                  errors.pickupLocation ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-royal-500 focus:ring-royal-100'
                } focus:outline-none focus:ring-2 transition`}
              />
              {errors.pickupLocation && <p className="text-xs text-rose-500 mt-1">{errors.pickupLocation}</p>}
            </div>

            <div>
              <label htmlFor="dropLocation" className="block text-xs font-semibold text-slate-700 mb-1">
                Drop Locality / City <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="dropLocation"
                name="dropLocation"
                value={formData.dropLocation}
                onChange={handleChange}
                placeholder="e.g. Whitefield, Bengaluru or Madhapur"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                  errors.dropLocation ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-royal-500 focus:ring-royal-100'
                } focus:outline-none focus:ring-2 transition`}
              />
              {errors.dropLocation && <p className="text-xs text-rose-500 mt-1">{errors.dropLocation}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="movingType" className="block text-xs font-semibold text-slate-700 mb-1">
                Service Type
              </label>
              <select
                id="movingType"
                name="movingType"
                value={formData.movingType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-royal-100 focus:border-royal-500"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-xs font-semibold text-slate-700 mb-1">
                Preferred Moving Date <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                  errors.preferredDate ? 'border-rose-400' : 'border-slate-300 focus:border-royal-500'
                } focus:outline-none focus:ring-2 focus:ring-royal-100`}
              />
              {errors.preferredDate && <p className="text-xs text-rose-500 mt-1">{errors.preferredDate}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. ramesh@example.com"
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                errors.email ? 'border-rose-400' : 'border-slate-300 focus:border-royal-500'
              } focus:outline-none focus:ring-2 focus:ring-royal-100`}
            />
            {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
          </div>

          {!compact && (
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                Major Items / Special Instructions (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows="2"
                value={formData.message}
                onChange={handleChange}
                placeholder="e.g. 2BHK items, double bed, 55-inch TV, refrigerator, washing machine"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-royal-100 focus:border-royal-500"
              />
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3.5 px-6 rounded-lg bg-accent-orange text-white font-bold text-sm tracking-wide uppercase hover:bg-accent-hover transition shadow flex items-center justify-center space-x-2 disabled:opacity-60"
            >
              {status.loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>GET FREE QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Quick Alternative CTAs */}
          <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-semibold">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-navy-800 text-navy-900 hover:bg-slate-50 transition"
            >
              <Phone className="w-3.5 h-3.5 text-royal-600" />
              <span>CALL NOW</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
