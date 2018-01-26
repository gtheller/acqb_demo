import React, { Component } from 'react';
import Board from "./Board.js"
import { UserData } from "../api/userCollection.js"
//import { Tasks } from '../api/tasks.js';
// Task component - represents a single todo item

export default class Final extends Component {
  render() {

  var winner = UserData.find({}, { sort: { score: -1 } }).fetch()[0].username;

    return (
    <div align="center">
      <header>Final Scores</header>
      <img src="images/ACQB_logo_draft.png" alt="logo" width="400" height="200"/>

      <div>
        <p className="place"></p>
        <p className="block">Name</p>
        <p className="block">Last Play</p>
        <p className="place">Score</p>
      </div>

      <Board/>
      <p className="h1">{"Winner: "+winner}</p>
    </div>
    );

  }
}
