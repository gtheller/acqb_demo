import React, { Component } from 'react';
//import { Tasks } from '../api/tasks.js';
// Task component - represents a single todo item

export default class Page3 extends Component {

  render() {

    return (
<div>

      <header>
        <h1>Your Call...</h1>
      </header>

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
  <div align="center"><button>Lock it in!</button></div>
</div>
        //<button className="text">{this.props.options.text}</button>

      //</th>

    );

  }
}
