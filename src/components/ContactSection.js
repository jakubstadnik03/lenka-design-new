import React from 'react';

const ContactSection = () => {
  return (
    <div className="rts-contact-area rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contct-thumbnail-left rts-reveal-one">
              <img className="rts-reveal-image-one" src="/assets/images/service/konzultace1.jpeg" alt="Kontakt" />
            </div>
          </div>
          <div className="col-lg-6 pl--60 pr--100 pl_md--15 pl_sm--15 mt_md--50 mt_sm--50">
            <div className="easy-appoinment-area">
              <div className="title-left-style-seven-wrapper">
                <span className="pre">Naše služby</span>
                <h2 className="title">Máte nějaké dotazy?</h2>
              </div>
              <form action="#">
                <input type="text" placeholder="Vaše jméno" required />
                <input type="phone" placeholder="Vaše číslo" required />
                <input type="email" placeholder="Váš email" required />
                <textarea placeholder="Napište zprávu"></textarea>
                <button className="rts-btn btn-primary">Odeslat</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
