"use client";

import { useState } from "react";

type FormData = {
  nom: string;
  email: string;
  telephone: string;
  typeService: string;
  message: string;
};

const initialState: FormData = {
  nom: "",
  email: "",
  telephone: "",
  typeService: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // TODO: remplacer par un vrai appel API (ex: /api/contact, EmailJS, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1200)); // simulation

    setStatus("success");
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nom */}
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
          Nom complet <span className="text-red-500">*</span>
        </label>
        <input
          id="nom"
          name="nom"
          type="text"
          required
          value={form.nom}
          onChange={handleChange}
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
            value={form.email}
            onChange={handleChange}
            placeholder="jean@email.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            value={form.telephone}
            onChange={handleChange}
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
          value={form.typeService}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition bg-white"
        >
          <option value="">-- Choisir un service --</option>
          <option value="depannage">Dépannage d'urgence</option>
          <option value="installation">Installation électrique</option>
          <option value="normes">Mise aux normes</option>
          <option value="domotique">Domotique & éclairage</option>
          <option value="borne">Borne de recharge VE</option>
          <option value="tertiaire">Électricité tertiaire</option>
          <option value="autre">Autre</option>
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
          value={form.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet ou problème en quelques lignes..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.02] shadow"
      >
        {status === "sending"
          ? "Envoi en cours..."
          : status === "success"
          ? "Message envoyé ✓"
          : "Envoyer ma demande"}
      </button>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm text-center">
          Merci ! Votre message a été envoyé. Je vous réponds dans les meilleurs délais.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm text-center">
          Une erreur s'est produite. Veuillez réessayer ou appeler directement.
        </div>
      )}
    </form>
  );
}
