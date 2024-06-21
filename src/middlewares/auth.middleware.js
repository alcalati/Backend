import jwt from 'jsonwebtoken';
import { getByEmail } from '../api/users/users.service.js';

function unauthorized({ res, }) {
  res.status(401);
  res.json({ error: 'Unauthorized', });
}

function authMiddleware(req, res, next) {
  const publicRoutes = [
  ];

  if (publicRoutes.some((publicRoute) => req.url.includes(publicRoute))) {
    next();
    return;
  }

  const token = req.headers.authorization;

  if (!token) {
    unauthorized({ res, });
    return;
  }

  // eslint-disable-next-line no-undef
  const { AUTH_SECRET_KEY, } = process.env;
  jwt.verify(token, AUTH_SECRET_KEY, async (error, payload) => {
    if (error) {
      unauthorized({ res, });
      return;
    }

    const { email, } = payload;
    const loggedUser = await getByEmail({ email, });
    req.user = loggedUser;
    next();
  });
}

export default authMiddleware;
