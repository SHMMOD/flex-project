const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
// const passport = require('passport');
require('./models/User');
require('./models/Project');
require('./models/Note');
require('./models/Recording');
// require('./services/passport');

let mongoURI;

if (process.env.MONGO_URI) {
  mongoURI = process.env.MONGO_URI;
} else {
  const keys = require('./config/keys');
  mongoURI = keys.mongoURI;
}

mongoose.connect(mongoURI);

const app = express();


// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 60 * 1000, // cookie lasts 30 days
//     keys: [keys.cookieKey]
//   })
// );
// app.use(passport.initialize());
// app.use (passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./routes/auth_routes')(app);
require('./routes/user_routes')(app);
require('./routes/project_routes')(app);
require('./routes/note_routes')(app);
require('./routes/recording_routes')(app);

const PORT = process.env.port || 5000;
console.log(`listening on ${PORT}`);
app.listen(PORT);
