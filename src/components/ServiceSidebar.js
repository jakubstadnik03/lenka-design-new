import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from 'react-router-dom';
import servicesData from '../data/services.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServiceSidebar = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47m0lpw",
        "template_m58cjss",
        form.current,
        "na8xge_55u88BuNEA"
      )
      .then(
        (result) => {
          alert("Vaš dotaz byl úspěšně odeslán!");
          document.location.href = "/";
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleLinkClick = (nav) => {
    navigate(`/nase-sluzby/${nav}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="service-left-sidebar-wrapper">
      <div className="service-left-sidebar-wized mb--50">
        <div className="topa-rea">
          <h4 className="title">Seznam našich služeb</h4>
        </div>
        <div className="body">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="single-short-service"
              onClick={() => handleLinkClick(service.nav)}
              style={{ cursor: 'pointer' }}
            >
              <span className="number">{service.id.toString().padStart(2, '0')}.</span>
              <p className="name" style={{ lineHeight: "normal" }}>{service.title}</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          ))}
        </div>
      </div>
      <div className="service-left-sidebar-wized">
        <div className="topa-rea">
          <span className="pre">Kontakt</span>
          <h4 className="title">Pište nebo volejte, ráda Vám pomohu a odpovím na Vaše otázky….</h4>
        </div>
        <div className="body">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Vaše jméno" />
            <input type="tel" name="user_phone" placeholder="Vaše číslo" />
            <input type="email" name="user_email" placeholder="Váš email" />
            <textarea placeholder="Zpáva pro mě " name="message"></textarea>
            <button className="rts-btn btn-primary" value="send" type="submit">Odeslat</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
