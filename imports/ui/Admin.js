import React, { Component } from 'react';
import Board from './Board.js'
import Buttons from './Buttons.js'
import { UserData } from '../api/userCollection.js';
import { IsAdmin } from '../api/adminCollection.js';

export default class Admin extends Component {

  reset()
  {
    Meteor.call('removeAllUsers');
    Meteor.call('removeAllAdmins');
  }

  setCorrect(num)
  {
    var temp = IsAdmin.find().fetch()[0];
    IsAdmin.update(temp._id, { $set: { correctAns: num } });
  }

  checkAnswers()
  {
    var users = UserData.find({}).fetch();
    //console.log(users);
    var correct = IsAdmin.find().fetch()[0].correctAns;

    var usersCorrect = 0;
    for(var a=0; a<users.length; a++)
    {
      if(users[a].answer==correct)
      {
        usersCorrect++;
      }
    }

    for(var a=0; a<users.length; a++)
    {
      if(users[a].answer==correct)
      {
        UserData.update(users[a]._id, { $inc: {score: Math.round(100*users.length/usersCorrect), numCorrect: 1}});
      }
      UserData.update(users[a]._id, { $inc: {totalQs: 1}});
    }
  }

  goToNum(num)
  {
    var Users = UserData.find({}).fetch();
    for(var a=0; a<Users.length; a++)
    {
      tempUser = Users[a];
      UserData.update(tempUser._id, { $set: { page: num } });
    }
  }

  render() {

    return (
    <div>
      <header>Admin</header>
      {<Board/>}
      <br/>
      <div>

        <table className="tableButt">
        <tbody>
        	<tr>
        		<th><font size="20">Run</font></th>
            <th><font size="20">Pass</font></th>
        	</tr>
        	<tr>
        		<td> <button className="runButton" onClick={this.setCorrect.bind(this,"Left")}>Left</button> </td>
        		<td> <button  className="passButton" onClick={this.setCorrect.bind(this,"Short")}>Short</button> </td>
        	</tr>
        	<tr>
        		<td> <button  className="runButton" onClick={this.setCorrect.bind(this,"Middle")}>Middle</button> </td>
        		<td> <button  className="passButton" onClick={this.setCorrect.bind(this,"Medium")}>Medium</button> </td>
        	</tr>
        	<tr>
        		<td> <button  className="runButton" onClick={this.setCorrect.bind(this,"Right")}>Right</button> </td>
        		<td> <button  className="passButton" onClick={this.setCorrect.bind(this,"Long")}>Long</button> </td>
        	</tr>
        </tbody>
        </table>
      </div>

      <br/><br/>

      <div align="center">
        <button className="adButt" onClick={this.reset.bind(this)}>Reset Demo</button>
        <button className="adButt" onClick={this.checkAnswers.bind(this)}>Check Answers</button>
      </div>
      <br/><br/>
      <div align="center">
        <button className="adButt" onClick={this.goToNum.bind(this,5)}>Question</button>
        <button className="adButt" onClick={this.goToNum.bind(this,7)}>Results</button>
        <button className="adButt" onClick={this.goToNum.bind(this,8)}>Board</button>
      </div>
      <br/><br/>
      <div align="center">
        <button className="adButt" onClick={this.goToNum.bind(this,9)}>Show Winner</button>
        <button className="adButt" onClick={this.goToNum.bind(this,10)}>Show Stats</button>
      </div>
    </div>
    );
  }
}
