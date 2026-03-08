import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Services Électricien Marignane — Installation, Dépannage, Maintenance | + élect",
  description:
    "Tous vos travaux électriques à Marignane et dans un rayon de 50 km : installation électrique, dépannage urgence 7j/7, maintenance préventive, conseils personnalisés. Artisan assurance décennale. Devis gratuit. Vitrolles, Rognac, Martigues, Aix-en-Provence, Marseille, Istres, Salon-de-Provence.",
  keywords: [
    "installation électrique Marignane",
    "dépannage électrique urgence Marignane",
    "maintenance préventive électrique",
    "mise aux normes NF C 15-100",
    "tableau électrique Marignane",
    "câblage électrique Marignane",
    "remplacement tableau électrique",
    "prise interrupteur Marignane",
    "dépannage court-circuit",
    "électricien particulier professionnel Marignane",
    "zone intervention électricien 50km Marignane",
    "électricien Vitrolles",
    "électricien Rognac",
    "électricien Berre-l'Étang",
    "électricien Martigues",
    "électricien Châteauneuf-les-Martigues",
    "électricien Aix-en-Provence",
    "électricien Marseille",
    "électricien Istres",
    "électricien Salon-de-Provence",
    "électricien Aubagne",
    "devis gratuit électricien",
  ],
  openGraph: {
    title: "Services Électricien — Installation, Dépannage & Maintenance | + élect Marignane",
    description: "Installation, dépannage urgence, maintenance et conseils électriques à Marignane et dans un rayon de 50 km. Devis gratuit, assurance décennale.",
  },
};

const services = [
  {
    img: "/images/services/1-installation.webp",
    title: "Installations Électriques",
    desc: "Des installations sécurisées et conformes aux normes.",
    details: [
      "Tableau électrique (pose et remplacement)",
      "Câblage et mise en gaine",
      "Prises, interrupteurs, luminaires",
      "Alimentation cuisine, salle de bain",
    ],
  },
  {
    img: "/images/services/2-réparation.webp",
    title: "Réparations Électriques",
    desc: "Des solutions rapides et efficaces pour tous vos besoins de réparation.",
    details: [
      "Diagnostic rapide de la panne",
      "Remplacement de composants défectueux",
      "Réparation de court-circuit",
      "Remise en service garantie",
    ],
  },
  {
    img: "/images/services/3-maintenance.webp",
    title: "Maintenance Préventive",
    desc: "Assurez le bon fonctionnement de vos installations électriques.",
    details: [
      "Contrôle périodique de l'installation",
      "Détection des anomalies avant panne",
      "Vérification des tableaux et disjoncteurs",
      "Rapport d'état complet",
    ],
  },
  {
    img: "/images/services/4-conseils.webp",
    title: "Conseils Personnalisés",
    desc: "Recevez des conseils d'experts adaptés à votre situation.",
    details: [
      "Audit de votre installation",
      "Recommandations adaptées à votre budget",
      "Orientation vers les aides disponibles",
      "Accompagnement de A à Z",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
            Nos prestations
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Tous vos besoins électriques,{" "}
            <span className="text-amber-400">une seule adresse</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Du dépannage d'urgence à l'installation complète, je propose une gamme de services
            adaptés aux particuliers et aux professionnels à Marignane et dans toute la région.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-gray-800 hover:bg-gray-700 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image src={s.img} alt={s.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-7 flex flex-col flex-1 gap-4">
                  <h2 className="font-bold text-amber-400 text-lg">{s.title}</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-amber-500 font-bold mt-0.5 shrink-0">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors mt-auto pt-2"
                  >
                    Demander un devis
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Zone d'intervention</h2>
            <p className="text-gray-500">
              Basé à Marignane, j'interviens dans un rayon de ~50 km autour de la ville.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Carte */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-md border border-gray-100 h-80">
              <iframe
                src="https://maps.google.com/maps?q=43.4167,5.2167&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone d'intervention + élect"
              />
            </div>

            {/* Villes */}
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Communes desservies
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Marignane",
                  "Vitrolles",
                  "Châteauneuf-les-Martigues",
                  "Rognac",
                  "Berre-l'Étang",
                  "Martigues",
                  "Marseille",
                  "Aix-en-Provence",
                ].map((ville) => (
                  <span
                    key={ville}
                    className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium px-3 py-1.5 rounded-full"
                  >
                    <svg className="w-3 h-3 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {ville}
                  </span>
                ))}
                <span className="inline-flex items-center bg-gray-100 text-gray-500 text-sm px-3 py-1.5 rounded-full italic">
                  Et bien d&apos;autres...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 étapes */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Une intervention en <span className="text-amber-400">3 étapes</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Installation, rénovation ou dépannage électrique : + élect vous accompagne de A à Z dans vos projets électriques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image gauche */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/jason-aroca.webp"
                alt="Jason Aroca électricien au travail"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Étapes droite */}
            <div className="space-y-6">
              {[
                {
                  num: "1",
                  title: "Demande de devis",
                  desc: "Contactez-moi par téléphone, via le formulaire ou par email. J'analyse votre besoin et vous transmets un devis gratuit et détaillé dans les plus brefs délais.",
                },
                {
                  num: "2",
                  title: "Planification de l'intervention",
                  desc: "Après validation du devis, je planifie l'intervention selon vos disponibilités afin de convenir d'un rendez-vous rapide et respecté.",
                },
                {
                  num: "3",
                  title: "Réalisation des travaux",
                  desc: "Je réalise vos travaux dans le respect des normes électriques, avec du matériel professionnel et une attention particulière à la sécurité et à la qualité de l'installation.",
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-5 items-start bg-gray-800 rounded-2xl p-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-extrabold text-xl">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Un projet ? Parlons-en.</h2>
          <p className="text-gray-300 mb-8">
            Devis gratuit et sans engagement sous 24h. Je vous réponds rapidement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33698127982"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold text-lg px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
              06 98 12 79 82
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
