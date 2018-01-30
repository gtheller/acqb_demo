import React, { Component } from 'react';
import StatRow from "./StatRow.js"
import { UserData } from "../api/userCollection.js"

export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: 0,
      plays: 0,
      avgNumber: 0,
      avgPercent: 0
    };
  }

  renderUsers() {
    var sortedUsers = UserData.find({}, { sort: { score: -1 } }).fetch();
    return sortedUsers.map((user) => {

      if(user.totalQs==0)
      {
        percent=0;
      }
      else
      {
        percent = Math.round(user.numCorrect/user.totalQs*100) + "%";
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

  componentDidMount()
  {
    var totalScore, totalCorrect = 0;
    var sortedUsers = UserData.find({}, { sort: { score: -1 } }).fetch();
    var total = sortedUsers[0].totalQs;
    var numPlayers = sortedUsers.length;

    for(var u=0; u<sortedUsers.length; u++)
    {
      totalScore+=sortedUsers[u].score;
      totalCorrect+=sortedUsers[u].numCorrect;
    }

    var avgCorrect = totalCorrect/numPlayers;
    var percentCorrect = avgCorrect/total;
    if(total==0)
    {
      percentCorrect=0;
    }

    this.setState({players: numPlayers, plays: total, avgNumber: Math.round(avgCorrect*100)/100, avgPercent: Math.round(percentCorrect*100)+"%"});
  }

  render() {

    return (

      <div align="center">
        <header>Statistics</header>
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

        <br/><br/>

        <p className="h2">Number of players: {this.state.players}</p>
        <p className="h2">Number of plays: {this.state.plays}</p>
        <p className="h2">Average number correct: {this.state.avgNumber}</p>
        <p className="h2">Average percent correct: {this.state.avgPercent}</p>

      </div>
    );
  }
}
