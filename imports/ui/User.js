import React, { Component } from 'react';
import { IsAdmin } from '../api/adminCollection.js';
import { UserData } from '../api/userCollection.js';

// App component - represents the whole app

export default class User extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      num: -1
    };
  }

    setNum(num)
    {
      console.log("adding cid");
      if(num==0)
      {
        var cid = this.props.clientId;
        //console.log(cid);
        IsAdmin.insert({
          cid: cid,
          correctAns: 0
        });
      }
      console.log("done adding cid");
    }

  render() {
    return (

      <div className="container">
      <header>
        <h1>Player</h1>
      </header>

        <div align="center">
          <img src="images/logo.png" alt="logo" width="100" height="100"/>
          <div>
            <h1>Armchair Quarterback</h1>
            <br/><br/><br/>
          </div>
          <div><button className="playerButton" onClick={this.setNum.bind(this, 0)}>Admin</button></div>
        </div>
      </div>

    );

  }

}
