
import React from 'react';

import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth 2!</h1>
      </header>
    </div>
  );
}

//export default App;
export default withAuthenticator(App);
