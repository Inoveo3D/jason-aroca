"use client";

export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/contact@jasonarocaelect.fr"
      method="POST"
      className="space-y-5"
    >
      {/* ── Champs cachés FormSubmit ── */}
      <input type="hidden" name="_next"     value="https://www.jasonarocaelect.fr/merci" />
      <input type="hidden" name="_captcha"  value="false" />
      <input type="hidden" name="_subject"  value="Nouvelle demande via + élect" />
      {/* Honeypot anti-spam */}
      <input type="text"   name="_honey"    style={{ display: "none" }} />

      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nom complet <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jean Dupont"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
        />
      </div>

      {/* Email + Téléphone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jean@email.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="06 00 00 00 00"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
        </div>
      </div>

      {/* Type de service */}
      <div>
        <label htmlFor="typeService" className="block text-sm font-medium text-gray-700 mb-1">
          Type de prestation <span className="text-red-500">*</span>
        </label>
        <select
          id="typeService"
          name="typeService"
          required
          defaultValue=""
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition bg-white"
        >
          <option value="" disabled>-- Choisir un service --</option>
          <option value="Dépannage d'urgence">Dépannage d&apos;urgence</option>
          <option value="Installation électrique">Installation électrique</option>
          <option value="Mise aux normes">Mise aux normes</option>
          <option value="Domotique & éclairage">Domotique &amp; éclairage</option>
          <option value="Borne de recharge VE">Borne de recharge VE</option>
          <option value="Électricité tertiaire">Électricité tertiaire</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Décrivez votre besoin <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet ou problème en quelques lignes..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.02] shadow"
      >
        Envoyer ma demande
      </button>
    </form>
  );
}
