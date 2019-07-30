import React from 'react';
import './App.scss';
import TopNav from './components/navmenus/Nav';
import Footer from './components/navmenus/Footer';
import BottomCTA from './components/contentcontainers/BottomCTA';
import Testimonials from './components/contentcontainers/Testimonials';
import MiddleContent from './components/contentcontainers/MiddleContent';
import MainButtonContainer from './components/contentcontainers/MainbuttonsContainer';
import HeroImage from './components/contentcontainers/HeroImage';

function App() {
  return (
    <div className="App">
      <TopNav />
      <HeroImage />
      <MainButtonContainer />
      <MiddleContent />
      <Testimonials />
      <BottomCTA />
      <Footer />
    </div>
  );
}

export default App;
