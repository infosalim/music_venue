import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/Featured/Index';
import VenueInfo from './components/VenueInfo/Index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Featured />
        <VenueInfo/>
      </div>
    );
  }
}

export default App;
