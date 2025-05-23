import type { Metadata } from "next";
import "./globals.css";
import NavBar from  '@/lib/widget/NavBar';
// import Footer from  '@/lib/widget/Footer';

export const metadata: Metadata = {
  title: "Grace Azure Service",
  description: "Service de netoyage de bureaux et de domicile airbnb",
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
      className={` bg-white`}
      >
      <NavBar />
        {children}
      {/* <Footer/> */}
      </body>
     
    </html>
  );
}