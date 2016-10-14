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
  result: [{
    wod: { type: mongoose.Schema.Types.ObjectId, ref: 'Wod' },
    total: { type: Number, required: true },
    tiebreak: { type: Number, required: false, default: 0 },
    updated_at: { type: Date, default: Date.now }
  }],
  lesson: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', default: [] }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }],
  updated_at: { type: Date, default: Date.now }
});

// Create a model based on the schema
let User = mongoose.model('User', userSchema);

let movementSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true },
  modality: { type: String, default: 'other' }, // gymnastic, weightlifting, monostructure
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updated_at: { type: Date, default: Date.now }
});

let Movement = mongoose.model('Movement', movementSchema);

// { type: Array, default: [] }
let wodSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, default: '' },
  benchmark: Boolean,
  typed: { type: String, default: 'other' }, // for time, for reps, emom, tabata
  characteristic: [{
    scheme: { type: String, default: 'other' }, // couplet, triplet, chipper
    repetition: { type: String, default: 'other' }, // low, medium, high
    duration: { type: String, default: 'other' }, // low, medium, high
    load: { type: String, default: 'other' }, // light, medium, heavy
    modality: { type: String, default: 'other' } // gymnastic, weightlifting, monostructure
  }],
  wod: [{
    exercise: { type: mongoose.Schema.Types.ObjectId, ref:'Exercise' },
    reps: Number,
    weight: Number,
    unit: { type: String, default: 'kg' }
  }],
  totalduration: { type: Number, default: 0 },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updated_at: { type: Date, default: Date.now }
});

let Wod = mongoose.model('Wod', wodSchema);

let lessonSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  schedule: { type: Date, required: true, unique: true },
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

