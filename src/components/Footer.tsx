import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Identité */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-bold text-xl text-white">
              + <span className="text-amber-400">élect</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Électricien professionnel, Jason Aroca intervient à Marignane et dans les
            communes environnantes. Dépannage, installation et mise aux normes pour
            particuliers et professionnels.
          </p>
        </div>

        {/* Navigation */}
        <div className="hidden md:block md:pl-44">
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-amber-400 transition-colors">Accueil</Link></li>
            <li><Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link></li>
            <li><Link href="/a-propos" className="hover:text-amber-400 transition-colors">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact & Devis</Link></li>
          </ul>
        </div>

        {/* Contact rapide */}
        <div className="md:pl-28">
          <h3 className="text-white font-semibold mb-4">Contact rapide</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <a href="tel:+33698127982" className="hover:text-amber-400 transition-colors">
                06 98 12 79 82
              </a>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:aroca.jason.elect@outlook.fr" className="hover:text-amber-400 transition-colors">
                aroca.jason.elect@outlook.fr
              </a>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>Marignane & alentours</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2 px-4 max-w-6xl mx-auto w-full">
        <span>© 2025 + élect - Jason Aroca - Tous droits réservés. &nbsp;•&nbsp; Développé par inoveo3D</span>
        <div className="flex gap-4">
          <Link href="/mentions-legales" className="hover:text-amber-400 transition-colors">Mentions légales</Link>
          <Link href="/politique-confidentialite" className="hover:text-amber-400 transition-colors">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
