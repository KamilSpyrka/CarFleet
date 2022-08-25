import Api from '@/services/Api'

export default {
    getCars (search) {
        return Api().get('cars',{
            params: {
                search: search
            }
        })
    },

    addCar (car) {
        return Api().post('add', car)
    },

    show (carId) {
        return Api().get(`cars/${carId}`)
    },

    edit(car, carId) {
        return Api().put(`cars/${carId}`, car)
    },
    
    deleteCar(carId) { 
        return Api().delete(`cars/${carId}`,)
    }
}

