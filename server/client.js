// Assumes API keys are in environment variables, or stormpath.yaml
const stormpath = require('stormpath');
const credential = require('./credential.js');

const client = new stormpath.Client({
  apiKey: {
    id: credential.stormpath.id,
    secret: credential.stormpath.secret
  }
});

let href = credential.userGroup.href;

client.getGroup(href, (err, group) => {
  console.log(group);
});

module.exports = client;
