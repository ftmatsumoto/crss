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
  expand: {
    groups: true
  },
  web: {
    login: {
      enabled: true,
      nextUri: '/profile',
    },
    register: {
      enabled: true,
      uri: '/register',
      nextUri: '/profile',
      form: {
        fields: {
          givenName: {
            enabled: true,
            label: 'Nome',
            placeholder: 'Nome',
            required: true
          },
          surname: {
            enabled: true,
            label: 'Sobrenome',
            placeholder: 'Sobrenome',
            required: true
          },
          password: {
            enabled: true,
            label: 'Senha',
            placeholder: 'Senha',
            required: true,
          }
        }
      }
    },
    logout: {enabled: true},
    me: {
      expand: {
        groups: true
      }
    }
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
  db.email.addEmail(req.body.email);
  res.status(201).json(req.body);
  res.end();
});

// app.get('/me', stormpath.loginRequired, (req, res) => {
//   res.status(201).json(req.body);
//   res.end();
// });

app.get('/initialdata', stormpath.loginRequired, (req, res) => {
  req.user.getGroups({name: 'admin'}, (err, groups) => {
    console.log(groups);
  });
  console.log(req.user.groups);
  db.user.getUser(req.user.email)
    .then((user) => {
      if (user.length === 0) {
        return db.user.addUser(req.user.email, req.user.givenName, req.user.surname);
      } else {
        return user[0];
      }
    })
    .then((user) => {
      res.status(200).json(user);
      res.end();
    });
});

app.put('/update', stormpath.loginRequired, (req, res) => {
  req.user.givenName = req.body.name;
  req.user.save((err) => {
    if (err) {
      res.status(400).end('Oops!  There was an error: ' + err.userMessage);
    } else {
      res.status(201).json(req.user);
      res.end();
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.on('stormpath.ready', () => {
  const server = app.listen(PORT, () => {
    console.log('Running on http://localhost:' + PORT);
    // db.email.findAllEmail();
  });
});

