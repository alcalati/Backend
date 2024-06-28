import * as usersRepository from '../users/users.repository.js';
import { compareSync, hashSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

function getToken({ email, }) {
  const payload = { email, };
  // eslint-disable-next-line no-undef
  const { AUTH_SECRET_KEY, AUTH_EXPIRES_IN, } = process.env;
  const token = jwt.sign(payload, AUTH_SECRET_KEY, {
    expiresIn: AUTH_EXPIRES_IN, // in secs
  });

  return token;
}

async function login({ email, password, }) {
  const dbUser = await usersRepository.getByEmail({ email, });
  if (!dbUser) {
    throw new Error('Wrong credentials');
  }

  const isSamePassword = compareSync(password, dbUser.password);
  if (!isSamePassword) {
    throw new Error('Wrong credentials');
  }

  return getToken({ email, });
}

async function register({ newUser, }) {
  const { email, password, } = newUser;
  const dbUser = await usersRepository.getByEmail({ email, });
  if (dbUser) {
    throw new Error('This email already exists');
  }

  const hashedPassword = hashSync(password, 10);
  newUser.password = hashedPassword;
  usersRepository.create({ user: newUser, });
  return getToken({ email, });
}


export { login, register };
