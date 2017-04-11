const mongoose = require('mongoose');

// Create a schema
let emailSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {type: String, required: true, unique: true},
  updated_at: { type: Date, default: Date.now }
});

// Create a model based on the schema
let Email = mongoose.model('Email', emailSchema);

let scheduleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {type: String, required: true, unique: true},
  sobrenome: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  telefone: {type: String, required: true, unique: true},
  data: {type: Date, required: true, unique: true},
  horário: {type: String, required: true, unique: true},
  updated_at: { type: Date, default: Date.now }
});

// Create a model based on the schema
let Schedule = mongoose.model('Schedule', scheduleSchema);

let contactSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {type: String, required: true, unique: true},
  sobrenome: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  mensagem: {type: String, required: true, unique: true},
  updated_at: { type: Date, default: Date.now }
});

// Create a model based on the schema
let Contact = mongoose.model('Contact', contactSchema);

let movementSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true },
  modality: { type: String, default: 'other' }, // gymnastic, weightlifting, monostructure
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updated_at: { type: Date, default: Date.now }
});

let Movement = mongoose.model('Movement', movementSchema);

let wodSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, default: '' },
  scoring: { type: String, default: 'other' }, // for time, for reps, for load, emom, tabata
  characteristic: {
    scheme: { type: String, default: 'other' }, // couplet, triplet, chipper
    repetition: { type: String, default: 'other' }, // low, medium, high
    duration: { type: String, default: 'other' }, // low, medium, high
    load: { type: String, default: 'other' }, // light, medium, heavy
    modality: { type: String, default: 'other' }, // gymnastic, weightlifting, monostructural
    category: { type: String, default: 'other' } // open, girls, heroes, tournament x, y or z...
  },
  exercise_set: [{
    exercise: { type: mongoose.Schema.Types.ObjectId, ref:'Exercise' },
    reps: Number,
    weight: Number,
    unit: { type: String, default: 'kg' }
  }],
  limit: { type: Number, default: 0 }, // total time, number of rounds, reps, etc...
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updated_at: { type: Date, default: Date.now }
});

let Wod = mongoose.model('Wod', wodSchema);

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
    wod: wodSchema,
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
    comment: { type: String, required: false, maxLength: 255 },
    rx: { type: Boolean, default: true },
    score: { type: Number, required: true },  // number of reps, total time in miliseconds, total weight, number of rounds
    tiebreak: { type: Number, required: false },
    executed_at: { type: Date, required: true },
    updated_at: { type: Date, default: Date.now }
  }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }],
  updated_at: { type: Date, default: Date.now }
});

// Create a model based on the schema
let User = mongoose.model('User', userSchema);

let lessonSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category: {type: String, required: false },
  schedule: { type: Date, required: true, unique: true },
  coach: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  wod: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wod' }],
  updated_at: { type: Date, default: Date.now }
});

let Lesson = mongoose.model('Lesson', lessonSchema);

// let Payment = new mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,

// });

module.exports = {
  email: Email,
  schedule: Schedule,
  contact: Contact,
  user: User,
  wod: Wod,
  movement: Movement,
  lesson: Lesson
};

