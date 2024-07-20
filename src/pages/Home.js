import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import OurWorkProcess from '../components/OurWorkProcess';
import OurProject from '../components/OurProject';
import ServicesComponent from '../components/ServicesComponent';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
       

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
