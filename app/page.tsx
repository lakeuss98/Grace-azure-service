"use client"
import CardSection from "@/lib/components/CardSection";
import Image from "next/image";
import { ContentFomePage } from "@/lib/database"
import { SECONDARY_COLOR } from "@/lib/const/menuList";
import logoTitle from "@/public/icon/LogoHome.png"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Engagement from "@/lib/components/Engagement";


export default function Home() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [ref, inView] = useInView({ triggerOnce: false, threshold: [0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });
    const [refSubtitle, inViewSubtitle] = useInView({ triggerOnce: false, threshold: [0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });
    const [refButton, inViewButton] = useInView({ triggerOnce: false, threshold: [0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });
    const [refButtonDevis, inViewButtonDevis] = useInView({ triggerOnce: false, threshold: [0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api])

    return (
        <div>

            <div className={`flex flex-col pt-[100px] space-y-2 pb-2 md:justify-around md:gap-y-0 md:space-y-0  justify-end  md:pt-[110px] h-[75vh] lg:h-[75vh] items-center bg-[url('/images/MainImg.jpg')]  lg:bg-[url('/images/Acceuil.jpg')] bg-cover bg-right lg:bg lg:bg w-full font-[family-name:var(--font-geist-sans)]`}>
                <Image className="w-[230px] h-[131px] flex md:w-[460px]  md:h-[262px] " src={logoTitle}  alt="bg-home" width={300} height={300} />
                
                <motion.p
                ref={refSubtitle}
                    initial={{ x: +20, opacity: 0 }}
                    animate={inViewSubtitle?{ x: 0,scale:1, opacity: 1 }:{}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center flex md:w-[30%] w-[70%]  md:text-2xl text-lg  md:font-bold md:py-6 " 
                >
                    Découvrez le plaisir d'un intérieur impeccable avec Grace Azur Services : Là où la propreté rime avec sérénité et éclat.
                    </motion.p>
                {/* <p 
                className="text-center flex md:w-[30%] w-[70%]  md:text-2xl text-lg font-bold  md:font-bold md:py-6 py-8 " >
                </p> */}
                <div className="flex w-full justify-center items-center px-6 ">
                    <motion.a
                    ref={refButtonDevis}
                    initial={{ x: +20, opacity: 0 }}
                    animate={inViewButtonDevis?{ x: 0,y:0, opacity: 1 }:{}}
                    transition={{ duration: 0.8, ease: 'easeInOut',type:"spring" }}
                    href={'/devis'} className={`flex cursor-pointer text-white py-4 bg-[${SECONDARY_COLOR}] w-full md:w-[30%] font-medium md:font-bold  rounded-lg justify-center items-center `} >{'Demander un devis'}</motion.a>
                </div>
                {/* <div className="flex flex-col justify-start py-[100px] bg-amber-300 items-center "> </div> */}
            </div>

            {/* Pourquoi nous ? */}
            <section title="Pourquoi nous ?" className="px-4 sm:px-20 md:px-[15%] py-9   ">
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

                    </div>                    <span className="flex justify-center text-center md:text-[16px] gap-x-8 font-semibold" >Disponibilité les soirs et les week-ends  </span>
                    {/* <div className="md:col-span-4 col-span-1 md:px-[40%] md:py-2 py-2  ">
                        <motion.a
                        ref={refButton}
                        initial={{ x: +20, opacity: 0,scale:0.8 }}
                        animate={inViewButton?{ x: 0,scale:1, opacity: 1 }:{}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        href={'/a-propos'} className={` bg-[#db5050] flex rounded-xl py-4 text-white font-bold justify-center items-center px-2.5 hover:underline`}>En savoir plus →</motion.a>

                    </div> */}

                </div>

            </section>

            {/* nos services */}
            <section title="Nos services" id="service" className="px-4 sm:px-20 md:px-[15%] py-12">
                <div className="flex text-3xl md:text-4xl font-bold justify-center  py-5 w-full col-span-2 ">Nos services</div>

                <div className="grid  gap-x-[100px] gap-y-[50px] justify-items-center   place-items-center  grid-cols-1 md:grid-cols-2 ">
                    
                    <CardSection title={ContentFomePage.SectionService.conciergerie.title} urlImage={ContentFomePage.SectionService.conciergerie.urlImage} description={ContentFomePage.SectionService.conciergerie.Description} link={ContentFomePage.SectionService.conciergerie.link} />
                    <CardSection title={ContentFomePage.SectionService.domicile.title} urlImage={ContentFomePage.SectionService.domicile.urlImage} description={ContentFomePage.SectionService.domicile.Description} link={ContentFomePage.SectionService.domicile.link} />

                    <div className="md:col-span-2 md:px-[25%]">
                    <CardSection title={ContentFomePage.SectionService.appartement.title} urlImage={ContentFomePage.SectionService.appartement.urlImage} description={ContentFomePage.SectionService.appartement.Description} link={ContentFomePage.SectionService.appartement.link} />

                    </div>

                </div>

            </section>
            {/* nos engagements */}
            <section title="Nos engagements" className="px-4 flex flex-col gap-y-3 sm:px-20 md:px-[15%] py-12">
                <h2 className="text-3xl py-4 flex justify-center md:text-4xl font-bold">Nos engagements</h2>
                <div className="grid gap-12  grid-cols-1 md:grid-cols-3  ">
                    {
                        ContentFomePage.SectionEngagement.map((engagement, index) =>
                            <Engagement key={index} engagement={engagement} index={index} />
                           
                        )
                    }
                </div>
            </section>

            {/* Localisation */}
            <section id="localisation" title="localisation" className="px-4 sm:px-20  md:px-[15%] py-12">
                <h2 className="text-3xl py-4 flex justify-center md:text-4xl font-bold">Zones d'intervention</h2>
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
            {/* QUELQUES AVIS CLIENTS */}
            <section title="Avis" className="flex flex-col px-4  md:px-[15%]   py-12" >
                <h2 className=" text-2xl md:pb-[75px]  flex justify-center md:text-4xl py-4 font-bold">Quelques avis clients</h2>

                <Carousel setApi={setApi} className=" bg-transparent " opts={{
                    align: "start",
                    loop: true,
                    // slidesToScroll: 1,
                }}  >
                    <CarouselContent className=" flex h-[100%] " >
                        {
                            ContentFomePage.ListAvis.map((avis, index) => (
                                <CarouselItem key={index} className="flex justify-center cursor-pointer pl-1 basis md:basis-1/2 md:hover:scale-105  ">
                                    <div key={index + avis.nom} className="flex flex-col px-8 items-center gap-y-4 ">
                                        <h1 className="text-2xl flex justify-center text-center w-full  md:font-bold">{avis.nom}</h1>
                                        <span className="text-lg flex justify-center text-center font-medium md:text-xl md:font-bold">{avis.title}</span>
                                        <p className=" text-base md:text-xl  text-center justify-center flex-wrap ">{avis.Description}</p>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 " />
                    <CarouselNext className="absolute right-2 top-1/2 " />
                </Carousel>
                <div className="  flex justify-center md:pt-9 text-muted-foreground py-2 text-center text-sm">
                     {current} sur {ContentFomePage.ListAvis.length}
                </div>

            </section>
        </div>
    );
}
