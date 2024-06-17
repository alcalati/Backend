import mongoose from 'mongoose';

const MONGO_URL = 'mongodb+srv://acalvoatienza:XEfSY-7e5uq38Ch@sneakers.pzv3v6x.mongodb.net/';
const MONGO_DB_NAME = 'backendDB';

try {
  await mongoose.connect(MONGO_URL, { dbName: MONGO_DB_NAME, autoIndex: true, });
  console.log('Database connection successfully');
} catch(err) {
  console.error('Error at database connection');
  console.error(err);
}
