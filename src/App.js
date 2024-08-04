import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import Pricing from './pages/Pricing';
import PodminkyAPravidla from './pages/PodminkyAPravidla';
import ZasadyObchodnichUdaju from './pages/ZasadyObchodnichUdaju';
import WebAGrafika from './pages/WebAGrafika';
import WebDetail from './pages/ProjectDetail'
import { SpeedInsights } from '@vercel/speed-insights/react';

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
        <Route path="/portfolio/:nav" element={<PortfolioDetail />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/fotogalerie" element={<Fotogalerie />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cenik" element={<Pricing />} />
        <Route path="/podminky-a-pravidla" element={<PodminkyAPravidla />} />
        <Route path="/zasady-obchodnich-udaju" element={<ZasadyObchodnichUdaju />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/fotogalerie/:nav" element={<FotogalerieDetail />} />
        <Route path='/web-a-grafika' element={<WebAGrafika />} />
        <Route path='/web-a-grafika/:nav' element={<WebDetail />} />
      </Routes>
      <Footer />
      <Progress />
      <SpeedInsights />
    </>
  );
};

export default App;
