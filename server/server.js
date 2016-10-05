const app = require('express')();
const partials = require('express-partials');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const path = require('path');

// const db = require('./connect');
const db = require('./helper.js');

app.use(partials());
app.use(bodyParser.json());
app.use(serveStatic(__dirname + '/../build'));

// Constants
const PORT = 8128;

app.post('/email', (req, res) => {
  // console.log(req.body);
  db.email.addEmail(req.body.email);
  res.status(201).json(req.body);
  res.end();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const server = app.listen(PORT, () => {
  console.log('Running on http://localhost:' + PORT);
});

