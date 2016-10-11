const mongoose = require('mongoose');

// Create a schema
let emailSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {type: String, required: true, unique: true},
  updated_at: { type: Date, default: Date.now }
});

// Create a model based on the schema
let Email = mongoose.model('Email', emailSchema);

// Create a schema
let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true, unique: true },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  address: { type: String, default: '' },
  status: { type: Boolean, default: false },
  payment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment', default: [] }],
  lesson: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', default: [] }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }],
  updated_at: { type: Date, default: Date.now }
});

// Create a model based on the schema
let User = mongoose.model('User', userSchema);

let movementSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true },
  updated_at: { type: Date, default: Date.now }
});

let Movement = mongoose.model('Movement', movementSchema);

// { type: Array, default: [] }
let wodSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, default: '' },
  wod: [{
    exercise: { type: mongoose.Schema.Types.ObjectId, ref:'Exercise' },
    reps: Number,
    weight: Number
  }],
  updated_at: { type: Date, default: Date.now }
});

let Wod = mongoose.model('Wod', wodSchema);

let lessonSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  schedule: Date,
  coach: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  wod: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wod' }],
  client: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  updated_at: { type: Date, default: Date.now }
});

let Lesson = mongoose.model('Lesson', lessonSchema);

// let Payment = new mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,

// });

module.exports = {
  email: Email,
  user: User,
  wod: Wod,
  movement: Movement,
  lesson: Lesson
};

