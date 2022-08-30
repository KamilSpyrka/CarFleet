const authController = require("./controllers/authController");
const carController = require("./controllers/carController");
const authControllerPolicy = require("./policies/authControllerPolicy");
const carControllerPolicy = require("./policies/carControllerPolicy");
const ensureAuth = require("./middleware/ensureAuth");

module.exports = (app) => {
  //Auth
  app.post("/api/register", authControllerPolicy.validate, authController.register);
  app.post("/api/login", authController.login);

  //Cars
  app.get("/api/cars", ensureAuth, carController.allCars);
  app.get("/api/cars/:carId", ensureAuth, carController.showCar);
  app.delete("/api/cars/:carId", ensureAuth, carController.deleteCar);

  app.post(
    "/api/add",
    ensureAuth,
    carControllerPolicy.validate,
    carController.addCar
  );
  app.put(
    "/api/cars/:carId",
    ensureAuth,
    carControllerPolicy.validate,
    carController.editCar
  );
};
