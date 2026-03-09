import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — + élect | Jason Aroca Électricien Marignane",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">Mentions légales</h1>

        {/* Éditeur */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Éditeur du site</h2>
          <dl className="space-y-3 text-sm text-gray-600">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <dt className="font-semibold text-gray-800">Nom de l&apos;entreprise</dt>
              <dd className="sm:col-span-2">Jason Aroca + Élect</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <dt className="font-semibold text-gray-800">Statut</dt>
              <dd className="sm:col-span-2">Entrepreneur individuel</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <dt className="font-semibold text-gray-800">Siège social</dt>
              <dd className="sm:col-span-2">Marignane, France</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <dt className="font-semibold text-gray-800">Téléphone</dt>
              <dd className="sm:col-span-2">
                <a href="tel:+33698127982" className="hover:text-brand-500 transition-colors">06 98 12 79 82</a>
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <dt className="font-semibold text-gray-800">SIRET</dt>
              <dd className="sm:col-span-2">933 844 003 00014</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <dt className="font-semibold text-gray-800">TVA intracommunautaire</dt>
              <dd className="sm:col-span-2">FR40933844003</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <dt className="font-semibold text-gray-800">Inscription</dt>
              <dd className="sm:col-span-2">Inscrit au répertoire des métiers — Chambre de Métiers et de l&apos;Artisanat des Bouches-du-Rhône</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <dt className="font-semibold text-gray-800">Responsable de publication</dt>
              <dd className="sm:col-span-2">Jason Aroca</dd>
            </div>
          </dl>
        </div>

        {/* Hébergement */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Hébergement du site</h2>
          <dl className="space-y-3 text-sm text-gray-600">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <dt className="font-semibold text-gray-800">Hébergeur</dt>
              <dd className="sm:col-span-2">Vercel Inc.</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <dt className="font-semibold text-gray-800">Adresse</dt>
              <dd className="sm:col-span-2">440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <dt className="font-semibold text-gray-800">Site web</dt>
              <dd className="sm:col-span-2">vercel.com</dd>
            </div>
          </dl>
        </div>

        {/* Propriété intellectuelle */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            L&apos;ensemble du contenu de ce site (textes, images, logo) est la propriété exclusive de Jason Aroca + Élect
            et est protégé par la législation française et internationale sur la propriété intellectuelle.
            Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </div>
      </div>
    </section>
  );
}
