import React, { Component } from 'react';

// App component - represents the whole app

export default class Taunt extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
      //this.page = new ReactiveVar(0);
      //var arr = [<Home/>,<Register/>,<Buttons/>,<Leaderboard/>];
    }

  render() {
    return (

      <div className="container">
      <header>
        <h1>Taunt</h1>
      </header>
<br/><br/>
        <div align="center">
          <div>
            <h1>Amanda sends her regards!</h1>
          </div>
          <img src="images/taunt.gif" alt="logo" width="400" height="400"/>
          <p>Clever sports-related zing</p>

        </div>

      </div>

    );

  }

}
