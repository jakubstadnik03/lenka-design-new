import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import Contact from '../components/Contact';
import OurWorkProcess from '../components/OurWorkProcess';
import OurProject from '../components/OurProject';
import Footer from '../components/Footer';
import ServicesComponent from '../components/ServicesComponent';

const Home = () => {
  return (
    <>
       

     <main>
          <Banner />
          <About />
          <ServicesComponent />
          <OurWorkProcess />
          <OurProject />
     </main>

    </>
  );
}

export default Home;
