import React, { Component } from 'react';

export default class Row extends Component {

  render() {

//return(<p>test</p>);

    return (
      <div>
        <p className="block">{this.props.username}</p>
        <p className="block">{this.props.play}</p>
        <p className="block">{this.props.score}</p>
      </div>
    );
  }
}
