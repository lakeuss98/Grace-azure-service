"use client"
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PhoneButton() {
    const [refButton, inViewButton] = useInView({ triggerOnce: false, threshold: [0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1] });

    return (
        <motion.a  
        href="tel:0765169106"
        ref={refButton}
        initial={{x:+40, y: +80, opacity: 0 }}
        animate={inViewButton?{ x: 0,y:0, opacity: 1 }:{}}
        transition={{ duration: 0.8, ease: 'easeInOut',type:"spring" }}
        className={`bottom-[125px] right-3 md:right-[14%] z-50 md:bottom-[118px]  rounded-full py-3 px-4 absolute flex gap-x-3 bg-[#db5050] shadow-2xl drop-shadow-2xl text-[#2e6417] `}
         > 
         
         <Phone/> 
         <span>0 7 65 16 91 06</span> 
         
         </motion.a> 
  
    )
}