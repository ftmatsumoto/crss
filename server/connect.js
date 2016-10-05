const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let uri = process.env.MONGODB_URI || 'mongodb://localhost/crossfitki';
mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
});

module.exports = db;
