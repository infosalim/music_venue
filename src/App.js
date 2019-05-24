import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/Featured/Index';

class App extends Component {

  render() {
    return (
      <div className="App" style={{height: "30000px", background: "lightBlue"}}>
        <Header/>
        <Featured />
      </div>
    );
  }
}

export default App;
