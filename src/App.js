import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About'; 
import Services from './pages/Services'; 
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio'; 
import Fotogalerie from './pages/Fotogalerie'; 
import PortfolioDetail from './pages/PortfolioDetail';
import Contact from './pages/Contact'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Progress from './components/Progress';
import FotogalerieDetail from './pages/FotogalerieDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/nase-sluzby" element={<Services />} />
        <Route path="/nase-sluzby/:nav" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/fotogalerie" element={<Fotogalerie />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/fotogalerie/:nav" element={<FotogalerieDetail />} />
     
      </Routes>
      <Footer />
      <Progress />

      </>
  );
};

export default App;
