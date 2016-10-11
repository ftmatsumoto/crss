const mongoose = require('mongoose');

const db = require('./connect.js');
const model = require('./model.js');

module.exports = {
  email: {
    addEmail: addEmail,
    findAllEmail: findAllEmails
  },
  user: {
    addUser: addUser,
    updateUser: updateUser,
    getUser: getUser
  },
  movement: {
    addMovement: addMovement,
    getAllMovements: getAllMovements,
    getMovement: getMovement
  },
  wod: {
    createWod: createWod,
    findWodByName: findWodByName,
    findWodByExercise: findWodByExercise
  }
};

function addEmail(email) {
  let newEmail = new model.email({
    _id: new mongoose.Types.ObjectId,
    email: email
  });
  newEmail.save()
    .then((err, email) => {
      return email;
    });
}

function findAllEmails() {
  model.email.find((err, emails)=>{
    console.log(emails);
  });
}

function addUser(email, firstName, lastName) {
  let newUser = new model.user({
    _id: new mongoose.Types.ObjectId,
    email: email,
    firstName: firstName,
    lastName: lastName
  });
  return newUser.save()
    .then((err, user) => {
      return user;
    });
}

function getUser(email) {
  return model.user.find({email: email})
    .then((user) => {
      return user;
    });
}

function updateUser(email, firstName, lastName, address) {
  return getUser(email)
    .then((user) => {
      let oldUser = user[0];
      oldUser.firstName = firstName;
      oldUser.lastName = lastName;
      oldUser.address = address;
      oldUser.save((err, updatedUser) => {
        return updatedUser;
      });
    });
}

function addMovement(name) {
  let newMovement = new model.movement({
    _id: new mongoose.Types.ObjectId,
    name: name
  });
  newMovement.save()
    .then((movement) => {
      console.log(movement);
    });
}

function getAllMovements() {
  model.movement.find()
    .then((movement) => {
      console.log(movement);
    });
}

function getMovement(name) {
  model.movement.find({name: name})
    .then((movement) => {
      console.log(movement);
    });
}

function createWod(exerciseArray, name) {
  let wodName = name || '';
  let newWod = new model.wod({
    _id: new mongoose.Types.ObjectId,
    wod: exerciseArray,
    name: wodName
  });
  newWod.save()
    .then((wod) => {
      console.log(wod);
    });
}

function findWodByName(name) {
  model.wod.find({name: name})
    .then((wod) => {
      console.log(wod);
    });
}

function findWodByExercise(exercise) {
  model.wod.find({"wod.exercise": exercise})
  .then((wod) => {
    console.log(wod);
  });
}

// addEmail("felipe3@felipe.com.br");
// findAllEmail();
// addUser('felipetmatsumoto@yahoo.com.br');
// addMovement('Pull-up');
// getMovement('Thruster');
// getAllMovements();
// updateUser('felipetmatsumoto@yahoo.com.br', 'felipe', 'matsumoto');
// getUser('felipetmatsumoto@yahoo.com.br');
