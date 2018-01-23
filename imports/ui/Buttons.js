import React, { Component } from 'react';
import { UserData } from '../api/userCollection.js';

export default class Buttons extends Component {

  insertAns(num)
  {
    var temp = UserData.find({clientId: this.props.clientId}).fetch()[0];
    UserData.update(temp._id, { $set: { answer: num } });
  }

  render() {

    return (
    <div>
      <header>Your Call...</header>
      <br/><br/><br/><br/>
      <table className="tableButt">
      <tbody>
      	<tr>
      		<th><font size="40">Run</font></th>
          <th><font size="40">Pass</font></th>
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
      <div align="center"><button className="lock">Lock it in!</button></div>
    </div>
    );

  }
}
