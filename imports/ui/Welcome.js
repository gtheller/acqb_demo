import React, { Component } from 'react';

// App component - represents the whole app

export default class Welcome extends Component {

  render() {
    return (
      <div className="container">
      <header>
        <h1>Welcome</h1>
      </header>
        <div align="center">
          <img src="images/logo.png" alt="logo" width="100" height="100"/>
          <div>
          <h1>Armchair Quarterback</h1>
          <h2>Who has bragging rights?</h2>
          </div>
        </div>
        <div align="center"><button className="startButton">Get Started</button></div>
      </div>
    );

  }

}
