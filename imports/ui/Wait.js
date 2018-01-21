import React, { Component } from 'react';

// App component - represents the whole app

export default class Wait extends Component {

  render() {
    return (
      <div>
      <header>
        <h1>Ready</h1>
      </header>
        <div align="center">
          <img src="images/logo.png" alt="logo" width="100" height="100"/>
          <div>
          <h1>Welcome to Armchair Quarterback</h1>
          <br/><br/><br/>
          <h2>Ready to own your friends?</h2>
          <br/>
          </div>
        </div>

        <div align="center">
        <p><font size="6">Game will begin at 1:00 pm ET</font></p>
        </div>

      </div>

    );

  }

}
