import React from "react";
import ServiceArea from '../components/ServiceArea';
import ContactUs from "../components/ContactUs";
import OurWorkProcess from "../components/OurWorkProcess";
import SEOHead from "../SEOHead";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <SEOHead
        title="O nás | Lenka Design"
        description="Poznejte tým Lenka Design a naši filozofii interiérového designu. Inspirace přírodou, individuální přístup a důraz na detail."
        keywords="o nás, tým, interiérový design, Lenka Design, filozofie, příroda, individuální přístup"
        image="/assets/images/og-about.jpg"
        canonical="https://www.lenkadesign.cz/o-nas"
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
                    <h1 className="title">O firmě Lenka Design</h1>
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
                <motion.div
                  ref={ref1}
                  initial="hidden"
                  animate={inView1 ? 'visible' : 'hidden'}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.5 }}
                  className="title-style-left"
                >
                  <div className="pre-title-area">
                    <img src="assets/images/about/02.png" alt="about" />
                    <span className="pre-title">Můj projekt</span>
                  </div>
                  <h2 className="title">Můj příběh</h2>
                </motion.div>
                <motion.div
                  ref={ref2}
                  initial="hidden"
                  animate={inView2 ? 'visible' : 'hidden'}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="about-left-history pl--50 pt--30"
                >
                  <img src="assets/images/about/12.png" alt="about" />
                </motion.div>
                <motion.div
                  ref={ref3}
                  initial="hidden"
                  animate={inView3 ? 'visible' : 'hidden'}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="history-image-left mt--55 rts-reveal-one"
                >
                  <img className="rts-reveal-image-one" src="assets/images/lenka-portret-old.jpeg" alt="Lenka Stádníková" style={{ width: "420px" }} />
                </motion.div>
              </div>
              <div className="col-lg-8 col-md-8 mt_sm--50">
                <motion.div
                  initial="hidden"
                  animate={inView1 ? 'visible' : 'hidden'}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.5 }}
                  className="history-right-area-inner"
                >
                  <h3 className="subtitle">MgA. Lenka Stádníková – Interiérová návrhářka, majitelka firmy Lenka design</h3>
                 
                  <p className="disc rts-slide-up">
                    Po absolvování Technické univerzity v Liberci v oboru Podniková Ekonomika jsem žila 14 let v zahraničí (USA, Holandsku a Velké Británii), vychovávala jsem 3 děti, čerpala jsem inspirace a zkušenosti nejen životní, ale i profesní. Po mnoha stěhování, přestavbách domů i stavbě vlastního domu a chalupy, jsem se rozhodla změnit svou profesi a studovat Interiérový design. Ve Velké Británii na Staffordshire University jsem absolvovala studium na bakalářského a poté magisterského Interiérového designu. Moc mě to bavilo, až se architektura a design staly mojí prací i koníčkem.
                  </p>
                  <p className="disc rts-slide-up">
                    Pod vlastní firmou jsem zpracovala již stovku projektů, konzultací, rekonstrukcí a novostaveb. Nadále se k tomu vzdělávám, sleduji nejnovější trendy, inovace a veletrhy, aby moje záliba ušetřila klientům čas a pomohla plnit jejich sny. Každého z nás ovlivňuje a formuje, jak bydlíme, někdy stačí jen málo a dojde k veliké změně a člověk se doma cítí hned lépe.
                  </p>
                  <p className="disc rts-slide-up">
                    Doporučuji konzultace s designérem již v době hrubé stavby, ušetříte si stres i náklady do budoucna. Vkusně, prakticky a zodpovědně dojdeme ke správnému cíli. Věnuji se návrhům interiérů, bytovému designu a Home stagingu již přes 10 let, mým cílem je, aby každý klient byl spokojen. Mohu Vám nabídnout 3D vizualizaci, návrhy dispozic nebo jen osobní konzultaci v interiérovém designu. Pracuji i online a přes videokonference. Soustředím se na projekty a návrhy interiérů v Liberci a okolí. Upřednostňuji přírodní materiály či jejich imitace. Mojí největší inspirací je příroda. Příroda nás vytvořila, ovlivňuje nás, a proto se v její blízkosti cítíme nejlépe. Nechci Vás ale ovlivňovat mým stylem, mým cílem je pochopit ten Váš a pomoci Vám zrealizovat Váš sen, který máte.
                  </p>
                  <h3 className="subtitle" style={{ fontSize: "20px", lineHeight: "20px" }}>
                    Bc. Aneta Novická – Interiérová návrhářka, Absolventka Mendelovy univerzity v Brně v oboru Tvorba a výroba nábytku
                  </h3>
                  <p className="disc rts-slide-up">
                  Absolventka Střední školy Kateřinky v oboru Design interiéru. Během maturitního vzdělávání získala také výuční list v oboru Truhlář. Následovala tříměsíční stáž v Lotyšské Rize, kde pracovala v prestižním designovém studiu Agnes Rudzite Interiors a čerpala inspiraci zahraničního designu. Poté absolvovala Mendelovu univerzitu v Brně v oboru Tvorba a výroba nábytku a rozšířila si díky tomu další znalosti.
                    </p>


                  <motion.div
                    initial="hidden"
                    animate={inView1 ? 'visible' : 'hidden'}
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="history-right-img mt--80 rts-reveal-one"
                  >
                    <img className="rts-reveal-image-one" src="/assets/images/service/konzultace1.jpeg" alt="Lenka Design kancelář" style={{ height: "500px", width: "885px", objectFit: "cover" }} />
                  </motion.div>
                </motion.div>
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
