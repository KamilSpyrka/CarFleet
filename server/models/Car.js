module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
        producer: DataTypes.STRING,
        model: DataTypes.STRING,
        prodDate: DataTypes.DATE,
        purchaseDate: DataTypes.DATE,
        mileage: DataTypes.INTEGER,
    })
    Car.associate = function (models) {
        Car.belongsTo(models.User)
    }

    return Car
}