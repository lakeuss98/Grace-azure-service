export default function Home() {
  return (
    <div className=" flex flex-col items-center  bg-[url('/bg.png')] bg-cover bg-center w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <div className="text-[20px] sm:text-[30px] text-[#4B2E05] font-semibold">
             Grâce azur  services  votre partenaire pour un intérieur lumineux 
          </div>

           <div className="text-[20px] sm:text-[30px] text-[#4B2E05] font-semibold">
             Grâce azur  services  votre partenaire pour un intérieur lumineux 
          </div>
           <div className="mt-10 bg-[#fff]">
                <a
                    href="/devis"
                    className="bg-[#5fa37a] text-white px-6 py-3 w-full flex flex-row rounded-lg font-semibold hover:bg-[#7c4a0a] transition"
                >
                    Demander un devis gratuit
                </a>
            </div>
          
    </div>
  );
}
