"use client";
import React, { useRef } from "react";
import { useState } from "react";
import { SERVICE_ID, TEMPLATE_ID,PUBLIC_KEY } from "@/lib/const/menuList";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import { SECONDARY_COLOR } from "@/lib/const/menuList";

export type FormDataType = {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    socialReason: string;
    adresse?: string;
    service: string[];
    message?: string;
}

export default function Devis() {
    const [refButtonDevis, inViewButtonDevis] = useInView({ triggerOnce: false, threshold: [0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });

   const services = [
                    {
                        id: 1,
                        name: "Concergierie",
                        description: "",
                    },
                    {
                        id: 2,
                        name: "Nettoyage Copropriété",
                        description: "",
                    },
                    {
                        id: 3,
                        name: "Nettoyage Appartement ou villa ",
                        description: "",
                    },
                    {
                        id: 4,
                        name: "Nettoyage de bateaux",
                        description: "",
                    },
                    {
                        id: 5,
                        name: "Nettoyage de bureaux",
                        description: "",
                    }
                    
                    
                    
    ] 

   console.log(SERVICE_ID, TEMPLATE_ID);
   emailjs.init(PUBLIC_KEY);
  // Fonction pour envoyer un email
  const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: formData.telephone,
        socialReason: formData.socialReason,
        adresse: formData.adresse,
        service: formData.service,
        message: formData.message,
    }).then((response) => {
        console.log('Email envoyé avec succès!', response);
        toast.success('Email envoyé avec succès!');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi:', error);
        toast.error('Erreur lors de l\'envoi!');
      });
  };
       
 
    const [formData, setFormData] = useState<FormDataType>({nom: "",prenom: "",socialReason: "", email: "", telephone: "", adresse: "", service: [], message: ""});
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const handleServiceToggle = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        console.log(e.target.name);
        setSelectedServices(prev => 
          prev.includes(e.target.name) 
            ? prev.filter(name => name !== e.target.name)
            : [...prev, e.target.name]
        );
        setFormData((prev) => ({ ...prev, service: selectedServices }));
      };
    
    return ( 
        <section className="flex flex-col w-full bg-transparent items-center  pb-24 px-4 ">
             <h1 className="flex text-4xl font-bold   text-center py-[50px] text-[#4B2E05]  ">Demande de devis</h1>
            {/* <p className="max-w-2xl text-center mb-10 text-[#4B2E05]">
                Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé pour nos services de ménage à domicile. Nous vous répondrons dans les plus brefs délais !
            </p> */}

            <form onSubmit={ ()=> console.log("forma data ==>",formData)} className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg flex flex-col gap-6">
                <input value={formData.nom} onChange={(e) => { setFormData((prev) => ({ ...prev, nom: e.target.value }));}}
                  type="text" name="nom" placeholder="Nom" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required />
                <input value={formData.prenom} onChange={(e) => { setFormData((prev) => ({ ...prev, prenom: e.target.value }));}}
                  type="text" name="prenom" placeholder="Prénom" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required />
                <input value={formData.socialReason} onChange={(e) => { setFormData((prev) => ({ ...prev, socialReason: e.target.value }));}}
                  type="text" name="socialReason" placeholder="Raison sociale" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required />
                <input value={formData.email} onChange={(e) => { setFormData((prev) => ({ ...prev, email: e.target.value }));}
                } type="email"  name="email" placeholder="Adresse email" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required />
                <input type="tel" name="telephone" placeholder="Téléphone" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" required />
                {/* <input type="text" name="adresse" placeholder="Adresse" className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" /> */}
                <div className="grid grid-cols-1 gap-2">
                    {
                        services.map((service) => (
                            <div key={service.id} className="flex flex-row gap-2 cursor-pointer col-span-1">
                                <input type="checkbox" value={service.name.toString()} checked={selectedServices.includes(service.name)}  name={service.name} id={service.id.toString()} onChange={(e)=> handleServiceToggle(e)} />
                                <label  htmlFor={service.id.toString()}>{service.name}</label>
                            </div>
                        ))
                    }
                </div>

                <textarea name="message" placeholder="Votre message ou demande particulière" rows={4} className="border border-[#DCA797] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DCA797]" />
                <div className="flex py-3 w-full justify-center items-center px-6 ">
                    <motion.button
                    type="submit"
                    ref={refButtonDevis}
                    initial={{ x: +40, opacity: 0 }}
                    animate={inViewButtonDevis?{ x: 0,y:0, opacity: 1 }:{}}
                    transition={{ duration: 0.8, ease: 'easeInOut',type:"spring" }}
                    className={`flex cursor-pointer text-white py-4 bg-[${SECONDARY_COLOR}] w-full md:w-[60%] font-medium md:font-bold  rounded-lg justify-center items-center `} >
                        {'Demander un devis'}
                    </motion.button>
                </div>            
            </form>
        </section>
    );
}