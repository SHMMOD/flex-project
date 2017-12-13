const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {

  // GET all users
  // from: https://stackoverflow.com/questions/14103615/mongoose-get-full-list-of-users
  // app.get('/api/users', function(req, res) {
  //   User.find({}, function(err, users) {
  //     var userMap = {};
  //
  //     users.forEach(function(user) {
  //       userMap[user._id] = user;
  //     });
  //
  //     res.send(userMap);
  //   });
  // });

  // GET one user by ID
  app.get('/api/users/:id', function(req, res) {
    User.findOne({ _id: req.params.id },
      function(err, userResp) {
        // TODO: handle errors
        console.log(err);
        if (err) return res.send(err);
        console.log('user response', userResp);
        // TODO: handle no user found
        res.send(userResp);
      }
    );
  });
};
