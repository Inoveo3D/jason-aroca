import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jasonarocaelect.fr"),
  alternates: { canonical: "https://www.jasonarocaelect.fr" },
  title: {
    default: "+ élect — Électricien à Marignane | Jason Aroca | Devis Gratuit",
    template: "%s | + élect — Électricien Marignane",
  },
  description:
    "Électricien professionnel à Marignane (13700). Dépannage électrique urgent, installation, mise aux normes NF C 15-100, assurance décennale. Devis gratuit sous 24h — 7j/7. Vitrolles, Rognac, Martigues, Aix-en-Provence, Marseille.",
  keywords: [
    "électricien Marignane",
    "électricien 13700",
    "dépannage électrique Marignane",
    "installation électrique Marignane",
    "mise aux normes électrique",
    "tableau électrique Marignane",
    "dépannage urgence électrique",
    "artisan électricien Marignane",
    "devis gratuit électricien",
    "Jason Aroca électricien",
    "+ élect",
    "électricien Vitrolles",
    "électricien Rognac",
    "électricien Martigues",
    "électricien Aix-en-Provence",
    "électricien Marseille",
    "électricien Berre-l'Étang",
    "électricien Châteauneuf-les-Martigues",
    "électricien Istres",
    "électricien Salon-de-Provence",
    "assurance décennale électricien",
    "électricien 7j/7",
  ],
  authors: [{ name: "Jason Aroca — + élect" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.jasonarocaelect.fr",
    siteName: "+ élect — Électricien Marignane",
    title: "+ élect — Électricien à Marignane | Jason Aroca",
    description:
      "Dépannage électrique urgent, installation et mise aux normes à Marignane et dans un rayon de 50 km. Devis gratuit, assurance décennale, 7j/7.",
    images: [
      {
        url: "https://www.jasonarocaelect.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "+ élect — Électricien à Marignane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.jasonarocaelect.fr/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.jasonarocaelect.fr/#business",
      "name": "+ élect",
      "legalName": "Jason Aroca + élect",
      "alternateName": ["Jason Aroca Électricien", "Plus Elect Marignane"],
      "description":
        "Électricien professionnel à Marignane (13700). Dépannage électrique urgent, installation, mise aux normes NF C 15-100, assurance décennale. Devis gratuit sous 24h — 7j/7.",
      "url": "https://www.jasonarocaelect.fr",
      "telephone": "+33698127982",
      "email": "contact@jasonarocaelect.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Marignane",
        "postalCode": "13700",
        "addressRegion": "Bouches-du-Rhône",
        "addressCountry": "FR",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.4167,
        "longitude": 5.2167,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:30",
          "closes": "18:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "00:00",
        },
      ],
      "priceRange": "€€",
      "image": "https://www.jasonarocaelect.fr/og-image.png",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.jasonarocaelect.fr/images/logo.png",
      },
      "areaServed": [
        { "@type": "City", "name": "Marignane" },
        { "@type": "City", "name": "Vitrolles" },
        { "@type": "City", "name": "Rognac" },
        { "@type": "City", "name": "Martigues" },
        { "@type": "City", "name": "Berre-l'Étang" },
        { "@type": "City", "name": "Aix-en-Provence" },
        { "@type": "City", "name": "Marseille" },
        { "@type": "City", "name": "Châteauneuf-les-Martigues" },
        { "@type": "City", "name": "Istres" },
        { "@type": "City", "name": "Salon-de-Provence" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services électriques et multi-services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dépannage électrique d'urgence",
              "description": "Intervention rapide 7j/7 pour pannes électriques à Marignane et alentours",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Installation électrique",
              "description": "Installation complète aux normes NF C 15-100, tableau, câblage, prises",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mise aux normes électrique",
              "description": "Mise en conformité NF C 15-100 avec assurance décennale",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Multi-services & travaux annexes",
              "description": "Pose de placo, remplacement de fenêtres, portails et volets",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.jasonarocaelect.fr/#person",
      "name": "Jason Aroca",
      "givenName": "Jason",
      "familyName": "Aroca",
      "jobTitle": "Artisan électricien",
      "worksFor": { "@id": "https://www.jasonarocaelect.fr/#business" },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Marignane",
        "postalCode": "13700",
        "addressCountry": "FR",
      },
      "url": "https://www.jasonarocaelect.fr",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
