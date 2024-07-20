import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import portfolioData from '../data/portfolioData.json';

const OurProject = () => {
  const firstSixProjects = portfolioData.slice(0, 6);

  return (
    <div className="rts-project-area rts-section-gap bg-light" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-product-one">
              <div className="title-style-left">
                <div className="pre-title-area">
                  <img src="assets/images/about/02.png" alt="about" />
                  <span className="pre-title">Naše Projekty</span>
                </div>
                <h2 className="title quote" style={{ opacity: "1 !important" }}>
                  Prozkoumejte naše úžasné <br />
                  návrhy interiérů
                </h2>
              </div>
              <p className="disc">
                Naše projekty interiérového designu se zaměřují na transformaci obytných prostor na moderní a přívětivá místa. S důrazem na funkčnost a estetiku, náš tým talentovaných návrhářů bude úzce spolupracovat.
              </p>
              <div className="swiper-next-prev-wrapper">
                <div className="swiper-button-next next-icons">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div className="swiper-button-prev next-icons">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-full mt--50">
        <div className="row">
          <div className="col-lg-12">
            <div className="swiper-product-one-wrapper">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                spaceBetween={0}
      
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 3,
                  },
                }}
                className="swiper-product-one"
              >
                {firstSixProjects.map((project, index) => (
                  <SwiperSlide key={project.id}>
                    <div className="single-product-one">
                      <span className="number">{index + 1}</span>
                      <a href={`/portfolio/${project.id}`} className="thumbnail">
                        <img src={project.images[0]} alt="product" style={{ height: "700px", objectFit: "cover" }} />
                      </a>
                      <div className="inenr-content-absolute">
                        <a href={`/portfolio/${project.id}`}>
                          <h3 className="title">{project.name}</h3>
                        </a>
                        <span className="category">Interiérový Design</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
