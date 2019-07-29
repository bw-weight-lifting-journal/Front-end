import React from 'react';
import './App.scss';
import TopNav from './components/navmenus/Nav';
import Footer from './components/navmenus/Footer';
import BottomCTA from './components/contentcontainers/BottomCTA';
import Testimonials from './components/contentcontainers/Testimonials';


function App() {
  return (
    <div className="App">
      <TopNav />
      <Testimonials />
      <BottomCTA />
      <Footer />
    </div>
  );
}

export default App;
