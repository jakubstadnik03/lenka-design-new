import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import OurWorkProcess from '../components/OurWorkProcess';
import OurProject from '../components/OurProject';
import ServicesComponent from '../components/ServicesComponent';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import SEOHead from "../SEOHead"

const Home = () => {
  return (
    <>
         <SEOHead
    title={`Lenka Design | design interiéru v Liberci`}
    description=">Oživte svůj domov nebo kancelář v Liberci s exkluzivními návrhy interiérů od Lenky Stádníkové. Objednejte si konzultaci ještě dnes a transformujte svůj prostor do místa, kde budete chtít trávit každou minutu."
    keywords="interiérový design, architektura, Lenka Design, Lenka Stádníková, design interiéru, design interiéru v liberci, design v liberci, ceník poskytovaných služeb Lenka Design"
  />

     <main>
          <Banner />
          <About />
          <ServicesComponent />
          <OurWorkProcess />
          <OurProject />
          <Testimonials />
          <ContactSection />
     </main>

    </>
  );
}

export default Home;
