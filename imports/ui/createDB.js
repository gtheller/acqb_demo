import { Mongo } from 'meteor/mongo';

export const options  = new Mongo.Collection('options');

db.options.insert({ "_id": 1, text: "Left", createdAt: new Date() });
db.options.insert({ "_id": 2, text: "Middle", createdAt: new Date() });
db.options.insert({ "_id": 3, text: "Right", createdAt: new Date() });
db.options.insert({ "_id": 4, text: "Short", createdAt: new Date() });
db.options.insert({ "_id": 5, text: "Medium", createdAt: new Date() });
db.options.insert({ "_id": 6, text: "Long", createdAt: new Date() });
