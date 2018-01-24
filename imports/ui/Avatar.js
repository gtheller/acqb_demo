import React, { Component } from 'react';
import { UserData } from "../api/userCollection.js"

// App component - represents the whole app

export default class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      path: "images/avatar1.gif"
    };
  }

  incPath()
  {
    var temp = this.state.num;
    if(temp < 6)
    {
      this.setState({num: temp+1, path: "images/avatar"+(temp+1)+".gif"});
    }
    else
    {
      this.setState({num: 6, path: "images/avatar"+6+".gif"});
    }
    console.log(this.state.path);
  }

  decPath()
  {
    var temp = this.state.num;
    if(temp > 1)
    {
      this.setState({num: temp-1, path: "images/avatar"+(temp-1)+".gif"});
    }
    else
    {
      this.setState({num: 1, path: "images/avatar"+1+".gif"});
    }
  }

  nextPage()
  {
    var tempUser = UserData.find({clientId: this.props.clientId}).fetch()[0];
    UserData.update(tempUser._id, { $set: { page: 4 } });
  }

  render() {
    return (

      <div>
      <header>Avatar</header>
        <div align="center">
          <br/>
          <img src="images/ACQB_logo_draft.png" alt="logo" width="400" height="200"/>
          <div>
            <p className="h1">Armchair Quarterback</p>
            <p className="h2">Choose your Avatar</p>
          </div>

          <span>
            <button className="avatarButt" onClick={this.decPath.bind(this)}>Prev</button>
            <img src={this.state.path} alt="avatar" width="400" height="600"/>
            <button className="avatarButt" onClick={this.incPath.bind(this)}>Next</button>
          </span>
          <div align="center"><button onClick={this.nextPage.bind(this)} className="avatarButt">Finish</button></div>
        </div>

      </div>

    );

  }

}
