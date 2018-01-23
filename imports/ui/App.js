import React, { Component } from 'react';
import { ReactiveVar } from 'meteor/reactive-var';
import Home from "./Home.js";
import Register from "./Register.js";
import Buttons from "./Buttons.js";
import Leaderboard from "./Leaderboard.js";
import Avatar from "./Avatar.js"
import Taunt from "./Taunt.js"
import Send from "./Send.js"
import Wait from "./Wait.js"
import User from "./User.js"
import Welcome from "./Welcome.js"
import Admin from "./Admin.js"
import Results from "./Results.js"
import { withTracker } from 'meteor/react-meteor-data';
import { PageNumber } from '../api/pageNum.js';
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
      player: 1,
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
    //console.log("cid: " + cid);
    //var obj = IsAdmin.find({cid: 1}).fetch();
    var obj = IsAdmin.find({cid: cid}).fetch();
    //console.log(obj);
    if(obj.length>0)
    {
      this.setState({admin: true});
      return true;
    }
    return false;
  }

  tick()
  {
    //console.log("page: " + this.state.page);
    //console.log("admin: " + this.state.admin);

    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
    var temp = PageNumber.find().fetch()[0];
    this.setState({ page: temp.val });
    this.isadmin();
    //console.log(temp);
    //console.log("app: "+this.state.clientId);
    //console.log(UserData.find().fetch());
  }

  componentDidMount()
  {
    this.interval = setInterval(() => this.tick(), 250);
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
    //console.log("inc");
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
    //console.log("dec");
  }

  changePlayer()
  {
    var p = document.getElementById("player").value;
    this.setState({player: p,});
  }

  setAdmin()
  {
    var cid = this.state.clientId;
    //console.log(cid);
    IsAdmin.insert({
      cid: cid,
      correctAns: 0
    });
  }

  beAdmin()
  {
    var temp = this.state.count;
    this.setState({count: temp+1});
    if(this.state.count>3)
    {
      this.setAdmin();
    }
  }

  //{ this.state.page==1&& !this.state.admin ? <User clientId={this.state.clientId}/> : null }


  render() {

    return (
      <div>
        <div className="container">
          {this.state.admin ? <Admin/> : null}
          { this.state.page==1&& !this.state.admin ? <Welcome/> : null }
          { this.state.page==2&& !this.state.admin ? <Register clientId={this.state.clientId}/> : null }
          { this.state.page==3&& !this.state.admin ? <Avatar/> : null }
          { this.state.page==4&& !this.state.admin ? <Wait/> : null }
          { this.state.page==5&& !this.state.admin ? <Buttons clientId={this.state.clientId}/> : null }
          { this.state.page==6&& !this.state.admin ? <Results/> : null }
        </div>
        <div className="secretButt" onClick={this.beAdmin.bind(this)}></div>
      </div>
      );
      //<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      //<div><button className="adButt" onClick={this.setAdmin.bind(this)}>Admin</button></div>

    }

  }
