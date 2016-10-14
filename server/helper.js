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
    getUser: getUser,
    updateUser: updateUser
  },
  lesson: {
    addUserToLesson: addUserToLesson,
    createLesson: createLesson,
    getLessonByDate: getLessonByDate,
    getLessonById: getLessonById,
    modifyLesson: modifyLesson
  },
  movement: {
    addMovement: addMovement,
    getAllMovements: getAllMovements,
    getMovement: getMovement
  },
  wod: {
    createWod: createWod,
    findWodByCreator: findWodByCreator,
    findWodByExercise: findWodByExercise,
    findWodByName: findWodByName
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
      return oldUser.save();
    })
    .then((err, updatedUser) => {
      return updatedUser;
    });
}

function createLesson(obj) {
  let newLesson = new model.lesson({
    _id: new mongoose.Types.ObjectId,
    schedule: new Date(obj.schedule), // new Date('Oct 29 2016 10:00:00 GMT-0300'),
    coach: obj.coach,
    wod: obj.wod
  });
  return newLesson.save()
    .then((err, lesson) => {
      return lesson;
    });
}

function getLessonByDate(schedule) { // pass initial date value (beginning of the day)
  // console.log(new Date(schedule), new Date(schedule + 1000 * 60 * 60 * 24));
  return model.lesson.find({"schedule": {"$gte": new Date(schedule), "$lt": new Date(schedule + 1000 * 60 * 60 * 24)}})
    .then((lesson) => {
      return lesson;
    });
}

function getLessonById(id) { // pass initial date value (beginning of the day)
  // console.log(new Date(schedule), new Date(schedule + 1000 * 60 * 60 * 24));
  return model.lesson.find({_id: id})
    .then((lesson) => {
      return lesson;
    });
}

function modifyLesson(obj) {
  return getLessonByDate(obj.schedule)
    .then((lessonArr) => {
      let lesson = lessonArr[0];
      lesson.schedule = obj.schedule;
      lesson.coach = obj.coach;
      lesson.wod = obj.wod;
      return lesson.save();
    })
    .then((err, updatedLesson) => {
      return updatedLesson;
    });
}

function addUserToLesson(id, user) {
  return getLessonById(id)
    .then((lessonArr) => {
      let lesson = lessonArr[0];
      lesson.client.push(user);
      return lesson.save();
    });
}

function addMovement(name, modality) {
  let newMovement = new model.movement({
    _id: new mongoose.Types.ObjectId,
    name: name,
    modality: modality
  });
  return newMovement.save()
    .then((movement) => {
      console.log(movement);
    });
}

function getAllMovements() {
  return model.movement.find()
    .then((movement) => {
      return movement;
    });
}

function getMovement(name) {
  return model.movement.find({name: name})
    .then((movement) => {
      return movement;
    });
}

function createWod(name, benchmark, typed, exerciseArray, total, creator) {
  let wodName = name || '';
  let newWod = new model.wod({
    _id: new mongoose.Types.ObjectId,
    name: wodName,
    typed: typed,
    wod: exerciseArray,
    totalduration: total,
    created_by: creator
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

function findWodByCreator(creator) {
  model.wod.find({created_by: creator})
  .then((wod) => {
    console.log(wod);
  });
}

// getLessonByDate(1476414000000);

// findWodByCreator('57fbf38b89e51f2562f49252');
// findWodByExercise('57ff88e9a86bb750fb4a3745');

// let a = [
//   {
//     name: 'Kettlebell Swing',
//     modality: 'weightlifting'
//   },
//   {
//     name: 'Air Squat',
//     modality: 'gymnastic'
//   },
//   {
//     name: 'Front Squat',
//     modality: 'weightlifting'
//   },
//   {
//     name: 'Overhead Squat',
//     modality: 'weightlifting'
//   },
//   {
//     name: 'Shoulder Press',
//     modality: 'weightlifting'
//   },
//   {
//     name: 'Push Press',
//     modality: 'weightlifting'
//   },
//   {
//     name: 'Deadlift',
//     modality: 'weightlifting'
//   },
//   {
//     name: 'Medicine-Ball Clean',
//     modality: 'gymnastic'
//   },
//   {
//     name: 'Sumo Deadlift High Pull',
//     modality: 'weightlifting'
//   },
//   {
//     name: 'Thruster',
//     modality: 'weightlifting'
//   },
//   {
//     name: 'Wall Ball',
//     modality: 'gymnastic'
//   },
//   {
//     name: 'Pull up',
//     modality: 'gymnastic'
//   }
// ];

// let a = [
//   {
//     name: 'Push up',
//     modality: 'gymnastic'
//   },
//   {
//     name: 'Sit up',
//     modality: 'gymnastic'
//   }
// ];

// a.map((item) => {
//   addMovement(item.name, item.modality);
// });

// ---------------------------------------------

// let a = [
//   {
//     name: 'Angie',
//     typed: 'For time',
//     created_by: '57fbf38b89e51f2562f49252',
//     wod: [
//       {
//         exercise: '57ff88e9a86bb750fb4a374f',
//         reps: 100,
//         weight: 0,
//         unit: 'kg'
//       },
//       {
//         exercise: '57ffdcd35d913858dd3e4629',
//         reps: 100,
//         weight: 0,
//         unit: 'kg'
//       },
//       {
//         exercise: '57ffdcd35d913858dd3e462a',
//         reps: 100,
//         weight: 0,
//         unit: 'kg'
//       },
//       {
//         exercise: '57ff88e9a86bb750fb4a3745',
//         reps: 100,
//         weight: 0,
//         unit: 'kg'
//       }
//     ]
//   }
// ];

// a.map((item) => {
//   createWod(item.name, true, item.typed, item.wod, 0, item.created_by);
// });

// ---------------------------------------------------

// let a = [
//   {
//     schedule: 'Oct 14 2016 9:00:00 GMT-0300',
//     coach: '57fbf38b89e51f2562f49252',
//     wod: '57ffdd2312e31058fe8699d1'
//   },
//   {
//     schedule: 'Oct 14 2016 10:00:00 GMT-0300',
//     coach: '57fbf38b89e51f2562f49252',
//     wod: '57ffdd2312e31058fe8699d1'
//   },
//   {
//     schedule: 'Oct 14 2016 11:00:00 GMT-0300',
//     coach: '57fbf38b89e51f2562f49252',
//     wod: '57ffdd2312e31058fe8699d1'
//   }
// ];

// a.map((item) => {
//   createLesson(item);
// });


