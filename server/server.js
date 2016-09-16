const app = require('express')();
const partials = require('express-partials');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const path = require('path');

app.use(partials());
app.use(bodyParser.json());
app.use(serveStatic(__dirname + '/../build'));
// const socket = require('./server/streams.js');

// Constants
const PORT = 8128;

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const server = app.listen(PORT, function(){
  // app.on('stormpath.ready', function () {
  //   console.log('\nListening at http://localhost:' + PORT);
  //   // Now bring back error logging.
  //   app.get('stormpathLogger').transports.console.level = 'error';
  // });
  console.log('Running on http://localhost:' + PORT);
});

// socket.startSocket(server);

