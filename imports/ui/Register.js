import React, { Component } from 'react';

// App component - represents the whole app

export default class Register extends Component {

  render() {
    return (

      <div className="container">
        <div align="center">
          <img src="images/logo.png" alt="logo" width="100" height="100"/>
          <div>
          <h1>Armchair Quarterback</h1>
          <br/>
          </div>
        </div>

        <div align="center">
        <form>
          <input type="text" name="name" placeholder="Enter your Name"/>
          <br/>
          <input type="text" name="email" placeholder="Enter your email"/>
          <br/>
          <input type="text" name="armchair" placeholder="Enter your Armchair Name"/>
          <br/><br/><br/>
          <input type="submit" value="Submit"/>
        </form>
        </div>

      </div>

    );

  }

}
