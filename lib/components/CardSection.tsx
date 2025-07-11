import Image from "next/image";

export type CardSectionProps = {
    title: string,
    urlImage: string,
    description: string,
    link: string
}

const CardSection = ({ title, urlImage, description, link }: CardSectionProps) => {
   
    return (
        <div title={title} className="flex flex-col bg-[#F49595]/3 gap-y-2 rounded-xl shadow cursor-pointer hover:md:scale-110 transition-all duration-300 ">
            {/* <h2 className=" text-3xl font-bold ">{title}</h2> */}
            <div className="flex flex-col md:flex-row   w-full flex-grow  ">
                <Image className="flex w-full  rounded-b-[0px] rounded-t-[4px] md:w-2/3  md:rounded-r-[0px] md:rounded-l-[8px]" src={urlImage} height={300} width={300} alt={""} />
                <div className="flex flex-col  md:w-full px-2 py-2 flex-grow  ">
                    <h3 className="text-2xl px-2.5 font-bold text-[#F49595]" >{title}</h3>  
                    <div className="flex w-full flex-grow  text-base text-justify md:text-xl md:font-medium  py-2.5 px-2.5 ">
                        {description}
                    </div>
                    <a href={link} className="bg-[#F49595]/80 flex rounded-xl py-4 text-white font-bold justify-center items-center px-2.5 hover:underline">En savoir plus →</a>
                </div>
            </div>
        </div>

    );

}
export default CardSection; 