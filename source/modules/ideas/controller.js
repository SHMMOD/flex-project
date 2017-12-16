const mongoose = require('mongoose');

import { Idea } from './model';

export const getIdea = async (req, res) => {
  try {
    return res.status(200).json(await Idea.findById(req.params.ideaId))
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Cannot find idea' });
  }
};
