import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const recordingSchema = new Schema({
  name: {
    type: String,
    default: 'New Recording'
  },
  projectId: {
    type: String,
    ref: 'Project',
    required: true
  },
  userId: {
    type: String,
    ref: 'Project',
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: ' ',
    required: true
  },
  favorited: {
    type: Boolean,
    default: false
  }
});

recordingSchema.plugin(timestamps);

export const Recording = mongoose.model('recordings', recordingSchema);

// SEEDS
// const unnamedRecording = new Recording({
//   _id: new mongoose.Types.ObjectId(),
//   projectId: '5a347bc80351924e4188b1bf',
//   userId: '5a347a71217e1d4e1c0f17a6',
//   fileType: 'recording',
//   url: 'google.com'
// }).save();
// const awesomeRecording = new Recording({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'Awesome Note',
//   projectId: '5a347bc80351924e4188b1c0',
//   userId: '5a347a71217e1d4e1c0f17a6',
//   fileType: 'recording',
//   url: 'bing.com'
// }).save();
