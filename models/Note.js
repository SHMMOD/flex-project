const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  name: {
    type: String,
    default: 'New Note'
  },
  projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      // TODO: required is not preventing the creation of user-less projects!
      required: true
    }
    // TODO: add timestamps, favorited
});

const Note = mongoose.model('notes', noteSchema);

// const unnamedNote = new Note({
//   _id: new mongoose.Types.ObjectId(),
//   projectId: '5a30b41cb03ae30bb1ff998c'
// }).save();
// const awesomeNote = new Note({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'Awesome Note',
//   projectId: '5a30b41cb03ae30bb1ff998c'
// }).save();
