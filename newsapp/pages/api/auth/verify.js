import authMiddleware from '../../../middleware/auth';

const handler = async (req, res) => {
  res.status(200).json({ message: 'You have access to Zapier AI' });
};

export default authMiddleware(handler);
