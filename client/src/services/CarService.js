import Api from "@/services/Api";

export default {
  getCars(search) {
    return Api().get("api/cars", {
      params: {
        search: search,
      },
    });
  },

  addCar(car) {
    return Api().post("api/add", car);
  },

  show(carId) {
    return Api().get(`api/cars/${carId}`);
  },

  edit(car, carId) {
    return Api().put(`api/cars/${carId}`, car);
  },

  deleteCar(carId) {
    return Api().delete(`api/cars/${carId}`);
  },
};
