import React, { useEffect } from 'react';
import AppRouter from './components/Router.js';
import './App.scss';

function App() {
  
  useEffect(() => {
    fetch('https://weightlifingjournalbackend.herokuapp.com/api/users')
      .then(res => res.json())
      .then(users => console.log(users))

  }, [])

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
