import userModel from './users.model.js';

export async function getByEmail({ email, }) {
  const user = await userModel.findOne({ deleted: false, email, }).lean();
  return user;
}

export async function create({ user, }) {
  const newUser = await userModel.create(user);
  return newUser;
}

export async function addCash({ userId, amount, }) {
  const options = { new: true,};
  const updatedUser = await userModel.findByIdAndUpdate(
    userId,
    { $set: { cash: amount, },},
    options
  );
  return updatedUser;
}

export async function subtractCash({userId, amount,}) {
  return userModel.findByIdAndUpdate(userId, { $inc: { cash: -amount,},}, { new: true,});
}