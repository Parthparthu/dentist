import React from "react";
import { clinicConfig } from "@/config/clinic";

export const metadata = {
  title: `Privacy Policy | ${clinicConfig.clinicName}`,
  description: `Read the privacy policy for ${clinicConfig.clinicName}. Learn how we protect and manage patient contact details and dental records.`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-slate-700 dark:text-slate-400 leading-relaxed text-sm">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
        Privacy Policy
      </h1>
      <p className="text-xs text-slate-400">Last updated: June 2026</p>
      
      <p>
        At {clinicConfig.clinicName}, we take your privacy seriously. This policy explains how we collect, use, and safeguard the information you provide when using our website and scheduling services.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">1. Information We Collect</h2>
      <p>
        When you submit an appointment request on our website, we collect personal details including your name, telephone number, email address, preferred treatment, and any notes you provide. This information is collected solely to schedule and confirm your clinical appointment.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">2. Notification Consent</h2>
      <p>
        By checking the consent box on our booking form, you explicitly authorize {clinicConfig.clinicName} to contact you via phone call or WhatsApp message at the number provided to verify your appointment preferences, schedule slot, and share helpful clinic directions. You can opt-out of these communications at any time by replying directly to our messaging threads.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">3. Data Security & Records</h2>
      <p>
        We implement security measures to help safeguard your contact details. Patient medical records and health history shared during consultations are stored separately on our secure clinical intranet systems and are treated in strict compliance with medical confidentiality guidelines. We do not sell or share your contact details with external third-party marketing services.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">4. Cookies</h2>
      <p>
        Our website may use standard technical cookies to improve navigation speed and remember your form preferences. These cookies do not collect personally identifiable tracking data.
      </p>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">5. Contact Information</h2>
      <p>
        If you have questions regarding this privacy policy or wish to request the removal of your contact details from our scheduling logs, please contact us at:
      </p>
      <ul className="list-none pl-0 space-y-1.5 pt-2 text-xs text-slate-600 dark:text-slate-400">
        <li><strong>Clinic:</strong> {clinicConfig.clinicName}</li>
        <li><strong>Address:</strong> {clinicConfig.streetAddress}, {clinicConfig.city}, {clinicConfig.state}</li>
        <li><strong>Email:</strong> {clinicConfig.email}</li>
        <li><strong>Helpline:</strong> {clinicConfig.phone}</li>
      </ul>
    </div>
  );
}
