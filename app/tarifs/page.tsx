"use client"

export default function pageTarifs() {


    return (<>
        <section title="tarif" className="flex gap-y-9 md:px-[15%]  px-[3%]  py-4 flex-col  md:text-xl md:font-medium  w-full items-center flex-grow justify-center " >

            <h1 className="flex bg-[url('/img/devis.jpg')] bg-cover bg-center  flex-wrap text-center rounded-xl bg-[#f49595]/50 shadow-md py-11 md:py-20 md:text-4xl md:font-bold  w-full text-[18px] font-bold items-center justify-center">
                Tarifs adaptés à vos besoins uniques
            </h1>

            <article title="nos tarif" className="flex gap-y-4 flex-col  w-full ">
                <h2 className="text-2xl md:text-3xl font-bold text-black ">Nos Tarifs</h2>
                <p className=" text-justify ">Chez Grace Azur Services, nous comprenons que chaque client est unique, avec des besoins spécifiques qui méritent une attention personnalisée. C'est pourquoi nous avons adopté une approche sur mesure pour nos tarifications, garantissant que vous recevez exactement le service dont vous avez besoin, au meilleur prix possible.</p>
            </article>

            <article title="tarification" className="flex gap-y-4 flex-col w-full ">
                <h2 className="text-2xl md:text-3xl font-bold text-text-black ">Une Tarification Transparente et Personnalisée</h2>
                <p className=" text-justify ">
                   {" Nous ne proposons pas de grille tarifaire fixe car nous croyons en l'importance d'adapter nos services à vos exigences particulières. Que ce soit pour le nettoyage d'appartement , de maison  ou pour la conciergerie Airbnb , nous prenons le temps de comprendre vos attentes pour vous fournir une estimation précise et juste."}</p>
            </article>

            <article title="Pourquoi nous contacer" className="flex gap-y-4 flex-col w-full ">
                <h2 className="text-2xl md:text-3xl font-bold text-black ">Pourquoi nous Contacter Directement ?</h2>

                <ul className="flex flex-col gap-y-3 list-inside list-disc" >
                    <li>

                        <span className="font-bold pr-1.5 ">Flexibilité :</span>
                        <span>
                            Nous offrons une grande variété de services et notre tarification reflète cette flexibilité, s'adaptant à la complexité et à la fréquence requises.
                        </span>
                    </li>
                    <li>
                        <span className="font-bold pr-1.5">Personnalisation :</span>
                        <span>
                            En discutant directement avec vous, nous pouvons élaborer un plan de services qui correspond parfaitement à vos besoins et à votre budget.                        </span>
                    </li>
                    <li>

                        <span className="font-bold pr-1.5">Transparence :</span>
                        <span>
                            Nous nous engageons à fournir des devis clairs et détaillés, sans frais cachés, pour que vous sachiez exactement à quoi vous attendre.        </span>

                    </li>
                    <li>
                        <span className="font-bold pr-1.5">Conseil Expert :</span>
                        <span>
                            Notre équipe est là pour vous conseiller et vous guider vers les meilleures options, en tenant compte de vos besoins spécifiques.    </span>
                    </li>


                </ul>


            </article>

            <article title="comment obtenir" className="flex flex-col gap-y-4 w-full ">
                <h2 className="text-2xl md:text-3xl font-bold text-black ">Comment Obtenir Votre Devis Personnalisé ?</h2>
                <p className="text-justify ">
                    Pour recevoir votre devis personnalisé, nous vous invitons à remplir notre formulaire de contact ci-dessous. Ce formulaire est conçu pour recueillir les informations essentielles concernant votre demande, vous permettant de décrire en détail vos besoins.
                </p>
                <ul className="flex flex-col gap-y-3 list-inside list-decimal " >
                    <li>
                        <span className="font-bold pr-1.5" >Accédez au Formulaire :</span>
                        <span>
{"                            Vous retrouverez notre formulaire de contact en haut de cette page Devis."}                       </span>
                    </li>
                    <li>
                        <span className="font-bold pr-1.5" >Détaillez Votre Demande :</span>
                        <span>
                            Utilisez l'espace prévu pour expliquer ce que vous recherchez, les spécificités de votre espace ou de votre situation, et toute autre information pertinente.
                        </span>
                    </li>

                    <li>
                        <span className="font-bold pr-1.5" >Envoyez et Relaxez :</span>
                        <span>
                            Une fois votre formulaire envoyé, notre équipe prendra contact avec vous pour discuter de vos besoins et vous fournir une estimation sur mesure.
                        </span>
                    </li>
                </ul>

                <p className=" text-justify ">
                    Chez Grace Azur  Services, nous sommes dédiés à offrir une expérience exceptionnelle, marquée par la qualité, le respect et l'attention aux détails. Votre satisfaction est notre priorité, et cela commence par une tarification juste et transparente. Remplissez notre formulaire de contact dès aujourd'hui pour découvrir comment nous pouvons enrichir votre quotidien avec nos services personnalisés.
                </p>
            </article>

            <br /><br />
        </section>
    </>);

}