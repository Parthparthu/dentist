import React from "react";
import Link from "next/link";
import { clinicConfig } from "@/config/clinic";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Info & NAP */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="h-9 w-9 rounded-xl bg-teal-500 flex items-center justify-center text-slate-950 font-bold text-lg">
                {clinicConfig.brandInitials}
              </span>
              <span className="font-bold text-xl tracking-tight text-white">
                {clinicConfig.clinicName}
              </span>
            </Link>
            <p className="text-sm text-slate-400 mt-2">
              {clinicConfig.tagline}
            </p>
            <div className="space-y-3 pt-2 text-sm text-slate-400">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-teal-400 mt-1 mr-3 shrink-0" />
                <span>
                  {clinicConfig.streetAddress}, <br />
                  {clinicConfig.city}, {clinicConfig.state} - {clinicConfig.postalCode}
                </span>
              </div>
              <a
                href={`tel:${clinicConfig.phoneRaw}`}
                className="flex items-center hover:text-teal-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-400 mr-3 shrink-0" />
                <span>{clinicConfig.phone}</span>
              </a>
              <a
                href={`mailto:${clinicConfig.email}`}
                className="flex items-center hover:text-teal-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-400 mr-3 shrink-0" />
                <span className="break-all">{clinicConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase text-sm mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-teal-400 transition-colors">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-teal-400 transition-colors">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-teal-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase text-sm mb-4">
              Our Treatments
            </h3>
            <ul className="space-y-2.5 text-sm">
              {clinicConfig.services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              {clinicConfig.services.length > 6 && (
                <li>
                  <Link href="/services" className="text-teal-400 hover:underline">
                    View All Services...
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Column 4: Timings & Trust */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wider uppercase text-sm mb-2">
              Working Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start text-slate-400">
                <Clock className="w-4 h-4 text-teal-400 mt-1 mr-3 shrink-0" />
                <div>
                  <p className="font-medium text-white">Mon - Fri</p>
                  <p className="text-xs text-slate-400">{clinicConfig.openingHours.weekdays}</p>
                  <p className="font-medium text-white mt-1">Saturdays</p>
                  <p className="text-xs text-slate-400">{clinicConfig.openingHours.saturdays}</p>
                  <p className="font-medium text-white mt-1">Sundays</p>
                  <p className="text-xs text-slate-400">{clinicConfig.openingHours.sundays}</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs font-semibold text-teal-400 uppercase tracking-widest flex items-center">
                  <Shield className="w-3.5 h-3.5 mr-1" />
                  Safety Protocol
                </p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {clinicConfig.stats.safetyStandard}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <div>
            &copy; {currentYear} {clinicConfig.clinicName}. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="flex space-x-4">
            {clinicConfig.socialLinks.facebook && (
              <a
                href={clinicConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-teal-600 rounded-full text-slate-300 hover:text-white transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
            )}
            {clinicConfig.socialLinks.instagram && (
              <a
                href={clinicConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-teal-600 rounded-full text-slate-300 hover:text-white transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
