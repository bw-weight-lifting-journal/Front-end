import React from 'react';
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';
import BottomCTA from './contentcontainers/BottomCTA';
import Testimonials from './contentcontainers/Testimonials';
import MiddleContent from './contentcontainers/MiddleContent';
import MainButtonContainer from './contentcontainers/MainbuttonsContainer';
import HeroImage from './contentcontainers/HeroImage';

function HomePage() {
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

export default HomePage;