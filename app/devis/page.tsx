"use client";
import React, { useRef } from "react";
import { useState } from "react";
import { SERVICE_ID, TEMPLATE_ID,PUBLIC_KEY } from "@/lib/const/menuList";
import emailjs from "@emailjs/browser";

export type FormDataType = {
    nom: string;
    email: string;
    telephone: string;
    adresse?: string;
    service: string[];
    message?: string;
}

export default function Devis() {

    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState("");
console.log(SERVICE_ID, TEMPLATE_ID);
emailjs.init(PUBLIC_KEY);
// Fonction pour envoyer un email
const sendEmail = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        client:"test devis",
        phone :"0606060606",
        mail:"test@test.com",
        task :"task devis",
        adress:"adress devis",
        message:"message devis",
    }).then((response) => {
        console.log('Email envoyé avec succès!', response);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi:', error);
      });
  };
      
    
    const [formData, setFormData] = useState<FormDataType>({nom: "", email: "", telephone: "", adresse: "", service: [], message: ""});
    return (
        <section className="flex flex-col w-full min-h-screen bg-transparent items-center justify-center px-4 py-10">
            <h1 className="text-4xl font-bold mb-6 text-center text-[#4B2E05]">Demande de devis</h1>
            <p className="max-w-2xl text-center mb-10 text-[#4B2E05]">
                Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé pour nos services de ménage à domicile. Nous vous répondrons dans les plus brefs délais !
            </p>
            <form onSubmit={sendEmail} className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg flex flex-col gap-6">
                <input value={formData.nom} onChange={(e) => { setFormData((prev) => ({ ...prev, nom: e.target.value }));}}
                  type="text" name="nom" placeholder="Nom et prénom" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required />
                <input value={formData.email} onChange={(e) => { setFormData((prev) => ({ ...prev, email: e.target.value }));}
                } type="email"  name="email" placeholder="Adresse email" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required />
                <input type="tel" name="telephone" placeholder="Téléphone" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required />
                <input type="text" name="adresse" placeholder="Adresse" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" />
                <div className="flex flex-row gap-2">
                    <input type="checkbox" name="service" id="service" onChange={(e) => { setFormData((prev) => ({ ...prev, service: [...prev.service, e.target.value] }));}} value="Nettoyage régulier" />
                    <label htmlFor="service">Nettoyage régulier</label>
                </div>
                <div className="flex flex-row gap-2">
                    <input type="checkbox" checked={formData.service.includes("Nettoyage régulier")} name="service" id="service" value="Nettoyage régulier" onChange={(e) => { setFormData((prev) => ({ ...prev, service: [...prev.service, e.target.value] }));}} />
                    <label htmlFor="service">Nettoyage régulier</label>
                </div>

                <textarea name="message" placeholder="Votre message ou demande particulière" rows={4} className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" />
                <button type="submit" className="bg-[#4B2E05] text-white     px-6 py-3 rounded-lg font-semibold hover:bg-[#DCA797] hover:text-[#4B2E05] transition">Envoyer la demande</button>
            </form>
            <button onClick={sendEmail} >test</button>
        </section>
    );
}