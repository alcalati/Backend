import userModel from './users.model.js';

export async function getAll() {
  const users = await userModel
    .find({ deleted: false, })
    .lean();

  return users;
}

export async function getByEmail({ email, }) {
  const user = await userModel.findOne({ deleted: false, email, }).lean();
  return user;
}

export async function getLength() {
  const usersLength = await userModel
    .count({ deleted: false, })
    .lean();

  return usersLength;
}

export async function getByIndex({ index, }) {
  const user = await userModel
    .findOne({}).skip(index)
    .lean();

  return user;
}

export async function getById({ id, }) {
  const user = await userModel
    .findById(id)
    .lean();

  return user;
}

export async function getByFilter({ filter, }) {
  const users = await userModel
    .find({ deleted: false, ...filter, })
    .lean();

  return users;
}

export async function create({ user, }) {
  const newUser = await userModel.create(user);
  return newUser;
}

export async function replace({ id, newUser, }) {
  const query = { _id: id, };
  const options = { new: true, };
  const replacedUser = await userModel.findOneAndReplace(query, newUser, options);
  return replacedUser;
}

export async function update({ id, newProps, }) {
  const query = { _id: id, };
  const options = { new: true, };
  const updatedUser = await userModel.findOneAndUpdate(query, newProps, options);
  return updatedUser;
}

export async function markAsDeleted({ id, }) {
  const query = { _id: id, };
  const newProps = { deleted: true, };
  const deletedUser = await userModel.findOneAndUpdate(query, newProps);
  return deletedUser;
}

export async function remove({ id, }) {
  const deletedUser = await userModel.findByIdAndDelete(id);
  return deletedUser;
}
