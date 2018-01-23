import React, { Component } from 'react';
import Leaderboard from "./Leaderboard.js"
//import { Tasks } from '../api/tasks.js';
// Task component - represents a single todo item

export default class Results extends Component {
  render() {

    return (
    <div align="center">
      <header>
        <img src="images/ACQB_logo_draft.png" alt="logo" width="400" height="200"/>
        <h1>Leaderboard</h1>
      </header>
      <Leaderboard/>
    </div>
    );

  }
}
