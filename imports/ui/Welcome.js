import React, { Component } from 'react';
import { UserData } from "../api/userCollection.js"
import { IsAdmin } from "../api/adminCollection.js"

// App component - represents the whole app

export default class Welcome extends Component {
  constructor(props)
  {
    super(props);
    //document.body.requestFullscreen();
    this.state = {
      count: 0
    };
  }

  getStarted()
  {
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
    }
  }

  setAdmin()
  {
    var cid = this.props.clientId;
    if(IsAdmin.find().fetch().length==0)
    {
      IsAdmin.insert({
        cid: this.props.clientId,
        correctAns: "Left"
      });
    }
    else
    {
      var temp = IsAdmin.find().fetch()[0];
      IsAdmin.update(temp._id, {
        cid: this.props.clientId,
        correctAns: "Left"
      });
    }
  }

  beAdmin()
  {
    var temp = this.state.count;
    this.setState({count: temp+1});
    if(this.state.count>1)
    {
      this.setAdmin();
      this.setState({count: 0});
    }
  }


  render() {
    return (
      <div>
      <header onClick={this.beAdmin.bind(this)}>Welcome</header>
        <div align="center">
          <br/>
          <img src="images/ACQB_logo_draft.png" alt="logo" width="400" height="200"/>
          <div>
          <p className="h1">Armchair Quarterback</p>
          <p className="h2">Who&#39;s got bragging rights?</p>
          </div>
        </div>
        <div align="center"><button onClick={this.getStarted.bind(this)} className="startButton">Get Started</button></div>
      </div>
    );

  }

}
