import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Calendar } from "lucide-react";

export const metadata = {
  title: `Clinical Gallery & Case Studies | ${clinicConfig.clinicName}`,
  description: `Browse our clinic facilities and orthodontic/implant case progress photos at ${clinicConfig.clinicName} in ${clinicConfig.city}.`,
};

export default function GalleryPage() {
  const beforeAfter = clinicConfig.gallery.filter(item => item.category === "Before-After");
  const facilities = clinicConfig.gallery.filter(item => item.category !== "Before-After");

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
          Clinic Showcase
        </h1>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Smile Transformations & Facilities
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Explore clinical progression cases and check out our sterile operatory setups in {clinicConfig.city}.
        </p>
      </div>

      {/* Before/After Section */}
      <div className="space-y-6">
        <div className="border-l-4 border-teal-600 pl-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Clinical Progression Cases
          </h3>
          <p className="text-xs text-slate-500">
            Side-by-side comparisons showing orthodontic alignment and implant prosthetics. Individual outcomes depend on clinical conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beforeAfter.map((item) => (
            <Card key={item.id} className="p-0 overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 gap-0.5 bg-slate-100">
                {/* Before Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.beforeImage ?? ""}
                    alt={`${item.title} - Prior to treatment`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider rounded-md">
                    Before
                  </span>
                </div>
                {/* After Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={`${item.title} - Post treatment case transformation`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 right-3 px-2 py-1 bg-teal-600/90 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider rounded-md">
                    Post-Treatment
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-1.5">
                <h4 className="font-bold text-slate-800 dark:text-white text-base">{item.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Facilities Section */}
      <div className="space-y-6">
        <div className="border-l-4 border-teal-600 pl-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Our Operatories & Sanitised Spaces
          </h3>
          <p className="text-xs text-slate-500">
            A look inside our diagnostic rooms, comfortable patient lounge, and sterilized hygiene bays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {facilities.map((item) => (
            <Card key={item.id} className="p-0 overflow-hidden shadow-sm group">
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">{item.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-6">
        <Link href="/contact">
          <Button size="lg" className="flex items-center mx-auto space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Schedule a Consultation Visit</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
