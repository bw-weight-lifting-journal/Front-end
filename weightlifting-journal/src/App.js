import React from 'react';
import './App.scss';
import TopNav from './components/navmenus/Nav';
import Footer from './components/navmenus/Footer';
import NewWorkoutForm from './components/NewWorkoutForm';

function App() {
  return (
    <div className="App">
      <TopNav />
      <NewWorkoutForm />
      <Footer />
    </div>
  );
}

export default App;
