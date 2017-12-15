import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: String
  // projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
});

export const User = mongoose.model('users', userSchema);

// const omar = new User({
//   name: 'Omar'
// }).save();
// const mattH = new User({
//   name: 'Matt H'
// }).save();
// const mattS = new User({
//   name: 'Matt S'
// }).save();
