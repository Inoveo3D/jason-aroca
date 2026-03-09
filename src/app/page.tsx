import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import RatingCounter from "@/components/RatingCounter";

export const metadata: Metadata = {
  title: "Électricien Marignane — Dépannage & Installation | + élect Jason Aroca",
  description:
    "+ élect, votre électricien à Marignane (13700) : dépannage électrique 5j/7, installation, mise aux normes, tableau électrique. Artisan assurance décennale. Devis gratuit sous 24h. Intervient à Vitrolles, Rognac, Martigues, Aix-en-Provence, Marseille et alentours.",
  keywords: [
    "électricien Marignane",
    "dépannage électrique Marignane",
    "électricien 5j/7 Marignane",
    "installation électrique Marignane",
    "tableau électrique Marignane",
    "électricien urgence Marignane",
    "devis électricien Marignane",
    "artisan électricien 13700",
    "+ élect Marignane",
    "Jason Aroca électricien",
    "électricien Vitrolles",
    "électricien Rognac",
    "électricien Martigues",
    "électricien Bouches-du-Rhône",
  ],
  openGraph: {
    title: "Électricien à Marignane — + élect | Jason Aroca",
    description: "Dépannage électrique urgent, installation et mise aux normes à Marignane. Devis gratuit, 7j/7, assurance décennale.",
  },
};

const services = [
  {
    img: "/images/services/1-installation.webp",
    title: "Installations Électriques",
    desc: "Des installations sécurisées et conformes aux normes.",
  },
  {
    img: "/images/services/2-réparation.webp",
    title: "Réparations Électriques",
    desc: "Des solutions rapides et efficaces pour tous vos besoins de réparation.",
  },
  {
    img: "/images/services/3-maintenance.webp",
    title: "Maintenance Préventive",
    desc: "Assurez le bon fonctionnement de vos installations électriques.",
  },
  {
    img: "/images/services/4-multi-services.webp",
    title: "Multi-services & Travaux Annexes",
    desc: "Pose de placo, second œuvre et travaux complémentaires pour un service clé en main.",
  },
];

const testimonials = [
  {
    name: "Sophie M.",
    text: "Intervention le soir même pour une panne totale. Professionnel, efficace et prix honnête. Je recommande vivement !",
    stars: 5,
  },
  {
    name: "Thomas R.",
    text: "Mise aux normes de mon appartement avant vente. Travail soigné, délais respectés. Très satisfait.",
    stars: 5,
  },
  {
    name: "Marie-Claire D.",
    text: "Installation d'un nouveau tableau électrique. Jason explique bien ce qu'il fait, on se sent en confiance.",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 opacity-90" />
        {/* Quand vous avez une image hero : */}
        {/* <Image src="/images/hero-bg.jpg" alt="Électricien au travail" fill className="object-cover opacity-20" /> */}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-block bg-amber-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            Électricien — Marignane & alentours
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Votre électricien de confiance,{" "}
            <span className="text-amber-400">disponible 5j/7</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Dépannage urgent, installation, mise aux normes — Jason Aroca / + élect
            intervient rapidement à Marignane et dans les communes voisines avec sérieux et
            transparence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:+33698127982"
              className="border-2 border-white hover:border-amber-400 hover:text-amber-400 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
              06 98 12 79 82
            </a>
          </div>

          <p className="mt-6 text-amber-400 font-semibold animate-pulse">
            Urgence électrique ? Intervention dès que possible !
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ===== STATS ANIMÉES ===== */}
      <StatsCounter />

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos prestations
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Particuliers, propriétaires, bailleurs — je m'adapte à vos besoins
              avec des solutions durables et aux normes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-gray-800 hover:bg-gray-700 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <h3 className="font-bold text-amber-400 text-lg">{s.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors"
                  >
                    Voir plus
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Voir tous les services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== À PROPOS (mini) ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-sm mx-auto md:mx-0 h-80 md:h-auto md:aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/jason-aroca.webp"
              alt="Jason Aroca électricien"
              fill
              className="object-cover object-top"
            />
          </div>

          <div>
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">
              À propos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Un artisan de confiance à votre service
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Avec plus de 15 ans d'expérience dans l'électricité résidentielle et
              tertiaire, Jason Aroca est reconnu pour la qualité de ses
              interventions, sa ponctualité et sa transparence tarifaire.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Basé à Marignane, il intervient dans tout le secteur des Bouches-du-Rhône
              pour des projets de rénovation, d'installation et de mise aux normes,
              avec des solutions adaptées à votre budget.
            </p>
            <ul className="space-y-2 mb-8">
              {["Devis gratuit", "Garantie décennale (installations)", "Travail soigné et propre", "Tarifs transparents"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <span className="text-amber-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/a-propos"
                className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TÉMOIGNAGES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos clients nous font confiance
            </h2>
          </div>

          {/* Note globale */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="text-center shrink-0">
              <RatingCounter />
              <div className="text-gray-400 text-sm font-semibold mt-1 uppercase tracking-widest">Note client</div>
              <div className="flex justify-center gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
            </div>
            <div className="w-px h-16 bg-gray-700 hidden md:block" />
            <p className="text-gray-300 text-lg italic leading-relaxed text-center md:text-left">
              "Service impeccable ! Intervention rapide pour un dépannage électrique urgent à Marignane.
              Électricien professionnel et tarifs honnêtes. Je recommande + élect sans hésiter."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un électricien à Marignane ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contactez-nous maintenant et obtenez un devis gratuit.
            Intervention rapide à Marignane et alentours, du lundi au vendredi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:+33698127982"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold text-lg px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
