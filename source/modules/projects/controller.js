const mongoose = require('mongoose');

import { Project } from './model';

export const getProject = async (req, res) => {
  try {
    return res.status(200).json(await Project.findById(req.params.projectId))
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Cannot find project' });
  }
};


export const getProjectsByUser = async (req, res) => {
  try {
    return res.status(200).json(await Project.find({userId: req.params.userId}))
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Cannot find project' });
  }
};


export const postProject = async (req, res) => {
  const newProject = new Project({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    userId: req.body.userId
  });

  console.log(`New Project: ${newProject}`);

  let savedNewProject;
  try {
    savedNewProject = await newProject.save()
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: true, message: 'Error with project' })
      })
      // sends new project object down if it saves successfully
      res.status(200).json(savedNewProject);
    } catch (err) {
      res.status(err.status).json({ error: true, message: 'Error saving project' });
  }
};

export const editProject = async (req, res) => {
  let queriedProject;
  try {
    queriedProject = await Project.findById(req.params.projectId);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: true, message: 'Error finding project' });
  }

  console.log(`Queried Project to Edit: ${queriedProject}`);

  // allowable fields to update
  queriedProject.name = req.body.name || queriedProject.name;

  let savedProject;
  try {
    savedProject = await queriedProject.save();
    return res.status(200).json(savedProject); 

  } catch (err) {
    res.status(400).json({ error: true, message: 'Error editing project' });
  }



};


  // let savedNewProject;
  // try {
  //   savedNewProject = await newProject.save()
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).json({ error: true, message: 'Error with project' })
  //     })
  //     // sends new project object down if it saves successfully
  //     res.status(200).json(savedNewProject);
  //   } catch (err) {
  //     res.status(err.status).json({ error: true, message: 'Error saving project' });
  // }
