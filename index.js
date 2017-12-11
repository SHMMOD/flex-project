const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 60 * 1000, // cookie lasts 30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use (passport.session());

require('./routes/auth_routes')(app);

const PORT = process.env.port || 5000;
console.log(`listening on ${PORT}`);
app.listen(PORT);
