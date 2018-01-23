import React, { Component } from 'react';

// App component - represents the whole app

export default class Welcome extends Component {

  render() {
    return (
      <div>
      <header>Welcome</header>
        <div align="center">
          <img src="images/logo.png" alt="logo" width="300" height="300"/>
          <div>
          <p className="h1">Armchair Quarterback</p>
          <p className="h2">Who has bragging rights?</p>
          </div>
        </div>
        <div align="center"><button className="startButton">Get Started</button></div>
      </div>
    );

  }

}
