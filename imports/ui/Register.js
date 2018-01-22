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
    console.log(text);

    if(UserData.find({clientId: this.props.clientId}).fetch().length==0)
    {
      UserData.insert({
      clientId: this.props.clientId,
      username: text,
      score: 0,
      createdAt: new Date(),
      answer: 0
      });
    }
    console.log(UserData.find({username: text}).fetch());
    // Clear form
    ReactDOM.findDOMNode(this.refs.armchair).value = '';
  }



  render() {
    return (

      <div>
      <header>
        <h1>Sign Up</h1>
      </header>
        <div align="center">
          <img src="images/logo.png" alt="logo" width="100" height="100"/>
          <div>
          <h1>Armchair Quarterback</h1>
          <br/>
          </div>
        </div>

        <div align="center">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="name" placeholder="Enter your Name"/>
          <br/>
          <input type="text" ref="email" placeholder="Enter your email"/>
          <br/>
          <input type="text" ref="armchair" placeholder="Enter your Armchair Name"/>
          <br/><br/>
          <input type="submit" value="Submit"/>
        </form>
        </div>

      </div>

    );

  }

}
