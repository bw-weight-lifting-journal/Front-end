import React from 'react';
import './App.scss';

import TopNav from './components/navmenus/Nav';
import Footer from './components/navmenus/Footer';
import NewWorkoutForm from './components/NewWorkoutForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <TopNav />
      <NewWorkoutForm />
      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
}

export default App;
