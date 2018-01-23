import React, { Component } from 'react';
import Leaderboard from './Leaderboard.js'
import Buttons from './Buttons.js'
import { PageNumber } from '../api/pageNum.js';
import { UserData } from '../api/userCollection.js';
import { IsAdmin } from '../api/adminCollection.js';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "Welcome"
    };
  }

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
    this.getPage();
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
    this.getPage();
  }

  reset()
  {
    var temp = PageNumber.find().fetch()[0];
    PageNumber.update(temp._id, { $set: { val: 1 } });
    //reset user, score collection
    //IsAdmin.remove({});
    var allUsers = UserData.find().fetch()
    Meteor.call('removeAllUsers');
    Meteor.call('removeAllAdmins');
    this.getPage();
  }

  setCorrect(num)
  {
    var temp = IsAdmin.find().fetch()[0];
    IsAdmin.update(temp._id, { $set: { correctAns: num } });
    //console.log(IsAdmin.find().fetch()[0]);
  }

  checkAnswers()
  {
    users = UserData.find({}).fetch();
    console.log(users);
    correct = IsAdmin.find().fetch()[0].correctAns;
    console.log(correct);
    //UserData.update(users._id, { $inc: { score: users.answer==correct ? 10 : -10 } });
  }

  getPage()
  {
    var arr = ["Welcome","Register","Avatar","Wait","Buttons","Results"];
    var num = PageNumber.find().fetch()[0].val-1;
    this.setState({pageName: arr[num]});
  }

  render() {

    return (
    <div>
      <header>Admin</header>
      {<Leaderboard/>}
      <br/>
      <div>

        <table className="tableButt">
        <tbody>
        	<tr>
        		<th><font size="20">Run</font></th>
            <th><font size="20">Pass</font></th>
        	</tr>
        	<tr>
        		<td> <button className="runButton" onClick={this.setCorrect.bind(this,0)}>Left</button> </td>
        		<td> <button  className="passButton" onClick={this.setCorrect.bind(this,1)}>Short</button> </td>
        	</tr>
        	<tr>
        		<td> <button  className="runButton" onClick={this.setCorrect.bind(this,2)}>Middle</button> </td>
        		<td> <button  className="passButton" onClick={this.setCorrect.bind(this,3)}>Medium</button> </td>
        	</tr>
        	<tr>
        		<td> <button  className="runButton" onClick={this.setCorrect.bind(this,4)}>Right</button> </td>
        		<td> <button  className="passButton" onClick={this.setCorrect.bind(this,5)}>Long</button> </td>
        	</tr>
        </tbody>
        </table>
      </div>

      <br/><br/><br/>

      <div className="centerDiv">
        <button className="adButt" onClick={this.decPage.bind(this)}>Prev</button>
        <p className="block">{this.state.pageName}</p>
        <button className="adButt" onClick={this.incPage.bind(this)}>Next</button>
      </div>

      <div>
        <button className="adButt" onClick={this.reset.bind(this)}>Reset Demo</button>
        <button className="adButt">Check Ans</button>
        <button className="adButt">Show Final</button>
      </div>

    </div>
    );
  }
}
//<span className="adSpan">{this.state.pageName}</span>
