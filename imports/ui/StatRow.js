import React, { Component } from 'react';

export default class StatRow extends Component {

  render() {

//return(<p>test</p>);

    return (
      <div>
        <p className="block">{this.props.username}</p>
        <p className="block">{this.props.score}</p>
        <p className="block">{this.props.total}</p>
        <p className="block">{this.props.percent}</p>
      </div>
    );
  }
}
