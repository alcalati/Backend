import express from 'express';
import './database.js';
import apiRouter from './src/api/router.js';

const server = express();

server.use(express.json());
server.use(apiRouter);

const { PORT, } = process.env;
const port = PORT || 3000;
server.listen(port, () => {
  console.log(`+Project has been started at port ${port}`);
});
