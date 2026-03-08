import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Devis Gratuit Électricien Marignane — + élect | Jason Aroca",
  description:
    "Contactez + élect pour un devis gratuit sous 24h. Électricien Jason Aroca intervient à Marignane (13700) et dans un rayon de 50 km : Vitrolles, Rognac, Martigues, Aix-en-Provence, Marseille, Istres, Salon-de-Provence. Urgences 7j/7 — 06 98 12 79 82.",
  keywords: [
    "devis électricien Marignane",
    "contact électricien Marignane",
    "devis gratuit électricien 13700",
    "urgence électricien Marignane",
    "appel électricien Marignane",
    "dépannage électrique urgent Marignane",
    "06 98 12 79 82 électricien",
    "Jason Aroca contact",
    "+ élect contact",
    "électricien Vitrolles devis",
    "électricien Rognac devis",
    "électricien Martigues devis",
    "électricien Aix-en-Provence devis",
  ],
  openGraph: {
    title: "Devis Gratuit Électricien Marignane — + élect | Jason Aroca",
    description: "Demandez votre devis gratuit en ligne ou appelez directement le 06 98 12 79 82. Réponse sous 24h, urgences 7j/7.",
  },
};

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const infos = [
  {
    Icon: PhoneIcon,
    title: "Téléphone",
    value: "06 98 12 79 82",
    link: "tel:+33698127982",
    detail: "Disponible 7j/7 — urgence 24h/24",
  },
  {
    Icon: MailIcon,
    title: "Email",
    value: "aroca.jason.elect@outlook.fr",
    link: "mailto:aroca.jason.elect@outlook.fr",
    detail: "Réponse sous 24h garantie",
  },
  {
    Icon: PinIcon,
    title: "Zone d'intervention",
    value: "Marignane & alentours",
    link: null,
    detail: "Marignane, Vitrolles, Rognac, Berre, Martigues...",
  },
  {
    Icon: ClockIcon,
    title: "Horaires",
    value: "7j/7 — 8h à 20h",
    link: null,
    detail: "Urgences : disponible 24h/24",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Obtenez votre{" "}
            <span className="text-amber-400">devis gratuit</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous ou appelez directement. Je vous réponds
            rapidement avec un devis clair et sans engagement.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Infos contact */}
          <div className="lg:col-span-1 space-y-4">
            {infos.map((info) => (
              <div key={info.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-center">
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-blue-700">
                  <info.Icon />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {info.title}
                  </p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="font-semibold text-gray-900 hover:text-amber-500 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-gray-900">{info.value}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-0.5">{info.detail}</p>
                </div>
              </div>
            ))}

            {/* Urgence */}
            <div className="bg-amber-500 rounded-2xl p-5 text-white">
              <p className="font-bold text-lg mb-1">Urgence électrique ?</p>
              <p className="text-amber-100 text-sm mb-3">
                Pas d'électricité, disjoncteur qui saute, odeur de brûlé ? Appelez directement.
              </p>
              <a
                href="tel:+33698127982"
                className="inline-flex items-center gap-2 bg-white text-amber-600 font-bold px-6 py-2 rounded-lg hover:bg-amber-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                Appel d'urgence
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Formulaire de contact</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden h-64 shadow-sm border border-gray-100">
            <iframe
              src="https://maps.google.com/maps?q=43.4167,5.2167&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="+ élect — Marignane"
            />
          </div>
        </div>
      </section>
    </>
  );
}
