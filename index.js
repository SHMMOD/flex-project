const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Project');
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./routes/auth_routes')(app);
require('./routes/user_routes')(app);
require('./routes/project_routes')(app);

const PORT = process.env.port || 5000;
console.log(`listening on ${PORT}`);
app.listen(PORT);
