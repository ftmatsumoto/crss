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

app.get('/userprofile', stormpath.loginRequired, (req, res) => {
  db.user.getUserByEmail(req.user.email)
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

app.put('/userprofile', stormpath.loginRequired, (req, res) => {
  req.user.givenName = req.body.name;
  req.user.save()
    .then((err) => {
      if (err) {
        res.status(400).end('Oops! There was an error: ' + err.userMessage);
      } else {
        res.status(201).json(req.user);
        res.end();
      }
    });
});

app.get('/exercises', stormpath.loginRequired, (req, res) => {
  db.movement.getAllMovements()
    .then((movements) => {
      res.status(200).json(movements);
      res.end();
    });
});

app.get('/classes', stormpath.loginRequired, (req, res) => {
  let result = {};
  db.lesson.getLessonByDate(Number(req.query.q))
    .then((lesson) => {
      result.allLessons = lesson;
      return db.user.getUserByEmail(req.query.email);
    })
    .then((userId) => {
      return db.lesson.getCheckedLessons(userId[0]._id, Number(req.query.q));
    })
    .then((checked) => {
      result.checkedLessons = checked;
      res.status(200).json(result);
      res.end();
    });
});

app.get('/results', stormpath.loginRequired, (req, res) => {
  db.user.getUserByEmail(req.query.email)
    .then((userArr) => {
      let user = userArr[0];
      res.status(200).json(user);
      res.end();
    });
});

app.put('/checkin', stormpath.loginRequired, (req, res) => {
  let userId, schedule;
  let result = {};
  db.user.getUserByEmail(req.body.email)
    .then((userArr) => {
      userId = userArr[0].id;
      return req.body.checked ? db.lesson.removeUserFromLesson(req.body.classId, userId) : db.lesson.addUserToLesson(req.body.classId, userId);
    })
    .then(() => {
      if (req.body.otherclass.length !== 0) {
        return db.user.removeResultFromUser(userId, req.body.otherclass[0]._id);
      }
    })
    .then(() => {
      if (req.body.otherclass.length !== 0) {
        return db.lesson.removeUserFromLesson(req.body.otherclass[0]._id, userId);
      }
    })
    .then(() => {
      return db.lesson.getLessonById(req.body.classId);
    })
    .then((lessonArr) => {
      let lesson = lessonArr[0];
      schedule = lesson.schedule;
      return db.wod.getWodById(lesson.wod);
    })
    .then((wod) => {
      return req.body.checked ? db.user.removeResultFromUser(userId, req.body.classId) : db.user.addResultToUser(userId, wod[0], req.body.classId, schedule);
    })
    .then(() => {
      return db.lesson.getCheckedLessons(userId, req.body.t);
    })
    .then((checked) => {
      result.checked = checked;
      return db.lesson.getLessonByDate(req.body.t);
    })
    .then((lesson) => {
      result.lesson = lesson;
      res.status(200).json(result);
      res.end();
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.on('stormpath.ready', () => {
  const server = app.listen(PORT, () => {
    console.log('Running on http://localhost:' + PORT);
  });
});

