import React, { Component } from 'react';
import Row from "./Row.js"
//import { Tasks } from '../api/tasks.js';
// Task component - represents a single todo item

export default class Leaderboard extends Component {

  render() {

/*    return (
    	<table>
      	<tr>
      		<th><div className="cell"><p>Player</p></div></th>
          <th><div className="cell"><p>Last Play</p></div></th>
          <th><div className="cell"><p>Score</p></div></th>

      	</tr>
      	<tr>
        <td><div className="cell"><p>AmandaQB</p></div></td>
        <td><div className="cell"><p>Pass Short</p></div></td>
        <td><div className="cell"><p>300</p></div></td>
        </tr>
      	<tr>
          <td><div className="cell"><p>Steve</p></div></td>
          <td><div className="cell"><p>Pass Medium</p></div></td>
          <td><div className="cell"><p>150</p></div></td>
      	</tr>
      	<tr>
          <td><div className="cell"><p>RedskinsTim</p></div></td>
          <td><div className="cell"><p>Run Middle</p></div></td>
          <td><div className="cell"><p>0</p></div></td>
      	</tr>
    	</table>
        //<button className="text">{this.props.options.text}</button>

      //</th>

    );*/
      return (
        <div>
          <Row username={"Alexa"} play={"Pass Short"} score={300} />
          <Row username={"Bobert"} play={"Pass Medium"} score={150} />
          <Row username={"Caitlin"} play={"Run Middle"} score={0} />
        </div>
      );
  }
}
