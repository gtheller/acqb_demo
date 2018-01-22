import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const IsAdmin = new Mongo.Collection('isAdmin');

if (Meteor.isServer)
{
  IsAdmin.remove({});
  console.log("IsAdmin added on server");
}

//Meteor.methods({
/*  'tasks.insert'(text) {
    check(text, String);

    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },

  'tasks.remove'(taskId) {
    check(taskId, String);

    const task = Tasks.findOne(taskId);

    Tasks.remove(taskId);
  },*/

/*  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    const task = Tasks.findOne(taskId);
    }

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },*/
/*  'pageNum.getVal'() {
    return PageNumber.find({name: "pageNum"}).val;
  }

  'pageNum.incNum'() {
    //const task = Tasks.findOne(taskId);
    var temp = PageNumber.find({name: "pageNum"}).val;
    PageNumber.update({ $set: { val: temp+1 } });
  },*/
//});
