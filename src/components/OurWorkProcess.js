import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurWorkProcess = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: stepsRef, inView: stepsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <div className="our-working-process rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <motion.div
              ref={titleRef}
              initial="hidden"
              animate={titleInView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="title-process-stock-text"
            >
              <h2 className="stock-text-1 title-large-3 end">
                JAK PROBÍHÁ SPOLUPRÁCE?
              </h2>
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={stepsRef}
          initial="hidden"
          animate={stepsInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="row g-5 mt--30 mt_sm--0 separetor-process-top rts-slide-up"
        >
          {[
            {
              number: "01",
              title: "Konzultace a domluva",
              description: "Náš první krok, kde se setkáme s klientem, abychom pochopili jeho potřeby a vize pro designový projekt."
            },
            {
              number: "02",
              title: "Plánování a vývoj konceptu",
              description: "Zaměření interiéru a rozplánování prací v projektu."
            },
            {
              number: "03",
              title: "Dokumentace, návrhy a Moodboard",
              description: "Zpracování podrobných stav. výkresů a návrhů obsahující: Moodboard, 3D návrhy a vybavení interiéru."
            },
            {
              number: "04",
              title: "Konzultace projektu a změny",
              description: "Konzultace návrhů a změn s klientem a zpracování finálních výkresů pro realizační firmy."
            },
            {
              number: "05",
              title: "Projektové řízení a realizace",
              description: "Řízení celého projektu a jeho postupná realizace. Dokončení a stylizace projektu."
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 col-sm-6 col-12 pt--50 pt_md--15 pt_sm--10"
              variants={itemVariants}
            >
              <div className={`single-working-process-one ${index + 1}`}>
                <div className="inner">
                  <span>{step.number}</span>
                  <h4 className="title">{step.title}</h4>
                  <p className="disc">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurWorkProcess;
