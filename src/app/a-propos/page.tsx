import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos — Jason Aroca Artisan Électricité & Multi-services Marignane | + élect",
  description:
    "Découvrez + élect : Jason Aroca, artisan à Marignane (13700), spécialisé en électricité et multi-services (placo, fenêtres, portails, volets). Assurance décennale, devis gratuit, disponible 7j/7 — Vitrolles, Rognac, Martigues, Aix-en-Provence, Marseille et alentours.",
  keywords: [
    "Jason Aroca artisan Marignane",
    "+ élect Marignane",
    "artisan électricité multiservices Marignane",
    "artisan assurance décennale Marignane",
    "électricien fiable Marignane",
    "multi-services Marignane",
    "pose placo Marignane",
    "remplacement fenêtre portail volet Marignane",
    "artisan 13700",
    "électricien disponible 7j/7",
    "mise aux normes NF C 15-100 Marignane",
    "dépannage électrique Marignane",
    "devis gratuit artisan Marignane",
    "électricien Bouches-du-Rhône",
  ],
  openGraph: {
    title: "À Propos de + élect — Jason Aroca, Artisan Électricité & Multi-services Marignane",
    description: "Artisan à Marignane spécialisé en électricité et multi-services. Fiabilité, transparence, assurance décennale et devis gratuit.",
  },
};

const valeurs = [
  {
    img: "/images/valeurs/1-fiabilité.webp",
    title: "Fiabilité",
    desc: "Respect des délais, devis précis et travail propre. Ce que je promets, je le tiens.",
  },
  {
    img: "/images/valeurs/2-securité.webp",
    title: "Sécurité",
    desc: "Chaque installation est réalisée aux normes NF C 15-100 pour votre sécurité totale.",
  },
  {
    img: "/images/valeurs/3-transparence.webp",
    title: "Transparence",
    desc: "Aucune mauvaise surprise : je vous explique tout avant de commencer et le devis est gratuit.",
  },
  {
    img: "/images/valeurs/4-satisfaction.webp",
    title: "Satisfaction client",
    desc: "Des centaines de chantiers réalisés avec soin. Je ne pars pas tant que vous n'êtes pas satisfait.",
    imgPos: "object-top",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">
            À propos
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            À Propos de <span className="text-brand-400">+ élect</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-300">
            Artisan en électricité & multiservices
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 shadow-sm min-h-80 p-12">
            <Image
              src="/images/logo-transprent.png"
              alt="Logo + élect"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">À Propos de + élect</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              +élect est une entreprise basée à Marignane, spécialisée dans l'installation électrique,
              la rénovation, la mise aux normes NF C 15-100 et le dépannage électrique 7j/7 (urgence uniquement le week-end).
              Au-delà de l'électricité, l'entreprise intervient également sur des travaux multi-services : pose de placo, remplacement de fenêtres,
              portails, volets et petits travaux de second œuvre, pour un service clé en main.
              Tous les travaux électriques sont couverts par une assurance décennale.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Artisan local Marignane", "Devis gratuit sous 24h", "Urgences 7j/7", "Assurance décennale"].map((badge) => (
                <span
                  key={badge}
                  className="bg-brand-50 border border-brand-200 text-brand-700 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mes valeurs</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Ces principes guident chacune de mes interventions, du premier contact jusqu'à la fin du chantier.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valeurs.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="relative h-48 w-full">
                  <Image src={v.img} alt={v.title} fill className={`object-cover ${"imgPos" in v ? v.imgPos : "object-center"}`} />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Parallax CTA */}
      <section
        className="relative py-36 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/prestations/1-installation-electrique.webp')" }}
      >
        <div className="absolute inset-0 bg-gray-900/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interventions sur Marignane et alentours
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Marignane, Vitrolles, Rognac, Berre, Martigues... Devis gratuit sous 24h.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-500 hover:bg-brand-400 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
