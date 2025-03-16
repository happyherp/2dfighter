import express from 'express';
import cors from 'cors';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 50997;

app.use(cors({
  origin: '*'
}));

app.use((req, res, next) => {
  res.header('X-Frame-Options', 'ALLOWALL');
  next();
});

app.use(express.static(__dirname));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
