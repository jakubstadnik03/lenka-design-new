// Services.js
import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import servicesData from '../data/services.json';

const serviceIcons = ["/assets/icons/icon1.svg", "/assets/images/icons/icon2.svg", "/assets/images/icons/icon3.svg", "/assets/images/icons/icon4.svg"];


const ServicesComponent = () => {
  return (
    <div className="rts-service-area rts-section-gap bg-light" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="service-style-left-area">
              <div className="title-style-left">
                <div className="pre-title-area">
                  <img src='/assets/images/about/02.png' alt="about" />
                  <span className="pre-title">Naše služby</span>
                </div>
                <h3 className="title quote">Komplexní služby interiérového designu</h3>
              </div>
              <p className="disc mb--10">
                Vítejte u našich služeb interiérového designu, kde se specializujeme na transformaci prostor do příjemných a .praktických interiérů.
              </p>
              <Accordion className="accordion-service-1 mb--40" defaultActiveKey="0">
                <AccordionItem eventKey="0">
                  <AccordionHeader>Můžete pracovat v rámci mého rozpočtu?</AccordionHeader>
                  <AccordionBody>
                    Pokusíme se! Chápeme důležitost rozpočtových úvah. Máme zkušenosti ve vytváření řešení, která respektují váš rozpočet.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="1">
                  <AccordionHeader>Nabízíte služby projektového managementu?</AccordionHeader>
                  <AccordionBody>
                    Ano, nabízíme. Naši odborníci se postarají o to, aby váš projekt probíhal hladce a efektivně od začátku do konce.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="2">
                  <AccordionHeader>Jaké jsou fáze vašich služeb?</AccordionHeader>
                  <AccordionBody>
                    Naše služby zahrnují plánování a vývoj konceptu, dokumentaci a stavební výkresy, projektový management a implementaci, včetně stylování.
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
              <a href="/nase-sluzby" className="rts-btn btn-border">Zobrazit detaily</a>
            </div>
          </div>
          <div className="col-lg-8 pl--60 rts-slide-up pl_sm--0 pl_md--0 mt_sm--50 mt_md--50">
            <div className="row g-5">
              {servicesData.slice(0, 4).map((service, index) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={service.nav}>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
