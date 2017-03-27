const app = require('express')();
const express = require('express');
const partials = require('express-partials');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const stormpath = require('express-stormpath');
const nodemailer = require('nodemailer');

const db = require('./helper.js');

let credential;

if (process.env.STORMPATH_CLIENT_APIKEY_ID) {
  credential = {
    stormpath: {
      id: process.env.STORMPATH_CLIENT_APIKEY_ID,
      secret: process.env.STORMPATH_CLIENT_APIKEY_SECRET,
      href: process.env.STORMPATH_APPLICATION_HREF
    },
    yahoo: {
      user: process.env.YAHOO_USER,
      pass: process.env.YAHOO_PASS
    }
  };
} else {
  credential = require('./credential.js');
}

let transporter = nodemailer.createTransport({
  service: "Yahoo",
  host: "smtp.mail.yahoo.com",
  auth: {
    user: credential.yahoo.user,
    pass: credential.yahoo.pass
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

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
app.use(express.static(__dirname + '/../build'));

// Constants
const PORT = process.env.PORT || 8128;

app.post('/email', (req, res) => {
  db.email.findEmail(req.body.email)
    .then((email) => {
      let resObj = {};
      if (email.length === 0) {
        db.email.addEmail(req.body.email);
        resObj.success = true;
      } else {
        resObj.success = false;
      }
      resObj.email = req.body.email;
      res.status(201).json(resObj);
      res.end();
    });
});

app.post('/contact-us', (req,res) => {
  console.log(req.body.firstValue, req.body.lastValue, req.body.emailValue, req.body.msgValue);
  let mailOptions = {
    from: "felipetmatsumoto@yahoo.com.br",
    to: "admin@crossfitki.com.br",
    subject: "Contato pelo site",
    generateTextFromHTML: true,
    html: `Nome: ${req.body.firstValue}<br>
           Sobrenome: ${req.body.lastValue}<br>
           Email: ${req.body.emailValue}<br>
           Mensagem: ${req.body.msgValue}<br>`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.status(201);
  res.end();
});


app.post('/aula-experimental', (req,res) => {
  console.log(req.body.firstValue, req.body.lastValue, req.body.emailValue, req.body.phoneValue, req.body.dateValue, req.body.timeValue);
  let mailOptions = {
    from: "felipetmatsumoto@yahoo.com.br",
    to: "admin@crossfitki.com.br",
    subject: "Aula experimental",
    generateTextFromHTML: true,
    html: `Nome: ${req.body.firstValue}<br>
           Sobrenome: ${req.body.lastValue}<br>
           Email: ${req.body.emailValue}<br>
           Telefone: ${req.body.phoneValue}<br>
           Data: ${req.body.dateValue}<br>
           Horário: ${req.body.timeValue}`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.status(201);
  res.end();
});

app.get('/blog', (req, res) => {
  res.status(301).redirect('http://blog.crossfitki.com.br');
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

app.get('/results', stormpath.loginRequired, (req, res) => {
  db.user.getUserByEmail(req.query.email)
    .then((userArr) => {
      let user = userArr[0];
      res.status(200).json(user);
      res.end();
    });
});

app.get('/classes', stormpath.loginRequired, (req, res) => {
  let result = {};
  db.lesson.getLessonByDate(Number(req.query.q))
    .then((lesson) => {
      result.allLessons = lesson;
      result.lessonArray = lesson.map((lesson) => {
        return lesson._id;
      });
      return db.user.getUserByEmail(req.query.email);
    })
    .then((userArr) => {
      return db.user.getCheckedLessons(userArr[0]._id, result.lessonArray);
    })
    .then((checked) => {
      result.checkedLessons = (checked.length === 0) ? [] : [checked[0].result[0].lesson];
      res.status(200).json(result);
      res.end();
    });
});

app.get('/checkedusers', stormpath.loginRequired, (req, res) => {
  db.user.getCheckedUsers(req.query.q)
    .then((result) => {
      res.status(200).json(result);
      res.end();
    });
});

app.put('/checkin', stormpath.loginRequired, (req, res) => {
  let userId;
  let result = {};
  db.user.getUserByEmail(req.body.email)
    .then((userArr) => {
      userId = userArr[0]._id;
      return db.wod.getWodById(req.body.wod);
    })
    .then((wod) => {
      if (req.body.otherCFLesson[0] !== req.body.classId) {
        // result is an array, but wod is an object
        return db.user.addResultToUser(userId, wod[0], req.body.classId, req.body.schedule);
      }
    })
    .then(() => {
      if (req.body.otherCFLesson.length !== 0) {
        return db.user.removeResultFromUser(userId, req.body.otherCFLesson[0]);
      }
    })
    .then(() => {
      return db.user.getCheckedUsers(req.body.classId);
    })
    .then((usersChecked) => {
      result.usersChecked = usersChecked;
      return db.user.getCheckedLessons(userId, req.body.allLessons);
    })
    .then((checked) => {
      result.checkedLessons = (checked.length === 0) ? [] : [checked[0].result[0].lesson];
      res.status(200).json(result);
      res.end();
    });
});

app.get('/payment', (req, res) => {
  let url = 'https://ws.sandbox.pagseguro.uol.com.br/v2/sessions/';
  request
    .post(url)
    .form({email: 'admin@crossfitki.com.br', token: 'DC0FAEAA97934B62BC30656A820CC573'})
    // .pipe('test.xml');
    .on('response', function(response) {
      response.on('data', (chunk) => {
        console.log(chunk.toString('ascii'));
        res.status(200).send(chunk.toString('ascii'));
      });
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.on('stormpath.ready', () => {
  const server = app.listen(PORT, () => {
    console.log('Running on http://localhost:' + PORT);
  });
});

// const server = app.listen(PORT, () => {
//   console.log('Running on http://localhost:' + PORT);
// });
