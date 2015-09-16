var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var userUtils = require('../utils/userUtils');

var UserActions = {

  createUser: function(newUser) {
    // Call the Utility function, that interacts with server . Pass the newUser object
    // This Utility function also dispatches data.
    userUtils.addUser(newUser);
  },

  deleteUser: function(id) {
    // Call the Utility function, that interacts with server . Pass the id of object to be deleted.
    // This Utility function also dispatches data.
    userUtils.deleteUser(id);
  }
  
}

module.exports = UserActions;