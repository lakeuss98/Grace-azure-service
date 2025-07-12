"use client"
import { useState } from "react";

export default function PageApropos() {
    const [state, setstate] = useState();

    return (<>
        <section title="à propos" className="flex text-base md:text-xl gap-y-6 py-5 flex-col w-full flex-grow px-[5%] md:px-[15%] " >
            <div title="Qui sommes nous" id="qui-sommes-nous" className="flex flex-col gap-y-4 w-full ">
                <h1 className="font-bold text-center text-2xl md:text-3xl text-[#DCA797] " >Qui sommes nous </h1>
                <p title="qui sommes nous" className="text-justify" >
                    Derrière Grace azur services, il y a moi, carine, une maman femme engagée et déterminée, et surtout une personne qui croit profondément en la force du travail bien fait.
                    J’ai créé ce service avec le cœur, inspirée par ma fille, Grace dont le prénom est devenu le symbole de ce projet. Ce nom, je le porte comme une promesse : celle d’un service de conciergerie sérieux, humain, et à la hauteur de vos attentes.
                    Être maman c’est apprendre à jongler, à se relever, à avancer coûte que coûte. C’est aussi apprendre à ne jamais baisser les bras. C’est cette énergie-là que je mets chaque jour dans mon métier.
                    Fiabilité, rigueur, discrétion et bienveillance sont les piliers de mon engagement auprès des propriétaires Airbnb qui me font confiance.
                </p>
            </div>


            <div title="Notre engagement" id="engagement" className="flex flex-col gap-y-4 w-full ">
                <h1 className="font-bold text-2xl text-center md:text-3xl text-[#DCA797] " >Notre engagement</h1>
                <p title="engagement" className="text-justify" >
                    Avec Grace azur services, je vous propose bien plus qu’un simple ménage :
                    C’est un service sur mesure, où chaque logement est préparé avec soin pour offrir une expérience impeccable à vos voyageurs.
                    Je travaille avec le sourire, l’envie de bien faire, et l’ambition d’apporter un vrai soutien aux hôtes qui souhaitent louer sans stress.
                    Ce projet est né d’une histoire personnelle, mais il grandit chaque jour grâce à la confiance de mes clients. Et pour ça, je suis infiniment reconnaissanteDerrière Grace azur services, il y a moi, carine,  une maman femme engagée et déterminée, et surtout une personne qui croit profondément en la force du travail bien fait.
                    J’ai créé ce service avec le cœur, inspirée par ma fille, Grace dont le prénom est devenu le symbole de ce projet. Ce nom, je le porte comme une promesse : celle d’un service de conciergerie sérieux, humain, et à la hauteur de vos attentes.
                    Être maman c’est apprendre à jongler, à se relever, à avancer coûte que coûte. C’est aussi apprendre à ne jamais baisser les bras. C’est cette énergie-là que je mets chaque jour dans mon métier.
                    Fiabilité, rigueur, discrétion et bienveillance sont les piliers de mon engagement auprès des propriétaires Airbnb qui me font confiance.
                </p>
            </div>

            <div title="Pourquoi nous choisir" id="pourquoi-nous" className="flex flex-col gap-y-4 w-full ">
                <h1 className="font-bold text-2xl text-center md:text-3xl text-[#DCA797] "  >Pourquoi nous choisir</h1>
                <p title="Pourquoi nous choisir" className="text-justify"  >
                    Avec Grace azur services, je vous propose bien plus qu’un simple ménage :
                    C’est un service sur mesure, où chaque logement est préparé avec soin pour offrir une expérience impeccable à vos voyageurs.
                    Je travaille avec le sourire, l’envie de bien faire, et l’ambition d’apporter un vrai soutien aux hôtes qui souhaitent louer sans stress.
                    Ce projet est né d’une histoire personnelle, mais il grandit chaque jour grâce à la confiance de mes clients. Et pour ça, je suis infiniment reconnaissante

                </p>
            </div>






        </section>
    </>);

}