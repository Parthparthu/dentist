import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig } from "@/config/clinic";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import BookingForm from "@/components/sections/BookingForm";
import ServiceIcon from "@/components/ServiceIcon";
import { CheckCircle2, Phone, Calendar, ArrowRight, HelpCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Generate Static Params for build-time rendering of all 8 dentist services
export async function generateStaticParams() {
  return clinicConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

// 2. Generate Metadata dynamically for each service
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = clinicConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDesc,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = clinicConfig.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related services (excluding current)
  const relatedServices = clinicConfig.services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  // Dynamic image matching based on service slug
  const serviceImages: { [key: string]: string } = {
    "root-canal-treatment": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&h=450&fit=crop",
    "dental-implants": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&h=450&fit=crop",
    "braces-and-clear-aligners": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&h=450&fit=crop",
    "smile-designing": "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&h=450&fit=crop",
    "teeth-whitening": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&h=450&fit=crop",
    "pediatric-dentistry": "https://images.unsplash.com/photo-1594824813573-246434e33963?q=80&w=600&h=450&fit=crop",
    "crowns-and-bridges": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&h=450&fit=crop",
    "emergency-dental-care": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&h=450&fit=crop",
  };

  const imageSrc = serviceImages[slug] || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&h=450&fit=crop";

  // Create FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-16 py-12">
      {/* FAQ Schema Injector */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-center">
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-900/40 px-3.5 py-1 rounded-full text-teal-700 dark:text-teal-400 text-xs font-semibold w-fit">
              <ServiceIcon name={service.icon} className="w-4 h-4 mr-1.5" />
              <span>Specialized Care</span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              {service.title}
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {service.longDesc}
            </p>

            {/* Keyword local SEO placeholder */}
            <p className="text-xs text-slate-500 dark:text-slate-500 italic">
              Looking for a trusted dentist for {service.title.toLowerCase()} in {clinicConfig.city}? Get evaluated by {clinicConfig.city}&apos;s top dental specialists.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#booking-section">
                <Button className="w-full sm:w-auto flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </Button>
              </a>
              <a href={`tel:${clinicConfig.phoneRaw}`} className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Call: {clinicConfig.phone}</span>
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <Image
              src={imageSrc}
              alt={`${service.title} treatment procedure room`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. WHO NEEDS THIS TREATMENT & BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Who Needs It */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Who Needs This Treatment?
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Schedule an evaluation if you are experiencing any of the following dental symptoms or conditions:
            </p>
            <div className="space-y-4">
              {service.whoNeeds.map((need, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed">{need}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {service.benefitTitle}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Our clinical protocols ensure safe, predictable, and highly functional outcomes:
            </p>
            <div className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. STEP BY STEP TREATMENT PROCESS */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              What to Expect: Treatment Steps
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              We employ a methodical 4-stage digital workflow to ensure clinical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.steps.map((step, idx) => (
              <div key={idx} className="relative p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl space-y-3 border border-slate-100 dark:border-slate-800/50">
                <span className="absolute top-4 right-4 text-3xl font-extrabold text-teal-200/50 dark:text-teal-900/30">
                  0{idx + 1}
                </span>
                <h4 className="font-bold text-base text-slate-900 dark:text-white pr-8">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RECOVERY AND CARE NOTES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white text-center">
          Post-Treatment Care & Recovery Guidelines
        </h3>
        <Card className="bg-amber-50/20 dark:bg-amber-950/10 border-amber-100/60 dark:border-amber-900/20 p-6 sm:p-8 space-y-3">
          <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-500 font-bold text-sm">
            <span>⚠️</span>
            <span>Clinical Post-Care Advice</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-400 list-disc list-inside leading-relaxed pl-1">
            {service.recovery.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </Card>
      </section>

      {/* 5. FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-teal-50 dark:bg-teal-950/20 text-teal-600 rounded-full mb-1">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Common Questions about {service.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Read medical clarifications from our head dentists.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
          <Accordion items={service.faqs} />
        </div>
      </section>

      {/* 6. BOOKING FORM SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28" id="booking-section">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl p-8 sm:p-12 space-y-6">
          <div className="text-center max-w-md mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Schedule Your Consultation
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Submit the form below to request a prioritized appointment slot for {service.title.toLowerCase()}.
            </p>
          </div>
          <BookingForm defaultServiceSlug={slug} />
        </div>
      </section>

      {/* 7. RELATED SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-100 dark:border-slate-800/80 pb-4 flex justify-between items-end">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Other Specialized Treatments
          </h3>
          <Link
            href="/services"
            className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center"
          >
            <span>All Services</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <Card key={rel.slug} className="flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <ServiceIcon name={rel.icon} className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {rel.shortDesc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-50 dark:border-slate-800/50">
                <Link
                  href={`/services/${rel.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors"
                >
                  <span>Read Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
