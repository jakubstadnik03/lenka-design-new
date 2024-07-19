import React from 'react'
import GalerieList from '../components/GalerieList'

const Fotogalerie = () => {
  return (
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
  )
}

export default Fotogalerie