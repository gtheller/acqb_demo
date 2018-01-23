import React, { Component } from 'react';

// App component - represents the whole app

export default class Wait extends Component {

  render() {
    return (
      <div>
      <header>Ready</header>
        <div align="center">
          <br/>
          <img src="images/logo.png" alt="logo" width="100" height="100"/>
          <div>
          <p className ="h1">Welcome to Armchair Quarterback</p>
          <br/>
          <p className="h2">Ready to own your friends?</p>
          <br/><br/>
          </div>
        </div>

        <div align="center">
        <p className="wait">Game will begin at 1:00 pm ET</p>
        </div>

      </div>

    );

  }

}
