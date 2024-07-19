import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import portfolioData from '../data/portfolioData.json';
import BeforeAfter from '../components/BeforeAfter';
import GalerieList from '../components/GalerieList';

const Portfolio = () => {
  return (
    <>

      <div className="breadcrumb-area-bg bg_image">
        <div className="container" >
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
        <div className="container-30" style={{paddingLeft: "30px", paddingRight: "30px"}}>
          <div className="row g-5">
            {portfolioData.map(item => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="portfolio-style-custom-4 rts-portfolio__item">
                  <Link to={`/portfolio/${item.id}`} className="thumbnail">
                    <img src={item.images[0]} alt="product" />
                  </Link>
                  <div className="inner-content">
                    <Link to={`/portfolio/${item.id}`}>
                      <h4 className="title">{item.name}</h4>
                    </Link>
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

<GalerieList />
    </>
  );
};

export default Portfolio;
