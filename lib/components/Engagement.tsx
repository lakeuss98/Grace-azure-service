import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";


export default function Engagement({ engagement, index }: { engagement: any, index: number }) {
    const [refEngagement, inViewEngagement] = useInView({ triggerOnce: false, threshold: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });

    return (
        <motion.div
            ref={refEngagement}
            initial={{ opacity: 0, x: -70 }}
            animate={inViewEngagement ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease:"backIn" }}
            accessKey={engagement.title} className="flex flex-col transition-all duration-300 md:hover:scale-105 gap-y-3 items-center justify-center" key={index}>
            <Image className=" md:w-[200px] md:h-[200px] " src={engagement.urlImage} alt="icon" width={100} height={100} />
            <h3 className="text-center text-lg md:text-2xl font-bold" >{engagement.title}</h3>
            <p className="text-center font-medium md:font-semibold text-sm md:text-base " >{engagement.Description}</p>
        </motion.div>
    )
}