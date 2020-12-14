import express from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

let todoList = ['hello', 'world'];

app.use(cors());
app.use(bodyParser.json());

app.get('/alex', (req, res) => {
  res.send(JSON.stringify(todoList));
});

app.post('/set-list', (req, res) => {
  todoList = req.body;
});

app.listen(8000, () => {
  console.log("listening");
});
