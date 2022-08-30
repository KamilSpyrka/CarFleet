module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define("Car", {
    producer: {
      type: DataTypes.STRING,
      required: true,
    },
    model: {
      type: DataTypes.STRING,
      required: true,
    },
    prodDate: {
      type: DataTypes.INTEGER,
      required: true,
    },
    purchaseDate: {
      type: DataTypes.DATEONLY,
      required: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    mileage: {
      type: DataTypes.INTEGER,
      required: true,
    },
    UserId: {
      type: DataTypes.UUID,
      required: true,
    },
  });
  Car.associate = function (models) {
    Car.belongsTo(models.User);
  };
  return Car;
};
