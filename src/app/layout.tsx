import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import JSONLD from "@/components/JSONLD";
import { clinicConfig } from "@/config/clinic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${clinicConfig.clinicName} | Modern Dental Clinic`,
    template: `%s | ${clinicConfig.clinicName}`,
  },
  description: clinicConfig.tagline,
  metadataBase: new URL(clinicConfig.siteUrl),
  openGraph: {
    title: clinicConfig.clinicName,
    description: clinicConfig.tagline,
    url: clinicConfig.siteUrl,
    siteName: clinicConfig.clinicName,
    locale: "en_US",
    type: "website",
  },
};

import Providers from "@/components/layout/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
        <JSONLD />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <Providers>
          <Header />
          
          {/* Main Content Area - spacer added for fixed header */}
          <main className="flex-grow pt-[74px] pb-[76px] lg:pb-0 relative z-10">
            {children}
          </main>

          <Footer />
          <MobileStickyBar />
        </Providers>
      </body>
    </html>
  );
}
