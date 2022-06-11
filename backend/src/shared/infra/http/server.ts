import 'dotenv/config';
import dotenv from 'dotenv';
import express from 'express';

import { createConnection } from '../mongo';

const app = express();

app.use(express.json());

dotenv.config();
createConnection();

app.listen(3333, () => {
  console.log('HTTP server is running');
});
