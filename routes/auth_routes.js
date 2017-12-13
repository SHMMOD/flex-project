const passport =  require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/auth/google',
  //string google is internally identified in google oauth
  passport.authenticate('google',{
    // scope specifies to google what access we want to have
    //google also has internally a list of scopes
    scope: ['profile','email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google') );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user); // comes back as undefined
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  // returns all users
  // from: https://stackoverflow.com/questions/14103615/mongoose-get-full-list-of-users
  app.get('/usersList', function(req, res) {
    User.find({}, function(err, users) {
      var userMap = {};

      users.forEach(function(user) {
        userMap[user._id] = user;
      });

      res.send(userMap);
    });
  });

};
