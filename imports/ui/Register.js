import React, { Component } from 'react';
import { UserData } from '../api/userCollection.js';
import ReactDOM from 'react-dom';
// App component - represents the whole app

export default class Register extends Component {

  handleSubmit(event)
  {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.armchair).value;
    //console.log(text);

    if(UserData.find({clientId: this.props.clientId}).fetch().length==0)
    {
      UserData.insert({
      clientId: this.props.clientId,
      username: text,
      score: 0,
      createdAt: new Date(),
      answer: "None"
      });
    }
    //console.log(UserData.find({username: text}).fetch());
    // Clear form
    ReactDOM.findDOMNode(this.refs.name).value = '';
    ReactDOM.findDOMNode(this.refs.email).value = '';
    ReactDOM.findDOMNode(this.refs.armchair).value = '';

    var temp = ReactDOM.findDOMNode(this.refs.confirm);
    //console.log(temp);
    temp.style.visibility = "visible";
  }

  render() {
    return (

      <div>
      <header>Sign Up</header>
        <div align="center">
          <img src="images/logo.png" alt="logo" width="300" height="300"/>
          <div>
          <p className="h1">Armchair Quarterback</p>
          <br/>
          </div>
        </div>

        <div align="center">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className="regIn" type="text" ref="name" placeholder="Enter your Name"/>
          <br/>
          <input className="regIn" type="text" ref="email" placeholder="Enter your email"/>
          <br/>
          <input className="regIn" type="text" ref="armchair" placeholder="Enter your Armchair Name"/>
          <br/><br/>
          <input className="regButt" type="submit" value="Submit"/>
          <p id="confirm" ref="confirm">Account Created!</p>
        </form>
        </div>

      </div>

    );

  }

}
