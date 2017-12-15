import { User } from './model';

export const getUser = async (req, res) => {
  let results = {};
  let queriedUser;

  try {
    queriedUser = await User.findById(req.params.userId)
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: true, message: 'Could not find user' })
      })
    // res.status(200).json(queriedUser);
  } catch (err) {
    return res.status(500).json({ error: true, message: 'Cannot find user' });
  }

results["user"] = queriedUser;
res.status(200).json(queriedUser);


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
