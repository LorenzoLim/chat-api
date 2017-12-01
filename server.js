const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

let currentId = 2;
const genId = () => currentId++;

const messages = [
  {id: 0, username: "Bob", message: "Hello"},
  {id: 1, username: "Joe", message: "Hi"}
]

app.get('/api/messages', (req, res) => {
  res.send(messages);
});

app.post('/api/messages', (req, res) => {
  const message = req.body
  messages.push(message)
  messages[messages.length-1].id = genId()
  res.send(messages);
});


app.listen(3001, () => console.log('Example app listening on port 3001!'));
