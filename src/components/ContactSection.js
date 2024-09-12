import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const form = useRef();
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Vaše jméno"
                  required
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Vaše telefonní číslo"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Váš email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Napište zprávu"
                ></textarea>
                <button
                  className="rts-btn btn-primary"
                  value="send"
                  type="submit"
                >
                  Odeslat
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
