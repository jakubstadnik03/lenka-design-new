import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const banners = [
  {
    img: "/assets/images/bannerImg/1.webp",
    imgSmall: "/assets/images/bannerImg/1-small.webp",
    link: "navrhy-bytovych-interieru",
    title: "Návrh bytových interiérů",
    description:
      "Oživte svůj prostor s našimi návrhy - proměňte ho v dokonalý domov!",
  },
  {
    img: "/assets/images/bannerImg/2.webp",
    imgSmall: "/assets/images/bannerImg/2-small.webp",
    link: "realizace",
    title: "Naše realizace návrhů",
    description:
      "Realizujeme vaše návrhy - proměňte naše návrhy ve vysněný domov!",
  },
  {
    img: "/assets/images/product/advokatni-kancelar6.webp",
    imgSmall: "/assets/images/product/advokatni-kancelar6-small.webp",
    link: "navrhy-komercnich-interieru",
    title: "Návrh komerčních interiérů",
    description:
      "Proměňte svůj komerční prostor s našimi profesionálními návrhy!",
  },
  {
    img: "/assets/images/bannerImg/uvodni_foto_vizualizace.jpeg",
    imgSmall: "/assets/images/bannerImg/uvodni_foto_vizualizac_small.jpeg",
    link: "3d-navrhy-interieru",
    title: "3D návrhy Interiérů",
    description:
      "3D vizualizace Vám ukáže interiér ještě před tím, nežli se pustíte do realizace.",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => {
      setAnimating(false);
    }, 1000); // Match this duration with the animation duration

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="rts-banner-area-start-one pb--60" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="float-right-content">
              <Swiper
                className="mySwiper-banner-one"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                onSlideChange={handleSlideChange}
              >
                {banners.map((banner, index) => (
                  <SwiperSlide key={index}>
                    <div className="signle-swiper-start">
                      <div className="thumbnail-banner-one">
                        <img
                          srcSet={`${banner.imgSmall} 600w, ${banner.img} 1200w`}
                          sizes="(max-width: 600px) 100vw, (min-width: 601px) 50vw"
                          src={banner.img} // fallback for older browsers
                          alt="banner"
                          className="banner-img"
                          loading={index === 0 ? "eager" : "lazy"} // Lazy loading for all except first image
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="left-swiper-area-start">
        <div className="right-shape">
          <img src="/assets/images/bannerImg/03.png" alt="" />
        </div>
        <div className="mySwiper-banner-oneleft">
          <div className="swiper-wrapper">
            {banners.map((banner, index) => (
              <div
                className={`swiper-slide ${
                  index === activeIndex ? "active" : ""
                }`}
                key={index}
              >
                <div className={`single-left-banner-swiper-start `}>
                  <h1 style={{ fontSize: "0.8em", lineHeight: "1em" }}>
                    {" "}
                    <span className="pre">Lenka Design</span>
                  </h1>
                  <h2
                    className={`title ${animating ? "animate-fade-in-up" : ""}`}
                  >
                    {banner.title}
                  </h2>
                  <p
                    className={`disc ${animating ? "animate-fade-in-up" : ""}`}
                  >
                    {banner.description}
                  </p>
                  <a
                    href={`/nase-sluzby/${banner.link}`}
                    className="rts-btn btn-border"
                  >
                    Zjistit více
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
