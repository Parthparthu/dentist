import React from "react";
import Link from "next/link";
import { clinicConfig } from "@/config/clinic";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Star, MessageSquare } from "lucide-react";

export const metadata = {
  title: `Patient Reviews & Testimonials | ${clinicConfig.clinicName}`,
  description: `Read verified patient reviews and testimonials for ${clinicConfig.clinicName} in ${clinicConfig.city}. Experience our comfort-focused dental treatments.`,
};

export default function ReviewsPage() {
  return (
    <div className="space-y-12 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
          Patient Testimonials
        </h1>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          What Our Patients Say About Us
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          We pride ourselves on providing a gentle, comfort-focused treatment experience. Read observations from families in {clinicConfig.city}.
        </p>
      </div>

      {/* Stats Summary */}
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 max-w-lg mx-auto text-center shadow-sm space-y-3">
        <div className="flex justify-center items-center space-x-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-current" />
          ))}
        </div>
        <p className="text-2xl font-bold text-slate-900 dark:text-white">
          {clinicConfig.stats.googleRatingPlaceholder} out of 5 stars
        </p>
        <p className="text-xs text-slate-500">
          Based on {clinicConfig.stats.reviewsCountPlaceholder}+ patient reviews across platforms.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {clinicConfig.reviews.map((rev) => (
          <Card key={rev.id} className="flex flex-col justify-between h-full bg-white dark:bg-slate-900 p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rev.rating ? "fill-current text-amber-500" : "text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-400 italic leading-relaxed">
                &quot;{rev.text}&quot;
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 dark:border-slate-800/80 mt-6 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-slate-800 dark:text-white">{rev.author}</p>
                <p className="text-slate-400 text-[10px] mt-0.5">{rev.date}</p>
              </div>
              <span className="px-2.5 py-0.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 text-[10px] font-semibold text-slate-500 rounded-md">
                {rev.source} Verified
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="text-center text-xs text-slate-400 dark:text-slate-500 italic max-w-2xl mx-auto pt-6 border-t border-slate-100 dark:border-slate-800/60">
        {clinicConfig.reviewPlaceholderNotice}
      </div>

      {/* CTA */}
      <div className="text-center pt-8">
        <Link href="/contact">
          <Button size="lg" className="flex items-center mx-auto space-x-2">
            <MessageSquare className="w-5 h-5" />
            <span>Book Consultation & Meet Our Team</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
