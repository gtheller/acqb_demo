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

  componentDidMount()
  {
    var tempUser = UserData.find({clientId: this.props.clientId}).fetch()[0];
    this.setState({path: tempUser.avatar});
  }

  render() {
    return (

      <div>
      <header>Please Wait</header>
        <div align="center">
          <br/>
          <img src="images/ACQB_logo_draft.png" alt="logo" width="400" height="200"/>
          <p className="h1">Armchair Quarterback</p>

          <img src={this.state.path} alt="avatar" width="400" height="600"/>
          <br/>
          <p className="h2">Waiting for other players...</p>
        </div>

      </div>

    );

  }

}
