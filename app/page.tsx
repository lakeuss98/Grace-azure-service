import CardSection from "@/lib/components/CardSection";
import Image from "next/image";
import { ContentFomePage } from "@/lib/database"
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
    return (
        <div>
            <div className="flex flex-col gap-y-0 md:gap-y-0 md:space-y-0 pt-[50px] md:pt-[70px]  h-[70vh] items-center bg-[url('/img/mob.png')]  lg:bg-[url('/img/bg-home.png')] bg-cover bg-center lg:bg-cover lg:bg-center w-full font-[family-name:var(--font-geist-sans)]">
                <Image className="w-[150px] h-[150px] flex md:w-[300px] md:h-[300px] " src="/img/img-grace.png" alt="bg-home" width={300} height={300} />
                <div className="flex text-base font-normal md:text-lg md:font-medium font-dancing text-center">
                    Votre partenaire pour un intérieur lumineux!
                </div>
                <p className="text-center flex md:w-[30%] w-[70%]  md:text-2xl text-lg font-bold  md:font-bold md:py-6 py-8 " >
                    Découvrez le plaisir d'un intérieur impeccable avec Grace Azur Services : Là où la propreté rime avec sérénité et éclat.
                </p>
                <div className="flex py-3 w-full justify-center items-center px-6 ">
                    <Link href={'/devis'} className="flex cursor-pointer text-white py-4 bg-[#2e6417] w-full md:w-[30%] font-medium md:font-bold  rounded-lg justify-center items-center " >{'Demander un devis'}</Link>
                </div>
                {/* <div className="flex flex-col justify-start py-[100px] bg-amber-300 items-center ">
                </div> */}
            </div>
            {/* Pourquoi nous ? */}
            <section title="Pourquoi nous ?" className="px-4 sm:px-20 md:px-[15%] py-12  ">
                <div className="flex text-3xl md:text-4xl font-bold justify-center  py-4 w-full col-span-2 ">Pourquoi nous ?</div>
                <div className="grid grid-cols-1 gap-y-2 md:gap-y-0 md:grid-cols-4 py-4 px-2 md:px-0 shadow md:pt-10 items-center bg-amber-100 rounded-lg  ">
                    <span className="flex text-center gap-x-8  justify-center md:text-[16px] font-semibold" >Nettoyage professionnel et certifié <div className="border-black md:h-9 md:w-0 md:border-2  " />  </span>
                    <div className="flex w-full md:hidden  justify-center py-5 ">
                        <div className="border-black  border w-[60%]   " />

                    </div>                    <span className="flex text-center gap-x-8 justify-center md:text-[16px] font-semibold" >Nettoyage soucieux de l'environnement <div className="border-black  md:w-0 md:border-2 md:h-9 " /> </span>
                    <div className="flex w-full md:hidden  justify-center py-5 ">
                        <div className="border-black  border w-[60%]   " />

                    </div>
                    <span className="flex text-center  gap-x-8 justify-center md:text-[16px] font-semibold" >100 % de satisfaction garantie <div className="border-black  md:h-9 md:w-0 md:border-2 " /> </span>
                    <div className="flex w-full md:hidden  justify-center py-5 ">
                        <div className="border-black  border w-[60%]   " />

                    </div>                    <span className="flex justify-center text-center md:text-[16px] md:items-center font-semibold" >Disponibilité les soirs et les week-ends  </span>
                    <div className="md:col-span-4 col-span-1 md:px-[40%] md:py-2 py-2  ">
                        <a href={'/a-propos'} className="bg-[#F49595]/80 flex rounded-xl py-4 text-white font-bold justify-center items-center px-2.5 hover:underline">En savoir plus →</a>

                    </div>

                </div>

            </section>

            {/* À propos */}
            {/* <section title="à propos" id="about" className="px-4  sm:px-20 md:px-[15%] py-12">
                <div className="flex text-3xl font-bold  py-5 w-full col-span-2 ">{ContentSectionService.service1.title}</div>
                <div className="grid gap-x-[100px] gap-y-[50px]  grid-cols-1 md:grid-cols-2 ">
                <CardSection title={""} urlImage={ContentSectionService.service1.urlImage} description={ContentSectionService.service1.Description} link={ContentSectionService.service1.link}  />
                <CardSection title={""} urlImage={ContentSectionService.service1.urlImage} description={ContentSectionService.service1.Description} link={ContentSectionService.service1.link}  />
                </div>
            </section> */}
            {/* nos services */}
            <section title="Nos services" id="service" className="px-4 sm:px-20 md:px-[15%] py-12">
                <div className="flex text-3xl md:text-4xl font-bold justify-center  py-5 w-full col-span-2 ">Nos services</div>

                {/* <div className="flex gap-x-[100px]">
                    <CardSection title={ContentFomePage.SectionService.conciergerie.title} urlImage={ContentFomePage.SectionService.conciergerie.urlImage} description={ContentFomePage.SectionService.conciergerie.Description} link={ContentFomePage.SectionService.conciergerie.link} />
                    <CardSection title={ContentFomePage.SectionService.appartement.title} urlImage={ContentFomePage.SectionService.appartement.urlImage} description={ContentFomePage.SectionService.appartement.Description} link={ContentFomePage.SectionService.appartement.link} />
                </div>

                <div className="flex justify-center ">
                <CardSection title={ContentFomePage.SectionService.domicile.title} urlImage={ContentFomePage.SectionService.domicile.urlImage} description={ContentFomePage.SectionService.domicile.Description} link={ContentFomePage.SectionService.domicile.link} />
                </div> */}

                <div className="grid gap-x-[100px] gap-y-[50px] justify-items-center   place-items-center  grid-cols-1 md:grid-cols-2 ">
                    <CardSection title={ContentFomePage.SectionService.conciergerie.title} urlImage={ContentFomePage.SectionService.conciergerie.urlImage} description={ContentFomePage.SectionService.conciergerie.Description} link={ContentFomePage.SectionService.conciergerie.link} />
                    <CardSection title={ContentFomePage.SectionService.appartement.title} urlImage={ContentFomePage.SectionService.appartement.urlImage} description={ContentFomePage.SectionService.appartement.Description} link={ContentFomePage.SectionService.appartement.link} />
                    <div className="md:col-span-2 md:px-[25%]">
                        <CardSection title={ContentFomePage.SectionService.domicile.title} urlImage={ContentFomePage.SectionService.domicile.urlImage} description={ContentFomePage.SectionService.domicile.Description} link={ContentFomePage.SectionService.domicile.link} />

                    </div>

                </div>

            </section>
            {/* nos engagements */}
            <section title="Nos engagements" className="px-4 sm:px-20 md:px-[15%] py-12"></section>

            {/* Localisation */}
            <section id="localisation" title="localisation" className="px-4 sm:px-20  md:px-[15%] py-12">
                <h2 className="text-3xl py-4 flex justify-center md:text-4xl font-bold">Notre localisation</h2>
                <div className="grid md:grid-cols-2 gap-x-8 items-start">
                    {/* Texte */}
                    <div className="flex  flex-col" >
                        <h2 className="text-2xl font-bold" > Villes inclues :</h2>
                        <br />

                        <p className="text-justify py-3 " >
                            Azur Sisters Services est fier d'offrir ses services dans une sélection de localités privilégiées, répondant aux besoins de nos clients avec la même qualité et le même engagement partout où nous intervenons. Nos zones d'intervention incluent :

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
            {/* QUELQUES AVIS CLIENTS */}
            <section title="Avis" className="flex flex-col   px-4   md:px-[15%] py-12" >
                <h2 className="text-2xl flex justify-center md:text-4xl py-4 font-bold">QUELQUES AVIS CLIENTS</h2>

                <div className="flex py-2 w-full md:space-x-[70px] space-x-2 pr-[250px]   md:pr-[150px] " >

                    <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 1</div>
                    <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 2</div>
                    <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 3</div>
                    <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 4</div>
                    <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 5</div>
                    <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 6</div>
                    {/* <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 7</div>
                    <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 8</div>
                    <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 9</div>
                    <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 10</div>
                    <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 11</div>
                    <div className="md:w-[250px] w-[30px] animate-scroll-x bg-amber-200 h-24 ">Carte 12</div>
                 */}
                </div>
            </section>
        </div>
    );
}
