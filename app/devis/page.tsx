"use client";
import React from "react";
import { useState } from "react";
export type FormDataType = {
    nom: string;
    email: string;
    telephone: string;
    adresse?: string;
    service: string;
    message?: string;
}

export default function Devis() {
    const [formData, setFormData] = useState<FormDataType>({nom: "", email: "", telephone: "", adresse: "", service: "", message: ""});
    return (
        <section className="flex flex-col w-full min-h-screen bg-[#eadeda] items-center justify-center px-4 py-10">
            <h1 className="text-4xl font-bold mb-6 text-center text-[#4B2E05]">Demande de devis</h1>
            <p className="max-w-2xl text-center mb-10 text-[#4B2E05]">
                Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé pour nos services de ménage à domicile. Nous vous répondrons dans les plus brefs délais !
            </p>
            <form className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg flex flex-col gap-6">
                <input value={formData.nom} onChange={(e) => { setFormData((prev) => ({ ...prev, nom: e.target.value }));}}
                  type="text" name="nom" placeholder="Nom et prénom" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required />
                <input value={formData.email} onChange={(e) => { setFormData((prev) => ({ ...prev, email: e.target.value }));}
                } type="email"  name="email" placeholder="Adresse email" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required />
                <input type="tel" name="telephone" placeholder="Téléphone" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required />
                <input type="text" name="adresse" placeholder="Adresse" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" />
                <select title="type netoyage" name="service" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required>
                    <option value="">Type de service</option>
                    <option value="regulier">Nettoyage régulier</option>
                    <option value="printemps">Ménage de printemps</option>
                    <option value="complementaire">Services complémentaires</option>
                </select>
                <textarea name="message" placeholder="Votre message ou demande particulière" rows={4} className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" />
                <button type="submit" className="bg-[#4B2E05] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7c4a0a] transition">Envoyer la demande</button>
            </form>
        </section>
    );
}