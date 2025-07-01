import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white  py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-7">
        {/* Colonne 1 : Logo, slogan, politiques */}
        <div className="flex flex-col items-start">
          <Image
            src={"/icon/logo.png"} // Remplace par ton logo
            alt="Logo"
            width={120}
            height={40}
            className="mb-4"
          />
          <p className="mb-6 text-sm">Votre slogan ici</p>
          <a href="/politique-confidentialite" className="text-xs hover:underline mb-2">
            Politique de confidentialité
          </a>
          <a href="/mentions-legales" className="text-xs hover:underline">
            Mentions légales
          </a>
        </div>

        {/* Colonne 2 : Notre société */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Notre société</h3>
          <ul className="space-y-2  ">
            <li>
              <a href="/qui-sommes-nous" className="hover:underline">Qui sommes-nous</a>
            </li>
            <li>
              <a href="/pourquoi-nous" className="hover:underline">Pourquoi nous</a>
            </li>
            <li>
              <a href="/nos-services" className="hover:underline">Nos services</a>
            </li>
            <li>
              <a href="/zone-intervention" className="hover:underline">Zone d’intervention</a>
            </li>
            <li>
              <a href="/nos-tarifs" className="hover:underline">Nos tarifs</a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contactez-nous</h3>
          <ul className="space-y-2 text-sm">
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
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Votre Société. Tous droits réservés.
      </div>
    </footer>
  );
}