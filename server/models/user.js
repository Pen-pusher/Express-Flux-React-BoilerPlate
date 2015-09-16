var mongoose = require('mongoose');

// Define User Schema
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  provider: String,
  google: {},
  facebook: {},
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);