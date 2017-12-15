import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const projectSchema = new Schema({
  name: {
    type: String,
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

// const project1 = new Project({
//   name: 'project1',
//   userId: '5a30b30f22350f0b8531ad93'
// }).save();
