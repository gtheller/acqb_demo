import React, { Component } from 'react';
//import { Taunts } from '../api/taunts.js';
// App component - represents the whole app

export default class Send extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

sendTaunt()
{
  text = document.getElementById("tauntInput").value;
  this.setState({message: text});
  console.log(text);
  /*var text = "LOOOOSER";
  Taunts.insert({
    message: text,
    createdAt: new Date(), // current time
  })*/
}

  render() {
    return (

      <div>
      <header>
        <h1>Send Taunt</h1>
      </header>
        <div align="center">
          <img src="images/logo.png" alt="logo" width="100" height="100"/>
          <div>
          <h1>Armchair Quarterback</h1>
          <br/>
          </div>
        </div>

        <div align="center">
          <h3>Send a message to your friends</h3>
          <form>
            <input id = "tauntInput" type="text" name="name" placeholder="Don't hold back"/>
          </form>
          <br/>
          <button onClick={this.sendTaunt.bind(this)}>Send</button>
        </div>

      </div>

    );

  }

}
