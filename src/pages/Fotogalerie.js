import React from 'react'
import GalerieList from '../components/GalerieList'
import SEOHead from "../SEOHead"

const Fotogalerie = () => {
  return (
    <>
    <SEOHead
    title={`Fotogalerie realizací - Lenka Design`}
    description="Prohlédněte si naše nejnovější realizace interiéru a nechte se inspirovat dokončenými projekty od LenkaDesign.cz. Kvalita a styl, který promění váš prostor v Liberci a okolí."
    keywords="interiérový design, architektura, Lenka Design, Lenka Stádníková, design interiéru, design interiéru v liberci, design v liberci, ceník poskytovaných služeb Lenka Design"
  />
    <main>
    <div className="breadcrumb-area-bg bg_image">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-crumb-area-inner">
              <div className="breadcrumb-top">
                <a href="/">Domů</a> /
                <a className="active" href={`/fotogalerie`}>Fotogalerie</a>
              </div>
              <div className="bottom-title">
                <h1 className="title">Fotogalerie realizací</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GalerieList />
    </main>
    </>
  )
}

export default Fotogalerie