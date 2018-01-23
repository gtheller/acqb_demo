import React, { Component } from 'react';

// App component - represents the whole app

export default class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      path: "images/avatar1.gif"
    };
      //this.page = new ReactiveVar(0);
      //var arr = [<Home/>,<Register/>,<Buttons/>,<Leaderboard/>];
    }

incPath()
{
  if(this.state.num > 4)
  {
    this.state.num = 4;
    this.setState({path: "images/avatar"+this.state.num+".gif"});
  }
  else
  {
    this.setState({num: this.state.num+1});
  }
  this.setState({path: "images/avatar"+this.state.num+".gif"});
  console.log(this.state.path);
}
decPath()
{
  if(this.state.num < 1)
  {
    this.state.num = 1;
    this.setState({path: "images/avatar"+this.state.num+".gif"});
  }
  else
  {
    this.setState({num: this.state.num-1});
  }
  this.setState({path: "images/avatar"+this.state.num+".gif"});
  console.log(this.state.path);
}

  render() {
    return (

      <div className="container">
      <header>Avatar</header>
        <div align="center">
          <img src="images/logo.png" alt="logo" width="100" height="100"/>
          <div>
            <p className="h1">Armchair Quarterback</p>
            <p className="h2">Choose your Avatar</p>
          </div>

          <span>
            <button className="avatarButt" onClick={this.decPath.bind(this)}>Prev</button>
            <img src={this.state.path} alt="avatar" width="400" height="600"/>
            <button className="avatarButt" onClick={this.incPath.bind(this)}>Next</button>
          </span>
        </div>

      </div>

    );

  }

}
