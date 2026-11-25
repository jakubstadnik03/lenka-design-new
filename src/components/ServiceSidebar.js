import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';
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
          alert(
            "Zprávu se bohužel nepodařilo odeslat. Zkuste to prosím znovu, nebo nás kontaktujte přímo na stadnikovalenka@gmail.com či +420 723 838 086."
          );
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
          <h4 className="title">Kontaktujte mě v případě dotazů nebo zájmu o spolupráci</h4>
        </div>
        <div className="body">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="ss-jmeno" className="sr-only">Vaše jméno</label>
            <input id="ss-jmeno" type="text" name="user_name" placeholder="Vaše jméno" required />
            <label htmlFor="ss-telefon" className="sr-only">Vaše telefonní číslo</label>
            <input id="ss-telefon" type="tel" name="user_phone" placeholder="Vaše telefonní číslo" />
            <label htmlFor="ss-email" className="sr-only">Váš email</label>
            <input id="ss-email" type="email" name="user_email" placeholder="Váš email" />
            <label htmlFor="ss-zprava" className="sr-only">Zpráva</label>
            <textarea id="ss-zprava" placeholder="Zpráva" name="message"></textarea>
            <div className="form-consent">
              <input id="ss-souhlas" type="checkbox" name="consent" required />
              <label htmlFor="ss-souhlas">
                Souhlasím se zpracováním osobních údajů. Více v{" "}
                <a href="/zasady-obchodnich-udaju" target="_blank" rel="noopener">zásadách ochrany osobních údajů</a>.
              </label>
            </div>
            <button className="rts-btn btn-primary" value="send" type="submit">Odeslat</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
