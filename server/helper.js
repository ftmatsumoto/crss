const mongoose = require('mongoose');

const db = require('./connect.js');
const model = require('./model.js');

module.exports = {
  email: {
    addEmail: addEmail,
    findEmail: findEmail,
    getAllEmail: getAllEmails
  },
  user: {
    addUser: addUser,
    addResultToUser: addResultToUser,
    getAllUsers: getAllUsers,
    getCheckedLessons: getCheckedLessons,
    getCheckedUsers: getCheckedUsers,
    getUserByEmail: getUserByEmail,
    removeResultFromUser: removeResultFromUser,
    updateUser: updateUser
  },
  lesson: {
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
    getWodByCreator: getWodByCreator,
    getWodByExercise: getWodByExercise,
    getWodById: getWodById,
    getWodByName: getWodByName
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

function findEmail(email) {
  return model.email.find({email: email});
}

function getAllEmails() {
  return model.email.find();
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

function addResultToUser(userId, wod, classId, schedule) {
  return model.user.update(
    {
      _id: userId
    },
    {
      $addToSet: {
        result: {
          wod: wod,
          lesson: classId,
          rx: true,
          total: 0,
          executed_at: schedule
        }
      }
    }
  )
  .then(() => {
    return model.user.find({_id: userId});
  });
}

function removeResultFromUser(userId, classId) {
  return model.user.update(
    {
      _id: userId
    },
    {
      $pull: {
        result: {lesson: classId}
      }
    }
  )
  .then(() => {
    return model.user.find({_id: userId});
  });
}

function getAllUsers() {
  return model.user.find();
}

function getUserByEmail(email) {
  return model.user.find({email: email});
}

function updateUser(email, firstName, lastName, address) {
  return getUserByEmail(email)
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

function getCheckedLessons(clientId, lessonArray) {
  return model.user.find(
    {
      $and: [
        { _id: clientId },
        { result: {$elemMatch: {lesson: {$in: lessonArray}}} }
      ]
    }
  );
}

function getCheckedUsers(classId) {
  return model.user.find(
    {
      result: {
        $elemMatch: {
          lesson: classId
        }
      }
    }
  );
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
  return model.lesson.find(
    {"schedule": {"$gte": new Date(schedule), "$lt": new Date(schedule + 1000 * 60 * 60 * 24)}}
  );
}

function getLessonById(lessonId) {
  return model.lesson.find({_id: lessonId});
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

function addMovement(name, modality) {
  let newMovement = new model.movement({
    _id: new mongoose.Types.ObjectId,
    name: name,
    modality: modality
  });
  return newMovement.save()
    .then((movement) => {
      return movement;
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
    exercise_set: exerciseArray,
    totalduration: total,
    created_by: creator
  });
  return newWod.save();
}

function getWodById(wodId) {
  return model.wod.find({_id: wodId});
}

function getWodByName(name) {
  return model.wod.find({name: name});
}

function getWodByExercise(exercise) {
  return model.wod.find({"wod.exercise": exercise});
}

function getWodByCreator(creator) {
  return model.wod.find({created_by: creator});
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
//     exercise_set: [
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
//   createWod(item.name, true, item.typed, item.exercise_set, 0, item.created_by);
// });

// ---------------------------------------------------

// let a = [
//   {
//     schedule: 'Oct 15 2016 12:00:00 GMT-0300',
//     coach: '57fbf38b89e51f2562f49252',
//     wod: '580ace9e6a779a5e269c8762'
//   },
//   {
//     schedule: 'Oct 15 2016 13:00:00 GMT-0300',
//     coach: '57fbf38b89e51f2562f49252',
//     wod: '580ace9e6a779a5e269c8762'
//   },
//   {
//     schedule: 'Oct 15 2016 14:00:00 GMT-0300',
//     coach: '57fbf38b89e51f2562f49252',
//     wod: '580ace9e6a779a5e269c8762'
//   },
//   {
//     schedule: 'Oct 16 2016 9:00:00 GMT-0300',
//     coach: '57fbf38b89e51f2562f49252',
//     wod: '580ace9e6a779a5e269c8762'
//   },
//   {
//     schedule: 'Oct 16 2016 10:00:00 GMT-0300',
//     coach: '57fbf38b89e51f2562f49252',
//     wod: '580ace9e6a779a5e269c8762'
//   },
//   {
//     schedule: 'Oct 16 2016 11:00:00 GMT-0300',
//     coach: '57fbf38b89e51f2562f49252',
//     wod: '580ace9e6a779a5e269c8762'
//   }
// ];

// a.map((item) => {
//   createLesson(item);
// });


