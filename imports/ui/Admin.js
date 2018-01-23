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
    var users = UserData.find({}).fetch();
    //console.log(users);
    var correct = IsAdmin.find().fetch()[0].correctAns;

    for(var a=0; a<users.length; a++)
    {
      if(users[a].answer==correct)
      {
        UserData.update(users[a]._id, { $inc: {score: 100}});
        //this.setState();
      }
    }
    //UserData.update(users._id, { $inc: { score: users.answer==correct ? 10 : -10 } });
  }

  getPage()
  {
    var arr = ["Welcome","Register","Avatar","Wait","Buttons","Answer", "Results"];
    var num = PageNumber.find().fetch()[0].val-1;
    this.setState({pageName: arr[num]});
  }

  goToButtons()
  {
    var Users = UserData.find({}).fetch();
    for(var a=0; a<Users.length; a++)
    {
      tempUser = Users[a];
      UserData.update(tempUser._id, { $set: { page: 5 } });
    }
  }

  goToAnswer()
  {
    var Users = UserData.find({}).fetch();
    for(var a=0; a<Users.length; a++)
    {
      tempUser = Users[a];
      UserData.update(tempUser._id, { $set: { page: 6 } });
    }
  }

  goToBoard()
  {
    var Users = UserData.find({}).fetch();
    for(var a=0; a<Users.length; a++)
    {
      tempUser = Users[a];
      UserData.update(tempUser._id, { $set: { page: 7 } });
    }
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

      <br/><br/><br/>

      <div align="center">
        <button className="adButt" onClick={this.reset.bind(this)}>Reset Demo</button>
        <button className="adButt" onClick={this.checkAnswers.bind(this)}>Check Ans</button>
        <button className="adButt">Show Final</button>
      </div>

      <div align="center">
        <button className="adButt" onClick={this.goToButtons.bind(this)}>Buttons</button>
        <button className="adButt" onClick={this.goToAnswer.bind(this)}>Answers</button>
        <button className="adButt" onClick={this.goToBoard.bind(this)}>Board</button>
      </div>

    </div>
    );
  }
}
//<span className="adSpan">{this.state.pageName}</span>
