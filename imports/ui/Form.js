import React, { Component } from 'react';
//import { Tasks } from '../api/tasks.js';
// Task component - represents a single todo item

export default class Form extends Component {

  render() {

    return (
      <div>
      <form>
        <input type="text" name="name" placeholder="Enter your Name">
        <br>
        <input type="text" name="email" placeholder="Enter your email">
        <br>
        <input type="text" name="armchair" placeholder="Enter your Armchair Name">
        <br><br><br>
        <input type="submit" value="Submit">
      </form>
      </div>
    );

  }
}
