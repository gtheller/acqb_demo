import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import '../imports/api/pageNum.js'
import { UserData } from '../imports/api/userCollection.js'
import { IsAdmin } from '../imports/api/adminCollection.js'
import '../imports/api/adminCollection.js'

/*Meteor.startup(() => {
  // code to run on server at startup

});*/

if (Meteor.isServer) {

  Meteor.startup(function() {
    return Meteor.methods({
      removeAllUsers: function() {
        return UserData.remove({});
      },
      removeAllAdmins: function() {
        return IsAdmin.remove({});
      }
    });
  });
}
