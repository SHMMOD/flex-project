import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

import { User } from '../users/model';

const projectSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    default: 'New Project',
    required: true
  },
  // TODO: associate with CURRENT user
  userId: {
    type: String,
    required: true
  },
  // TODO: add timestamps, character limits
});

projectSchema.plugin(timestamps);

export const Project = mongoose.model('projects', projectSchema);




// SEED DATA
// const project1 = new Project({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'WILL NOTE DELETE 1',
//   userId: '5a3355134ecec93ed167650e'
// })
//   .save()
//   .then(function(savedProject) {
//     User.findById(savedProject.userId)
//       .then(function(user) {
//         user.projects.push(savedProject._id);
//         user.save();
//       });
//   });
//
// const project2 = new Project({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'WILL NOTE DELETE 2',
//   userId: '5a3355134ecec93ed167650e'
// })
//   .save()
//   .then(function(savedProject) {
//     User.findById(savedProject.userId)
//       .then(function(user) {
//         user.projects.push(savedProject._id);
//         user.save();
//       });
//   });
//
// const project3 = new Project({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'WILL NOTE DELETE 3',
//   userId: '5a3355134ecec93ed167650e'
// })
//   .save()
//   .then(function(savedProject) {
//     User.findById(savedProject.userId)
//       .then(function(user) {
//         user.projects.push(savedProject._id);
//         user.save();
//       });
//   });
//
// const project4 = new Project({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'WILL NOTE DELETE 4',
//   userId: '5a3355134ecec93ed167650d'
// })
//   .save()
//   .then(function(savedProject) {
//     User.findById(savedProject.userId)
//       .then(function(user) {
//         user.projects.push(savedProject._id);
//         user.save();
//       });
//   });
//
// const project5 = new Project({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'WILL NOTE DELETE 5',
//   userId: '5a3355134ecec93ed167650c'
// })
//   .save()
//   .then(function(savedProject) {
//     User.findById(savedProject.userId)
//       .then(function(user) {
//         user.projects.push(savedProject._id);
//         user.save();
//       });
//   });
//
// const project6 = new Project({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'WILL NOTE DELETE 6',
//   userId: '5a3355134ecec93ed167650c'
// })
//   .save()
//   .then(function(savedProject) {
//     User.findById(savedProject.userId)
//       .then(function(user) {
//         user.projects.push(savedProject._id);
//         user.save();
//       });
//   });


// const project7 = new Project({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'I AM NESTED INSIDE MY PARENT',
//   userId: '5a34237b1862b54b203dc81d'
// })
//   .save(function(err) {
//     if (err) return console.log(err);
//   })
//   .then(function(savedProject) {
//     User.findById(savedProject.userId)
//       .then(function(user) {
//         user.projects.push(savedProject);
//         user.save();
//       });
//   });
