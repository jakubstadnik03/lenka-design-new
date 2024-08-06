import React, { lazy, Suspense } from 'react';
import Banner from '../components/Banner';
import SEOHead from "../SEOHead";
import Loader from '../components/Loader'; // Import the Loader component

// Lazy load components
const About = lazy(() => import('../components/About'));
const OurWorkProcess = lazy(() => import('../components/OurWorkProcess'));
const OurProject = lazy(() => import('../components/OurProject'));
const ServicesComponent = lazy(() => import('../components/ServicesComponent'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const ContactSection = lazy(() => import('../components/ContactSection'));

const Home = () => {
  return (
    <>
      <SEOHead
        title="Lenka Design | design interiéru v Liberci"
        description="Oživte svůj domov nebo kancelář v Liberci s exkluzivními návrhy interiérů od Lenky Stádníkové. Objednejte si konzultaci ještě dnes a transformujte svůj prostor do místa, kde budete chtít trávit každou minutu."
        keywords="interiérový design, architektura, Lenka Design, Lenka Stádníková, design interiéru, design interiéru v liberci, design v liberci, ceník poskytovaných služeb Lenka Design"
      />
      <main>
        <Banner />
        <Suspense fallback={<Loader />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ServicesComponent />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <OurWorkProcess />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <OurProject />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ContactSection />
        </Suspense>
      </main>
    </>
  );
}

export default Home;
