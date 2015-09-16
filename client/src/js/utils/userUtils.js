var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var request = require('superagent');

var userUtils = {
// Add a user by passing new User. Hits the API and adds on server 
// and then dispatches the deleted data for stores to update
  addUser: function(newUser) {
    request.post('/api/users').send(newUser).set('Accept', 'application/json')
    .end(function(err, res) {
      AppDispatcher.handleAction({
        actionType: appConstants.ADD_USER,
        data: res.body
      })
    });
  },

// Delete a user by Id. Hits the API and deletes from server 
// and then dispatches the deleted ID for stores to update
  deleteUser: function(id) {
    request.del('/api/users/'+ id).set('Accept', 'application/json').end(function(err) {
      AppDispatcher.handleAction({
        actionType: appConstants.DELETE_USER,
        data: id
      })
    });
  }

};

module.exports = userUtils;