const mongoose = require('mongoose');

import { Note } from './model';

export const getNote = async (req, res) => {
  try {
    return res.status(200).json(await Note.findById(req.params.noteId))
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Cannot find note' });
  }
};
