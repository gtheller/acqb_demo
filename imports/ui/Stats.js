import React, { Component } from 'react';
import StatRow from "./StatRow.js"
import { UserData } from "../api/userCollection.js"

export default class Stats extends Component {

  renderUsers() {
    var sortedUsers = UserData.find({}, { sort: { score: -1 } }).fetch();
    return sortedUsers.map((user) => {

      if(user.totalQs==0)
      {
        percent=0;
      }
      else
      {
        percent = user.numCorrect/user.totalQs*100;
      }

      userRank = sortedUsers.indexOf(user);
      return (
        <StatRow
          username={user.username}
          score={user.score}
          rank={userRank}
          percent={percent}
          total={user.numCorrect}
        />
      );
    });
  }

  renderTotals()
  {
    var totalScore, totalCorrect = 0;
    var sortedUsers = UserData.find({}, { sort: { score: -1 } }).fetch();
    var total = sortedUsers[0].totalQs;

    for(var u=0; u<sortedUsers.length; u++)
    {
      totalScore+=sortedUsers[u].score;
      totalCorrect+=sortedUsers[u].numCorrect;
    }

  }

  render() {

    return (

      <div align="center">
        <header>Leaderboard</header>
        <br/>
        <img src="images/ACQB_logo_draft.png" alt="logo" width="400" height="200"/>

        <div>
          <p className="block">Name</p>
          <p className="block">Score</p>
          <p className="block">Correct Plays</p>
          <p className="block">Percent Correct</p>
        </div>

        <div align="center" className="leaderDiv">
          {this.renderUsers()}
        </div>

      </div>
    );
  }
}
