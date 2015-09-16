var express = require('express');
var User = require('../models/user');
var router = express.Router();

// GET /api/users/
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if(err) return res(err);
    res.json({'users': users});
  })
});

// POST /api/users/
router.post('/', function(req, res) {
  var newUser = User({
    author: req.body.author,
    body: req.body.body
  });

  newUser.save(function(err, user) {
    if(err) return res(err);
    res.send(user);
  })
});

// DELETE /api/users/:id
router.delete('/:id', function(req, res, next) {
  User.remove({ _id: req.params.id }, function(err, users) {
    if(err) return res.json(err);
    res.json(users);
  })
});

module.exports = router;
