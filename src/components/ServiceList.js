import React, { useEffect, useState } from 'react';
import servicesData from '../data/services.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Load services data from JSON
    setServices(servicesData);
  }, []);

  const { ref, inView } = useInView({
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
    <motion.div
      ref={ref}
      className="row g-5 mt--30 rts-slide-up"
      style={{ margin: "30px" }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="col-lg-4 col-md-6 col-sm-12 col-12"
          variants={itemVariants}
        >
          <div className="singe-serice-style-two">
            <a href={`/nase-sluzby/${service.nav}`} className="thumbnail">
              <img src={service.image} alt="Lenka Design služby" style={{ height: "300px", objectFit: "cover" }} />
            </a>
            <div className="body">
              <div className="wrapper">
                <div className="icon-area">
                  <div className="icon">
                    <img src={`/assets/icons/icon${index + 1}.svg`} alt="Service Icon" />
                  </div>
                  <span>{`0${index + 1}`}</span>
                </div>
                <div className="inner">
                  <h6 className="title"><a href={`/nase-sluzby/${service.nav}`}>{service.title}</a></h6>
                  <p className="disc">{service.description}</p>
                  <a href={`/nase-sluzby/${service.nav}`} className="arrow-btn-read-more">
                    Číst více <FontAwesomeIcon icon={faArrowRight} className='fa-thin' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceList;
