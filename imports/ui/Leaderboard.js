import React, { Component } from 'react';
import Row from "./Row.js"
import { UserData } from "../api/userCollection.js"

export default class Leaderboard extends Component {

  renderUsers() {
    //console.log(UserData.find({}, { sort: { createdAt: -1 } }).fetch());
    return UserData.find({}).fetch().map((user) => {
      
      return (
        <Row
          username={user.username}
          play={user.answer}
          score={user.score}
        />
      );
    });
  }

  render() {

    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
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
