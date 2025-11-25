import React from "react";

const About = () => {
    return (
        <main id="main" className="main-site">

            {/* BREADCRUMB */}
            <div className="container">
                <div className="wrap-breadcrumb">
                    <ul>
                        <li className="item-link">
                            <a href="/" className="link">Accueil</a>
                        </li>
                        <li className="item-link">
                            <span>À Propos</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container">

                {/* À PROPOS DE NOUS */}
                <div className="aboutus-info style-center">
                    <b className="box-title">Forever Living Products</b>
                    <p className="txt-content">
                        Depuis plus de 40 ans, Forever Living Products révolutionne le monde du bien-être en proposant des produits naturels à base d'Aloe Vera pure. Notre mission est de vous offrir des solutions naturelles pour prendre soin de votre santé, de votre beauté et de votre bien-être au quotidien.
                    </p>
                </div>

                {/* STATISTIQUES FOREVER LIVING */}
                <div className="row equal-container">
                    {[
                        { title: "40+", sub: "Années d'excellence" },
                        { title: "10M+", sub: "Clients satisfaits" },
                        { title: "200+", sub: "Pays desservis" }
                    ].map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="aboutus-box-score equal-elem">
                                <b className="box-score-title">{item.title}</b>
                                <span className="sub-title">{item.sub}</span>
                                <p className="desc">
                                    Lorem Ipsum is simply dummy text of the printing industry...
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ABOUT DETAILS */}
                <div className="row">
                    
                    {/* Column 1 */}
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="aboutus-info style-small-left">
                            <b className="box-title">Notre Mission</b>
                            <p className="txt-content">
                                Nous cultivons et transformons l'Aloe Vera de la plus haute qualité pour créer des produits naturels qui améliorent votre qualité de vie. Chaque produit est formulé avec soin pour maximiser les bienfaits naturels de cette plante exceptionnelle.
                            </p>
                        </div>

                        <div className="aboutus-info style-small-left">
                            <b className="box-title">L'Histoire de Forever Living</b>
                            <p className="txt-content">
                                Fondée en 1978, Forever Living Products a révolutionné l'industrie du bien-être en étant la première entreprise à stabiliser le gel d'Aloe Vera frais. Depuis plus de 40 ans, nous nous engageons à fournir des produits naturels de qualité supérieure.
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="aboutus-info style-small-left">
                            <b className="box-title">Notre Vision</b>
                            <p className="txt-content">
                                Devenir la référence mondiale des produits naturels à base d'Aloe Vera, en offrant des solutions complètes pour le bien-être, la beauté et la santé, tout en maintenant les plus hauts standards de qualité et de pureté.
                            </p>
                        </div>

                        <div className="aboutus-info style-small-left">
                            <b className="box-title">Rejoignez Notre Équipe !</b>
                            <p className="txt-content">
                                Devenez distributeur Forever Living Products et partagez les bienfaits de l'Aloe Vera avec votre communauté. Bénéficiez d'un revenu complémentaire tout en contribuant au bien-être des autres.
                            </p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="aboutus-info style-small-left">
                            <b className="box-title">Cooperate with Us!</b>

                            <div className="list-showups">
                                {[
                                    { name: "Aloe Vera 100% Pur", id: "shoup1" },
                                    { name: "Qualité Supérieure", id: "shoup2" },
                                    { name: "Produits Naturels", id: "shoup3" },
                                    { name: "Satisfaction Garantie", id: "shoup4" }
                                ].map((item, i) => (
                                    <label key={i}>
                                        <input
                                            type="radio"
                                            className="hidden"
                                            name="showup"
                                            id={item.id}
                                            defaultChecked={i === 0}
                                        />
                                        <span className="check-box"></span>
                                        <span className="function-name">{item.name}</span>
                                        <span className="desc">
                                            Lorem Ipsum is simply dummy text of the printing industry...
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* TEAM SECTION */}
                <div className="our-team-info">
                    <h4 className="title-box">Our teams</h4>

                    <div className="our-staff">
                        <div
                            className="slide-carousel owl-carousel style-nav-1 equal-container"
                            data-items="5"
                            data-loop="false"
                            data-nav="true"
                            data-dots="false"
                            data-margin="30"
                            data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"3"},"1200":{"items":"4"}}'
                        >
                            {/* Team Members */}
                            {[
                                { name: "LEONA", title: "Director", img: "/assets/client/images/member-leona.jpg" },
                                { name: "LUCIA", title: "Manager", img: "/assets/client/images/member-lucia.jpg" },
                                { name: "NANA", title: "Marketer", img: "/assets/client/images/member-nana.jpg" },
                                { name: "BRAUM", title: "Member", img: "/assets/client/images/member-braum.jpg" },
                                { name: "LUCIA", title: "Manager", img: "/assets/client/images/member-lucia.jpg" },
                                { name: "NANA", title: "Marketer", img: "/assets/client/images/member-nana.jpg" },
                            ].map((member, i) => (
                                <div key={i} className="team-member equal-elem">
                                    <div className="media">
                                        <a href="#">
                                            <figure>
                                                <img src={member.img} alt={member.name} />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <b className="name">{member.name}</b>
                                        <span className="title">{member.title}</span>
                                        <p className="desc">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text...
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
};

export default About;
