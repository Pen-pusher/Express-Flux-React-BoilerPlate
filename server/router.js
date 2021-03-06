var middleware = require('./config/middleware');
var mongoose = require('mongoose');
var index = require('./routes/index');
var User = require('./models/user');
var apiUser = require('./api/user');

module.exports = function(app) {

  // Add common middleware here
  middleware(app);

  // Database Setup
  mongoose.connect('mongodb://localhost/DatabaseName');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'mongo connection error:'));
  db.once('open', function callback () {
    console.log('connected to mongo');
  });

  // All routes
  app.use('/', index);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500).json({
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message,
      error: {}
    });
  });

};