import React from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData.json';
import GalerieList from '../components/GalerieList';
import SEOHead from "../SEOHead";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BeforeAfter from '../components/BeforeAfter';

const Portfolio = () => {
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <SEOHead
        title="Předchozí projekty | Lenka Design"
        description="Naše projekty interiérového designu se zaměřují na transformaci obytných prostor na moderní a přívětivá místa. S důrazem na funkčnost a estetiku, náš tým talentovaných návrhářů bude úzce spolupracovat."
        keywords="interiérový design, architektura, Lenka Design, Lenka Stádníková, design interiéru, design interiéru v liberci, design v liberci, ceník poskytovaných služeb Lenka Design"
      />
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-area-inner">
                <div className="breadcrumb-top">
                  <a href="/">Domů</a> /
                  <a className="active" href="/portfolio">Mé předchozí projekty</a>
                </div>
                <div className="bottom-title">
                  <h1 className="title">Mé předchozí projekty</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rts-portfolio-area-col-4 rts-section-gap rts_portfolio_animation-wrapper">
        <div className="container-30" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <motion.div
            className="row g-5"
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {portfolioData.map(item => (
              <motion.div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" variants={itemVariants}>
                <div className="portfolio-style-custom-4 rts-portfolio__item">
                  <Link to={`/portfolio/${item.nav}`} className="thumbnail">
                    <img src={item.images[0]} alt="product" />
                  </Link>
                  <div className="inner-content">
                    <Link to={`/portfolio/${item.nav}`}>
                      <h4 className="title">{item.name}</h4>
                    </Link>
                    <span>{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <GalerieList />
      <BeforeAfter />
    </>
  );
};

export default Portfolio;
