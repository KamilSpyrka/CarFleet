const AuthController = require('./controllers/AuthController')
const ProductsController = require('./controllers/ProductsController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const EnsureAuth = require('./controllers/EnsureAuth')

module.exports = (app) => {
    //Auth
    app.post('/register',
        AuthControllerPolicy.register,
        AuthController.register)
    app.post('/login', AuthController.login)

    //Cars
    app.get('/', EnsureAuth,  ProductsController.allCars)
    app.post('/add', EnsureAuth, ProductsController.addCar)
    app.get('/cars/:carID', EnsureAuth,  ProductsController.showCar)
    app.put('/cars/:carID', EnsureAuth,  ProductsController.editCar)
    app.delete('/cars/carID', EnsureAuth, ProductsController.deleteCar)

}
