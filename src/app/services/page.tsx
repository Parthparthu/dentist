import React from "react";
import Link from "next/link";
import { clinicConfig } from "@/config/clinic";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ServiceIcon from "@/components/ServiceIcon";
import { ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: `Specialized Dental Services in ${clinicConfig.city} | ${clinicConfig.clinicName}`,
  description: `Browse advanced dental treatments in ${clinicConfig.city} at ${clinicConfig.clinicName}, including single-visit root canals, dental implants, clear aligners, and cosmetic smile designs.`,
};

export default function ServicesPage() {
  // Let's categorize the services dynamically or statically
  const categories = [
    {
      name: "Restorative Dentistry",
      description: "Repair and rebuild damaged, decayed, or missing teeth to regain structural strength and bite function.",
      services: ["root-canal-treatment", "crowns-and-bridges", "dental-implants"]
    },
    {
      name: "Cosmetic & Orthodontics",
      description: "Enhance your appearance with modern invisible brace aligners, teeth whitening, and ultra-thin veneers.",
      services: ["braces-and-clear-aligners", "smile-designing", "teeth-whitening"]
    },
    {
      name: "Preventive & Family",
      description: "Keep cavities away with routine scaling, flouride treatments, and specialized children's dentistry.",
      services: ["pediatric-dentistry"]
    },
    {
      name: "Urgent Dental Care",
      description: "Relieve severe tooth pain, swelling, and physical dental injuries instantly with same-day emergency slots.",
      services: ["emergency-dental-care"]
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
          Our Specialities
        </h1>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Dental Treatments Customized For You
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
          We combine advanced medical training with cutting-edge diagnostics to offer complete dental solutions for all age groups.
        </p>
      </section>

      {/* Categorized Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {categories.map((cat, catIdx) => {
          // Get the services details that belong to this category
          const catServices = clinicConfig.services.filter(s => cat.services.includes(s.slug));
          
          if (catServices.length === 0) return null;

          return (
            <div key={catIdx} className="space-y-6">
              <div className="border-l-4 border-teal-600 pl-4 space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-3xl">
                  {cat.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((service) => (
                  <Card key={service.slug} className="flex flex-col justify-between h-full group">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400 flex items-center justify-center transition-colors group-hover:bg-teal-600 group-hover:text-white">
                        <ServiceIcon name={service.icon} className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-5 mt-5 border-t border-slate-50 dark:border-slate-800/85">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors group/link"
                      >
                        <span>Learn Treatment Process</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Global Services CTA */}
      <section className="bg-teal-50/25 dark:bg-slate-900/30 border-y border-teal-50 dark:border-slate-800/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Unsure Which Treatment Fits Your Smile?
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Book a comprehensive dental check-up. We will perform digital scanning and take low-radiation OPG X-rays to assess your oral health.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="md">
                Book Consultation
              </Button>
            </Link>
            <a href={`tel:${clinicConfig.phoneRaw}`}>
              <Button variant="outline" size="md" className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>Call: {clinicConfig.phone}</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
