import CardService from "@/lib/components/CardService";
import { Metadata } from "next";
import { ContentFomePage } from "@/lib/database";
import Link from "next/link";
import { SECONDARY_COLOR } from "@/lib/const/menuList";
export const metadata: Metadata = {
  title: "Services de ménage à domicile et conciergerie Airbnb | Grace Azur Services",
  description: "Découvrez nos services : conciergerie Airbnb, nettoyage d'appartement, nettoyage de domicile. Service professionnel, fiable et adapté à vos besoins à domicile ou en location courte durée.",
  keywords: [
    "conciergerie Airbnb",
    "nettoyage appartement",
    "nettoyage domicile",
    "ménage à domicile",
    "service de ménage",
    "entretien maison",
    "nettoyage professionnel",
    "location courte durée",
    "Grace Azure Services"
  ]
};
const description2 = <div>
<p> Grace Azur services est votre service de nettoyage de maisons de confiance à Antibes et ses environs. Nous savons que votre maison est bien plus qu'un simple espace : c'est votre sanctuaire, l'endroit où les souvenirs se créent et où le confort règne. C'est pourquoi nous nous engageons à vous offrir une propreté inégalée, vous permettant de profiter pleinement de votre foyer sans le souci des tâches ménagères.Que vous ayez besoin d'un nettoyage régulier, d'un grand ménage de printemps, ou d'une intervention spécifique après un événement, notre équipe de professionnels qualifiés est là pour répondre à tous vos besoins. Nous traitons chaque maison avec le plus grand soin, comme si c'était la nôtre.
</p>
<h3>Nos services de nettoyage de maison</h3>
<p>Nous proposons une gamme complète de services pour que chaque recoin de votre maison brille de propreté :
</p>
<ul className="list-disc list-inside" >
    <li>Nettoyage complet des pièces à vivre (salons, salles à manger) : dépoussiérage, aspiration, lavage des sols, nettoyage des surfaces.
    </li>
    <li>Assainissement des cuisines : nettoyage des plans de travail, éviers, cuisinières, micro-ondes, et extérieur des appareils électroménagers.
    </li>
    <li>Désinfection des salles de bain : toilettes, douches, baignoires, lavabos et miroirs impeccables.
    </li>
    <li>Nettoyage des chambres : dépoussiérage, aspiration, et mise en ordre.
    </li>
    <li>Nettoyage des vitres et miroirs pour une luminosité optimale.
    </li>
</ul>
<p>
Services spécialisés : nettoyage après construction ou rénovation, nettoyage avant ou après déménagement.
Gestion des déchets : vidage et nettoyage des poubelles.Prêt pour une maison étincelante ?
N'attendez plus pour retrouver le plaisir d'une maison parfaitement propre et accueillante. Contactez-nous dès aujourd'hui pour obtenir votre devis gratuit et personnalisé !
  
</p>
              

</div>
export default function Services() {
    return (
        <section  title="services grace azur" className="flex flex-col w-full bg-[#fff] items-center px-4 py-10">
            <h2 className=" text-2xl md:pb-[75px]  flex justify-center md:text-4xl py-4 font-bold uppercase ">Nos Services</h2>

            <p className="max-w-2xl md:text-xl text-center mb-10 text-black">
                Grace Azur Services vous propose des prestations professionnelles et personnalisées pour particuliers et propriétaires de locations saisonnières. Découvrez nos offres principales ci-dessous.
            </p>
            <div className="flex space-y-6  md:px-[15%] px-[3%] flex-col gap-4 py-6 w-full ">
                {
                    ContentFomePage.SectionServicesDetails.map((item, index) => (<CardService key={index} title={item.title} urlImage={item.imgsrc} description={item.description} />))
                }
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                <div className="bg-[#FCD5CE] rounded-lg shadow-md p-6 flex flex-col items-center">
                    <span className="text-3xl mb-4">🏠</span>
                    <h2 className="text-xl font-semibold mb-2 text-[#4B2E05] text-center">Conciergerie Airbnb</h2>
                    <p className="text-center text-[#4B2E05]"> Nettoyage de votre location courte durée , gestion du linge et mise à disposition des produits de première nécessité.  </p>
                </div>
                <div className="bg-[#FCD5CE] rounded-lg shadow-md p-6 flex flex-col items-center">
                    <span className="text-3xl mb-4">🧹</span>
                    <h2 className="text-xl font-semibold mb-2 text-[#4B2E05] text-center">Nettoyage d&apos;appartement</h2>
                    <p className="text-center text-[#4B2E05]">Entretien régulier ou ponctuel de votre appartement : sols, poussière, sanitaires, cuisine, vitres, et espaces communs. Adapté à vos besoins et à votre rythme.</p>
                </div>
                <div className="bg-[#FCD5CE] rounded-lg shadow-md p-6 flex flex-col items-center">
                    <span className="text-3xl mb-4">🏡</span>
                    <h2 className="text-xl font-semibold mb-2 text-[#4B2E05] text-center">Nettoyage de domicile</h2>
                    <p className="text-center text-[#4B2E05]">Service de ménage à domicile pour maisons et villas : nettoyage complet, repassage, lavage de vitres, entretien des pièces de vie et chambres.</p>
                </div>
            </div> */}
           
            <div className=" flex justify-center items-center md:px-[15%] px-[3%] w-full py-10">
            <div className="flex py-3 w-full justify-center items-center ">
                    <Link href={'/devis'} className={`flex cursor-pointer text-white py-4 bg-[${SECONDARY_COLOR}] w-full md:w-[30%] font-medium md:font-bold  rounded-lg justify-center items-center `} >{'Demander un devis'}</Link>
                </div>
            </div>
        </section>
    );
}