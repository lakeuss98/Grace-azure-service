import CardSection from "@/lib/components/CardSection";
import Image from "next/image";
import {ContentSectionService} from "@/lib/database"


export default function Home() {
    return (
        <div>
            <div className="flex flex-col gap-y-24 lg:gap-y-0 lg:space-y-3 pt-[100px]  h-[90vh] items-center bg-[url('/img/mob.png')]  lg:bg-[url('/img/bg-home.png')] bg-cover bg-center lg:bg-cover lg:bg-center w-full font-[family-name:var(--font-geist-sans)]">
            <Image className="w-[200px] h-[200px] flex lg:w-[380px] lg:h-[380px] " src="/img/img-grace.png" alt="bg-home" width={380} height={380} />
           <div className="flex text-2xl font-bold font-dancing text-center">
           Votre partenaire pour un intérieur lumineux!
           </div>
                {/* <div className="flex flex-col justify-start py-[100px] bg-amber-300 items-center ">
                </div> */}
            </div>

            {/* À propos */}
            <section title="à propos" id="about" className="px-4  sm:px-20 md:px-[15%] py-12">
                <div className="flex text-3xl font-bold  py-5 w-full col-span-2 ">{ContentSectionService.service1.title}</div>
                <div className="grid gap-x-[100px] gap-y-[50px]  grid-cols-1 md:grid-cols-2 ">
                <CardSection title={""} urlImage={ContentSectionService.service1.urlImage} description={ContentSectionService.service1.Description} link={ContentSectionService.service1.link}  />
                <CardSection title={""} urlImage={ContentSectionService.service1.urlImage} description={ContentSectionService.service1.Description} link={ContentSectionService.service1.link}  />
                </div>
            </section>

            {/* nos services */}
            <section title="nos services" id="service" className="px-4 sm:px-20 md:px-[15%] py-12">
            <div className="flex text-3xl font-bold  py-5 w-full col-span-2 ">{ContentSectionService.service1.title}</div>
            <div className="grid gap-x-[100px] gap-y-[50px]  grid-cols-1 md:grid-cols-2 ">
            <CardSection title={""} urlImage={ContentSectionService.service1.urlImage} description={ContentSectionService.service1.Description} link={ContentSectionService.service1.link}  />
            <CardSection title={""} urlImage={ContentSectionService.service2.urlImage} description={ContentSectionService.service2.Description} link={ContentSectionService.service2.link}  />
            <CardSection title={""} urlImage={ContentSectionService.service3.urlImage} description={ContentSectionService.service3.Description} link={ContentSectionService.service3.link}  />
            </div>
            </section>

            {/* les avis */}
            <section  title="Avis" className="flex   px-4   md:px-[15%] py-12" >

                <div className="flex py-2 w-max md:space-x-[70px] space-x-3  md:px-[15%] pr-[50px] bg-blue-400 " >

                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 1</div>
                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 2</div>
                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 3</div>
                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 1</div>
                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 2</div>
                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 3</div>
                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 1</div>
                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 2</div>
                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 3</div>
                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 1</div>
                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 2</div>
                    <div className="md:w-[250px] w-[50px] animate-scroll-x bg-amber-200 h-24 ">Carte 3</div>
                
                </div>
            </section>
            {/* Localisation */}
            <section id="localisation" title="localisation" className="px-4 sm:px-20  md:px-[15%] py-12">
                <h2 className="text-3xl font-bold">Notre localisation</h2>
                <div className="grid md:grid-cols-2 gap-x-8 items-start">
                    {/* Texte */}
                    <div>
                        <p className="mb-4 md:text-xl ">
                            Basée à Yaoundé, Grâce Azur Service intervient dans les quartiers suivants : Bastos,
                            Biyem-Assi, Omnisport, Emana, Mvog Ada, Nkolbisson et ses alentours.
                        </p>
                        <a href="/localisation" className="text-blue-600 hover:underline">
                            Voir notre zone d'intervention complète →
                        </a>
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
    );
}
