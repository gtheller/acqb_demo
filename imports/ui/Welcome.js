import React, { Component } from 'react';
import { UserData } from "../api/userCollection.js"

// App component - represents the whole app

export default class Welcome extends Component {

  getStarted()
  {
    //console.log("triggered");
    //console.log(UserData.find().fetch());
    //console.log();
    if(UserData.find({clientId: this.props.clientId}).fetch().length==0)
    {
      UserData.insert({
      clientId: this.props.clientId,
      username: "",
      score: 0,
      createdAt: new Date(),
      answer: "None",
      page: 2
      });
      //console.log("In Welcome: ");
      //console.log(UserData.find().fetch());
      //console.log();
    }
  }


  render() {
    return (
      <div>
      <header>Welcome</header>
        <div align="center">
          <br/>
          <img src="images/ACQB_logo_draft.png" alt="logo" width="400" height="200"/>
          <div>
          <p className="h1">Armchair Quarterback</p>
          <p className="h2">Who has bragging rights?</p>
          </div>
        </div>
        <div align="center"><button onClick={this.getStarted.bind(this)} className="startButton">Get Started</button></div>
      </div>
    );

  }

}
