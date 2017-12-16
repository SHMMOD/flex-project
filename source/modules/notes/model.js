import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const noteSchema = new Schema({
  name: {
    type: String,
    default: 'New Note'
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
  body: {
    type: String,
    default: ' ',
    required: true
  },
  favorited: {
    type: Boolean,
    default: false
  }
});

noteSchema.plugin(timestamps);

export const Note = mongoose.model('notes', noteSchema);

// SEEDS
// const unnamedNote = new Note({
//   _id: new mongoose.Types.ObjectId(),
//   projectId: '5a347bc80351924e4188b1bf',
//   userId: '5a347a71217e1d4e1c0f17a6',
//   fileType: 'note',
//   body: ' '
// }).save();
// const awesomeNote = new Note({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'Awesome Note',
//   projectId: '5a347bc80351924e4188b1c0',
//   userId: '5a347a71217e1d4e1c0f17a6',
//   fileType: "note",
//   body: 'content goes here'
// }).save();
