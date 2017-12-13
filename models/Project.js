const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: String,
  // TODO: associate with CURRENT user
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // TODO: required is not preventing the creation of user-less projects!
    required: true
  },
  // TODO: add timestamps, character limits
});

const Project = mongoose.model('projects', projectSchema);

// const project1 = new Project({
//   name: 'project1',
//   userId: '5a30b30f22350f0b8531ad93'
// }).save();
// const project2 = new Project({
//   name: 'project2',
//   userId: '5a30b30f22350f0b8531ad93'
// }).save();
// const project3 = new Project({
//   name: 'project3',
//   userId: '5a30b30f22350f0b8531ad93'
// }).save();
// const project4 = new Project({
//   name: 'project4',
//   userId: '5a30b30f22350f0b8531ad94'
// }).save();
// const project5 = new Project({
//   name: 'project5',
//   userId: '5a30b30f22350f0b8531ad95'
// }).save();
