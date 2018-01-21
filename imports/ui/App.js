import React, { Component } from 'react';
import { ReactiveVar } from 'meteor/reactive-var';
import Home from "./Home.js";
import Register from "./Register.js";
import Buttons from "./Buttons.js";
import Leaderboard from "./Leaderboard.js";
import Page1 from "./Page1.js"
import Page2 from "./Page2.js"
import Page3 from "./Page3.js"
import Page4 from "./Page4.js"
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

// App component - represents the whole app

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      page: 1,
      player: 1,
      score: 0,
      admin: false,
      seconds: 0,
      clientId: Random.id()};
  }

  isadmin()
  {
    var cid = this.state.clientId;
    console.log("cid: " + cid);
    //var obj = IsAdmin.find({cid: 1}).fetch();
    var obj = IsAdmin.find({}).fetch();
    console.log(obj);
    if(obj.length>0)
    {
      this.setState({admin: true});
      return true;
    }
    return false;
  }

  tick()
  {
    console.log("page: " + this.state.page);
    console.log("admin: " + this.state.admin);

    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
    var temp = PageNumber.find().fetch()[0];
    this.setState({ page: temp.val });
    //console.log(temp);
    console.log("app: "+this.state.clientId);
  }

  componentDidMount()
  {
    this.interval = setInterval(() => this.tick(), 250);
  }


  incPage()
  {
    if(this.state.page<7)
    {
      this.setState({page: this.state.page+1,});
    }
    else
    {
      this.state.page = 7;
    }
    console.log("inc");
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
    console.log("dec");
  }

  changePlayer()
  {
    var p = document.getElementById("player").value;
    this.setState({player: p,});
  }


  render() {

    return (

      <div>
        <div className="container">
          {this.isadmin() ? <Admin/> : null}
          { this.state.page==1&& !this.state.admin ? <User clientId={this.state.clientId}/> : null }
          { this.state.page==2&& !this.state.admin ? <Welcome/> : null }
          { this.state.page==3&& !this.state.admin ? <Page2/> : null }
          { this.state.page==4&& !this.state.admin ? <Avatar/> : null }
          { this.state.page==5&& !this.state.admin ? <Wait/> : null }
          { this.state.page==6&& !this.state.admin ? <Buttons/> : null }
          { this.state.page==7&& !this.state.admin ? <Results/> : null }
        </div>
        <div>
          <button onClick={this.decPage.bind(this)}>Prev</button>
          <button onClick={this.incPage.bind(this)}>Next</button>
          <p>{this.state.page}</p>
          <select id="player" onChange={this.changePlayer.bind(this)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <p>{this.state.player}</p>
          </div>
      </div>

      );

    }

  }