const app = require('express')();
const partials = require('express-partials');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const path = require('path');
const stormpath = require('express-stormpath');

const db = require('./helper.js');
let credential;

if (process.env.STORMPATH_CLIENT_APIKEY_ID) {
  credential = {
    stormpath: {
      id: process.env.STORMPATH_CLIENT_APIKEY_ID,
      secret: process.env.STORMPATH_CLIENT_APIKEY_SECRET,
      href: process.env.STORMPATH_APPLICATION_HREF
    }
  };
} else {
  credential = require('./credential.js');
}

app.use(stormpath.init(app, {
  web: {
    login: {enabled: true},
    register: {enabled: true},
    logout: {enabled: true}
  },
  apiKey: {
    id: credential.stormpath.id,
    secret: credential.stormpath.secret
  },
  application: {
    href: credential.stormpath.href
  }
}));

app.use(partials());
app.use(bodyParser.json());
app.use(serveStatic(__dirname + '/../build'));

// Constants
const PORT = process.env.PORT || 8128;

app.post('/email', (req, res) => {
  // console.log(req.body);
  db.email.addEmail(req.body.email);
  res.status(201).json(req.body);
  res.end();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.on('stormpath.ready', () => {
  const server = app.listen(PORT, () => {
    console.log('Running on http://localhost:' + PORT);
  });
});

