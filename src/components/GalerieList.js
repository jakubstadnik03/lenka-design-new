import React from 'react';
import data from "../data/GalerieData.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const GalerieList = () => {

    

  if (!data) {
    return <div>Načítání...</div>;
  }

  return (
    <div className="rts-service-area rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-full-top-wrapper">
  
              <div className="title-style-left">
                <div className="pre-title-area">
                  <img src="assets/images/about/02.png" alt="about" />
                  <span className="pre-title">Fotogalerie</span>
                </div>
                <h2 className="title">Fotogalerie realizací</h2>
              </div>
              <p className="disc gallery-description">Prohlédněte si naši fotogalerii, kde naleznete ukázky našich realizací. Od komerčních projektů až po útulné domácí interiéry, naše portfolio zahrnuje širokou škálu stylů a řešení. Inspirujte se našimi projekty a zjistěte, jak můžeme i váš prostor proměnit v krásné a funkční prostředí.</p>

              
            </div>
          </div>
        </div>
        <div className="row mt--60">
          <div className="col-lg-12">
            <div className="service-wrapper-list-two">
              {data.map((service) => (
                <div className="signgle-service-list-two bg_image" key={service.id}>
                  <div className="left">
                    <span className="number">{service.id.toString().padStart(2, '0')}/</span>
                    <a href={service.link}>
                      <h2 className="title">{service.title}</h2>
                    </a>
                  </div>
                  <div className="mid-center">
                    <p className="disc">{service.description}</p>
                  </div>
                  <div className="end-button">
                    <a href={`fotogalerie/${service.link}`}>
                      <div className="icon">
<i>
                          <FontAwesomeIcon icon={faArrowRight} />
    
</i>                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalerieList;
