import type { Metadata } from "next";
import "./globals.css";
import NavBar from  '@/lib/widget/NavBar';
import Footer from "@/lib/widget/Footer.tsx/Footer";
//import Footer from "@/lib/widget/Footer.tsx/Footer";

// import { Dancing_Script } from 'next/font/google'

// const dancingScript = Dancing_Script({
//   subsets: ['latin'],
//   weight: ['400', '700'], // selon tes besoins
//   variable: '--font-dancing',
//   display: 'swap',
// })

export const metadata: Metadata = {
        title: "Grace Azur Service",
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
    ],
    icons:'/icon/logo.png',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className="flex flex-col h-screen bg-[#F49595]/5 "
      >
      <NavBar />
      <div className="flex flex-col overflow-y-scroll    flex-grow ">
      {children}
      <Footer/>
      </div>
     
      </body>
     
    </html>
  );
} 