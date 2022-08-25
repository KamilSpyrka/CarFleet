const {Car} = require('../models')
const jwt = require('jsonwebtoken')

module.exports = {
    async allCars (req, res) {
        try {
            let cars = null
            const search = req.query.search
            const { Op } = require('sequelize')
            const userId = req.user.id
            if (search) {
                cars = await Car.findAll({
                where: {
                    UserId: userId,
                    [Op.or]: ['producent', 'model']
                    .map(key => ({[key]: {
                        [Op.like]: `%${search}%`
                    }
                  }))
                }
              })
            }
            else {
                cars = await Car.findAll({
                    where: {
                        UserId: userId
                    }
                })
            }

            res.send(cars)
        }
        catch (err) {
            res.status(500).send({
                error: 'An Error has occured1'
            })
        }
    },

    async addCar (req, res) {
        try {
            const carData = req.body
            carData.userid = req.user.id
            const car = await Car.create(carData)
            res.send(car)
        }
        catch (err) {
            res.status(500).send({
                error: err.message
            })
        }
    },

    async editCar (req, res) {
        carData = req.body
        if (carData.userId == req.user.id)
        {
            try {
                const car = await Car.update(carData, {
                    where: {id: req.params.carId}
                })
                res.send(carData)
            }
            catch (err) {
                res.status(500).send({
                    error: 'An Error has occured'
                })
            }
        }
        else {
            res.status(401).send({
                error: 'Unauthorized'
            })
        }
    },
    
    async showCar (req, res) {
        try {
            const car = await Car.findOne({
                where: {
                    UserId: req.user.id,
                    id: req.params.carId
                }
            })
            res.send(car)
        }
        catch (err) {
            res.status(500).send({
                error: 'An Error has occured'
            })
        }
    },

    async deleteCar (req, res) {
        try {
            const {carId} = req.params
            const car = await Car.findOne({
                where:{
                    UserId: req.user.id,
                    id: carId
                }
            })
            if(!car) {
                return res.status(204).send({
                    error: carId
                })
            }
            if(car.userid == req.user.id)
            {
                await product.destroy()
                res.send(car)
            }
            else {
                res.status(401).send({
                    error: 'Unauthorized'
                })
            }

        }
        catch (err) {
            res.status(500).send({
                error: err.message
            })
        }
    },

}