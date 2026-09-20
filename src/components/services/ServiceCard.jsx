import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building2, 
  Truck, 
  Globe, 
  Car, 
  Bike, 
  Warehouse, 
  PackageCheck, 
  Boxes,
  ArrowRight
} from 'lucide-react';

const ICON_MAP = {
  Home,
  Building2,
  Truck,
  Globe,
  Car,
  Bike,
  Warehouse,
  PackageCheck,
  Boxes
};

export default function ServiceCard({ service }) {
  const IconComponent = ICON_MAP[service.iconName] || Truck;

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group">
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-sm text-royal-700 flex items-center justify-center">
          <IconComponent className="w-5 h-5 text-royal-700" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-heading font-bold text-lg text-navy-900 group-hover:text-royal-600 transition">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/services/${service.slug}`}
            className="text-xs font-bold text-royal-700 hover:text-navy-900 inline-flex items-center space-x-1.5 transition uppercase tracking-wider"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[11px] font-medium text-slate-400">Hyderabad & Pan-India</span>
        </div>
      </div>
    </div>
  );
}
