const db = require('./connect.js');
const Email = require('./email.js');

module.exports = {
  email: {
    addEmail: addEmail,
    findAllEmail: findAllEmail
  }
};

function addEmail(email) {
  let newEmail = new Email({email: email});
  newEmail.save()
    .then((email)=>{
      console.log(email);
    });
}

function findAllEmail() {
  Email.find((err, emails)=>{
    console.log(emails);
  });
}

