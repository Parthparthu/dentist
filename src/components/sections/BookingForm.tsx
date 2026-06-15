"use client";

import React, { useState } from "react";
import { clinicConfig } from "@/config/clinic";
import Button from "@/components/ui/Button";
import { Calendar, Phone, CheckCircle, AlertCircle } from "lucide-react";

export const BookingForm: React.FC<{ defaultServiceSlug?: string }> = ({
  defaultServiceSlug = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultServiceSlug || "",
    date: "",
    time: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const getTodayString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };
  const todayStr = getTodayString();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    // 1. Basic validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    // 2. Client-side Name validation (minimum 2 characters)
    if (formData.name.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Name must be at least 2 characters long.");
      setIsLoading(false);
      return;
    }

    // 3. Client-side Phone validation (at least 10 digits)
    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setStatus("error");
      setErrorMessage("Please enter a valid phone number containing at least 10 digits.");
      setIsLoading(false);
      return;
    }

    // 4. Client-side Date validation (not in the past)
    const dateParts = formData.date.split("-").map(Number);
    if (dateParts.length === 3) {
      const [year, month, day] = dateParts;
      const inputDate = new Date(year, month - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (inputDate < today) {
        setStatus("error");
        setErrorMessage("Please select an appointment date that is today or in the future.");
        setIsLoading(false);
        return;
      }
    }

    // 5. Consent validation
    if (!consent) {
      setStatus("error");
      setErrorMessage("Please check the consent box to proceed with booking your appointment.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: defaultServiceSlug || "",
          date: "",
          time: "",
          message: "",
        });
        setConsent(false);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-teal-50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/40 rounded-2xl p-8 text-center space-y-4">
        <div className="mx-auto w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/35 flex items-center justify-center text-teal-600 dark:text-teal-400">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
          Appointment Request Sent!
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          Thank you for choosing {clinicConfig.clinicName}. Our clinic manager will call you within
          the next <span className="font-semibold text-teal-600">30 minutes</span> to confirm
          your exact slot.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`tel:${clinicConfig.phoneRaw}`}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full text-sm transition-all"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span>Call Clinic Now</span>
          </a>
          <button
            onClick={() => setStatus("idle")}
            className="text-xs font-semibold text-slate-500 hover:text-slate-900 py-2 transition-colors cursor-pointer"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="space-y-3 p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-100/65 dark:border-rose-900/30 text-rose-800 dark:text-rose-400 rounded-xl text-sm">
          <div className="flex items-start space-x-2.5">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-500" />
            <span className="font-medium">{errorMessage}</span>
          </div>
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`tel:${clinicConfig.phoneRaw}`}
              className="inline-flex items-center px-3 py-1.5 bg-rose-100 hover:bg-rose-200 text-rose-800 dark:bg-rose-900/30 dark:hover:bg-rose-900/50 dark:text-rose-300 rounded-lg text-xs font-semibold transition-colors"
            >
              📞 Call: {clinicConfig.phone}
            </a>
            <a
              href={`https://wa.me/${clinicConfig.whatsappRaw}?text=${encodeURIComponent(clinicConfig.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 dark:bg-emerald-950/30 dark:hover:bg-emerald-950/50 dark:text-emerald-400 rounded-lg text-xs font-semibold transition-colors"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
          >
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rohan Sharma"
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
          >
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. rohan@gmail.com"
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white"
          />
        </div>

        {/* Treatment Option */}
        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
          >
            Interested Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white"
          >
            <option value="">Select a treatment (Optional)</option>
            {clinicConfig.services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Preferred Date */}
        <div>
          <label
            htmlFor="date"
            className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
          >
            Preferred Date <span className="text-rose-500">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            min={todayStr}
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white"
          />
        </div>

        {/* Preferred Time */}
        <div>
          <label
            htmlFor="time"
            className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
          >
            Preferred Time Slot <span className="text-rose-500">*</span>
          </label>
          <select
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white"
          >
            <option value="">Select a time slot</option>
            <option value="morning_early">Morning (09:00 AM - 12:00 PM)</option>
            <option value="afternoon">Afternoon (12:00 PM - 04:00 PM)</option>
            <option value="evening">Evening (04:00 PM - 08:00 PM)</option>
          </select>
        </div>
      </div>

      {/* Message/Notes */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
        >
          Message / Special Requests
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. I am experiencing sharp pain in my upper tooth / I want an implant consultation."
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white resize-y"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start space-x-2.5 pt-1">
        <input
          type="checkbox"
          id="consent"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-400 dark:border-slate-700 text-teal-600 focus:ring-teal-500 cursor-pointer"
        />
        <label
          htmlFor="consent"
          className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed cursor-pointer select-none"
        >
          I consent to receive calls and WhatsApp notifications from {clinicConfig.clinicName} on my number to confirm my booking slot.
        </label>
      </div>

      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full py-4 text-base font-semibold flex items-center justify-center"
      >
        <Calendar className="w-5 h-5 mr-2" />
        <span>Request Appointment</span>
      </Button>
    </form>
  );
};

export default BookingForm;
