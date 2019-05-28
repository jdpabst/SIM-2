import React, { Component } from 'react';
import router from './router';
import Home from './components/Home/Home'

import './reset.css';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">

          { router }

      </div>
    );
  }
}


export default App;
