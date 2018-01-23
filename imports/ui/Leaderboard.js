import React, { Component } from 'react';
import Row from "./Row.js"
import { UserData } from "../api/userCollection.js"

export default class Leaderboard extends Component {

  renderUsers() {
    var sortedUsers = UserData.find({}, { sort: { score: -1 } }).fetch();
    return sortedUsers.map((user) => {

      num = sortedUsers.indexOf(user);
      return (
        <Row
          rank={num}
          username={user.username}
          play={user.answer}
          score={user.score}
        />
      );
    });
  }

  render() {

    return (
      <div align="center" className="leaderDiv">
        {this.renderUsers()}
      </div>
    )

/*    return (
      <div>
        <Row username={"Alexa"} play={"Pass Short"} score={300} />
        <Row username={"Bobert"} play={"Pass Medium"} score={150} />
        <Row username={"Caitlin"} play={"Run Middle"} score={0} />
      </div>
    );*/
  }
}
