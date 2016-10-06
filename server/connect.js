const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let uri;
console.log(process.env.NODE_ENV, process.env.MONGODB_URI);
if (process.env.NODE_ENV === 'production') {
  uri = process.env.MONGODB_URI;
} else {
  uri = 'mongodb://localhost/crossfitki';
}
mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
});

module.exports = db;
