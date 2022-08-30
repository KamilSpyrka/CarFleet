const bcrypt = require("bcrypt");

async function hashPassword(user) {
  const SALT_FACTOR = 8;

  if (!user.changed("password")) {
    return null;
  }

  const hash = await bcrypt.hash(user.password, SALT_FACTOR);
  user.setDataValue("password", hash);

  return null;
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        required: true,
      },
      lastName: {
        type: DataTypes.STRING,
        required: true,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      hooks: {
        beforeSave: hashPassword,
      },
    }
  );

  User.prototype.comparePassword = function comparePassword(password) {
    return bcrypt.compare(password, this.password);
  };

  return User;
};
