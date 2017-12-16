import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const noteSchema = new Schema({
  name: {
    type: String,
    default: 'New Note'
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  content: {
    type: String
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
//   projectId: '5a347bc80351924e4188b1bf'
// }).save();
// const awesomeNote = new Note({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'Awesome Note',
//   projectId: '5a347bc80351924e4188b1c0'
// }).save();
