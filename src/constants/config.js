export const COMPANY_CONFIG = {
  name: "Agarwal Speed Packers & Movers",
  shortName: "Agarwal Speed",
  tagline: "Move Smarter. Move Safer.",
  subtitle: "Professional Packers & Movers in Hyderabad",
  domain: "agarwalspeedpackers.in",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://agarwalspeedpackers.in",
  
  // Contact details with configurable placeholders
  phone: import.meta.env.VITE_PHONE || "+91 91542 09876",
  phoneRaw: (import.meta.env.VITE_PHONE || "+919154209876").replace(/\s+/g, ""),
  whatsapp: import.meta.env.VITE_WHATSAPP || "+91 91542 09876",
  whatsappRaw: (import.meta.env.VITE_WHATSAPP || "+919154209876").replace(/[^0-9]/g, ""),
  email: import.meta.env.VITE_EMAIL || "info@agarwalspeedpackers.in",
  
  // Genuine Hyderabad location coverage
  location: "Hyderabad, Telangana, India",
  addressPlaceholder: "Regional Logistics Hub, Hyderabad, Telangana 500081, India",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160408544!2d78.2679589886975!3d17.412348714080133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  
  // Operating hours
  businessHours: "Monday to Sunday: 7:00 AM – 10:00 PM (IST)",
  supportHours: "24/7 Helpline for Ongoing Transits",

  // Key Hyderabad Areas Served
  keyAreas: [
    "Hitec City",
    "Gachibowli",
    "Madhapur",
    "Kondapur",
    "Kukatpally",
    "Banjara Hills",
    "Jubilee Hills",
    "Secunderabad",
    "Miyapur",
    "Begumpet",
    "Financial District",
    "Uppal",
    "Dilsukhnagar",
    "LB Nagar",
    "Kompally",
    "Manikonda",
    "Tolichowki",
    "Nallagandla"
  ]
};

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" }
];
