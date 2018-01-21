import React, { Component } from 'react';
import Leaderboard from './Leaderboard.js'
import Buttons from './Buttons.js'
import { PageNumber } from '../api/pageNum.js';

export default class Admin extends Component {

  incPage()
  {
    var temp = PageNumber.find().fetch()[0];
    if(temp.val<7)
    {
      PageNumber.update(temp._id, { $inc: { val: 1 } });
    }
    else
    {
      PageNumber.update(temp._id, { $set: { val: 7 } });
    }
    console.log(temp);
  }

  decPage()
  {
    var temp = PageNumber.find().fetch()[0];
    if(temp.val>1)
    {
      PageNumber.update(temp._id, { $inc: { val: -1 } });
    }
    else
    {
      PageNumber.update(temp._id, { $set: { val: 1 } });
    }
    console.log(temp);
  }

  reset()
  {
    var temp = PageNumber.find().fetch()[0];
    PageNumber.update(temp._id, { $set: { val: 1 } });
    //reset user, score collection
  }

  render() {

    return (
    <div>
      <header>
        <h1>Admin</h1>
      </header>
      {<Leaderboard/>}
      <br/>
      <div>

        <table>
        	<tr>
        		<th><font size="20">Run</font></th>
            <th><font size="20">Pass</font></th>
        	</tr>
        	<tr>
        		<td> <button className="runButton">Left</button> </td>
        		<td> <button  className="passButton">Short</button> </td>
        	</tr>
        	<tr>
        		<td> <button  className="runButton">Middle</button> </td>
        		<td> <button  className="passButton">Medium</button> </td>
        	</tr>
        	<tr>
        		<td> <button  className="runButton">Right</button> </td>
        		<td> <button  className="passButton">Long</button> </td>
        	</tr>
        </table>
      </div>

      <br/><br/><br/>

      <button className="adButt" onClick={this.reset.bind(this)}>Reset Demo</button>
      <button className="adButt" onClick={this.decPage.bind(this)}>Prev</button>
      <button className="adButt" onClick={this.incPage.bind(this)}>Next</button>
      <button className="adButt">Show Final</button>

    </div>
    );
  }
}
