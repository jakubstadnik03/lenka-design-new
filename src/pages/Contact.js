import React, {useRef} from 'react';
import emailjs from "@emailjs/browser";
import SEOHead from "../SEOHead"

const Contact = () => {
  const form = useRef();
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
        
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <SEOHead
    title={`Kontaktujte mě - Lenka Design`}
    description="Kontaktujte LenkuDesign.cz pro profesionální návrhy interiérů a homestaging v Liberci. Realizujte svůj vysněný domov s expertkou v designu. Zavolejte nám nebo napište e-mail ještě dnes!"
    keywords="interiérový design, architektura, Lenka Design, Lenka Stádníková, design interiéru, design interiéru v liberci, design v liberci, ceník poskytovaných služeb Lenka Design"
  />
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-area-inner">
                <div className="breadcrumb-top">
                  <a href="/">Domů</a> /
                  <a className="active" href="/contact">Kontakt</a>
                </div>
                <div className="bottom-title">
                  <h1 className="title">Kontakt</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info-area-start rts-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top">
                <h2 className="title">Neváhejte nás kontaktovat!</h2>
              </div>
            </div>
          </div>
          <div className="row mt--0 g-5">
            <div className="col-lg-4 col-md-6">
              <div className="left-contact">
                <h4 className="top mb--30">MgA. Lenka Stádníková</h4>
                <p className="disc mb--20">
                  Interiérová designérka s dlouholetými zkušenostmi v oboru. 
                  Nabízím profesionální návrhy interiérů pro rodinné i komerční prostory.
                </p>
                <p style={{marginTop: "10px", marginBottom: "10px"}}>IČO: 03911446 </p>
<p style={{marginTop: "10px", marginBottom: "10px"}}>DIČ: CZ7555242563</p>
<p style={{marginTop: "10px", marginBottom: "10px"}}>Jsem plátcem DPH.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pl--50 pl_md--15 pl_sm--15">
              <div className="contact-info-mid">
                <p className="top-contact mb--20">Kontaktní údaje</p>
                <div className="single-information mt--30">
                  <span>Adresa:</span>
                  <p className="address" style={{ textDecoration: 'underline' }}>
                    Durychova 950/6 <br />
                    Liberec, Česká republika
                  </p>
                </div>
                <div className="single-information">
                  <span>Telefon:</span>
                  <a href="Tel:+420723838086">+420 723 838 086</a>
                </div>
                <div className="single-information">
                  <span>Email:</span>
                  <a href="mailto:stadnikovalenka@gmail.com">stadnikovalenka@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <form ref={form} onSubmit={sendEmail} className="contact-form-conatct-page">
                <p className="top-contact mb--20">Kontaktní formulář</p>
                <input type="text"   name="user_name" placeholder="Vaše jméno" required />
                <input type="tel"  name="user_phone" placeholder="Telefonní číslo" />
                <input type="email"  name="user_email" placeholder="Email" />
                <textarea name="message" placeholder="Vaše zpráva"></textarea>
                <button className="rts-btn btn-primary mt--30" value="send" type="submit">Odeslat</button>
              </form>
            </div>
          </div>
        </div>
        <div className="container mt--120">
          <div className="row">
            <div className="col-lg-12">
              <iframe
              title='map'
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.046698326372!2d15.063394499999998!3d50.774707899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470935f116200101%3A0xefc5d6945328bb4f!2zTEVOS0EgRGVzaWduIC0gTWdBLkxlbmthIFN0w6FkbsOta292w6EsIE7DoXZyaHkgaW50ZXJpw6lyxa8!5e0!3m2!1scs!2scz!4v1721140495858!5m2!1scs!2scz"          width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
