import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="rts-footer-area social-jumpanimation">
      <div className="container ptb--30 pt_md--10 pb_md--10 pt_sm--10 pb_sm--10">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-two-main-wrapper">
              <a href="/" className="logo">
                <img src='/assets/icons/lenka-design-logo.svg' alt="logo" style={{width: "280px"}}/>
              </a>
              <p className="disc-f" style={{marginTop: "25px"}}>
                    Inspirací mi je příroda a snažím se vytvářet unikátní interiéry, které respektují přírodní prostředí a zároveň vyhovují klientovým požadavkům.                    </p>
             
            </div>
          </div>
          <div className="col-lg-8">
            <div className="footer-two-main-wrapper-right">
              <div className="single-footer-wized">
                <div className="location-information">
                  <div className="location">
                    <p>Durychova 950/6,<br /> Liberec, Česká republika</p>
                  </div>
                  <div className="contact-call">
                  <a href="tel:+420723838086">+420 723 838 086</a>
                    <span>Neváhejte mě kontaktovat</span>
                  </div>
                  <div className="contact-call">
                  <a href="mailto:tadnikovalenka@gmail.com">stadnikovalenka@gmail.com</a>                    
                  <span>Zodpovím Vám jakékoliv dotazy</span>
                  </div>
                </div>
              </div>
              <div className="single-footer-wized">
                <div className="location-information">
                  <div className="location">
                    <h6 className="title">Užitečné odkazy</h6>
                  </div>
                  <ul>
                    <li><a href="/o-nas">O nás</a></li>
                    <li><a href="/cenik">Ceník</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/fotogalerie">Fotogalerie</a></li>
                  </ul>
                </div>
              </div>
              <div className="single-footer-wized">
                <div className="location-information">
                  <div className="location">
                    <h6 className="title">Sociální sítě</h6>
                    <ul className="social-style-two-wrapper social-anim">
                <li style={{padding: "7px"}}><a className="counter__anim" aria-label="facebook link" href="https://www.facebook.com/lenkadesign.cz"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li style={{padding: "7px"}}><a className="counter__anim" aria-label="instagram link"href="https://www.instagram.com/designlenka/?hl=cs"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li style={{padding: "7px"}}><a className="counter__anim" aria-label="linkedin link" href="https://cz.linkedin.com/in/lenka-stádn%C3%ADková"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              </ul>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rts-copyright-area-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copy-right-area-inner-two">
                <p className="disc">Copyright 2024. Všechna práva vyhrazena.</p>
                <div className="right">
                  <ul>
                    <li><a href="/podminky-a-pravidla">Podmínky a pravidla</a></li>
                    <li><a href="/zasady-obchodnich-udaju">Zásady ochrany osobních údajů</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
