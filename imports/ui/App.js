import React, { Component } from 'react';
import Home from "./Home.js";
import Register from "./Register.js";
import Buttons from "./Buttons.js";
import LeaderBoard from "./LeaderBoard.js";
import Avatar from "./Avatar.js"
import Wait from "./Wait.js"
import User from "./User.js"
import Welcome from "./Welcome.js"
import Admin from "./Admin.js"
import Board from "./Board.js"
import Answer from "./Answer.js"
import Final from "./Final.js"
import Dance from "./Dance.js"
import Stats from "./Stats.js"
import { Random } from 'meteor/random';
import { IsAdmin } from '../api/adminCollection.js';
import { UserData } from '../api/userCollection.js';
import ReactDOM from 'react-dom';

// App component - represents the whole app

export default class App extends Component {
  constructor(props)
  {
    super(props);
    //document.body.requestFullscreen();
    this.state = {
      page: 1,
      score: 0,
      admin: false,
      seconds: 0,
      clientId: Random.id(),
      count: 0
    };
  }

  isadmin()
  {
    var cid = this.state.clientId;
    var obj = IsAdmin.find({cid: cid}).fetch();
    if(obj.length>0)
    {
      this.setState({admin: true});
      return true;
    }
    this.setState({admin: false});
    return false;
  }

  componentDidMount()
  {
    this.interval = setInterval(() => this.tick(), 250);
  }

  tick()
  {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));


    var temp = 1;
    if(UserData.find({clientId: this.state.clientId}).fetch().length>0)
    {
      temp = UserData.find({clientId: this.state.clientId}).fetch()[0].page;
    }
    this.setState({ page: temp });

    this.isadmin();
  }

  incPage()
  {
    if(this.state.page<6)
    {
      this.setState({page: this.state.page+1,});
    }
    else
    {
      this.state.page = 6;
    }
  }

  decPage()
  {
    if(this.state.page>1)
    {
      this.setState({page: this.state.page-1,});
    }
    else
    {
      this.state.page = 1;
    }
  }

  setAdmin()
  {
    var cid = this.state.clientId;
    if(IsAdmin.find().fetch().length==0)
    {
      IsAdmin.insert({
        cid: this.state.clientId,
        correctAns: "Left"
      });
    }
    else
    {
      var temp = IsAdmin.find().fetch()[0];
      IsAdmin.update(temp._id, {
        cid: this.state.clientId,
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
        <div className="container">
          {this.state.admin ? <Admin/> : null}
          { this.state.page==1&& !this.state.admin ? <Welcome clientId={this.state.clientId}/> : null }
          { this.state.page==2&& !this.state.admin ? <Register clientId={this.state.clientId}/> : null }
          { this.state.page==3&& !this.state.admin ? <Avatar clientId={this.state.clientId}/> : null }
          { this.state.page==4&& !this.state.admin ? <Wait clientId={this.state.clientId}/> : null }
          { this.state.page==5&& !this.state.admin ? <Buttons clientId={this.state.clientId}/> : null }
          { this.state.page==6&& !this.state.admin ? <Dance clientId={this.state.clientId}/> : null }
          { this.state.page==7&& !this.state.admin ? <Answer clientId={this.state.clientId} /> : null }
          { this.state.page==8&& !this.state.admin ? <LeaderBoard clientId={this.state.clientId}/> : null }
          { this.state.page==9&& !this.state.admin ? <Final clientId={this.state.clientId}/> : null }
          { this.state.page==10&& !this.state.admin ? <Stats clientId={this.state.clientId}/> : null }
        </div>
        <div className="secretButt" onClick={this.beAdmin.bind(this)}></div>
      </div>
      );
    }

  }
