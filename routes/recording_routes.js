const mongoose = require('mongoose');

const Recording = mongoose.model('recordings');

module.exports = (app) => {
  // GET single note by ID
  app.get('/api/recordings/:recordingId', (req, res) => {
    Recording.findById(req.params.recordingId, function(err, recordingResp) {
      if (err) return res.send(err);
      return res.send(recordingResp);
    });
  });

  // GET all of a project's recordings
  app.get('/api/projects/:projectId/recordings', (req, res) => {
    Recording.find({ projectId: req.params.projectId },
      function(err, recordingsResp) {
        if (err) return res.send(err);
        return res.send(recordingsResp);
      });
  });

  // POST new note
  app.post('/api/recordings', (req, res) => {
    const newRecording = new Recording({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      projectId: req.body.projectId
    });
    newRecording.save(function(err, newRecordingResp) {
      if (err) return res.send(err);
      return res.send(newRecordingResp);
    });
  });

  // PUT a note
  app.put('/api/recordings/:recordingId', (req, res) => {
    Recording.findById(req.params.recordingId, function(err, queryRecordingResp) {
      console.log("query error:", err);
      if (err) return res.send(err);

      // allowable fields to update
      queryRecordingResp.name = req.body.name || queryRecordingResp.name;
      queryRecordingResp.favorited = req.body.favorited || queryRecordingResp.favorited;

      queryRecordingResp.save(function(saveErr, savedRecordingResp) {
        console.log("save error:", saveErr);
        if (saveErr) return res.send(saveErr);
        return res.send(savedRecordingResp);
      });
    });
  });

  // DELETE a  note
  app.delete('/api/recordings/:recordingId', (req, res) => {
    Recording.findByIdAndRemove(req.params.recordingId,
      function(err, recordingResp) {
        // TODO handle errors
        if (err) return res.send(err);
        // TODO: determine what to send down after a delete
        return res.send(recordingResp);
      });
  });
};
