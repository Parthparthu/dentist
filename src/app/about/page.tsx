import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { CheckCircle2, Shield, Heart, Award, Phone } from "lucide-react";

export const metadata = {
  title: `About Us | ${clinicConfig.clinicName}`,
  description: `Learn more about ${clinicConfig.clinicName}. Discover our modern facilities, MDS specialist doctors, sterilization protocols, and commitment to comfort-focused care.`,
};

export default function AboutPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-teal-700" />,
      title: "Sterilization Safety Standards",
      desc: "Our Class-B vacuum sterilization autoclaves and strict individual sterile pouches help ensure patient safety."
    },
    {
      icon: <Award className="w-6 h-6 text-teal-700" />,
      title: "MDS Board Specialists",
      desc: "We house endodontists, orthodontists, and oral surgeons to ensure you receive expert specialized evaluations."
    },
    {
      icon: <Heart className="w-6 h-6 text-teal-700" />,
      title: "Comfort-Focused Care",
      desc: "From computerized injections to comfortable dental chairs, our clinic is optimized to help reduce dental anxiety."
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Our Story & Philosophy
          </h1>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Redefining Dental Care in {clinicConfig.city}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Welcome to {clinicConfig.clinicName}, where we combine modern dental technology with a clinical, comfort-focused touch to support your oral health.
          </p>
        </div>
      </section>

      {/* Philosophy & Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Why We Formed {clinicConfig.clinicName}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We understand that dental anxiety keeps many people from visiting the dentist. Our clinic was established to address this concern by utilizing **computerized local anesthesia systems** and maintaining a quiet, sterile environment designed to support patient comfort.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether you need routine scaling, root canal therapy for decay, or a smile makeover, our dental team provides transparent billing, detailed explanation of treatment options, and structured clinical reviews.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm text-slate-700 dark:text-slate-400">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2 shrink-0" />
                <span>MDS Board Specialists</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2 shrink-0" />
                <span>Flexible Payment Plans</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2 shrink-0" />
                <span>Intraoral 3D Scanning</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2 shrink-0" />
                <span>Class-B Sterilization Protocols</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&h=450&fit=crop"
                alt={`${clinicConfig.clinicName} consultation area`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Strip */}
      <section className="bg-teal-50/40 dark:bg-slate-900/40 py-16 border-y border-teal-50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <Card key={idx} className="flex flex-col space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/20 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">{feat.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Bios / Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Our Specialists
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Meet Our Clinicians
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Our medical staff consists of MDS practitioners with specialized training in implantology, prosthodontics, and orthodontics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clinicConfig.doctors.map((doc) => (
            <Card key={doc.id} className="p-0 overflow-hidden flex flex-col justify-between group">
              <div className="relative w-full aspect-square bg-slate-50">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">{doc.name}</h4>
                  <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mt-0.5">
                    {doc.role}
                  </p>
                  <p className="text-[11px] text-slate-500 italic font-medium leading-relaxed">
                    {doc.credentials}
                  </p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-3 border-t border-slate-50 dark:border-slate-800/80">
                  {doc.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Advanced Technology section */}
      <section className="bg-slate-900 text-white py-16 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Clinical Infrastructure</h4>
            <h3 className="text-3xl font-extrabold">Modern Diagnostics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We employ dental technology to support diagnostic accuracy and comfortable treatment delivery.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              {clinicConfig.technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 mr-2 shrink-0" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-800">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&h=300&fit=crop"
                  alt="3D digital intraoral scanner setup"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&h=300&fit=crop"
                  alt="Class-B vacuum autoclave sterilisation"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Schedule a Consultation
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
          Contact our {clinicConfig.city} clinic to arrange a clinical evaluation with our MDS team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Request Appointment
            </Button>
          </Link>
          <a href={`tel:${clinicConfig.phoneRaw}`} className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>Call: {clinicConfig.phone}</span>
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
