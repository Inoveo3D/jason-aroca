import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — + élect | Jason Aroca Électricien Marignane",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">Politique de confidentialité</h1>

        <div className="space-y-6">

          {/* Collecte */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Collecte des données</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Le site peut collecter certaines informations personnelles via le formulaire de contact, notamment :
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {["Nom et prénom", "Adresse email", "Numéro de téléphone", "Message envoyé par l'utilisateur"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Finalité */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Finalité de la collecte</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Ces informations sont utilisées uniquement pour :
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {["Répondre aux demandes de contact", "Organiser un rendez-vous ou établir un devis"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Conservation */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Conservation des données</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les informations ne sont pas stockées sur le site internet et sont uniquement transmises par email
              afin de répondre à la demande. Aucune base de données n&apos;est constituée.
            </p>
          </div>

          {/* Partage */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Partage des données</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les données personnelles collectées ne sont ni vendues, ni louées, ni transmises à des tiers.
            </p>
          </div>

          {/* Droits */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Droits des utilisateurs</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit
              d&apos;accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits,
              contactez-nous :
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold shrink-0">→</span>
                <a href="mailto:aroca.jason.elect@outlook.fr" className="hover:text-amber-500 transition-colors">
                  aroca.jason.elect@outlook.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold shrink-0">→</span>
                <a href="tel:+33698127982" className="hover:text-amber-500 transition-colors">
                  06 98 12 79 82
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
