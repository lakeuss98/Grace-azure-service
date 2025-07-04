import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services de ménage à domicile et conciergerie Airbnb | Grace Azur Services",
    description:
        "Découvrez nos services : conciergerie Airbnb, nettoyage d'appartement, nettoyage de domicile. Service professionnel, fiable et adapté à vos besoins à domicile ou en location courte durée.",
    keywords: [
        "conciergerie Airbnb",
        "nettoyage appartement",
        "nettoyage domicile",
        "ménage à domicile",
        "service de ménage",
        "entretien maison",
        "nettoyage professionnel",
        "location courte durée",
        "Grace Azure Services",
    ],
};

export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center bg-[url('/img/bg-grace-mob.png')]  lg:bg-[url('/img/bg-web.png')] bg-cover bg-center w-full grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            </div>

            {/* À propos */}
            <section id="about" className="px-4 sm:px-20 py-12">
                <h2 className="text-3xl font-bold mb-4">À propos de nous</h2>
                <p className="mb-4">
                    Grâce Azur Service est une entreprise spécialisée dans le ménage à domicile. Nous mettons à votre
                    disposition une équipe qualifiée et discrète pour assurer la propreté de votre foyer, avec
                    professionnalisme et bienveillance.
                </p>
                <a href="/about" className="text-blue-600 hover:underline">En savoir plus →</a>
            </section>

            {/* Pourquoi nous choisir */}
            <section id="why-us" className="px-4 sm:px-20 py-12">
                <h2 className="text-3xl font-bold mb-4">Pourquoi nous choisir ?</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Personnel formé, ponctuel et de confiance</li>
                    <li>Produits respectueux de l’environnement</li>
                    <li>Réservation rapide et gestion en ligne</li>
                    <li>Service client réactif et à l’écoute</li>
                </ul>
                <a href="/why-us" className="text-blue-600 hover:underline">Voir plus d&apos;avantages → </a>
            </section>

            {/* Localisation */}
            <section id="localisation" className="px-4 sm:px-20 py-12">
                <h2 className="text-3xl font-bold mb-6">Notre localisation</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Texte */}
                    <div>
                        <p className="mb-4">
                            Basée à Yaoundé, Grâce Azur Service intervient dans les quartiers suivants : Bastos,
                            Biyem-Assi, Omnisport, Emana, Mvog Ada, Nkolbisson et ses alentours.
                        </p>
                        <a href="/localisation" className="text-blue-600 hover:underline">
                            Voir notre zone d’intervention complète →
                        </a>
                    </div>

                    {/* Carte */}
                    <div className="w-full h-64 md:h-80 rounded overflow-hidden shadow-md">
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.694127354258!2d11.512678674963685!3d3.8480329961057346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf0a60a30b8f%3A0x50b2e4b5ddfbe79c!2sYaound%C3%A9!5e0!3m2!1sfr!2scm!4v1719930484894"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
