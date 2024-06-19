import express from 'express';

import './database.js';

import authMiddleware from './src/middlewares/auth.middleware.js';

const server = express();

server.use(express.json());
server.use(authMiddleware);

const { PORT, } = process.env;
const port = PORT || 3000;
server.listen(port, () => {
  console.log(`+Project has been started at port ${port}`);
});
