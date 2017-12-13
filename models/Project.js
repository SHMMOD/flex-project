const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: String,
  // TODO: associate with CURRENT user
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // TODO: required is not preventing the creation of user-less projects!
    required: true
  },

});

const Project = mongoose.model('projects', projectSchema);

// const project1 = new Project({
//   name: 'project1'
// }).save();
// const project2 = new Project({
//   name: 'project2'
// }).save();
// const project3 = new Project({
//   name: 'project3'
// }).save();
// const project4 = new Project({
//   name: 'project4'
// }).save();
// const project5 = new Project({
//   name: 'project5'
// }).save();
// const project6 = new Project({
//   name: 'project5'
// }).save();
