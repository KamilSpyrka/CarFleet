import Vue from 'vue'
import Router from 'vue-router'
import carsList from '@/components/carsList'
import loginPage from '@/components/loginPage'
import registerPage from '@/components/registerPage'
import newCar from '@/components/newCar'
import editCar from '@/components/editCar'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '/',
            component: carsList
        },
        {
            path: '/register',
            name: 'Register',
            component: registerPage,
        },
        {
            path: '/login',
            name: 'Login',
            component: loginPage
        },
        {
            path: '/add',
            name: 'Add',
            component: newCar
        },
        {
            path: '/cars/:carId',
            name: 'car',
            component: editCar
        },
    ]
})