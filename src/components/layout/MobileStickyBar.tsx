import React from "react";
import Link from "next/link";
import { clinicConfig } from "@/config/clinic";
import { Phone, MessageSquare, Calendar } from "lucide-react";

export const MobileStickyBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsappRaw}?text=${encodeURIComponent(
    clinicConfig.whatsappMsg
  )}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 border-t border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-md px-4 py-2 flex items-center justify-around gap-3 pb-safe">
      {/* Call Action */}
      <a
        href={`tel:${clinicConfig.phoneRaw}`}
        className="flex-1 flex flex-col items-center justify-center py-2 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-xl border border-slate-100 dark:border-slate-800 active:scale-95 transition-all text-xs font-semibold"
      >
        <Phone className="w-5 h-5 text-teal-700 mb-1" />
        <span>Call</span>
      </a>

      {/* WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-2 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-500 rounded-xl border border-emerald-100 dark:border-emerald-900/30 active:scale-95 transition-all text-xs font-semibold"
      >
        <MessageSquare className="w-5 h-5 text-emerald-600 mb-1" />
        <span>WhatsApp</span>
      </a>

      {/* Book Action */}
      <Link
        href="/contact"
        className="flex-[1.5] flex flex-col items-center justify-center py-2 bg-teal-700 text-white rounded-xl shadow-md active:scale-95 transition-all text-xs font-semibold"
      >
        <div className="flex items-center space-x-1">
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>Book Now</span>
        </div>
      </Link>
    </div>
  );
};

export default MobileStickyBar;
