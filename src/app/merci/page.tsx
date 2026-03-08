import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message envoyé — + élect",
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-20">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 max-w-md w-full p-10 text-center">
        {/* Icône check */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Message envoyé !
        </h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais,
          généralement sous 24h.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
          <a
            href="tel:+33698127982"
            className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all"
          >
            Appeler Jason
          </a>
        </div>
      </div>
    </section>
  );
}
