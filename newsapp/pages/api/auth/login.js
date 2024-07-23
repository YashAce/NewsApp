import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import  { generateToken }  from '../../../utils/jwt';

const prisma = new PrismaClient();

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    console.log('isValid', isValid)

    const token = generateToken(user);
    console.log("token", token)
    
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
