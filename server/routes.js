const AuthController = require('./controllers/AuthController')
const CarController = require('./controllers/CarController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const CarControllerPolicy = require('./policies/CarControllerPolicy')
const EnsureAuth = require('./controllers/EnsureAuth')

module.exports = (app) => {
    //Auth
    app.post('/register',
        AuthControllerPolicy.register,
        AuthController.register)
    app.post('/login', AuthController.login)

    //Cars
    app.get('/cars',EnsureAuth, CarController.allCars)
    app.get('/cars/:carId', EnsureAuth,  CarController.showCar)
    app.delete('/cars/:carId', EnsureAuth, CarController.deleteCar)
    
    app.post('/add', EnsureAuth,
    CarControllerPolicy.validate,
    CarController.addCar)
    app.put('/cars/:carId', EnsureAuth,
    CarControllerPolicy.validate,
    CarController.editCar)



}
