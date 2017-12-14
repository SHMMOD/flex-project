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
};
