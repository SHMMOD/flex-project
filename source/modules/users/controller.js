import { User } from './model';
import { Project } from '../projects/model';
import { Note } from '../notes/model';

export const getUser = async (req, res) => {
  let results = {};

  let queriedUser;
  try {
    queriedUser = await User.findById(req.params.userId)
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: true, message: 'Could not find user' })
      })
  } catch (err) {
    return res.status(500).json({ error: true, message: 'Cannot find user' });
  }
  results["user"] = queriedUser;

  let queriedProjects;
  try {
    queriedProjects = await Project.find({userId: queriedUser._id})
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: true, message: 'Could not find project' })
      })
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: true, message: 'Cannot find project' });
  }
  results["projects"] = queriedProjects;

  let queriedNotes;
  try {
    queriedNotes = await Note.find({userId: req.params.userId})
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: true, message: 'Could not find note' })
      })
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: true, message: 'Cannot find note' });
  }
  results["files"] = queriedNotes;


  res.status(200).json(results);
};

// FUNCTIONAL
// export const getUser = async (req, res) => {
//   let queriedUser;
//   try {
//     queriedUser = await User.findById(req.params.userId).populate('projects')
//       .catch(err => {
//         console.log(err);
//         res.status(400).json({ error: true, message: 'Could not find user' })
//       })
//
//     res.status(200).json(queriedUser);
//
//   } catch (err) {
//     return res.status(500).json({ error: true, message: 'Cannot find user' });
//   }
// };

// export const getUser = async (req, res) => {
//   let queriedUser;
//   try {
//     queriedUser = await User.findById(req.params.userId).populate('projects')
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({ error: true, message: 'Error with user' })
//       })
//
//     res.status(200).json(queriedUser);
//
//   } catch (err) {
//     return res.status(400).json({ error: true, message: 'Cannot find user' });
//   }
// };

// export const getUser = async (req, res) => {
//   try {
//     return res.status(200).json(await User.findById(req.params.userId));
//   } catch (err) {
//     return res.status(400).json({ error: true, message: 'Cannot find user' });
//   }
// };
