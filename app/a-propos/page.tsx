"use client"
import { useState } from "react";
import { ContentFomePage } from "@/lib/database";
import Image from "next/image";
import { Section } from "lucide-react";
export default function PageApropos() {
    const [state, setstate] = useState();

    return (<>
        <div title="à propos" className="flex text-base md:text-xl gap-y-6 py-5 flex-col w-full flex-grow px-4 md:px-[15%] " >

            <section title="Pourquoi nous choisir" id="pourquoi-nous" className="flex flex-col gap-y-4 w-full    py-12 ">
            <h2 className=" text-2xl md:pb-[75px]  flex justify-center md:text-4xl py-4 font-bold uppercase ">Pourquoi nous choisir ?</h2>
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-4  ">
                {
                    ContentFomePage.WhyChooseUs.map((item, index) => (
                        <div key={index} className="flex flex-col gap-y-7 items-center w-full ">
                            <Image className="rounded-full md:size-[250px] size-[200px] "  src={item.url} alt={item.titre} width={250} height={250} />
                            <h3 className="text-2xl font-bold">{item.titre}</h3>
                            <ul className="list-disc list-inside">
                                {item.listitem.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                        </div>
                    ))
                }
            </div>
              
            </section>
            <section title="Qui sommes nous" id="qui-sommes-nous" className="flex flex-col gap-y-4 w-full ">
            <h2 className=" text-2xl md:pb-[75px]  flex justify-center md:text-4xl py-4 font-bold uppercase ">Qui sommes nous?</h2>

                <p title="qui sommes nous" className="text-justify" >
                    Derrière Grace azur services, il y a moi, <strong>CARINE</strong>, une maman, femme engagée et déterminée, et surtout une personne qui croit profondément en la force du travail bien fait.
                    J’ai créé ce service avec le cœur, inspirée par ma fille, Grace dont le prénom est devenu le symbole de ce projet. Ce nom, je le porte comme une promesse : celle d’un service de conciergerie sérieux, humain, et à la hauteur de vos attentes.
                    Être maman c’est apprendre à jongler, à se relever, à avancer coûte que coûte. C’est aussi apprendre à ne jamais baisser les bras. C’est cette énergie-là que je mets chaque jour dans mon métier.
                    Fiabilité, rigueur, discrétion et bienveillance sont les piliers de mon engagement auprès des propriétaires Airbnb qui me font confiance.
                </p>
            </section>


            <section title="Notre engagement" id="engagement" className="flex flex-col gap-y-4 w-full ">
            <h2 className=" text-2xl md:pb-[75px]  flex justify-center md:text-4xl py-4 font-bold uppercase ">Notre engagement</h2>
                <p title="engagement" className="text-justify" >
                    Avec Grace azur services, je vous propose bien plus qu’un simple ménage :
                    C’est un service sur mesure, où chaque logement est préparé avec soin pour offrir une expérience impeccable à vos voyageurs.
                    Je travaille avec le sourire, l’envie de bien faire, et l’ambition d’apporter un vrai soutien aux hôtes qui souhaitent louer sans stress.
                    Ce projet est né d’une histoire personnelle, mais il grandit chaque jour grâce à la confiance de mes clients. Et pour ça, je suis infiniment reconnaissante.
                </p>
            </section>
           {/* Localisation */}
           <section id="localisation" title="localisation" className="">
                <h2 className="text-3xl w-full text-center py-4 uppercase flex justify-center md:text-4xl font-bold">Zones d'intervention</h2>
                <div className="grid md:grid-cols-2 gap-x-8 items-start">
                    {/* Texte */}
                    <div className="flex  flex-col" >
                        <h2 className="text-2xl font-bold" > Villes inclues :</h2>
                        <br />

                        <p className="text-justify py-3 " >
                            Grace Azur Services est fier d'offrir ses services dans une sélection de localités privilégiées, répondant aux besoins de nos clients avec la même qualité et le même engagement partout où nous intervenons. Nos zones d'intervention incluent :

                        </p>
                        <br />
                        <ul className="list-disc list-inside" >
                            <li>Antibes</li>
                            <li>Biot</li>
                            <li>Juan-les-Pins</li>
                            <li>Cannes</li>
                            <li>Golfe-Juan</li>
                            <li>Mougins</li>
                            <li>Cagnes-sur-Mer</li>
                            <li>Valbonne</li>
                        </ul>
                    </div>

                    {/* Carte */}
                    <div className="w-full h-64 md:h-80 rounded overflow-hidden shadow-md">
                        <iframe
                            className="w-full h-full"
                            //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.694127354258!2d11.512678674963685!3d3.8480329961057346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf0a60a30b8f%3A0x50b2e4b5ddfbe79c!2sYaound%C3%A9!5e0!3m2!1sfr!2scm!4v1719930484894"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30206936.34046105!2d-17.098017062684153!3d22.45272015714764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd5459e5a91a9%3A0x40819a5fd979fb0!2sAntibes%2C%20France!5e0!3m2!1sen!2scm!4v1752162151219!5m2!1sen!2scm"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    </>);

}