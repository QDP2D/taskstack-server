import { Sequelize, DataTypes } from 'sequelize';

import getTaskModel from './task';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { dialect: 'postgres' }
);

const models = {
  Task: getTaskModel(sequelize, DataTypes),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
