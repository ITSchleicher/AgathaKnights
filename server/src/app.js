import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import db from './config/Connection.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

db().then(() => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
}).catch(error => {
  console.error('Failed to connect to the database:', error);
});