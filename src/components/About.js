import React, { useEffect, useRef } from 'react';

const About = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.8, // Trigger when 80% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const observerImage = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInLeft');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (imageRef.current) {
      observerImage.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
      observerImage.disconnect();
    };
  }, []);

  return (
    <div className="rts-about-area-one rts-section-gap" id="about">
      <div className="container pb--50 pb_sm--0">
        <div className="row">
          <div className="col-lg-5">
            <div className="thumbnail-about-one rts-reveal-one">
              <img ref={imageRef} className="rts-reveal-image-one reveal about-image" src="assets/images/durychova-pronajem9.jpeg" alt="about"  style={{    height: "500px",
    objectPosition: "center",
    objectFit: "cover", width: "430px"}} />
            </div>
          </div>
          <div className="col-lg-6 mt_md--50 mt_sm--50">
            <div className="about-style-one-right">
              <div className="title-style-left">
                <div className="pre-title-area">
                  <img src="/assets/images/about/02.png" alt="about"/>
                  <span className="pre-title">O naší firmě</span>
                </div>
                <h2 ref={titleRef} className="title mt--0 mb--25 quote reveal">Lenka Stádníková – interiérová návrhářka v Liberci</h2>
              </div>
              <p className="disc mb--15">
                Věnuji se návrhům interiérů, bytovému designu a Home stagingu již přes 10let, mým cílem je, aby každý klient byl spokojen. Mohu Vám nabídnout 3D vizualizaci, návrhy dispozic nebo jen osobní konzultaci v interiérovém designu. Pracuji i online a přes videokonference. Soustředím se na projekty a návrhy interiérů v Liberci a okolí.
              </p>
              <p className="disc">
                Upřednostňuji přírodní materiály či jejich imitace. Mojí největší inspirací je příroda. Příroda nás vytvořila, ovlivňuje nás, a proto se v její blízkosti cítíme nejlépe. Nechci Vás ale ovlivňovat mým stylem, mým cílem je pochopit ten Váš a pomoci Vám zrealizovat Váš sen, který máte…
              </p>
              <a href="/o-nas" className="rts-btn btn-border">Číst více</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
