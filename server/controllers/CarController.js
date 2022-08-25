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
                    [Op.or]: ['producer', 'model']
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
            if(!cars) {
                return res.status(401).send({
                    error: 'Unauthorized'
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
            carData.UserId = req.user.id

            const dt = new Date();
            carData.createdAt = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
            carData.updatedAt = carData.createdAt

            if(!req.user.id) {
                return res.status(401).send({
                    error: 'Unauthorized'
                })
            }
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
        const carData = req.body
        const carId = req.params.carId
        const userId = req.user.id
        const dt = new Date();
        carData.updatedAt = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
        try {
            const car = await Car.update(carData, {
                where: {
                    UserId: userId,
                    id: carId
                }
            })
            if(!car) {
                return res.status(401).send({
                    error: 'Unauthorized'
                })
            }
            res.send(car)
        }
        catch (err) {
            res.status(500).send({
                error: err.message
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
        if(!car) {
            return res.status(401).send({
                error: 'Unauthorized'
            })
        }
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
            const carId = req.params.carId
            console.log(req.user.id)
            const car = await Car.findOne({
                where:{
                    UserId: req.user.id,
                    id: carId
                }
            })
            
            if(!car) {
                return res.status(401).send({
                    error: 'Unauthorized'
                })
            }
            else if(car.UserId == req.user.id)
            {
                await car.destroy()
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