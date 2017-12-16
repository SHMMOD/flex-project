import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const userSchema = new Schema({
  name: String,
});

userSchema.plugin(timestamps);

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
