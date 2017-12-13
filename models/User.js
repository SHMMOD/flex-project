const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String
  // googleId: String
  // projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
});

const User = mongoose.model('users', userSchema);

// const omar = new User({
//   name: 'Omar'
// }).save();
// const mattH = new User({
//   name: 'Matt H'
// }).save();
// const mattS = new User({
//   name: 'Matt S'
// }).save();
