import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Politique de Confidentialité | Grace Azur Services",
    description: "Découvrez notre politique de confidentialité et comment nous protégeons vos données personnelles.",
    keywords: [
        "politique de confidentialité",
        "protection des données",
        "RGPD",
        "données personnelles",
        "Grace Azur Services",
    ],
};

export default function PolitiqueConfidentialite() {
    return (
        <div className="flex flex-col bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Politique de Confidentialité
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                    </p>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-8">
                    
                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            1. Introduction
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Grace Azur Services (&quot;nous&quot;, &quot;notre&quot;, &quot;nos&quot;) s&apos;engage à protéger 
                            la confidentialité de vos informations personnelles. Cette politique de confidentialité 
                            décrit comment nous collectons, utilisons et protégeons vos données.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.
                        </p>
                    </section>

                    {/* Collecte des données */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            2. Collecte des Informations
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Nous collectons les informations suivantes :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Informations de contact (nom, email, téléphone)</li>
                            <li>Adresse de résidence ou de service</li>
                            <li>Préférences de service</li>
                            <li>Données de communication</li>
                            <li>Informations techniques (adresse IP, cookies)</li>
                        </ul>
                    </section>

                    {/* Utilisation des données */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            3. Utilisation des Informations
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Nous utilisons vos informations pour :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Fournir nos services de ménage et conciergerie</li>
                            <li>Communiquer avec vous concernant vos réservations</li>
                            <li>Améliorer nos services et l&apos;expérience client</li>
                            <li>Respecter nos obligations légales</li>
                            <li>Envoyer des communications marketing (avec votre consentement)</li>
                        </ul>
                    </section>

                    {/* Partage des données */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            4. Partage des Informations
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Nous ne vendons, n&apos;échangeons ni ne louons vos informations personnelles à des tiers. 
                            Nous pouvons partager vos informations uniquement dans les cas suivants :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Avec votre consentement explicite</li>
                            <li>Pour respecter une obligation légale</li>
                            <li>Avec nos prestataires de services (sous stricte confidentialité)</li>
                            <li>Pour protéger nos droits et notre sécurité</li>
                        </ul>
                    </section>

                    {/* Sécurité */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            5. Sécurité des Données
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations 
                            contre l&apos;accès non autorisé, la modification, la divulgation ou la destruction. 
                            Ces mesures incluent le chiffrement des données, l&apos;accès restreint et la surveillance 
                            régulière de nos systèmes.
                        </p>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            6. Cookies et Technologies Similaires
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Notre site web utilise des cookies pour améliorer votre expérience. Les cookies sont 
                            de petits fichiers texte stockés sur votre appareil.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, 
                            mais cela peut affecter certaines fonctionnalités du site.
                        </p>
                    </section>

                    {/* Vos droits */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            7. Vos Droits
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Conformément au RGPD, vous avez les droits suivants :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Droit d&apos;accès à vos données personnelles</li>
                            <li>Droit de rectification de vos données</li>
                            <li>Droit à l&apos;effacement de vos données</li>
                            <li>Droit à la limitation du traitement</li>
                            <li>Droit à la portabilité de vos données</li>
                            <li>Droit d&apos;opposition au traitement</li>
                        </ul>
                    </section>

                    {/* Conservation */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            8. Conservation des Données
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nous conservons vos informations personnelles aussi longtemps que nécessaire 
                            pour fournir nos services et respecter nos obligations légales. 
                            Les données sont supprimées ou anonymisées lorsque leur conservation 
                            n&apos;est plus justifiée.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            9. Contact
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Pour toute question concernant cette politique de confidentialité ou pour exercer 
                            vos droits, contactez-nous :
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700">
                                <strong>Email :</strong> graceazurservices@gmail.com<br />
                                <strong>Téléphone :</strong> 0 765 169 106<br />
                                <strong>Adresse :</strong> Cote d'azur, France
                            </p>
                        </div>
                    </section>

                    {/* Modifications */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            10. Modifications de cette Politique
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. 
                            Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour. 
                            Nous vous encourageons à consulter régulièrement cette page.
                        </p>
                    </section>

                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 mt-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <Link 
                            href="/" 
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            ← Retour à l&apos;accueil
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 