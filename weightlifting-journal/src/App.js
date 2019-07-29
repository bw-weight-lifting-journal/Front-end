import React from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import Signup from './Signup.js';
import Login from './Login';
function App() {
  return (
    <div className="App">
      <Button color="danger">Danger!</Button>
      <Signup/>
      <Login/>
    </div>
  );
}

export default App;
