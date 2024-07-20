import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    text: "Děkujeme za veškerý čas a práci s návrhy pro nás. Jsme rádi, že jsme nezůstali jen u dispozic, ale viděli jsme i 3D návrhy, které nám více pomohly k rozhodnutí…. ",
    authorImage: "assets/images/testimonials/reference11.jpg",
    authorName: "manželé z Liberce",
    authorTitle: "Nový klient",
  },
  {
    text: "Rychlé a vstřícné jednání, skvělý přístup. Flexibilní řešení, pomoc s dodavateli, zájem a vyřešení problémů k dosažení nejlepšího výsledku, ochota kdykoliv poradit.  ",
    authorImage: "assets/images/testimonials/reference12.jpg",
    authorName: "Paní Petra z Hrádku nad Nisou",
    authorTitle: "Nový klient",
  },
  {
    text: "Díky návrhům a doporučení paní Lenky se nám svépomocí podařila rekonstrukce kadeřnictví. My i klienti jsme spokojeni…",
    authorImage: "assets/images/testimonials/reference14.jpg",
    authorName: "pan z Liberce",
    authorTitle: "Nový klient",
  },
];

const Testimonials = () => {
  return (
    <div className="rts-testimonials-area-start rts-section-gap bg-testimonials-1 bg_image">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-center">
              <div className="pre-title-area">
                <img src="assets/images/about/02.png" alt="about" />
                <span className="pre-title">Reference</span>
              </div>
              <h2 className="title quote" style={{marginBottom: "0"}}>Úžasná zpětná vazba od <br /> Našich cenných klientů</h2>
            </div>
          </div>
        </div>
        <div className="row mt--50">
          <div className="col-lg-12">
            <div className="testimonials-one-wrapper">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                className="swiper-testimonails-one"
              >
                {testimonialsData.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="sigle-testimonials-one">
                      <div className="top-quote">
                        <img src="assets/images/testimonials/03.png" alt="tstimonials" />
                      </div>
                      <p>{testimonial.text}</p>
                      <div className="author-area">
                        <div className="thumbnail">
                          <img src={testimonial.authorImage} alt="tstimonials" />
                        </div>
                        <div className="info">
                          <h6 className="title">{testimonial.authorName}</h6>
                          <span>{testimonial.authorTitle}</span>
                        </div>
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

export default Testimonials;
