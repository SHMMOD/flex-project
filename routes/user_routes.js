const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {

  // GET all users
  // from: https://stackoverflow.com/questions/14103615/mongoose-get-full-list-of-users
  app.get('/api/users', function(req, res) {
    User.find({}, function(err, users) {
      var userMap = {};

      users.forEach(function(user) {
        userMap[user._id] = user;
      });

      res.send(userMap);
    });
  });

  // GET one user by ID
  app.get('/api/user/:id', function(req, res) {
    // console.log(req.params);
    User.findOne({ id: req.body.id})
      .then(userResp => res.send(userResp));
  });
};
