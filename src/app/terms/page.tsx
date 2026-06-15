import React from "react";
import { clinicConfig } from "@/config/clinic";

export const metadata = {
  title: `Terms of Service | ${clinicConfig.clinicName}`,
  description: `Read the terms of service for ${clinicConfig.clinicName}. Review billing rules, scheduling requests, and medical disclaimers.`,
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-slate-700 dark:text-slate-400 leading-relaxed text-sm">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
        Terms of Service
      </h1>
      <p className="text-xs text-slate-400">Last updated: June 2026</p>

      <p>
        Welcome to the website of {clinicConfig.clinicName}. By browsing this website and using our online appointment request services, you agree to comply with and be bound by the following terms of use.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">1. Online Scheduling Requests</h2>
      <p>
        Form submissions on this website represent appointment slot request scheduling suggestions. An appointment is only finalized and booked once a clinic manager contacts you and verifies the specific dentist availability and slot details.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">2. Clinical Disclaimers & Outcomes</h2>
      <p>
        All treatment information, recovery care guidelines, and FAQs provided on this website are for educational purposes. Dental health treatments are planned and adjusted for each individual. Actual treatment results depend on a comprehensive diagnostic check-up and clinical evaluation by our MDS dental specialists. We do not guarantee specific aesthetic or functional outcomes on this website.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">3. Fees & Financial Payment Plans</h2>
      <p>
        Subsidized promotional wellness packages and treatment estimates are subject to verification during clinical checkups. Flexible finance options, interest-free monthly EMI plans (via partner portals), and cashless insurance support are subject to credit checks and suitable policy exclusions.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">4. Cancellations</h2>
      <p>
        If you need to reschedule or cancel a confirmed appointment slot, please notify our front desk at least 24 hours in advance so we can release the slot to other patients in need.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">5. Governing Law</h2>
      <p>
        These terms are governed by and construed in accordance with the laws of {clinicConfig.state}, India. Any legal disputes arising from clinic treatments are subject to the jurisdiction of the courts in {clinicConfig.city}.
      </p>
    </div>
  );
}
