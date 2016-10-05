const mongoose = require('mongoose');

// Create a schema
var emailSchema = new mongoose.Schema({
  email: {type: String, required: true, index: {unique: true}},
  updated_at: { type: Date, default: Date.now },
});

// Create a model based on the schema
var Email = mongoose.model('Email', emailSchema);

module.exports = Email;
