// ServiceDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import servicesData from '../data/services.json';
import ServiceSidebar from '../components/ServiceSidebar';
import SEOHead from "../SEOHead"
import '../style/vendor/bootstrap.min.css';
import '../style/vendor/metismenu.css';
import '../style/style.css';
const ServiceDetail = () => {
  const { nav } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const selectedService = servicesData.find(service => service.nav === nav);
    setService(selectedService);
  }, [nav]);

  if (!service) {
    return <div>Načítání...</div>;
  }

  return (
    <>
    <SEOHead
      title={service.seo.title}
      description={service.seo.description}
      keywords={service.seo.keywords}
    />
 <main>
      <div className="breadcrumb-area-bg bg_image">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-crumb-area-inner">
              <div className="breadcrumb-top">
                <a href="/nase-sluzby">Naše služby</a> /
                <a className="active" href="/services">{service.title}</a>
              </div>
              <div className="bottom-title">
                <h1 className="title"> {service.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="service-details-area-start rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 pr--70 pr_md--10 pr_sm--10">
              <ServiceSidebar />
            </div>
            <div className="col-lg-8 mt_md--50 mt_sm--50">
              <div className="service-details-content-right">
                <div className="large-image">
                <img
      src={service.image}
      alt="service"
      style={{
        height: "400px",
        objectFit: service.style === 'contain' ? 'contain' : 'cover'
      }}
    />                </div>
                <h3 className="title-main-s">
                  {service.title}
                </h3>
                {service.details.map((detail, index) => (
                  <p className="disc" key={index}>{detail}</p>
                ))}
              </div>
              <div className="row mt--40 mb--40">
                {service.additionalImages.map((image, index) => (
                  <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                    <img style={{ width: '100%',  objectFit: service.style === 'contain' ? 'contain' : 'cover', height: "100%" }} src={image} alt="services" />
                  </div>
                ))}
              </div>
              <h3 className="title-main-s">
                {service.title2}
              </h3>
              {service.additionalDetails.map((detail, index) => (
                <p className="disc" key={index}>{detail}</p>
              ))}
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="service-details-list-check-bullet">
                    {service.listItems.map((item, index) => (
                      <div className="single" key={index}>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="slice-iameg-service-detials">
                    <img src={service.finalImage} alt="service" />
                  </div>
                </div>
              </div>
              <div className="row mt--30">
                <div className="col-lg-12">
                  {service.conclusion.map((conclusion, index) => (
                    <p className="disc" key={index}>{conclusion}</p>
                  ))}
                </div>
              </div>
              <div className="row mt--40">
                <div className="col-lg-4">
                  <img src="/assets/images/lenka-portret.jpeg" style={{width: "280px", height: "280px", objectFit: "cover" }} alt="service" />
                </div>
                <div className="col-lg-8">
                  <p className="disc mb--10">
                  Každého z nás ovlivňuje a formuje, jak bydlíme, někdy stačí jen málo a dojde k veliké změně a člověk se doma cítí hned lépe.
                  </p>
                  <p className="disc">
                  Vkusně, prakticky a zodpovědně dojdeme ke správnému cíli.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 </main>
 </>
  );
};

export default ServiceDetail;
