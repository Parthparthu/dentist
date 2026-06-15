"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { clinicConfig } from "@/config/clinic";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import BookingForm from "@/components/sections/BookingForm";
import ServiceIcon from "@/components/ServiceIcon";
import Typewriter from "@/components/ui/Typewriter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Star,
  MapPin,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldAlert,
  Zap,
  Sparkles,
  Award,
  DollarSign
} from "lucide-react";
import HeroScene from "@/components/3d/HeroScene";
import BackgroundParticles from "@/components/3d/BackgroundParticles";
import TextReveal from "@/components/ui/TextReveal";

export default function Home() {
  // General clinic FAQs for home page (customized with conservative medical claims)
  const homeFAQs = [
    {
      question: `Do you offer flexible payment plans for dental treatments?`,
      answer: `Yes, we offer monthly interest-free payment options through partner financial portals and major credit cards, helping you manage dental implants, orthodontics, and cosmetic treatments comfortably.`
    },
    {
      question: `What are your sterilization and safety protocols?`,
      answer: `We adhere to a rigorous 6-step sterilization cycle using Class-B vacuum autoclaves, complete with vacuum sealing and chemical indicator validation for each clinical instrument pouch.`
    },
    {
      question: `Can I book a same-day appointment for urgent dental discomfort?`,
      answer: `Yes, we reserve daily emergency slots specifically for urgent situations such as severe tooth discomfort, chipped restorations, or facial swelling. Please call our main helpline directly to book.`
    },
    {
      question: `Is patient parking available at the clinic location?`,
      answer: `Yes, free dedicated parking is available for our patients in the building basement.`
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      <BackgroundParticles />
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-teal-50/60 via-white to-sky-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950/20 pt-10 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-teal-50 dark:bg-teal-900/30 border border-teal-100/80 dark:border-teal-900/40 px-4 py-1.5 rounded-full text-teal-700 dark:text-teal-400 text-xs font-semibold shadow-sm">
                <Star className="w-4 h-4 fill-current text-amber-500" />
                <span>Modern Dental Care in {clinicConfig.city} ({clinicConfig.stats.googleRatingPlaceholder}/5 Rating)</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight min-h-[6.5rem] sm:min-h-[7.5rem] lg:min-h-[9.5rem]">
                <TextReveal text="Comfort-Focused Care." /> <br />
                <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                  <Typewriter words={["Customised Smiles.", "Digital Workflows.", "Gentle Root Canals.", "Premium Implants."]} />
                </span>
              </h1>

              <p className="text-lg text-slate-700 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience advanced dentistry using computerized local anesthesia and 3D digital scanners. Welcome to <span className="font-semibold text-slate-800 dark:text-white">{clinicConfig.clinicName}</span>, where your treatment comfort is our priority.
              </p>

              {/* Location indicator */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Conveniently located at {clinicConfig.area}, {clinicConfig.city}</span>
              </div>

              {/* Primary Call to Actions */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto shadow-teal-500/20">
                    Book Consultation
                  </Button>
                </Link>
                <a href={`tel:${clinicConfig.phoneRaw}`} className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>Call: {clinicConfig.phone}</span>
                  </Button>
                </a>
              </div>

              {/* Mini tag list */}
              <div className="pt-4 space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Specialist Services
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {clinicConfig.services.slice(0, 4).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="text-xs px-3 py-1 bg-white dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 rounded-full transition-colors"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Right 3D Scene */}
            <div className="lg:col-span-5 relative flex justify-center items-center min-h-[400px] lg:min-h-[600px] w-full perspective-1000">
              {/* <HeroScene /> */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-10 drop-shadow-[0_20px_50px_rgba(15,118,110,0.5)]"
              >
                {/* Premium 2D Tooth Image */}
                <Image 
                  src="/tooth.png" 
                  alt="Realistic Molar Tooth" 
                  width={320} 
                  height={320} 
                  priority
                  className="w-64 h-auto md:w-80 select-none object-contain"
                />
              </motion.div>
              
              {/* Floating reviews badge hovering over 3D scene */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-slate-100/50 dark:border-slate-800/50 flex items-center justify-between z-10">
                <div>
                  <p className="text-xs font-semibold text-slate-400">PATIENT REVIEWS</p>
                  <p className="text-base font-bold text-slate-900 dark:text-white">{clinicConfig.stats.reviewsCountPlaceholder}+ Verified Reviews</p>
                </div>
                <div className="flex items-center space-x-0.5 bg-amber-50 dark:bg-amber-950/20 px-3 py-1.5 rounded-lg border border-amber-100 dark:border-amber-900/30">
                  <Star className="w-4 h-4 fill-current text-amber-500" />
                  <span className="text-sm font-bold text-amber-700 dark:text-amber-400">{clinicConfig.stats.googleRatingPlaceholder}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <ScrollReveal>
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl shadow-xl py-8 px-6 sm:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y-0 divide-x-0 md:divide-x divide-slate-100 dark:divide-slate-800">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center p-3">
                <span className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">
                  {clinicConfig.stats.experienceYearsPlaceholder}+ Yrs
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1.5">
                  Clinical Practice
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center p-3">
                <span className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">
                  99%
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1.5">
                  Satisfaction Rate
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center p-3">
                <span className="text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-center">
                  Class-B
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1.5">
                  Sterilization Protocols
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center p-3">
                <span className="text-2xl font-bold text-slate-800 dark:text-white">
                  0% EMI
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1.5">
                  Easy Payment Options
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              Specialist Treatments
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Advanced Dental Solutions for All Age Groups
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              From cavity protection in pediatric patients to dental implants for restoration, our doctors deliver customized treatments designed for your comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicConfig.services.map((service) => (
              <Card key={service.slug} className="flex flex-col justify-between h-full group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 flex items-center justify-center transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                    <ServiceIcon name={service.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-50 dark:border-slate-800/80">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-400 transition-colors cursor-pointer group/link"
                  >
                    <span>Learn Treatment Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 4. FEATURED TREATMENTS */}
      <section className="bg-teal-50/40 dark:bg-slate-900/40 py-20 border-y border-teal-50 dark:border-slate-800/50">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              Featured Services
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Smile Enhancements & Restorative Implants
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Discover how our digital workflows help support precise diagnostics and treatment planning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Implant Feature Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5 relative h-56 md:h-full min-h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&h=600&fit=crop"
                  alt="Dental implant restoration case study"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 text-xs font-semibold rounded-full">
                    Long-term Restorative Solution
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                    Premium Dental Implants
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Replace missing teeth securely. We offer implant structures from recognized manufacturers, planned using 3D guided diagnostic mapping.
                  </p>
                  <ul className="grid grid-cols-1 gap-2 pt-2 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 shrink-0" />
                      <span>Standalone structure (does not impact surrounding teeth)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 shrink-0" />
                      <span>Helps maintain surrounding jawbone density</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-50 dark:border-slate-800">
                  <Link href="/services/dental-implants">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      Explore Implants
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Ortho/Aligners Feature Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5 relative h-56 md:h-full min-h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&h=600&fit=crop"
                  alt="Clear aligners orthodontic alignment process"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded-full">
                    Aesthetic Treatment Options
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                    Clear Aligners & Braces
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Align your teeth discreetly and comfortably. Review a digital preview of your planned teeth alignment schedule during your initial consultation.
                  </p>
                  <ul className="grid grid-cols-1 gap-2 pt-2 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 shrink-0" />
                      <span>Comfortable, removable, and nearly invisible</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 shrink-0" />
                      <span>Customized digital alignment schedule</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-50 dark:border-slate-800">
                  <Link href="/services/braces-and-clear-aligners">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      Explore Aligners
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. DOCTORS / CREDIBILITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Docs Left Content */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                Our Medical Team
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Experienced MDS Specialists Dedicated to Your Care
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                At {clinicConfig.clinicName}, our treatments are planned and performed by board-certified MDS dental surgeons with extensive specialized training.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start justify-center lg:justify-start space-x-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Specialist-Led Procedures</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Advanced treatments like implant surgery and orthodontics are guided by MDS practitioners.</p>
                  </div>
                </div>
                <div className="flex items-start justify-center lg:justify-start space-x-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Continuous Dental Education</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Our doctors are members of professional dental societies and follow updated clinical protocols.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Docs Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {clinicConfig.doctors.map((doc) => (
                <Card key={doc.id} className="p-0 overflow-hidden text-center flex flex-col justify-between group">
                  <div className="relative w-full aspect-square bg-slate-100">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white">{doc.name}</h4>
                      <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mt-0.5">
                        {doc.role}
                      </p>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium italic mt-1.5 leading-tight">
                        {doc.credentials}
                      </p>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-3 border-t border-slate-50 dark:border-slate-800/80 mt-3">
                      {doc.bio}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. WHY CHOOSE US (TRUST & SAFETY) */}
      <section className="bg-slate-900 text-white py-20 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <ScrollReveal>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400">
                Why Choose Us
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Comfort-Focused Protocols and Modern Standards
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We prioritize patient comfort, strict sterilization safety, and transparent treatment planning to support a reassuring visit.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center px-3 py-1 bg-slate-800 text-slate-400 text-xs font-semibold rounded-full">
                  <ShieldAlert className="w-3.5 h-3.5 text-teal-400 mr-1.5 shrink-0" />
                  Autoclave Sterilization
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-slate-800 text-slate-400 text-xs font-semibold rounded-full">
                  <Zap className="w-3.5 h-3.5 text-teal-400 mr-1.5 shrink-0" />
                  Comfort-Focused Anesthesia
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-slate-800 text-slate-400 text-xs font-semibold rounded-full">
                  <DollarSign className="w-3.5 h-3.5 text-teal-400 mr-1.5 shrink-0" />
                  Flexible Financing
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Box 1 */}
              <div className="p-6 bg-slate-800/60 border border-slate-800/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-teal-900/30 text-teal-400 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">Controlled Anesthesia Systems</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We use computerized local anesthetic delivery systems designed to regulate flow pressure, promoting a more comfortable injection experience.
                </p>
              </div>

              {/* Box 2 */}
              <div className="p-6 bg-slate-800/60 border border-slate-800/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-teal-900/30 text-teal-400 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">3D Digital Scanning</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We utilize high-speed intraoral 3D scanners to create precise digital models of your teeth, reducing the need for traditional putty impressions.
                </p>
              </div>

              {/* Box 3 */}
              <div className="p-6 bg-slate-800/60 border border-slate-800/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-teal-900/30 text-teal-400 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">Class-B Sterilization</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Safety is central to our clinic. We use strict Class-B vacuum sterilization protocols and open sealed, individual instrument pouches for each patient.
                </p>
              </div>

              {/* Box 4 */}
              <div className="p-6 bg-slate-800/60 border border-slate-800/80 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-teal-900/30 text-teal-400 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">Interest-Free payment plans</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Spread treatment costs comfortably using monthly financing options with interest-free plans, arranged directly at our reception desk.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 7. BEFORE-AFTER / GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                Smile Gallery
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Clinical Progress Showcases
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Review cases showing treatment progression at our clinic. Actual results depend on individual clinical evaluations.
              </p>
            </div>
            <Link href="/gallery" className="mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="flex items-center">
                <span>View Full Gallery</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicConfig.gallery.filter(item => item.category === "Before-After").slice(0, 2).map((item) => (
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
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 8. PATIENT REVIEWS */}
      <section className="bg-teal-50/20 dark:bg-slate-900/30 py-20 border-y border-teal-50 dark:border-slate-900/30">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                Patient Testimonials
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Feedback from Our Patients
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Reviews representing patient observations at our Gurugram clinic.
              </p>
            </div>
            <Link href="/reviews" className="mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="flex items-center">
                <span>View Patient Feedback</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicConfig.reviews.map((rev) => (
              <Card key={rev.id} className="flex flex-col justify-between h-full bg-white dark:bg-slate-900">
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating
                            ? "fill-current text-amber-500"
                            : "text-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-500 italic leading-relaxed line-clamp-5">
                    &quot;{rev.text}&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-50 dark:border-slate-800/80 mt-4 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-800 dark:text-white">{rev.author}</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">{rev.date}</p>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 text-[10px] font-semibold text-slate-500 rounded-md">
                    {rev.source} Verified
                  </span>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500 italic">
            {clinicConfig.reviewPlaceholderNotice}
          </div>
        </ScrollReveal>
      </section>

      {/* 9. OFFERS / PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              Promotions & Packages
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Subsidised Diagnostic and Wellness Packages
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Take advantage of our promotional check-up options designed to make primary dental evaluations accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicConfig.offers.map((offer) => (
              <Card key={offer.id} className="relative flex flex-col justify-between border-2 border-slate-100 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-900 group">
                {offer.discountBadge && (
                  <div className="absolute top-4 right-4 bg-teal-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {offer.discountBadge}
                  </div>
                )}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white pr-20 leading-tight">
                    {offer.title}
                  </h4>
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
                      Claim Promotion Slot
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 10. FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              Got Questions?
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Find answers regarding treatments, clinical diagnostics, and sterilization safety at our clinic.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
            <Accordion items={homeFAQs} />
          </div>
        </ScrollReveal>
      </section>

      {/* 11. CONTACT & APPOINTMENT FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="book">
        <ScrollReveal>
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Form Side */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                  Online Scheduling
                </h2>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Request an Appointment
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Submit your preferences below. Our clinic coordinator will contact you shortly to finalize your date and slot.
                </p>
              </div>
              <BookingForm />
            </div>

            {/* Contact Details & Map Side */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Clinic Details</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    <span className="font-bold text-white block">{clinicConfig.clinicName}</span>
                    {clinicConfig.streetAddress}, <br />
                    {clinicConfig.area}, {clinicConfig.city}, <br />
                    {clinicConfig.state} - {clinicConfig.postalCode}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Contact Channels</h4>
                  <a
                    href={`tel:${clinicConfig.phoneRaw}`}
                    className="flex items-center text-sm text-slate-300 hover:text-teal-400 transition-colors font-semibold"
                  >
                    <Phone className="w-4 h-4 text-teal-400 mr-3 shrink-0" />
                    <span>Call: {clinicConfig.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${clinicConfig.whatsappRaw}?text=${encodeURIComponent(clinicConfig.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-slate-300 hover:text-emerald-400 transition-colors font-semibold"
                  >
                    <span className="w-4 h-4 text-emerald-400 mr-3 shrink-0">💬</span>
                    <span>WhatsApp Chat</span>
                  </a>
                </div>

                <div className="space-y-1.5 text-xs text-slate-400">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-1.5">Hours of Operation</h4>
                  <p>Weekdays: {clinicConfig.openingHours.weekdays}</p>
                  <p>Saturdays: {clinicConfig.openingHours.saturdays}</p>
                  <p>Sundays: {clinicConfig.openingHours.sundays}</p>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="w-full h-48 rounded-xl overflow-hidden shadow-inner border border-slate-800 bg-slate-800">
                <iframe
                  title="Clinic Location Map"
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

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
