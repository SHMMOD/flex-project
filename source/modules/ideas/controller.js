const mongoose = require('mongoose');

import { Idea } from './model';

export const getIdea = async (req, res) => {
  try {
    return res.status(200).json(await Idea.findById(req.params.ideaId))
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Cannot find idea' });
  }
};

export const postIdea = async (req, res) => {
  const defaultName = req.body.fileType === 'note' ? 'New Note' : 'New Recording';

  const newIdea = new Idea({
    _id: new mongoose.Types.ObjectId(),
    fileType: req.body.fileType,
    name: defaultName,
    projectId: req.body.projectId,
    userId: req.body.userId
  });

  console.log(`New Idea: ${newIdea}`);

  let savedNewIdea;
  try {
    savedNewIdea = await newIdea.save()
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: true, message: 'Error saving idea' })
      })
      res.status(200).json(savedNewIdea);
    } catch (err) {
      res.status(err.status).json({ error: true, message: 'Error saving idea' });
  }
};

export const editIdea = async (req, res) => {
  let queriedIdea;
  try {
    queriedIdea = await Idea.findById(req.params.ideaId);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: true, message: 'Error finding project' });
  }

  console.log(`Queried Idea to Edit: ${queriedIdea}`);

  // allowable fields to update
  queriedIdea.name = req.body.name || queriedIdea.name;
  queriedIdea.body = req.body.body || queriedIdea.body;
  queriedIdea.url = req.body.url || queriedIdea.url;
  queriedIdea.favorited = req.body.favorited || queriedIdea.favorited;

  let savedIdea;
  try {
    savedIdea = await queriedIdea.save()
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: true, message: 'Error saving idea' })
      })
      // sends new project object down if it saves successfully
      res.status(200).json(savedIdea);
    } catch (err) {
      res.status(err.status).json({ error: true, message: 'Error saving idea' });
  }
};
