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
    console.log(req.params.id);

    // const query = User.findOne({ '_id': `${req.params.id}` });
    // query.select('name');
    // console.log(query.select('name'));

    User.findOne({ _id: req.params.id },
      function(err, userResp) {
        if (err) return console.log(err);
        console.log('user response', userResp);
        res.send(userResp);
      }
    );
    // User.findOne({ id: req.params.id})
    //   // .populate('Project')
    //   .then(userResp => res.send(userResp));
  });
};
