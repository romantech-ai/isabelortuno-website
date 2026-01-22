import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabinete de Psicología Isabel Ortuño | Psicóloga Clínica en Alcázar de San Juan",
  description:
    "Gabinete de psicología en Alcázar de San Juan. Terapia individual, terapia de pareja, ansiedad, depresión, trastornos alimentarios. María Isabel Ortuño Paniagua, psicóloga clínica.",
  keywords: [
    "psicóloga",
    "psicología clínica",
    "terapia de pareja",
    "ansiedad",
    "depresión",
    "crisis de pánico",
    "isabel ortuño",
    "gabinete psicología",
    "alcázar de san juan",
    "ciudad real",
    "trastornos alimentarios",
    "terapia individual",
  ],
  authors: [{ name: "María Isabel Ortuño Paniagua" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Gabinete de Psicología Isabel Ortuño",
    description: "Psicología clínica. Terapia individual y de pareja en Alcázar de San Juan.",
    siteName: "Gabinete Psicología Isabel Ortuño",
  },
  twitter: {
    card: "summary_large_image",
    site: "@IsabeOrtuno",
    creator: "@IsabeOrtuno",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://isabelortunopsicologia.com",
  name: "Gabinete de Psicología Isabel Ortuño",
  description:
    "Gabinete de psicología clínica especializado en terapia individual, terapia de pareja y tratamiento de trastornos de ansiedad en Alcázar de San Juan.",
  url: "https://isabelortunopsicologia.com",
  telephone: "+34605878109",
  email: "isabel@isabelortunopsicologia.com",
  priceRange: "$$",
  medicalSpecialty: "Psychology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Emilio Castelar, 36, 2º B",
    addressLocality: "Alcázar de San Juan",
    addressRegion: "Ciudad Real",
    postalCode: "13600",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.3903,
    longitude: -3.2078,
  },
  sameAs: [
    "https://www.facebook.com/GabinetePsicologicoMariaIsabelOrtunoPaniagua",
    "https://twitter.com/IsabeOrtuno",
  ],
  founder: {
    "@type": "Person",
    name: "María Isabel Ortuño Paniagua",
    jobTitle: "Psicóloga Clínica",
    sameAs: "https://twitter.com/IsabeOrtuno",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Psicología",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Terapia Individual",
          description: "Atención psicológica personalizada para ansiedad, depresión, estrés y más",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Terapia de Pareja",
          description: "Tratamiento para mejorar la comunicación y resolver conflictos de pareja",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trastornos Alimentarios",
          description: "Tratamiento especializado para anorexia, bulimia y otros trastornos",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sexología",
          description: "Atención a problemas de salud sexual",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-sans">
        <GoogleAnalytics />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
