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

export default function Services() {
    return (
        <section  title="services grace azur" className="flex flex-col w-full bg-[#fff] items-center px-4 py-10">
            <h1 className="text-4xl font-bold mb-6 text-center text-[#4B2E05]">Nos Services</h1>
            <p className="max-w-2xl text-center mb-10 text-[#4B2E05]">
                Grace Azur Services vous propose des prestations professionnelles et personnalisées pour particuliers et propriétaires de locations saisonnières. Découvrez nos offres principales ci-dessous.
            </p>
            <div className="flex space-y-6  md:px-[15%] px-[3%] flex-col gap-4 py-6 w-full ">
                {
                    ContentFomePage.SectionServicesDetails.map((item, index) => (<CardService key={index} title={item.title} urlImage={item.imgsrc} description={item.description} />))
                }

                {/* <CardService title={"Conciergerie Airbnb"} urlImage={"/img/about.png"} description={"Nettoyage de votre location courte durée , gestion du linge et mise à disposition des produits de première nécessité."} link={""}/>
                <CardService title={"Nettoyage d'appartement"} urlImage={"/img/about.png"} description={"Entretien régulier ou ponctuel de votre appartement : sols, poussière, sanitaires, cuisine, vitres, et espaces communs. Adapté à vos besoins et à votre rythme."} link={""}/>
                <CardService title={"Nettoyage de domicile"} urlImage={"/img/about.png"} description={"Service de ménage à domicile pour maisons et villas : nettoyage complet, repassage, lavage de vitres, entretien des pièces de vie et chambres."} link={""}/>
                */}

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