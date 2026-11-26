import React, { useState } from 'react';
import { submitWeb3Form } from "../utils/web3forms";
import { useNavigate } from 'react-router-dom';
import servicesData from '../data/services.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServiceSidebar = () => {
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formEl = e.target;
    setSending(true);
    try {
      const data = await submitWeb3Form(formEl);
      if (data.success) {
        alert("Děkujeme! Vaše zpráva byla odeslána. Brzy se vám ozveme.");
        formEl.reset();
      } else {
        alert(
          "Zprávu se bohužel nepodařilo odeslat. Zkuste to prosím znovu, nebo nás kontaktujte přímo na stadnikovalenka@gmail.com či +420 723 838 086."
        );
      }
    } catch (error) {
      alert(
        "Zprávu se bohužel nepodařilo odeslat. Zkuste to prosím znovu, nebo nás kontaktujte přímo na stadnikovalenka@gmail.com či +420 723 838 086."
      );
    } finally {
      setSending(false);
    }
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
          <form onSubmit={sendEmail}>
            <input type="hidden" name="subject" value="Nová poptávka z webu – Lenka Design" />
            <input type="hidden" name="from_name" value="Web Lenka Design" />
            <input type="checkbox" name="botcheck" className="sr-only" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
            <label htmlFor="ss-jmeno" className="sr-only">Vaše jméno</label>
            <input id="ss-jmeno" type="text" name="Jméno" placeholder="Vaše jméno" required />
            <label htmlFor="ss-telefon" className="sr-only">Vaše telefonní číslo</label>
            <input id="ss-telefon" type="tel" name="Telefon" placeholder="Vaše telefonní číslo" />
            <label htmlFor="ss-email" className="sr-only">Váš email</label>
            <input id="ss-email" type="email" name="E-mail" placeholder="Váš email" />
            <label htmlFor="ss-zprava" className="sr-only">Zpráva</label>
            <textarea id="ss-zprava" placeholder="Zpráva" name="Zpráva"></textarea>
            <div className="form-consent">
              <input id="ss-souhlas" type="checkbox" name="Souhlas" value="Ano, souhlasím se zpracováním osobních údajů" required />
              <label htmlFor="ss-souhlas">
                Souhlasím se zpracováním osobních údajů. Více v{" "}
                <a href="/zasady-obchodnich-udaju" target="_blank" rel="noopener">zásadách ochrany osobních údajů</a>.
              </label>
            </div>
            <button className="rts-btn btn-primary" value="send" type="submit" disabled={sending}>{sending ? "Odesílám…" : "Odeslat"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
