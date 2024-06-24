import userModel from './users.model.js';

export async function getById({ id, }) {
  const userById = await userModel.findById(id).lean();
  return userById;
}

export async function getByEmail({ email, }) {
  const user = await userModel.findOne({ deleted: false, email, }).lean();
  return user;
}

export async function create({ user, }) {
  const newUser = await userModel.create(user);
  return newUser;
}


