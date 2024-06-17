import express from 'express';

import './database.js';

const server = express();

server.use(express.json());

const { PORT, } = process.env;
const port = PORT || 3000;
server.listen(port, () => {
  console.log(`+Project has been started at port ${port}`);
});
