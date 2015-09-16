var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _users = [];

var commentStore = objectAssign({}, EventEmitter.prototype, {

  // Get all Users direclty
  getAllUsers: function() {
    return _users;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  
});

AppDispatcher.register( function(payload) {
  var action = payload.action;
  switch (action.actionType) { 
    case appConstants.SOMEACTION:
      // Whatever Happens when this actionType Comes
      break;
    default: 
      return true
  }
})


module.exports = commentStore;
