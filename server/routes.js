const AuthController = require('./controllers/AuthController')
const CarController = require('./controllers/CarController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const EnsureAuth = require('./controllers/EnsureAuth')

module.exports = (app) => {
    //Auth
    app.post('/register',
        AuthControllerPolicy.register,
        AuthController.register)
    app.post('/login', AuthController.login)

    //Cars
    app.get('/cars', EnsureAuth,  CarController.allCars)
    app.post('/add', EnsureAuth, CarController.addCar)
    app.get('/cars/:carId', EnsureAuth,  CarController.showCar)
    app.put('/cars/:carId', EnsureAuth,  CarController.editCar)
    app.delete('/cars/:carId', EnsureAuth, CarController.deleteCar)

}
