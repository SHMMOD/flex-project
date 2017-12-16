const mongoose = require('mongoose');

import { Recording } from './model';

export const getRecording = async (req, res) => {
  try {
    return res.status(200).json(await Recording.findById(req.params.recordingId))
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Cannot find note' });
  }
};
