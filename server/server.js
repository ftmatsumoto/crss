const app = require('express')();
const express = require('express');
const partials = require('express-partials');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const nodemailer = require('nodemailer');
const compression = require('compression');

const db = require('./helper.js');

let credential;

if (process.env.YAHOO_USER) {
  credential = {
    yahoo: {
      user: process.env.YAHOO_USER,
      pass: process.env.YAHOO_PASS
    },
    sendgrid: {
      api: process.env.SENDGRID_APIKEY
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

app.use(compression());

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
  let mailOptions = {
    from: "felipetmatsumoto@yahoo.com.br",
    to: "contato@crossfitki.com.br",
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
  // let helper = require('sendgrid').mail;
  // let from_email = new helper.Email('felipetmatsumoto@yahoo.com.br');
  // let to_email = new helper.Email('contato@crossfitki.com.br');
  // let subject = 'Hello World from the SendGrid Node.js Library!';
  // let content = new helper.Content('text/plain', 'Hello, Email!');
  // let mail = new helper.Mail(from_email, subject, to_email, content);

  // let sg = require('sendgrid')(credential.sendgrid.api);

  // let request = sg.emptyRequest({
  //   method: 'POST',
  //   path: '/v3/mail/send',
  //   body: mail.toJSON(),
  // });

  // sg.API(request, (error, response) => {
  //   console.log(response.statusCode);
  //   console.log(response.body);
  //   console.log(response.headers);
  // });

  let mailOptions = {
    from: "felipetmatsumoto@yahoo.com.br",
    to: "contato@crossfitki.com.br",
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

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

const server = app.listen(PORT, () => {
  console.log('Running on http://localhost:' + PORT);
});

// const server = app.listen(PORT, () => {
//   console.log('Running on http://localhost:' + PORT);
// });
