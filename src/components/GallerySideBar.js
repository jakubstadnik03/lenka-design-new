import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/GalerieData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { submitWeb3Form } from '../utils/web3forms';
const GallereySideBar = () => {
  const [sending, setSending] = useState(false);

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

  return (
    <div className="service-left-sidebar-wrapper">
      <div className="service-left-sidebar-wized mb--50">
        <div className="topa-rea">
          <h4 className="title">Seznam realizací</h4>
        </div>
        <div className="body">
          {servicesData.map((service, index) => (
            <Link to={`/fotogalerie/${service.link}`} key={service.id} className="single-short-service">
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
          <form onSubmit={sendEmail}>
            <input type="hidden" name="subject" value="Nová poptávka z webu – Lenka Design" />
            <input type="hidden" name="from_name" value="Web Lenka Design" />
            <input type="checkbox" name="botcheck" className="sr-only" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
            <label htmlFor="gs-jmeno" className="sr-only">Vaše jméno</label>
            <input id="gs-jmeno" type="text" name="Jmeno" placeholder="Vaše jméno" required />
            <label htmlFor="gs-telefon" className="sr-only">Vaše číslo</label>
            <input id="gs-telefon" type="tel" name="Telefon" placeholder="Vaše číslo" />
            <label htmlFor="gs-email" className="sr-only">Váš email</label>
            <input id="gs-email" type="email" name="E-mail" placeholder="Váš email" />
            <label htmlFor="gs-zprava" className="sr-only">Zpráva pro mě</label>
            <textarea id="gs-zprava" name="Zprava" placeholder="Zpráva pro mě"></textarea>
            <div className="form-consent">
              <input id="gs-souhlas" type="checkbox" name="Souhlas" value="Ano, souhlasím se zpracováním osobních údajů" required />
              <label htmlFor="gs-souhlas">
                Souhlasím se zpracováním osobních údajů. Více v{" "}
                <a href="/zasady-obchodnich-udaju" target="_blank" rel="noopener">zásadách ochrany osobních údajů</a>.
              </label>
            </div>
            <button className="rts-btn btn-primary" type="submit" disabled={sending}>{sending ? "Odesílám…" : "Odeslat"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GallereySideBar;
