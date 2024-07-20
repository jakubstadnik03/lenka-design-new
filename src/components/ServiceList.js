import React, { useEffect, useState } from 'react';
import servicesData from '../data/services.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServiceList = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    // Load services data from JSON
    setServices(servicesData);
  }, []);

  return (
    <div className="row g-5 mt--30 rts-slide-up" style={{margin: "30px"}}>
    {services.map((service, index) => (
      <div key={service.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
        <div className="singe-serice-style-two">
          <a href={`/nase-sluzby/${service.nav}`} className="thumbnail">
            <img src={service.image} alt="service" style={{height: "300px", objectFit: "cover"}} />
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
                  Číst více <FontAwesomeIcon icon={faArrowRight} className='fa-thin'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
  );
};

export default ServiceList;
