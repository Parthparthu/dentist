import React from "react";
import { clinicConfig } from "@/config/clinic";
import BookingForm from "@/components/sections/BookingForm";
import Card from "@/components/ui/Card";
import { Phone, Mail, MapPin, Info, ShieldAlert } from "lucide-react";

export const metadata = {
  title: `Contact Us & Book Appointment | ${clinicConfig.clinicName}`,
  description: `Contact ${clinicConfig.clinicName} in ${clinicConfig.city}. Book an appointment, view clinic hours, phone numbers, email, and map location directions.`,
};

export default function ContactPage() {
  return (
    <div className="space-y-12 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
          Get in Touch
        </h1>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Connect with Our {clinicConfig.city} Clinic
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Have questions or ready to request a visit? Submit the scheduling form below or reach out to our team directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Panel */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Online Scheduling Request</h3>
            <p className="text-xs text-slate-500">Provide your basic contact info. Our clinic coordinator will call you back to confirm a slot.</p>
          </div>
          <BookingForm />
        </div>

        {/* Right Info Panel */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: NAP Info */}
          <Card className="space-y-4">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white pb-2 border-b border-slate-50 dark:border-slate-800/80">
              Clinic Contact Info
            </h3>
            <div className="space-y-3.5 text-sm text-slate-700 dark:text-slate-400">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5 mr-3.5" />
                <div>
                  <p className="font-bold text-slate-800 dark:text-white">Address</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {clinicConfig.clinicName} <br />
                    {clinicConfig.streetAddress}, <br />
                    {clinicConfig.area}, {clinicConfig.city}, <br />
                    {clinicConfig.state} - {clinicConfig.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5 mr-3.5" />
                <div>
                  <p className="font-bold text-slate-800 dark:text-white">Helpline</p>
                  <a
                    href={`tel:${clinicConfig.phoneRaw}`}
                    className="text-xs text-teal-600 dark:text-teal-400 hover:underline font-semibold block mt-0.5"
                  >
                    {clinicConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="w-5 h-5 text-teal-600 shrink-0 mt-0.5 mr-3.5 text-base leading-none">💬</span>
                <div>
                  <p className="font-bold text-slate-800 dark:text-white">WhatsApp Chat</p>
                  <a
                    href={`https://wa.me/${clinicConfig.whatsappRaw}?text=${encodeURIComponent(clinicConfig.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-600 dark:text-emerald-500 hover:underline font-semibold block mt-0.5"
                  >
                    {clinicConfig.whatsapp} (Click to Chat)
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-teal-600 shrink-0 mt-0.5 mr-3.5" />
                <div>
                  <p className="font-bold text-slate-800 dark:text-white">Email Address</p>
                  <a
                    href={`mailto:${clinicConfig.email}`}
                    className="text-xs text-slate-500 hover:underline block mt-0.5"
                  >
                    {clinicConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 2: Hours */}
          <Card className="space-y-4">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white pb-2 border-b border-slate-50 dark:border-slate-800/80">
              Hours of Operation
            </h3>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex justify-between py-1 border-b border-slate-50 dark:border-slate-800/40">
                <span className="font-semibold text-slate-800 dark:text-white">Mon - Fri</span>
                <span>{clinicConfig.openingHours.weekdays}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50 dark:border-slate-800/40">
                <span className="font-semibold text-slate-800 dark:text-white">Saturdays</span>
                <span>{clinicConfig.openingHours.saturdays}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-slate-800 dark:text-white">Sundays</span>
                <span>{clinicConfig.openingHours.sundays}</span>
              </div>
            </div>
          </Card>

          {/* Card 3: Landmark / Parking */}
          <Card className="bg-slate-50 dark:bg-slate-900 border-slate-100 p-6 space-y-2 flex items-start space-x-3 shadow-inner">
            <Info className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider">
                Parking & Directions Guidance
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                {clinicConfig.landmarkCopy}
              </p>
            </div>
          </Card>

          {/* Card 4: Emergency Alert */}
          <Card className="bg-rose-50/20 dark:bg-rose-950/15 border-rose-100/60 dark:border-rose-900/20 p-6 space-y-2 flex items-start space-x-3 shadow-sm">
            <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-rose-800 dark:text-rose-500 text-xs uppercase tracking-wider">
                Urgent Dental Discomfort?
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed mt-1">
                {clinicConfig.emergencyContactCopy}
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="w-full h-96 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 bg-slate-100">
        <iframe
          title="Clinic Location Map Directions"
          src={clinicConfig.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
