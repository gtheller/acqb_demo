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
      <table>
    	<tr>
    		<th><font size="40">Run</font></th>
        <th><font size="40">Pass</font></th>
    	</tr>
    	<tr>
    		<td> <button className="runButton" onClick={this.insertAns.bind(this,0)}>Left</button> </td>
    		<td> <button  className="passButton"  onClick={this.insertAns.bind(this,1)}>Short</button> </td>
    	</tr>
    	<tr>
    		<td> <button  className="runButton" onClick={this.insertAns.bind(this,2)}>Middle</button> </td>
    		<td> <button  className="passButton" onClick={this.insertAns.bind(this,3)}>Medium</button> </td>
    	</tr>
    	<tr>
    		<td> <button  className="runButton" onClick={this.insertAns.bind(this,4)}>Right</button> </td>
    		<td> <button  className="passButton" onClick={this.insertAns.bind(this,5)}>Long</button> </td>
    	</tr>
    	</table>
      <br/><br/>
      <div align="center"><button className="lock">Lock it in!</button></div>
    </div>
    );

  }
}
