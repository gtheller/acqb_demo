import React, { Component } from 'react';
import { UserData } from '../api/userCollection.js';
import ReactDOM from 'react-dom';
// App component - represents the whole app

export default class Register extends Component {

  handleSubmit(event)
  {
    event.preventDefault();

    const text = ReactDOM.findDOMNode(this.refs.armchair).value;

    ReactDOM.findDOMNode(this.refs.name).value = '';
    ReactDOM.findDOMNode(this.refs.email).value = '';
    ReactDOM.findDOMNode(this.refs.armchair).value = '';

    var tempUser = UserData.find({clientId: this.props.clientId}).fetch()[0];
    UserData.update(tempUser._id, { $set: { username: text, page: 3 } });

  }


  render() {
    return (

      <div>
        <header>Register</header>
        <div align="center">
          <br/>
          <img src="images/ACQB_logo_draft.png" alt="logo" width="400" height="200"/>
          <div>
          <p className="h1">Armchair Quarterback</p>
          <br/>
          </div>
        </div>

        <div align="center">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div><input className="regIn" type="text" ref="name" placeholder="Enter your name"/></div>
          <div><input className="regIn" type="text" ref="email" placeholder="Enter your email"/></div>
          <div><input className="regIn" type="text" ref="armchair" placeholder="Enter your Armchair Name"/></div>
          <br/>
          <input className="regButt" type="submit" value="Submit"/>
        </form>
        </div>

      </div>

    );

  }

}
