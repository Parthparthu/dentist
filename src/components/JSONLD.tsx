import React from "react";
import { clinicConfig } from "@/config/clinic";

export const JSONLD: React.FC = () => {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": clinicConfig.clinicName,
    "image": clinicConfig.gallery[0]?.image || "",
    "@id": `${clinicConfig.siteUrl}/#clinic`,
    "url": clinicConfig.siteUrl,
    "telephone": clinicConfig.phoneRaw,
    "email": clinicConfig.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicConfig.streetAddress,
      "addressLocality": clinicConfig.city,
      "addressRegion": clinicConfig.state,
      "postalCode": clinicConfig.postalCode,
      "addressCountry": clinicConfig.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": clinicConfig.geo.latitude,
      "longitude": clinicConfig.geo.longitude
    },
    "openingHoursSpecification": clinicConfig.schemaOpeningHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.dayOfWeek,
      "opens": hours.opens,
      "closes": hours.closes
    })),
    "sameAs": [
      clinicConfig.socialLinks.facebook,
      clinicConfig.socialLinks.instagram,
      clinicConfig.socialLinks.googleBusiness
    ].filter(Boolean)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
    />
  );
};

export default JSONLD;
