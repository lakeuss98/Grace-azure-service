import Image from "next/image";
import { BUTTON_COLOR,ACCENT_COLOR } from "@/lib/const/menuList";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type CardSectionProps = {
    title: string,
    urlImage: string,
    description: string,
    link: string
}

const CardSection = ({ title, urlImage, description, link }: CardSectionProps) => {
    const [ref, inView] = useInView({ triggerOnce: false, threshold: [0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-grow w-full md:min-h-[280px] "
        >
            <div title={title} className={`flex flex-col flex-grow bg-[${BUTTON_COLOR}]/90 gap-y-2 rounded-xl shadow cursor-pointer hover:md:scale-110 transition-all duration-300 `}>
                {/* <h2 className=" text-3xl font-bold ">{title}</h2> */}
                <div className="flex flex-col md:flex-row   w-full flex-grow  ">
                    <Image className="flex w-full  rounded-b-[0px] rounded-t-[4px] md:w-2/3 md:bg- md:  md:rounded-r-[0px] md:rounded-l-[8px]" src={urlImage} height={300} width={300} alt={""} />
                    <div className="flex flex-col  md:w-full px-2 py-2 flex-grow  ">
                        <h3 className="text-2xl px-2.5 font-bold text-black" >{title}</h3>  
                        <div className="flex w-full flex-grow  text text-justify md:text-xl md:font-medium  py-2.5 px-2.5 ">
                            {description}
                        </div>
                        <a href={link} className={`bg-[${ACCENT_COLOR}] flex rounded-xl py-4 text-white font-bold justify-center items-center px-2.5 hover:underline`}>En savoir plus →</a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
export default CardSection; 