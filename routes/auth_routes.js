const passport =  require('passport');

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


};
