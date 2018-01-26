import React, { Component } from 'react';
import Board from "./Board.js"
//import { Tasks } from '../api/tasks.js';
// Task component - represents a single todo item

export default class Results extends Component {
  render() {

    return (
    <div align="center">
      <header>Leaderboard</header>
      <img src="images/ACQB_logo_draft.png" alt="logo" width="400" height="200"/>

      <div>
        <p className="block">Rank</p>
        <p className="block">Name</p>
        <p className="block">Last Play</p>
        <p className="block">Score</p>
      </div>

      <Board/>
    </div>
    );

  }
}
