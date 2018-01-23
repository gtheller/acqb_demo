import React, { Component } from 'react';
import { UserData } from "../api/userCollection.js"
import { IsAdmin } from "../api/adminCollection.js"

export default class Results extends Component {
  constructor(props) {
    super(props);
    var userAns = UserData.find({clientId: this.props.clientId}).fetch()[0];
    console.log("userAns:");
    console.log(userAns);
    console.log(userAns.answer);
    var correct = IsAdmin.find().fetch()[0].correctAns;
    var message = "";

    if(userAns.answer==correct)
    {
        message = "YOU GOT IT RIGHT";
    }
    else
    {
      message = "NOT QUITE";
    }

    this.state = {
      answer: userAns.answer,
      correct: correct,
      message: message
    };
  }

  render() {

    return (
    <div align="center">
      <header>
        <h1>Answer</h1>
      </header>
      <p className="h2">Your Call...</p>
      <p className="h2">{this.state.answer}</p>
      <p className="h2">Result...</p>
      <p className="h2">{this.state.correct}</p>
      <br/><br/><br/><br/>
      <p className="h1">{this.state.message}</p>
    </div>
    );
  }
}
