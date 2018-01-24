import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const IsAdmin = new Mongo.Collection('isAdmin');

if (Meteor.isServer)
{
  IsAdmin.remove({});
}
