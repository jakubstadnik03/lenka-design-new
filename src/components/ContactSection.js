import React, { useState } from "react";
import { submitWeb3Form } from "../utils/web3forms";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="rts-contact-area rts-section-gap">
      <div className="container">
        <div className="row">
          <motion.div
            className="col-lg-6"
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="contct-thumbnail-left rts-reveal-one"
              variants={itemVariants}
            >
              <img
                className="rts-reveal-image-one"
                srcSet="/assets/images/service/konzultace1-small.jpeg 600w, /assets/images/service/konzultace1.webp 1200w"
                sizes="(max-width: 600px) 100vw, (min-width: 601px) 50vw"
                src="/assets/images/service/konzultace1.webp" // fallback for older browsers
                alt="Kontakt"
                loading="lazy" // Enables lazy loading
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="col-lg-6 pl--60 pr--100 pl_md--15 pl_sm--15 mt_md--50 mt_sm--50"
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="easy-appoinment-area"
              variants={itemVariants}
            >
              <div className="title-left-style-seven-wrapper">
                <span className="pre">Neváhejte mě kontaktovat</span>
                <h2 className="title">Máte nějaké dotazy?</h2>
              </div>
              <form onSubmit={sendEmail}>
                <input type="hidden" name="subject" value="Nová poptávka z webu – Lenka Design" />
                <input type="hidden" name="from_name" value="Web Lenka Design" />
                <input type="checkbox" name="botcheck" className="sr-only" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
                <label htmlFor="cs-jmeno" className="sr-only">Vaše jméno</label>
                <input
                  id="cs-jmeno"
                  type="text"
                  name="name"
                  placeholder="Vaše jméno"
                  required
                />
                <label htmlFor="cs-telefon" className="sr-only">Vaše telefonní číslo</label>
                <input
                  id="cs-telefon"
                  type="tel"
                  name="phone"
                  placeholder="Vaše telefonní číslo"
                  required
                />
                <label htmlFor="cs-email" className="sr-only">Váš email</label>
                <input
                  id="cs-email"
                  type="email"
                  name="email"
                  placeholder="Váš email"
                  required
                />
                <label htmlFor="cs-zprava" className="sr-only">Napište zprávu</label>
                <textarea
                  id="cs-zprava"
                  name="message"
                  placeholder="Napište zprávu"
                ></textarea>
                <div className="form-consent">
                  <input id="cs-souhlas" type="checkbox" name="consent" required />
                  <label htmlFor="cs-souhlas">
                    Souhlasím se zpracováním osobních údajů za účelem vyřízení mého dotazu. Více v{" "}
                    <a href="/zasady-obchodnich-udaju" target="_blank" rel="noopener">zásadách ochrany osobních údajů</a>.
                  </label>
                </div>
                <button
                  className="rts-btn btn-primary"
                  value="send"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? "Odesílám…" : "Odeslat"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
