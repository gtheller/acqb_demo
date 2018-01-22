import React, { Component } from 'react';
import { UserData } from '../api/userCollection.js';

export default class Buttons extends Component {

  insertAns(num)
  {
    var temp = UserData.find({clientId: this.props.clientId}).fetch()[0];
    console.log("num: " + num);
    console.log("temp");
    console.log(temp);
    UserData.update(temp._id, { $set: { answer: num } });
  }

  render() {

    return (
    <div>
      <header>
        <h1>Your Call...</h1>
      </header>

      <table>
    	<tr>
    		<th><font size="20">Run</font></th>
        <th><font size="20">Pass</font></th>
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
