import React from "react";
import ServiceArea from '../components/ServiceArea';
import ContactUs from "../components/ContactUs";
import OurWorkProcess from "../components/OurWorkProcess";
import SEOHead from "../SEOHead"

const About = () => {
  return (
    <>
      <SEOHead
    title={`O firmě Lenka Design - Lenka Design`}
    description="Oživte svůj domov nebo kancelář v Liberci s exkluzivními návrhy interiérů od Lenky Stádníkové. Objednejte si konzultaci ještě dnes a transformujte svůj prostor do místa, kde budete chtít trávit každou minutu."
    keywords="interiérový design, architektura, Lenka Design, Lenka Stádníková, design interiéru, design interiéru v liberci, design v liberci, ceník poskytovaných služeb Lenka Design"
  />
    <main>
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-area-inner">
                <div className="breadcrumb-top">
                  <a href="/">Domů</a> /
                  <a className="active" href="/o-nas">O nás</a>
                </div>
                <div className="bottom-title">
                  <h1 className="title">O nás</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-top-history-information rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="title-style-left">
                <div className="pre-title-area">
                  <img src="assets/images/about/02.png" alt="about" />
                  <span className="pre-title">Náš Projekt</span>
                </div>
                <h2 className="title">Náš Příběh</h2>
              </div>
              <div className="about-left-history pl--50 pt--30">
                <img src="assets/images/about/12.png" alt="about" />
              </div>
              <div className="history-image-left mt--55 rts-reveal-one">
                <img className="rts-reveal-image-one" src="assets/images/lenka.jpg" alt="about" style={{    width: "420px"}}/>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 mt_sm--50">
              <div className="history-right-area-inner">
              <h3 className="subtitle">Mgr. Lenka Stádníková – Interiérová návrhářka</h3>

                <p className="disc rts-slide-up">
                  Po absolvování Technické univerzity v Liberci v oboru Podniková Ekonomika jsem žila 14 let v zahraničí (USA, Holandsku a Velké Británii), vychovávala jsem 3 děti, čerpala jsem inspirace a zkušenosti nejen životní, ale i profesní. Po mnoha stěhování, přestavbách domů i stavbě vlastního domu a chalupy, jsem se rozhodla změnit svou profesi a studovat Interiérový design. Ve Velké Británii jsem absolvovala studium bakalářského a poté magisterského Interiérového designu. Moc mě to bavilo, až se architektura a design stali mojí prací i koníčkem.
                </p>
                <p className="disc rts-slide-up">
                  Pod vlastní firmou jsem zpracovala již stovku projektů, konzultací, rekonstrukcí a novostaveb. Nadále se k tomu vzdělávám, sleduji nejnovější trendy, inovace a veletrhy, aby moje záliba ušetřila klientům čas a pomohla plnit jejich sny. Každého z nás ovlivňuje a formuje, jak bydlíme, někdy stačí jen málo a dojde k veliké změně a člověk se doma cítí hned lépe.
                </p>
                <p className="disc rts-slide-up">
                  Doporučuji konzultace s designérem již v době hrubé stavby, ušetříte si stres i náklady do budoucna. Vkusně, prakticky a zodpovědně dojdeme ke správnému cíli. Věnuji se návrhům interiérů, bytovému designu a Home stagingu již přes 10 let, mým cílem je, aby každý klient byl spokojen. Mohu Vám nabídnout 3D vizualizaci, návrhy dispozic nebo jen osobní konzultaci v interiérovém designu. Pracuji i online a přes videokonference. Soustředím se na projekty a návrhy interiérů v Liberci a okolí. Upřednostňuji přírodní materiály či jejich imitace. Mojí největší inspirací je příroda. Příroda nás vytvořila, ovlivňuje nás, a proto se v její blízkosti cítíme nejlépe. Nechci Vás ale ovlivňovat mým stylem, mým cílem je pochopit ten Váš a pomoci Vám zrealizovat Váš sen, který máte.
                </p>
                <div className="history-right-img mt--80 rts-reveal-one">
                  <img className="rts-reveal-image-one" src="/assets/images/service/konzultace1.jpeg" alt=""  style={{    height: "500px",
    width: "885px",
    objectFit: "cover"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceArea />
      <OurWorkProcess />
      <ContactUs />
    </main>
    </>
  );
};

export default About;
