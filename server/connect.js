const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


let uri;
console.log(react_app_env.NODE_ENV, react_app_env.MONGODB_URI);
if (react_app_env.NODE_ENV === 'production') {
  uri = react_app_env.MONGODB_URI;
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
