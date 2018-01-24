import React, { Component } from 'react';
import Leaderboard from "./Leaderboard.js"
//import { Tasks } from '../api/tasks.js';
// Task component - represents a single todo item

export default class Results extends Component {
  render() {

    return (
    <div align="center">
      <header>Leaderboard</header>
      <img src="images/ACQB_logo_draft.png" alt="logo" width="400" height="200"/>

      <div>
        <p className="place"></p>
        <p className="block">Name</p>
        <p className="block">Last Play</p>
        <p className="place">Score</p>
      </div>

      <Leaderboard/>
    </div>
    );

  }
}
