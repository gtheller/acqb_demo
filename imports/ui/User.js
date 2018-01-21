import React, { Component } from 'react';
import { IsAdmin } from '../api/adminCollection.js';

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
      this.state.num = num;
      if(num==0)
      {
        var cid = this.props.clientId;
        console.log(cid);
        IsAdmin.insert({
          cid: 1,
        });

      }
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
