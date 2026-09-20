import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../../constants/config';

export default function MobileBottomCTA() {
  const whatsappMessage = encodeURIComponent(
    `Hello Agarwal Speed Packers & Movers! I need relocation assistance in Hyderabad.`
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-3 md:hidden shadow-elevated">
      <div className="grid grid-cols-3 gap-2 text-center">
        <a
          href={`tel:${COMPANY_CONFIG.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-navy-900 text-white font-semibold text-xs active:scale-95 transition"
        >
          <Phone className="w-3.5 h-3.5 text-accent-amber" />
          <span>CALL NOW</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-emerald-600 text-white font-semibold text-xs active:scale-95 transition"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WHATSAPP</span>
        </a>

        <Link
          to="/quote"
          className="flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-accent-orange text-white font-semibold text-xs active:scale-95 transition"
        >
          <span>GET QUOTE</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
