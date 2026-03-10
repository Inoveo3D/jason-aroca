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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
