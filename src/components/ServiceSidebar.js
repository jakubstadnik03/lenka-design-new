import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const ServiceSidebar = () => {
  return (
    <div className="service-left-sidebar-wrapper">
      <div className="service-left-sidebar-wized mb--50">
        <div className="topa-rea">
          <h4 className="title">Seznam našich služeb</h4>
        </div>
        <div className="body">
          {servicesData.map((service, index) => (
            <Link to={`/nase-sluzby/${service.nav}`} key={service.id} className="single-short-service">
              <span className="number">{service.id.toString().padStart(2, '0')}.</span>
              <p className="name" style={{lineHeight: "normal"}}>{service.title}</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          ))}
        </div>
      </div>
      <div className="service-left-sidebar-wized">
        <div className="topa-rea">
          <span className="pre">Kontakt</span>
          <h4 className="title">Pište nebo volejte, ráda Vám pomohu a odpovím na Vaše otázky….</h4>
        </div>
        <div className="body">
          <form action="#">
            <input type="text" placeholder="Vaše jméno" />
            <input type="tel" placeholder="Vaše číslo" />
            <input type="email" placeholder="Váš email" />
            <textarea placeholder="Zpáva pro mně "></textarea>
            <button className="rts-btn btn-primary">Obeslat</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
