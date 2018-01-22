import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';
import { Mongo } from 'meteor/mongo';
import '../imports/api/pageNum.js'
import { UserData } from '../imports/api/userCollection.js'
import '../imports/api/adminCollection.js'

/*Meteor.startup(() => {
  // code to run on server at startup

});*/

if (Meteor.isServer) {

  Meteor.startup(function() {
    return Meteor.methods({
      removeAllUsers: function() {
        return UserData.remove({});
      }
    });
  });
}
