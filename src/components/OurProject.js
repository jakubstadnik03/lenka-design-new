import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import portfolioData from "../data/portfolioData.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurProject = () => {
  const firstSixProjects = portfolioData.slice(0, 6);

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: sliderRef, inView: sliderInView } = useInView({
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
    <div className="rts-project-area rts-section-gap bg-light" id="portfolio">
      <div className="container">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-product-one">
                <div className="title-style-left">
                  <div className="pre-title-area">
                    <img src="assets/images/about/02.png" alt="about" />
                    <span className="pre-title">Naše projekty</span>
                  </div>
                  <h2
                    className="title quote"
                    style={{ opacity: "1 !important" }}
                  >
                    Prozkoumejte naše <br />
                    návrhy interiérů
                  </h2>
                </div>
                <p className="disc">
                  Naše projekty interiérového designu se zaměřují na přeměnu
                  obytných prostor na moderní a příjemné interiéry. Celý můj tým
                  klade důraz nejen na estetiku, ale i na funkčnost a
                  praktičnost.
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
        </motion.div>
      </div>
      <div className="container-full mt--50">
        <motion.div
          ref={sliderRef}
          initial="hidden"
          animate={sliderInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper-product-one-wrapper">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  spaceBetween={0}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                  className="swiper-product-one"
                >
                  {firstSixProjects.map((project, index) => (
                    <SwiperSlide key={project.id}>
                      <motion.div
                        className="single-product-one"
                        variants={itemVariants}
                      >
                        <span className="number">{index + 1}</span>
                        <a
                          href={`/portfolio/${project.nav}`}
                          className="thumbnail"
                        >
                          <img
                            srcSet={`${project.imgSmall} 600w, ${project.images[0]} 1200w`}
                            sizes="(max-width: 600px) 100vw, 50vw"
                            src={project.images[0]}
                            alt="product"
                            style={{ height: "700px", objectFit: "cover" }}
                            loading="lazy"
                          />
                        </a>
                        <div className="inenr-content-absolute">
                          <a href={`/portfolio/${project.id}`}>
                            <h3 className="title">{project.name}</h3>
                          </a>
                          <span className="category">Interiérový Design</span>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurProject;
