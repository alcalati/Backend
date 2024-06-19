import * as authService from './auth.service.js';

async function register(req, res) {
  const newUser = req.body;
  if (!newUser.email || !newUser.password) {
    res.status(400);
    res.json({ error: 'ERROR: The email and password params are required', });
    return;
  }

  try {
    const token = await authService.register({ newUser, });
    res.json(token);
  } catch(err) {
    res.status(400);
    res.json({ error: err.message, });
  }
}

export { register };