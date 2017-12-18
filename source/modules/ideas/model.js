import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const ideaSchema = new Schema({
  fileType: {
    type: String,
    enum: ['note', 'recording'],
    required: true
  },
  name: {
    type: String,
    required: true
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
  body: {
    type: String,
    default: ' ',
  },
  url: {
    type: String,
    default: ' '
  },
  fileName: {
    type: String,
    default: ' ' 
  },
  favorited: {
    type: Boolean,
    default: false
  }
});

ideaSchema.plugin(timestamps);

export const Idea = mongoose.model('ideas', ideaSchema);

// SEEDS
// const idea1 = new Idea({
//   _id: new mongoose.Types.ObjectId(),
//   fileType: 'note',
//   name: 'Seeded Note 1',
//   projectId: '5a347bc80351924e4188b1bf',
//   userId: '5a347a71217e1d4e1c0f17a6',
//   body: ' '
// }).save(function(err) {
//   console.log(err);
// });
// const idea2 = new Idea({
//   _id: new mongoose.Types.ObjectId(),
//   fileType: 'note',
//   name: 'Seeded Note 2',
//   projectId: '5a347bc80351924e4188b1c0',
//   userId: '5a347a71217e1d4e1c0f17a6',
//   body: 'content goes here'
// }).save();
// const idea3 = new Idea({
//   _id: new mongoose.Types.ObjectId(),
//   fileType: 'recording',
//   name: 'Seeded Idea 1',
//   projectId: '5a347bc80351924e4188b1c0',
//   userId: '5a347a71217e1d4e1c0f17a6',
//   url: 'bing.com'
// }).save();
// const idea4 = new Idea({
//   _id: new mongoose.Types.ObjectId(),
//   fileType: 'recording',
//   name: 'Seeded Recording 2',
//   projectId: '5a347bc80351924e4188b1c0',
//   userId: '5a347a71217e1d4e1c0f17a6',
//   url: 'google.com'
// }).save();
