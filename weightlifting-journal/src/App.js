import React from 'react';
import './App.scss';

import TopNav from './components/navmenus/Nav';
import HomePage from './components/HomePage';
import Footer from './components/navmenus/Footer';
import NewWorkoutForm from './components/NewWorkoutForm';
import Dashboard from './components/Dashboard';
import Signup from './Signup.js';
import Login from './Login';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <TopNav />
      {/* <NewWorkoutForm /> */}
      {/* <Dashboard /> */}
      {/* <Signup /> */}
      <Login />
      <Footer />
    </div>
  );
}

export default App;
