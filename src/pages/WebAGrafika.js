import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import ContactUs from '../components/ContactUs';
import webData from '../data/webData.json'
// Install Swiper modules

const WebAGrafika = () => {
  return (
    <>
      <div className="swiper-banner-seven-main-wrapper" style={{marginTop: "-230px"}}>
        <Swiper
        className='mySwiper-banner-one'
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="banner-area-six rts-section-gap banner_bg-6">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="banner-content-inner-six">
                      <span className="pre-title">Tvorba webu</span>
                      <h1 className="title">Profesionální návrh <br /> a design webových stránek</h1>
                      <p className="disc">
                        Jste začínající firma? A potřebujete web a grafiku co nejdříve, ať můžete začít vydělávat? 
                        O vše se postaráme od designu loga, nafocení produktů, grafiky webu a nakódování celé struktury webu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-area-six rts-section-gap banner_bg-7">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="banner-content-inner-six">
                      <span className="pre-title">Tvorba grafiky</span>
                      <h1 className="title">Profesionální tvorba <br /> reklamní grafiky <br /> vizitky, loga, plakáty...</h1>
                      <p className="disc">
                        Pomůžeme Vám vytvořit poutavé plakáty, vizitky, loga a reklamy, které budou oslovovat Vaše zákazníky. 
                        Díky našemu talentovanému týmu grafiků, se postaráme o to, aby Vaše značka byla nejen viditelná, ale i zapamatovatelná.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-area-six rts-section-gap banner_bg-8">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="banner-content-inner-six">
                      <span className="pre-title">Fotografování</span>
                      <h1 className="title">Profesionální fotografování <br /> produktů a interiérů</h1>
                      <p className="disc">
                        Kvalitní fotografie jsou klíčové pro úspěch Vašeho podnikání. Nabízíme profesionální fotografické služby, 
                        které zajistí, že Vaše produkty a prostory budou vypadat co nejlépe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pagination-area-main-home-6">
                <div className="pagination-left-banner-one">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-projects-area rts-section-gap ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-full-top-wrapper">
                <div className="title-area-style-six-left">
                  <span className="pre">Prohlédněte si naše projekty</span>
                  <h2 className="title">Naše Projekty</h2>
                </div>
                <p className="disc">
                  Navrhneme design, díky kterému váš web vynikne. Zapamatovatelné firemní stránky podpoří viditelnost značky a odliší vás od konkurence.
                </p>
               
              </div>
            </div>
          </div>
          <div className="row mt--90">
            <div className="col-lg-12 rts_portfolio_animation-wrapper">
              <div className="portfolio-main-wrapper-h-six">
                <div className="project--style-six rts-portfolio__item mb--70">
                  <a href={`/web-a-grafika/${webData[0].nav}`} className="thumbnail">
                    <img src={webData[0].mainImage} alt="product" />
                  </a>
                  <div className="inner-content">
                    <a href={`/web-a-grafika/${webData[0].nav}`}>
                      <h6 className="title">{webData[0].name}</h6>
                    </a>
                    <p className="disc">{webData[0].overview}</p>
                  </div>
                </div>
                <div className="project--style-six rts-portfolio__item">
                  <a href={`/web-a-grafika/${webData[1].nav}`} className="thumbnail">
                    <img src={webData[1].mainImage} alt="product" />
                  </a>
                  <div className="inner-content">
                    <a href={`/web-a-grafika/${webData[1].nav}`}>
                      <h6 className="title">{webData[1].name}</h6>
                    </a>
                    <p className="disc">{webData[1].overview}</p>
                  </div>
                </div>
                <div className="project--style-six rts-portfolio__item mb--70">
                  <a href={`/web-a-grafika/${webData[2].nav}`} className="thumbnail">
                    <img src={webData[2].mainImage} alt="product" />
                  </a>
                  <div className="inner-content">
                    <a href={`/web-a-grafika/${webData[2].nav}`}>
                      <h6 className="title">{webData[2].name}</h6>
                    </a>
                    <p className="disc">{webData[2].overview}</p>
                  </div>
                </div>
                <div className="project--style-six rts-portfolio__item">
                  <a href={`/web-a-grafika/${webData[3].nav}`} className="thumbnail">
                    <img src={webData[3].mainImage} alt="product" />
                  </a>
                  <div className="inner-content">
                    <a href={`/web-a-grafika/${webData[3].nav}`}>
                      <h6 className="title">{webData[3].name}</h6>
                    </a>
                    <p className="disc">{webData[3].overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <div className="rts-about-area-six  rts-section-gap border-top-in-container">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 rts-slide-up">
              <div className="about-right-inner-five">
                <div className="bg-image">
                  <img src="assets/images/about/09.png" alt="about" />
                </div>
                <div className="title-area-style-six-left">
                  <span className="pre">Co vytváříme?</span>
                  <h2 className="title">Naše firma</h2>
                </div>
                <p className="disc-1">
                Hledáte webovou stránku, která nejen dobře vypadá, ale také skvěle funguje? U nás jste na správném místě. V Lenka Design vytváříme moderní a uživatelsky přívětivé weby, které jsou snadno vyhledatelné na internetu. 
                </p>
                <p className="disc">
                Naše stránky jsou rychlé, bezpečné a optimalizované pro vyhledávače, takže vás zákazníci vždy snadno najdou.
                </p>
                <div className="short-service-small">
                  <div className="single-service-small-check">
                    <FontAwesomeIcon icon={faPlus} />
                    Design webových stránek
                  </div>
                  <div className="single-service-small-check">
                    <FontAwesomeIcon icon={faPlus} />
                    Grafický design
                  </div>
                  <div className="single-service-small-check">
                    <FontAwesomeIcon icon={faPlus} />
                    Fotografování
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="thumbnail-about-six rts-reveal-one">
                <img className="rts-reveal-image-one" src="assets/images/about/08.jpg" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-service-area rts-section-gapBottom">
        <div className="container rts-slide-up">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-full-top-wrapper">
                <div className="title-area-style-six-left">
                  <span className="pre">Naše služby</span>
                  <h2 className="title">Tvorba grafiky</h2>
                </div>
                <p className="disc">
                  Nabízíme profesionální tvorbu reklamní grafiky. Pomůžeme Vám vytvořit poutavé plakáty, vizitky, loga a reklamy, 
                  které budou oslovovat Vaše zákazníky.
                </p>
                {/* <a href="/service-1.html" className="rts-read-more-circle-btn under-line">
<i>
                    <FontAwesomeIcon icon={faArrowRight} />
  
</i>                  <p>Zobrazit více o službách</p>
                </a> */}
              </div>
            </div>
          </div>
          <div className="row mt--90 align-items-center">
            <div className="col-xl-5 col-lg-12 col-md-12">
              <div className="thumbnail-serice-6-left">
                <div className="image-hover-bg">
                  <div className="rts-img-hover one active">
                    <img src="/assets/images/about/10.jpg" alt="about" />
                  </div>
                  <div className="rts-img-hover two">
                    <img src="/assets/images/about/15.jpg" alt="about" />
                  </div>
                  <div className="rts-img-hover three">
                    <img src="/assets/images/about/16.jpg" alt="about" />
                  </div>
                  <div className="rts-img-hover four">
                    <img src="/assets/images/about/17.jpg" alt="about" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12 mt_md--50 mt_sm--50">
              <div className="service-list-one-wrapper">
                <div className="signle-service-list one">
                  <div className="left-one">
                    <span>01</span>
                    <a href="/nase-sluzby/design-vizitek">
                      <h3 className="title">Design vizitek</h3>
                    </a>
                  </div>
                  <div className="center-area">
                    <p className="disc">
                      Poutavé vizitky, které budou oslovovat Vaše zákazníky.
                    </p>
                  </div>
                  <a href="/nase-sluzby/design-vizitek" className="rts-read-more-circle-btn">
<i>
                      <FontAwesomeIcon icon={faArrowRight} />
  
</i>                    <p>Číst více</p>
                  </a>
                </div>
                <div className="signle-service-list two">
                  <div className="left-one">
                    <span>02</span>
                    <a href="/nase-sluzby/design-loga">
                      <h3 className="title">Design loga</h3>
                    </a>
                  </div>
                  <div className="center-area">
                    <p className="disc">
                      Logo, které zůstane v paměti a bude reprezentovat Vaši značku.
                    </p>
                  </div>
                  <a href="/nase-sluzby/design-loga" className="rts-read-more-circle-btn">
<i>
                      <FontAwesomeIcon icon={faArrowRight} />
  
</i>                    <p>Číst více</p>
                  </a>
                </div>
                <div className="signle-service-list three">
                  <div className="left-one">
                    <span>03</span>
                    <a href="/nase-sluzby/design-plakatu">
                      <h3 className="title">Design plakátů</h3>
                    </a>
                  </div>
                  <div className="center-area">
                    <p className="disc">
                      Profesionální plakáty, které osloví Vaše zákazníky.
                    </p>
                  </div>
                  <a href="/nase-sluzby/design-plakatu" className="rts-read-more-circle-btn">
<i>
                      <FontAwesomeIcon icon={faArrowRight} />
  
</i>                    <p>Číst více</p>
                  </a>
                </div>
                <div className="signle-service-list four">
                  <div className="left-one">
                    <span>04</span>
                    <a href="/nase-sluzby/fotografovani">
                      <h3 className="title">Fotografování</h3>
                    </a>
                  </div>
                  <div className="center-area">
                    <p className="disc">
                      Kvalitní fotografie produktů a interiérů.
                    </p>
                  </div>
                  <a href="/nase-sluzby/fotografovani" className="rts-read-more-circle-btn">
<i>
                      <FontAwesomeIcon icon={faArrowRight} />
  
</i>                    <p>Číst více</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebAGrafika;
