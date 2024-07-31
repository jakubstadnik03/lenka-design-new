import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import servicesData from '../data/services.json';

const serviceIcons = ["/assets/icons/icon1.svg", "/assets/images/icons/icon2.svg", "/assets/images/icons/icon3.svg", "/assets/images/icons/icon4.svg"];

const ServicesComponent = () => {
  const { ref: leftAreaRef, inView: leftAreaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: rightAreaRef, inView: rightAreaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="rts-service-area rts-section-gap bg-light" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <motion.div
              ref={leftAreaRef}
              className="service-style-left-area"
              initial="hidden"
              animate={leftAreaInView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="title-style-left">
                <div className="pre-title-area">
                  <img src='/assets/images/about/02.png' alt="about" />
                  <span className="pre-title">Naše služby</span>
                </div>
                <h3 className="title quote">Komplexní služby interiérového designu</h3>
              </div>
              <p className="disc mb--10">
                Vítejte u našich služeb interiérového designu, kde se specializujeme na transformaci prostor do příjemných a praktických interiérů.
              </p>
              <Accordion className="accordion-service-1 mb--40" defaultActiveKey="0">
                <AccordionItem eventKey="0">
                  <AccordionHeader>Můžete pracovat v rámci mého rozpočtu?</AccordionHeader>
                  <AccordionBody>
                    Pokusíme se! Chápeme důležitost rozpočtových úvah. Máme zkušenosti ve vytváření řešení, která respektují váš rozpočet.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="1">
                  <AccordionHeader>Nabízíte i služby realizace?</AccordionHeader>
                  <AccordionBody>
                  Ano, nabízíme. Doporučíme odborné, vyzkoušené firmy, aby váš projekt probíhal hladce a efektivně od začátku do konce a výsledek byl dle našich návrhů.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="2">
                  <AccordionHeader>Jaké jsou fáze vašich služeb?</AccordionHeader>
                  <AccordionBody>
                  Naše služby zahrnují konzultace, plánování a vývoj konceptu, dokumentaci a stavební výkresy, projektové řízení a realizaci, včetně stylování.
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
              <a href="/nase-sluzby" className="rts-btn btn-border">Zobrazit detaily</a>
            </motion.div>
          </div>
          <div className="col-lg-8 pl--60 rts-slide-up pl_sm--0 pl_md--0 mt_sm--50 mt_md--50">
            <motion.div
              ref={rightAreaRef}
              className="row g-5"
              initial="hidden"
              animate={rightAreaInView ? 'visible' : 'hidden'}
              variants={containerVariants}
            >
              {servicesData.slice(0, 4).map((service, index) => (
                <motion.div
                  className="col-lg-6 col-md-6 col-sm-6 col-12"
                  key={service.nav}
                  variants={itemVariants}
                >
                  <div className={`single-service-area-one ${index + 1}`}>
                    <div className="icon">
                      <img src={serviceIcons[index]} alt="icon" />
                    </div>
                    <h6 className="title">{service.title}</h6>
                    <p className="disc">{service.details[0]}</p>
                    <a href={`/nase-sluzby/${service.nav}`} className="read-more-btn">
                      Přečtěte si více<FontAwesomeIcon icon={faChevronRight} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
