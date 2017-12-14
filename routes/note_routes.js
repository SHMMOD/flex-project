const mongoose = require('mongoose');

const Note = mongoose.model('notes');

module.exports = (app) => {
  // GET single note by ID
  app.get('/api/notes/:noteId', (req, res) => {
    Note.findById(req.params.noteId, function(err, noteResp) {
      if (err) return res.send(err);
      return res.send(noteResp);
    });
  });

  // GET all of a project's notes
  app.get('/api/projects/:projectId/notes', (req, res) => {
    Note.find({ projectId: req.params.projectId },
      function(err, notesResp) {
        if (err) return res.send(err);
        return res.send(notesResp);
      });
  });

  // POST new note
  app.post('/api/notes', (req, res) => {
    const newNote = new Note({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      projectId: req.body.projectId
    });
    newNote.save(function(err, newNoteResp) {
      if (err) return res.send(err);
      return res.send(newNoteResp);
    });
  });

  // PUT a note
  app.put('/api/notes/:noteId', (req, res) => {
    Note.findById(req.params.noteId, function(err, queryNoteResp) {
      if (err) return res.send(err);

      // allowable fields to update
      queryNoteResp.name = req.body.name || queryNoteResp.name;
      queryNoteResp.favorited = req.body.favorited || queryNoteResp.favorited;


      queryNoteResp.save(function(saveErr, savedNoteResp) {
        if (saveErr) return res.send(err);
        return res.send(savedNoteResp);
      });
    });
  });

  // DELETE a  note
  app.delete('/api/notes/:noteId', (req, res) => {
    Note.findByIdAndRemove(req.params.noteId,
      function(err, noteResp) {
        // TODO handle errors
        if (err) return res.send(err);
        // TODO: determine what to send down after a delete
        return res.send(noteResp);
      });
  });
};
