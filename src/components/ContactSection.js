import React, {useRef} from 'react';
import emailjs from "@emailjs/browser";

const ContactSection = () => {
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
          document.location.href = "/";
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
                <span className="pre">Neváhejte mě kontaktovat</span>
                <h2 className="title">Máte nějaké dotazy?</h2>
              </div>
              <form action="#">
                <input type="text" name="user_name" placeholder="Vaše jméno" required />
                <input type="tel" name="user_phone"  placeholder="Vaše číslo" required />
                <input type="email"  name="user_email"  placeholder="Váš email" required />
                <textarea name="message" placeholder="Napište zprávu"></textarea>
                <button className="rts-btn btn-primary" value="send" type="submit">Odeslat</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
