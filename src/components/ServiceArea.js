import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import servicesData from '../data/services.json';
const serviceIcons = ["/assets/icons/icon1.svg", "/assets/icons/icon2.svg", "/assets/icons/icon3.svg", "/assets/icons/icon4.svg"];

const ServiceArea = () => {
  return (
    <div className="service-area-start rts-service-area rts-section-gap bg-inner-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="service-full-top-wrapper rts-slide-up">
              <div className="title-style-left">
                <div className="pre-title-area">
                  <img src="assets/images/about/02.png" alt="about" />
                  <span className="pre-title">Naše služby</span>
                </div>
                <h2 className="title">Poskytované služby</h2>
              </div>
              <p className="disc">
                V Luxury Living Designs se specializujeme na vytváření mimořádných obytných prostor, které vyzařují eleganci.
              </p>
              <a href="/nase-sluzby" className="rts-read-more-circle-btn under-line">
               <i> <FontAwesomeIcon icon={faArrowRight} /></i>
                <p>Zobrazit všechny služby</p>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt--20 g-5 rts-slide-up" style={{justifyContent: "center"}}>
        {servicesData.slice(0, 4).map((service, index) => (

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="single-service-style-five" style={{    width: "300px"}}>
              <div className="icon-area">
                <img src={serviceIcons[index]} alt="Architectural Design" />
              </div>
              <div className="body">
                <a href={`/nase-sluzby/${service.nav}`} >
                  <h6 className="title">{service.title}</h6>
                </a>
                <p className="disc">
                {service.details[0]}
                </p>
                <a href={`/nase-sluzby/${service.nav}`} className="read-more-btn">
                      Přečtěte si více<FontAwesomeIcon icon={faChevronRight} />
                    </a>              </div>
            </div>
          </div>
        ))}
          </div>
        </div>
    </div>
  );
};

export default ServiceArea;
