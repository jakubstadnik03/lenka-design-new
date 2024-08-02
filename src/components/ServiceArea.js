import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import servicesData from '../data/services.json';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const serviceIcons = ["/assets/icons/icon1.svg", "/assets/icons/icon2.svg", "/assets/icons/icon3.svg", "/assets/icons/icon4.svg"];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceArea = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="service-area-start rts-service-area rts-section-gap bg-inner-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <motion.div
              className="service-full-top-wrapper rts-slide-up"
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeInUpVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="title-style-left">
                <div className="pre-title-area">
                  <img src="assets/images/about/02.png" alt="about" />
                  <span className="pre-title">Naše služby</span>
                </div>
                <h2 className="title">Poskytované služby</h2>
              </div>
              <p className="disc">
                V Lenka Design se specializujeme na vytváření mimořádných obytných prostor, které vyzařují eleganci.
              </p>
              <a href="/nase-sluzby" className="rts-read-more-circle-btn under-line">
                <i> <FontAwesomeIcon icon={faArrowRight} /></i>
                <p>Zobrazit všechny služby</p>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="row mt--20 g-5 rts-slide-up" style={{ justifyContent: "center" }}>
          {servicesData.slice(0, 4).map((service, index) => (
            <motion.div
              className="col-lg-3 col-md-6 col-sm-6 col-12"
              key={index}
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="single-service-style-five" style={{ width: "300px" }}>
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
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
