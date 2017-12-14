const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { Schema } = mongoose;


const recordingSchema = new Schema({
  name: {
    type: String,
    default: 'New Recording'
  },
  projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true
  },
  favorited: {
    type: Boolean,
    default: false
  }
    // TODO: add timestamps, favorited
});

recordingSchema.plugin(timestamps);

const Recording = mongoose.model('recordings', recordingSchema);

// const testRecording = new Recording({
//   _id: new mongoose.Types.ObjectId(),
//   projectId: '5a30b41cb03ae30bb1ff998c',
// }).save();
