const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const { mongoose, db, Message } = require('./database')
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

let currentId = 2;
const genId = () => currentId++;
//
// const messages = [
//   {id: 0, username: "Bob", message: "Hello"},
//   {id: 1, username: "Joe", message: "Hi"}
// ]

app.get('/api/messages', (req, res) => {
  Message.find().then((messages) =>{
    res.send(messages);
  })
});

app.post('/api/messages', (req, res) => {
  const { message, username } = req.body
  console.log( `Message: ${ message } Username: ${ username }`);
  messages.unshift({message: message, username: username, id: genId()})
  res.send(messages);
});

app.listen(3001, () => console.log('Example app listening on port 3001!'));
