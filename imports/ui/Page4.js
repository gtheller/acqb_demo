import React, { Component } from 'react';
//import { Tasks } from '../api/tasks.js';
// Task component - represents a single todo item

export default class Page4 extends Component {

  render() {

    return (
<div>
  <header>
    <h1>Leaderboard</h1>
  </header>

	<table class="board">
	<tr>
		<th class="category"><font size="5">Player</font></th>
    <th><font size="5">Last Play</font></th>
    <th><font size="5">Score</font></th>
    <br/><br/><br/><br/>
	</tr>
	<tr>
  <td><font size="5">AmandaQB</font></td>
  <td><font size="5">Pass-Short</font></td>
  <td><font size="5">300</font></td>
  <br/><br/>
  </tr>
	<tr>
    <td><font size="5">Steve</font></td>
    <td><font size="5">Pass-Long</font></td>
    <td><font size="5">0</font></td>
    <br/><br/>
	</tr>
	<tr>
    <td><font size="5">RedskinsTim</font></td>
    <td><font size="5">Run-Middle</font></td>
    <td><font size="5">0</font></td>
    <br/><br/>
	</tr>
	</table>
</div>
    );

  }
}
