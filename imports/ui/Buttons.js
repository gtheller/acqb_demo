import React, { Component } from 'react';
import { UserData } from '../api/userCollection.js';
import ReactDOM from 'react-dom';

export default class Buttons extends Component {

  insertAns(num)
  {
    var temp = UserData.find({clientId: this.props.clientId}).fetch()[0];
    UserData.update(temp._id, { $set: { answer: num } });
    console.log(this);
  }

  lockIn()
  {
    //var temp = ReactDOM.findDOMNode(this.refs.confirm);
    //temp.style.visibility = "visible";

    var tempUser = UserData.find({clientId: this.props.clientId}).fetch()[0];
    UserData.update(tempUser._id, { $set: { page: 6 } });
  }

  render() {

    return (
    <div align="center">
      <header>Your Call...</header>
      <br/>
      <img src="images/ACQB_logo_draft.png" alt="logo" width="400" height="200"/>
      <br/><br/>
      <table className="tableButt">
      <tbody>
      	<tr>
      		<th className="thButt">Run</th>
          <th className="thButt">Pass</th>
      	</tr>
      	<tr>
      		<td> <button className="runButton" onClick={this.insertAns.bind(this,"Left")}>Left</button> </td>
      		<td> <button  className="passButton"  onClick={this.insertAns.bind(this,"Short")}>Short</button> </td>
      	</tr>
      	<tr>
      		<td> <button  className="runButton" onClick={this.insertAns.bind(this,"Middle")}>Middle</button> </td>
      		<td> <button  className="passButton" onClick={this.insertAns.bind(this,"Medium")}>Medium</button> </td>
      	</tr>
      	<tr>
      		<td> <button  className="runButton" onClick={this.insertAns.bind(this,"Right")}>Right</button> </td>
      		<td> <button  className="passButton" onClick={this.insertAns.bind(this,"Long")}>Long</button> </td>
      	</tr>
      </tbody>
      </table>
      <br/><br/>
      <div align="center"><button onClick={this.lockIn.bind(this)} className="lock">Lock it in!</button></div>
      <p id="confirm" ref="confirm">Locked In!</p>
    </div>
    );

  }
}
