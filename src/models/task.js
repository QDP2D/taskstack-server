const getTaskModel = (sequelize, DataTypes) => {
  const Task = sequelize.define('task', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Task.findByName = async (name) => {
    let task = await Task.findOne({
      where: { name },
    });
    return task;
  };

  return Task;
};

export default getTaskModel;
