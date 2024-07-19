import React from 'react';
import OurWorkProcess from '../components/OurWorkProcess';
import ServiceList from '../components/ServiceList';
import ContactUs from '../components/ContactUs';


const Services = () => {
  return (
    <main>
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-area-inner">
                <div className="breadcrumb-top">
                  <a href="/">Domů</a> /
                  <a className="active" href="/services">Naše služby</a>
                </div>
                <div className="bottom-title">
                  <h1 className="title">Naše služby</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rts-service-inner-area rts-section-gap service-v-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-center">
                <div className="pre-title-area">
                  <img src="/assets/images/about/02.png" alt="about" />
                  <span className="pre-title">Naše služby</span>
                </div>
                <h2 className="title">Naše služby</h2>
                <p className="disc" style={{maxWidth: "800px",
    margin: "auto"}}>
                Jsem návrhářka s mnohaletými zkušenostmi, která se specializuje na renovace a design interiérů. <br /> Snažím se přinést každému projektu osobní přístup a pečlivost, abych vytvořila prostory, které jsou nejen krásné, ale také plně funkční a odpovídající potřebám a představám mých klientů.
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <ServiceList />
   <OurWorkProcess />
   <ContactUs />
    </main>
  );
};

export default Services;
