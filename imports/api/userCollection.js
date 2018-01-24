import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const UserData = new Mongo.Collection('usrdat');

if (Meteor.isServer)
{
  UserData.remove({});
}
