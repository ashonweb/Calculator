import React, { Component } from 'react';
import Caloutlet from './Caloutlet';
import './App.css';
import './responsive.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Calculator App</h1>
          </header>
          <div>
            <Caloutlet />
          </div>
        
      </div>
    );
  }
}

export default App;
