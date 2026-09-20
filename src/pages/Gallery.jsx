import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import { X, Search } from 'lucide-react';

const GALLERY_CATEGORIES = [
  'All',
  'Household Moving',
  'Office Moving',
  'Packing',
  'Transportation',
  'Warehouse'
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Household Furniture Protective Wrapping',
    category: 'Packing',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    description: 'Multi-layer bubble wrap and corrugated edge protections on wooden dining and living room tables.'
  },
  {
    id: 2,
    title: 'Corporate IT Workstation Transit',
    category: 'Office Moving',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    description: 'Systematic server and workstation packing during corporate office relocation in Hitec City.'
  },
  {
    id: 3,
    title: 'Closed Container Highway Carriage',
    category: 'Transportation',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    description: 'Weather-tight closed container vehicles parked for secured residential loading.'
  },
  {
    id: 4,
    title: 'Organized Palletized Warehousing',
    category: 'Warehouse',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80',
    description: 'Elevated wooden pallets and dust-proof shrink wraps safeguarding goods during transition periods.'
  },
  {
    id: 5,
    title: 'Residential High-Rise Apartment Move',
    category: 'Household Moving',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    description: 'Padded handling and careful elevator loading at a gated township in Gachibowli.'
  },
  {
    id: 6,
    title: 'Specialized Fragile Crockery Packing',
    category: 'Packing',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1000&q=80',
    description: '5-ply corrugated carton box packing with high-density foam wrapping for kitchen glassware.'
  },
  {
    id: 7,
    title: 'Secure Inter-City Cargo Transit',
    category: 'Transportation',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
    description: 'Dedicated national corridor transport connecting Hyderabad to interstate metropolitan destinations.'
  },
  {
    id: 8,
    title: 'Commercial Office Archive Relocation',
    category: 'Office Moving',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
    description: 'Tamper-evident sealed file cartons and ergonomic carting in Madhapur commercial complex.'
  },
  {
    id: 9,
    title: 'Vehicle Transport Carrier Loading',
    category: 'Transportation',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
    description: 'Hydraulic wheel lock ramp loading for car transportation from Hyderabad to Bangalore.'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Relocation Gallery | Agarwal Speed Packers & Movers Hyderabad"
        description="View real operations photography of household packing, office shifting, closed container transportation, and secure warehousing in Hyderabad."
        canonicalPath="/gallery"
      />

      <section className="bg-navy-900 text-white py-16 pattern-dots-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold text-royal-300 tracking-widest uppercase bg-royal-800/80 px-3 py-1 rounded-full border border-royal-600">
            Field Operations
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Relocation & Packaging Gallery
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Glimpses into our packing methodologies, heavy furniture safeguards, and fleet transportation across Hyderabad.
          </p>
        </div>
      </section>

      <section className="py-12 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                  activeCategory === cat
                    ? 'bg-royal-600 text-white shadow'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-card hover:shadow-card-hover transition cursor-pointer"
              >
                <div className="h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4 bg-white">
                  <span className="text-[11px] font-bold text-royal-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-sm text-navy-900 mt-1 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96 sm:h-[450px] bg-slate-900">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-navy-900/80 text-white hover:bg-navy-900 transition"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-royal-600 uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="font-heading font-bold text-xl text-navy-900 mt-1">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
