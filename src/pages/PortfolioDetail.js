import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import fjGallery from "flickr-justified-gallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "flickr-justified-gallery/src/fjGallery.css";
import portfolioData from "../data/portfolioData.json";
import SEOHead from "../SEOHead";
import BeforeAfter from "../components/BeforeAfter";

const PortfolioDetail = () => {
  const { nav } = useParams();
  const [portfolioItem, setPortfolioItem] = useState(null);

  useEffect(() => {
    const item = portfolioData.find((item) => item.nav === nav);
    setPortfolioItem(item);
  }, [nav]);

  useEffect(() => {
    if (portfolioItem) {
      fjGallery(document.querySelectorAll(".gallery"), {
        itemSelector: ".gallery__item",
        rowHeight: 320,
        lastRow: "start",
        gutter: 2,
        rowHeightTolerance: 0.1,
        calculateItemsHeight: false,
      });
    }
  }, [portfolioItem]);

  if (!portfolioItem) return <div>Načítání...</div>;

  return (
    <>
      <SEOHead
        title={`${portfolioItem.name} - Lenka Design`}
        description={portfolioItem.scope}
        keywords="interiérový design, architektura, Lenka Design, Lenka Stádníková, design interiéru, design interiéru v liberci, design v liberci, ceník poskytovaných služeb Lenka Design"
      />
      <main>
        <div className="breadcrumb-area-bg bg_image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bread-crumb-area-inner">
                  <div className="breadcrumb-top">
                    <a href="/portfolio">Projekty</a> /
                    <a
                      className="active"
                      href={`/portfolio/${portfolioItem.id}`}
                    >
                      {portfolioItem.name}
                    </a>
                  </div>
                  <div className="bottom-title">
                    <h1 className="title">{portfolioItem.name}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-details-style-one-main rts-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="product-details-left-one">
                  <h3 className="title mt--0">Stručný popis projektu</h3>
                  <p className="disc">{portfolioItem.description}</p>
                  <p
                    className="disc"
                    dangerouslySetInnerHTML={{ __html: portfolioItem.scope }}
                  ></p>
                </div>
              </div>
              <div className="col-lg-4 pl--60 pl_md--15 pl_sm--15 mt_md--50 mt_sm--50">
                <div className="product-details-right-one">
                  <div className="details-infor-1">
                    <div className="single-details-short">
                      <div className="left">
                        <span>Název projektu:</span>
                        <p className="name">{portfolioItem.name}</p>
                      </div>
                      <div className="right">
                        <span>Místo:</span>
                        <p className="name">{portfolioItem.location}</p>
                      </div>
                    </div>
                    <div className="single-details-short">
                      <div className="left">
                        <span>Datum zahájení:</span>
                        <p className="name">{portfolioItem.startDate}</p>
                      </div>
                      <div className="right">
                        <span>Doba trvání projektu:</span>
                        <p className="name">{portfolioItem.duration}</p>
                      </div>
                    </div>
                    <div className="single-details-short">
                      <div>
                        <span>Odkaz: </span>
                        <br />
                        <a
                          href={portfolioItem.link}
                          target={"_blank"}
                          rel="noreferrer"
                          className="name"
                        >
                          {portfolioItem.link}
                        </a>
                        {portfolioItem.link2 && (
                          <>
                            <br />
                            <a
                              href={portfolioItem.link2}
                              target={"_blank"}
                              rel="noreferrer"
                              className="name"
                            >
                              {portfolioItem.link2}
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt--40">
              <div className="col-lg-12">
                <div className="thumbnail-project-details-top">
                  <img
                    src={portfolioItem.images[0]}
                    alt={`Lenka Design – ${portfolioItem.name}`}

                    style={{
                      width: "100%",
                      objectFit: "cover",
                      maxHeight: "700px",
                    }}
                  />
                  <span>
                    {portfolioItem.name} realizováno firmou Lenka Design
                  </span>
                </div>
              </div>
            </div>
            {portfolioItem.beforeImages && portfolioItem.beforeImages.length > 0 && (
              <div className="row mt--40">
                <div className="col-lg-12">
                  <h3 className="title">Fotky před rekonstrukcí</h3>
                  <LightGallery
                    plugins={[lgZoom]}
                    mode="lg-fade"
                    pager={false}
                    thumbnail={true}
                    galleryId="before-images"
                    elementClassNames="gallery gallery-grid"
                    showCloseIcon={false}
                    download={false}
                    getCaptionFromTitleOrAlt={false}
                  >
                    {portfolioItem.beforeImages.map((img, idx) => (
                      <a
                        key={idx}
                        className="gallery__item"
                        href={img}
                        data-lg-size="1600-2400"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '430px', background: '#fff' }}
                      >
                        <img
                          className="img-responsive"
                          src={img}
                          alt={"Fotka před rekonstrukcí"}
                          style={{ maxWidth: '100%', maxHeight: '430px', objectFit: 'contain', borderRadius: 0, margin: 'auto', display: 'block' }}
                        />
                      </a>
                    ))}
                  </LightGallery>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-lg-12">
                <div className="product-details-padding-lr">
                  <h4 className="title">Řešení projektu:</h4>
                  <p
                    className="disc"
                    dangerouslySetInnerHTML={{ __html: portfolioItem.solution }}
                  ></p>
                </div>
              </div>
              <div className="befores-after-small rts-section-gapBottom">
                <div className="container">
                  <div className="row g-5">
                    {portfolioItem.beforeImg && (
                      <BeforeAfter
                        beforeImage={portfolioItem.beforeImg}
                        afterImage={portfolioItem.afterImg}
                      />
                    )}
                    {portfolioItem.beforeImg2 && (
                      <BeforeAfter
                        beforeImage={portfolioItem.beforeImg2}
                        afterImage={portfolioItem.afterImg2}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt--60 g-5">
              <div className="col-lg-12">
                <LightGallery
                  plugins={[lgZoom]}
                  mode="lg-fade"
                  pager={false}
                  thumbnail={true}
                  galleryId="nature"
                  elementClassNames="gallery gallery-grid"
                  showCloseIcon={false}
                  download={false}
                  getCaptionFromTitleOrAlt={false}
                >
                  {portfolioItem.images.map((image, index) => (
                    <a
                      key={index}
                      className="gallery__item"
                      href={image}
                      data-lg-size="1600-2400"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '430px', background: '#fff' }}
                    >
                      <img
                        className="img-responsive"
                        src={image}
                        alt={`Lenka Design – ${portfolioItem.name}`}
                        style={{ maxWidth: '100%', maxHeight: '430px', objectFit: 'contain', borderRadius: 0, margin: 'auto', display: 'block' }}
                      />
                    </a>
                  ))}
                </LightGallery>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioDetail;
