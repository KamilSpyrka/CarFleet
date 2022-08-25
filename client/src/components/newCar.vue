<template>
    <div class="container">
        <div class="panel">
          <div class="flex2">
            <router-link to="/">
              <span class="material-icons">
                arrow_back
              </span>
            </router-link>
            <h1>Add New Car</h1>
          </div>

            <span class="error" v-if="error">{{error}}</span>
            <h3>Producer</h3><input type="text" id="producer" name="producer" class="btn" v-model="car.producer" required>
            <h3>Model</h3><input type="text" id="model" name="model" class="btn" v-model="car.model" required>
            <h3>Production Date</h3><input type="date" id="prodDate" name="prodDate" class="btn" v-model="car.prodDate" required>
            <h3>Date of purchase by the company</h3><input type="date" id="purchaseDate" name="purchaseDate" class="btn" v-model="car.purchaseDate" required>
            <h3>Car Mileage (km)</h3><input type="number" id="mileage" name="mileage" class="btn" v-model="car.mileage" required>
            <input type="submit" class="send" name="add" value="Add" 
            @click="add">
                
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import CarService from '@/services/CarService'
export default {
    name: 'newCar',
   data () {
    return {
       car: {
        producer: null,
        model: null,
        prodDate: null,
        purchaseDate: null,
        mileage: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },

  computed: {
    ...mapState([
    'isUserLoggedIn',
    'user'
    ])
  },

  mounted () {
    if (!this.isUserLoggedIn) {
    this.$router.push({name: 'Login'})
    return
    }  
    
  },

  methods: {
    async add () {
      const areAllFilled = Object.keys(this.car).every(key => !!this.car[key])
      if (!areAllFilled) {
        this.error = 'You need to fill in all required fields'
        return
      }
      let today = new Date().toISOString().slice(0, 10)
      if(this.car.prodDate > today || this.car.prodDate<"1900-00-00") {
        this.error = 'Production date cant be in the future, nor before 1900'
        return
      }
      if(this.car.purchaseDate > today || this.car.purchaseDate<"1970-00-00") {
        this.error = 'Purchase date cant be in the future, nor before 1970'
        return
      }
      if(this.car.mileage < 0) {
        this.error = 'Mileage cannot be negative number'
        return
      }
      try{
        await CarService.addCar(this.car)
        this.$router.push({name: '/'})
      }
      catch(err) {
      console.log(err)
      }
    }
  },  
}
</script>

<style scoped>
.flex2 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
h1 {
  align-self: flex-end;
}
.material-icons{
  font-size: 30px;
  align-self:flex-start;
  justify-self: flex-start;
}

::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>