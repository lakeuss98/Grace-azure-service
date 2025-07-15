import Image from "next/image";
import Link from "next/link";
import iconTitle from "@/public/icon/logoTitle.png"
export default function Footer() {
  return (
    <footer className="bg-black text-white  py-7 px-4 gap-y-3 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-3 gap-8 pt-7">
        {/* Colonne 1 : Logo, slogan, politiques */}
        <div className="flex flex-col md:items-start">
          <div className="flex w-full justify-center md:justify-start py-3 ">
            <Image
              src={iconTitle}

              alt="Logo azur service "
              width={356}
              height={200}
              className="  flex w-[221px] h-[125px] md:w-[356px] md:h-[200px] "
            />
          </div>

          <p className="mb-6 text-sm">Découvrez le plaisir d'un intérieur impeccable avec Grace Azur Services : Là où la propreté rime avec sérénité et éclat.</p>
          <div className=" hidden md:flex flex-col  gap-x-2 gap-y-1">
            <Link href="/politics" className="text-xs hover:underline mb-2">
              Politique de confidentialité
            </Link>
            <Link href="/mentions-legales" className="text-xs hover:underline">
              Mentions légales
            </Link>
          </div>
        </div>

        {/* Colonne 2 : Notre société */}
        <div className="flex flex-col md:items-center" >
          <h2 className="font-semibold text-2xl mb-8">Notre société</h2>
          <ul className="space-y-4  ">
            <li>
              <Link href="/a-propos#qui-sommes-nous" className="hover:underline">Qui sommes-nous</Link>
            </li>
            <li>
              <Link href="/a-propos#pourquoi-nous" className="hover:underline">Pourquoi nous</Link>
            </li>
            <li>
              <Link href="/a-propos#engagement" className="hover:underline">Nos engagements</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">Nos services</Link>
            </li>
            <li>
              <Link href="/#localisation" className="hover:underline">Zone d’intervention</Link>
            </li>
            <li>
              <Link href="/tarifs" className="hover:underline">Nos tarifs</Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div className="flex flex-col md:items-center" >
          <h2 className="font-semibold text-2xl mb-4">Contactez-nous</h2>
          <ul className="space-y-4 text-sm">
            {/* <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li> */}
            <li>
              <span>Horaires : Lun-Ven 9h-18h</span>
            </li>
            <li>
              <span>Tél : 01 23 45 67 89</span>
            </li>
            <li>
              <span>Email : contact@votresite.com</span>
            </li>
          </ul>
        </div>

        {/* Colonne 4 : localisation */}
        {/* <div>
          <h2 className="font-semibold text-2xl mb-4">Contactez-nous</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
            <li>
              <span>Horaires : Lun-Ven 9h-18h</span>
            </li>
            <li>
              <span>Tél : 01 23 45 67 89</span>
            </li>
            <li>
              <span>Email : contact@votresite.com</span>
            </li>
          </ul>
        </div> */}


      </div>

      <div className=" flex  pt-4 items-center flex-col text-center text-xs text-gray-400 gap-y-1">
      <div className="flex w-full justify-center md:hidden   gap-x-2">
          <Link href="/mentions-legales" className="text-xs flex hover:underline">
            Mentions légales
          </Link>
          &
          <Link href="/politics" className="text-xs flex hover:underline">
            Politique de confidentialité
          </Link>
        </div>
        <span className="flex md:text-base md:font-medium " > © {new Date().getFullYear()} Azur Services. Tous droits réservés.</span>
      </div>

    </footer>
  );
}