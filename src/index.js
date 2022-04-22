import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './routes';
import models, { sequelize } from './models';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/tasks', routes.task);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const resetDB = false

sequelize.sync({force: resetDB}).then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}!`);
    });
  });
