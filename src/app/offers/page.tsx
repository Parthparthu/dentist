import React from "react";
import Link from "next/link";
import { clinicConfig } from "@/config/clinic";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Phone, Calendar } from "lucide-react";

export const metadata = {
  title: `Special Offers & Packages | ${clinicConfig.clinicName}`,
  description: `Avail of dental wellness diagnostics and consultation packages at our ${clinicConfig.city} clinic. View price lists and book online.`,
};

export default function OffersPage() {
  return (
    <div className="space-y-12 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
          Promotional Offers
        </h1>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Subsidised Dental Wellness Packages
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          We offer packages designed to make primary dental check-ups and diagnostic OPG scans accessible to new patients.
        </p>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        {clinicConfig.offers.map((offer) => (
          <Card
            key={offer.id}
            className="relative flex flex-col justify-between border-2 border-slate-100 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-900 group"
          >
            {offer.discountBadge && (
              <div className="absolute top-4 right-4 bg-teal-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                {offer.discountBadge}
              </div>
            )}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white pr-20 leading-tight">
                {offer.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {offer.description}
              </p>

              {offer.discountPrice && (
                <div className="pt-2 flex items-baseline space-x-2">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    {offer.discountPrice}
                  </span>
                  {offer.originalPrice && (
                    <span className="text-sm text-slate-400 line-through font-medium">
                      {offer.originalPrice}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-slate-50 dark:border-slate-800/80 mt-6 space-y-3 text-left">
              <div className="text-[10px] text-slate-400 dark:text-slate-500">
                <span className="font-semibold uppercase tracking-wider text-teal-600 block mb-0.5">Expiry</span>
                {offer.expiry}
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500">
                <span className="font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">Terms</span>
                {offer.terms}
              </div>
              <Link href="/contact" className="block pt-2">
                <Button className="w-full text-xs font-semibold py-2.5">
                  Request Appointment Slot
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* Offers footer contact */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl text-center space-y-4 max-w-4xl mx-auto mt-12">
        <h3 className="text-xl font-bold">Have Questions About A Promotion?</h3>
        <p className="text-xs text-slate-400 max-w-lg mx-auto">
          Contact our front-desk manager. We can help clarify eligibility, cashless claims, and slot timings over phone or WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <Link href="/contact">
            <Button className="w-full sm:w-auto flex items-center justify-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Book Appointment</span>
            </Button>
          </Link>
          <a href={`tel:${clinicConfig.phoneRaw}`} className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>Call Clinic: {clinicConfig.phone}</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
