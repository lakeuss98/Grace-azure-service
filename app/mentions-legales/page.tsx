import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Mentions Légales | Grace Azur Services",
    description: "Consultez les mentions légales de Grace Azur Services - informations légales et conditions d'utilisation.",
    keywords: [
        "mentions légales",
        "conditions d'utilisation",
        "informations légales",
        "Grace Azur Services",
        "droit camerounais",
    ],
};

export default function MentionsLegales() {
    return (
        <div className=" bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Mentions Légales
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                    </p>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-8">
                    
                    {/* Éditeur */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            1. Éditeur du Site
                        </h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700">
                                <strong>Raison sociale :</strong> Grace Azur Services<br />
                                <strong>Adresse :</strong> Cote d'azur, France<br />
                                <strong>Téléphone :</strong> 0 765 169 106<br />
                                <strong>Email :</strong> graceazurservices@gmail.com<br />
                                <strong>Activité :</strong> Services de ménage à domicile et conciergerie
                            </p>
                        </div>
                    </section>

                    {/* Hébergement */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            2. Hébergement
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ce site web est hébergé par Vercel Inc., 340 S Lemon Ave #4133, 
                            Walnut, CA 91789, États-Unis. Vercel fournit l&apos;infrastructure 
                            technique nécessaire au bon fonctionnement du site.
                        </p>
                    </section>

                    {/* Propriété intellectuelle */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            3. Propriété Intellectuelle
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            L&apos;ensemble de ce site relève de la législation Francaise et 
                            internationale sur le droit d&apos;auteur et la propriété intellectuelle. 
                            Tous les droits de reproduction sont réservés.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Sont notamment protégés :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>La structure générale du site</li>
                            <li>Les textes et contenus rédactionnels</li>
                            <li>Les images, photographies et illustrations</li>
                            <li>Les logos et marques</li>
                            <li>Les bases de données</li>
                        </ul>
                    </section>

                    {/* Conditions d'utilisation */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            4. Conditions d&apos;Utilisation
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            L&apos;utilisation de ce site implique l&apos;acceptation pleine et entière 
                            des conditions générales d&apos;utilisation décrites ci-après.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Grace Azur Services s&apos;efforce d&apos;assurer au mieux l&apos;exactitude 
                            et la mise à jour des informations diffusées sur ce site, mais ne peut 
                            garantir l&apos;exactitude, la complétude, l&apos;actualité des informations 
                            diffusées sur son site.
                        </p>
                    </section>

                    {/* Responsabilité */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            5. Responsabilité
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Grace Azur Services ne pourra être tenue responsable :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Des dommages directs ou indirects résultant de l&apos;utilisation du site</li>
                            <li>De l&apos;interruption ou de la suspension du service</li>
                            <li>De la perte de données ou d&apos;informations</li>
                            <li>Des erreurs ou omissions dans les informations diffusées</li>
                        </ul>
                    </section>

                    {/* Liens hypertextes */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            6. Liens Hypertextes
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les liens hypertextes mis en place dans le cadre du présent site web 
                            en direction d&apos;autres ressources présentes sur le réseau Internet 
                            ne sauraient engager la responsabilité de Grace Azur Services.
                        </p>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            7. Cookies
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. 
                            En naviguant sur ce site, vous acceptez l&apos;utilisation de cookies 
                            conformément à notre politique de confidentialité.
                        </p>
                    </section>

                    {/* Droit applicable */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            8. Droit Applicable
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Tout litige en relation avec l&apos;utilisation du site Grace Azur Services 
                            est soumis au droit camerounais. En dehors des cas où la loi ne le permet pas, 
                            il est fait attribution exclusive de juridiction aux tribunaux compétents de Yaoundé.
                        </p>
                    </section>

                    {/* Contact juridique */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            9. Contact Juridique
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Pour toute question relative à ces mentions légales, vous pouvez nous contacter :
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700">
                                <strong>Email :</strong> graceazurservices@gmail.com<br />
                                <strong>Adresse :</strong> Cote d'azur, France<br />
                                <strong>Horaires :</strong> Du lundi au vendredi, 8h-18h
                            </p>
                        </div>
                    </section>

                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 ">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center space-y-4">
                        <Link 
                            href="/" 
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            ← Retour à l&apos;accueil
                        </Link>
                        <div className="text-sm text-gray-600">
                            © {new Date().getFullYear()} Grace Azur Services. Tous droits réservés.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 