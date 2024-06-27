import * as userService from './users.service.js';

export async function addCash(req, res) {
  const { amount, } = req.body;
  const user = req.user;

  console.log(typeof amount);

  if (!amount || typeof amount !== 'number'|| amount <= 0) {
    return res.status(400).json({ error: 'Amount must be a number, and greater than 0',});
  }

  const updatedUser = await userService.addCash({ user, amount, });
  res.json(updatedUser);
}
