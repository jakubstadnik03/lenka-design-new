import React from 'react'
import PricingPlans from "../components/PricingPlans"
import SEOHead from "../SEOHead"
const Pricing = () => {
  return (
    <>
    <SEOHead
      title= "Ceník poskytovaných služeb - Lenka Design"
      description="S každým klientem prodiskutuji jeho požadavky a následně předložím cenovou nabídku"
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
                  <a className="active" href="/cenik">Ceník služeb</a>
                </div>
                <div className="bottom-title">
                  <h1 className="title">ceník služeb</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PricingPlans />
    </main>
    </>
  )
}

export default Pricing