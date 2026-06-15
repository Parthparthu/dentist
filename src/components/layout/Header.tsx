"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinicConfig } from "@/config/clinic";
import { Phone, Menu, X, Calendar, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    const handle = setTimeout(() => {
      setIsOpen(false);
      setServicesDropdown(false);
    }, 0);
    return () => clearTimeout(handle);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Offers", href: "/offers" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 shadow-md backdrop-blur-md py-3"
          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="h-10 w-10 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-teal-500/20">
              {clinicConfig.brandInitials}
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white leading-none">
                {clinicConfig.clinicName}
              </span>
              <span className="text-[10px] text-teal-600 dark:text-teal-400 font-medium tracking-widest uppercase mt-1">
                Dental Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-medium text-sm transition-colors duration-200 hover:text-teal-600 ${
                pathname === "/"
                  ? "text-teal-600"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`font-medium text-sm transition-colors duration-200 hover:text-teal-600 ${
                pathname === "/about"
                  ? "text-teal-600"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className={`font-medium text-sm flex items-center space-x-1 cursor-pointer transition-colors duration-200 hover:text-teal-600 ${
                  pathname.startsWith("/services")
                    ? "text-teal-600"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesDropdown && (
                <div className="absolute left-0 mt-2 w-72 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl py-3 z-50">
                  <div className="grid grid-cols-1 gap-1 px-2">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-xs font-semibold text-teal-600 uppercase tracking-wider hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
                    >
                      All Services Overview
                    </Link>
                    <div className="h-px bg-slate-100 dark:bg-slate-800 my-1 mx-2" />
                    {clinicConfig.services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={`block px-4 py-2 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-150 ${
                          pathname === `/services/${service.slug}`
                            ? "text-teal-600 font-semibold bg-teal-50/50 dark:bg-teal-950/20"
                            : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/offers"
              className={`font-medium text-sm transition-colors duration-200 hover:text-teal-600 ${
                pathname === "/offers"
                  ? "text-teal-600"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              Offers
            </Link>

            <Link
              href="/reviews"
              className={`font-medium text-sm transition-colors duration-200 hover:text-teal-600 ${
                pathname === "/reviews"
                  ? "text-teal-600"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              Reviews
            </Link>

            <Link
              href="/gallery"
              className={`font-medium text-sm transition-colors duration-200 hover:text-teal-600 ${
                pathname === "/gallery"
                  ? "text-teal-600"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className={`font-medium text-sm transition-colors duration-200 hover:text-teal-600 ${
                pathname === "/contact"
                  ? "text-teal-600"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href={`tel:${clinicConfig.phoneRaw}`}
              className="flex items-center text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-semibold text-sm transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-teal-600 mr-2 animate-pulse" />
              <span>{clinicConfig.phone}</span>
            </a>
            <ThemeToggle />
            <Link href="/contact">
              <Button size="sm" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-slate-900/40 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed top-[65px] right-0 bottom-0 w-80 max-w-full bg-white dark:bg-slate-950 shadow-2xl z-50 transform transition-transform duration-350 ease-in-out border-l border-slate-100 dark:border-slate-800 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 space-y-6 overflow-y-auto">
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Navigation</h3>
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 ${
                    pathname === link.href
                      ? "text-teal-600 bg-teal-50/50 dark:bg-teal-950/20"
                      : "text-slate-800 dark:text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Services</h3>
            <div className="grid grid-cols-1 gap-1 pl-2 border-l border-slate-100 dark:border-slate-800">
              <Link
                href="/services"
                className="block px-3 py-1.5 text-xs font-medium text-teal-600"
              >
                All Services »
              </Link>
              {clinicConfig.services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`block px-3 py-1.5 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 ${
                    pathname === `/services/${service.slug}`
                      ? "text-teal-600 font-medium"
                      : "text-slate-700 dark:text-slate-400"
                  }`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 px-4 py-2.5 rounded-2xl border border-slate-100 dark:border-slate-800/80">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Switch Theme</span>
              <ThemeToggle />
            </div>
            <a
              href={`tel:${clinicConfig.phoneRaw}`}
              className="flex items-center justify-center w-full py-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-slate-200 font-semibold rounded-full hover:text-teal-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-600 mr-2" />
              <span>Call: {clinicConfig.phone}</span>
            </a>
            <Link href="/contact" className="block w-full">
              <Button className="w-full flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
