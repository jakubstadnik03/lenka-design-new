import React from 'react'
import PricingPlans from "../components/PricingPlans"
const Pricing = () => {
  return (
    <main>
      <div className="breadcrumb-area-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bread-crumb-area-inner">
                <div className="breadcrumb-top">
                  <a href="/">Domů</a> /
                  <a className="active" href="/contact">Kontakt</a>
                </div>
                <div className="bottom-title">
                  <h1 className="title">Kontakt</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PricingPlans />
    </main>
  )
}

export default Pricing