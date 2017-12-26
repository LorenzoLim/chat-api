require('dotenv').config()
const mongoose = require('mongoose');
const db = mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@ds125126.mlab.com:25126/messages`, {useMongoClient:true});

const Schema = mongoose.Schema;
  
mongoose.Promise = Promise

const Message = mongoose.model('Message', {
  id: Number,
  username: String,
  message: String
});

module.exports = { mongoose, db, Message};
// Book.create({
//   title: 'Harry Potter',
//   author: '5a17644b6d1c9f16a425ab4c'
// }).then((result) =>{
//   console.log(result);
// })

// Author.create({
//   name: 'JKR'
// }).then((result) =>{
//   console.log(result);
// })

// { __v: 0, name: 'JKR', _id: 5a17644b6d1c9f16a425ab4c }
