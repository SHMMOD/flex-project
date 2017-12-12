const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
});

mongoose.model('users', userSchema);
