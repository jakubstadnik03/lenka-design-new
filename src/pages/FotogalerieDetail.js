import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import galleryData from '../data/GalerieData.json';
import GallerySideBar from '../components/GallerySideBar';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import fjGallery from 'flickr-justified-gallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'flickr-justified-gallery/src/fjGallery.css';

const FotogalerieDetail = () => {
  const { nav } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const selectedService = galleryData.find(service => service.link === nav);
    setService(selectedService);
  }, [nav]);

  useEffect(() => {
    if (service) {
      const galleryElement = document.querySelector('.gallery');
      if (galleryElement) {
        // Clear existing gallery content
        galleryElement.innerHTML = '';

        // Initialize LightGallery
        galleryElement.innerHTML = service.gallery.map(
          (image, index) => `
            <a class="gallery__item" href="${image}" data-lg-size="1600-2400">
              <img class="img-responsive" src="${image}" alt="portfolio ${index}" />
            </a>`
        ).join('');

        // Reinitialize fjGallery
        fjGallery(galleryElement, {
          itemSelector: '.gallery__item',
          rowHeight: 320,
          lastRow: 'start',
          gutter: 2,
          rowHeightTolerance: 0.1,
          calculateItemsHeight: false,
        });
      }
    }
  }, [service]);

  if (!service) {
    return <div>Načítání...</div>;
  }

  return (
    <main>
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-area-inner">
                <div className="breadcrumb-top">
                  <a href="/nase-sluzby">Naše služby</a> /
                  <a className="active" href={`/fotogalerie/${service.link}`}>{service.title}</a>
                </div>
                <div className="bottom-title">
                  <h1 className="title">{service.title}</h1>
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
              <GallerySideBar />
            </div>
            <div className="col-lg-8">
              <div className="row mt--60 g-5">
                <div className="col-lg-12">
                  <div className="gallery">
                    <LightGallery
                      plugins={[lgZoom]}
                      mode="lg-fade"
                      pager={false}
                      thumbnail={true}
                      galleryId="nature"
                      elementClassNames="gallery"
                      showCloseIcon={false}
                      download={false}
                      getCaptionFromTitleOrAlt={false}
                    >
                      {service.gallery.map((image, index) => (
                        <a
                          key={index}
                          className="gallery__item"
                          href={image}
                          data-lg-size="1600-2400"
                        >
                          <img className="img-responsive" src={image} alt={`portfolio ${index}`} />
                        </a>
                      ))}
                    </LightGallery>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FotogalerieDetail;
