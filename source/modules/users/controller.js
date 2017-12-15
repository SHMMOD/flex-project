import { User } from './model';

export const getUser = async (req, res) => {
  try {
    return res.status(200).json(await User.findById(req.params.userId))
  } catch (err) {
    return res.status(400).json({ error: true, message: 'Cannot find user' });
  }
};
