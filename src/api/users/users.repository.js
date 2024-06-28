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

export async function update({ id, user, }) {
  // esto lo hace paulo
  console.log('{ Users Repository } Cambiando el saldo del Usuario');
  // Aqui tengo que hacer algo
  const query = { _id: id, };
  const options = { new: true, };
  const updatedUser = await userModel.findOneAndUpdate(query, user, options);
  console.log('{ Users Repository } Usuario Actualizado ' + updatedUser);
  return updatedUser;
}

