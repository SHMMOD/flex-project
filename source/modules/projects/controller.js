const mongoose = require('mongoose');

import { Project } from './model';

export const getProject = async (req, res) => {
  try {
    return res.status(200).json(await Project.findById(req.params.projectId))
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

  // try {
  //   savedNewProject = newProject.save();
  // } catch (err) {
  //
  // }

  try {
    savedNewProject = await newProject.save()
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: true, message: 'Error with project' })
      })

      res.status(201).json(savedNewProject);
    } catch (err) {
      res.status(err.status).json({ error: true, message: 'Error saving project' });
  }

  // try {
  //   return res.status(201).json(savedNewProject);
  // } catch (err) {
  //   console.log("INSIDE FIRST CATCH")
  //   return res.status(err.status).json({ error: true, message: 'Error with project' });
  // }

  // try {
  //     return res.status(201).json(await newProject.save());
  //   } catch (err) {
  //     return res.status(err.status).json({ error: true, message: 'Error with project' });
  //   }

  // const newProject = new Project({
  //   _id: new mongoose.Types.ObjectId(),
  //   name: "Sample 4",
  //   userId: "5a3355134ecec93ed167650c"
  // });
  //
  // const savedNewProject = await newProject.save();
  // res.send(savedNewProject);
};
