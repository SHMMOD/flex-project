import { Project } from './model';

export const getProject = async (req, res) => {
  try {
    return res.status(200).json(await Project.findById(req.params.projectId))
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Cannot find project' });
  }
};
