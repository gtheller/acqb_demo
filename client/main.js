import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.js';
import '../imports/api/taunts.js';

Meteor.startup(() => {

  render(<App />, document.getElementById('render-target'));

});

Template.main.helpers({

/*	players: function () {
		return Players.find({}, { sort: { score: -1, name: 1 } });
	},
	selectedName: function () {
		var player = Players.findOne(Session.get("selectedPlayer"));
		return player && player.name;
	}
*/

});
