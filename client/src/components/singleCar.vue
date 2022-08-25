<template>
  <div class="item" >
    
    <div class="content">
        <div class="flexcol">
            <div class="data">ID: {{id}}</div>
            <div class="data">Producent: {{producer}}</div>
            <div class="data">Model: {{model}}</div>
            <div class="data">Production Date: {{prodDate}}</div>
            <div class="data">Date Of Purchase by the company: {{purchaseDate}}</div>
            <div class="data">Car Mileage (km): {{mileage}}</div>
            <div class="data">Record Created At: {{recCreated}}</div>
            <div class="data">Record Updated At: {{recUpdated}}</div>
        </div>
      <div class="options">
        <span class="material-icons delete" @click="deleteCar">delete</span>
        <span class="material-icons edit" @click="navigateTo({name: 'car', params: { carId: id}})">edit</span>
      </div>
    </div>
  </div>   
</template>

<script>
import {mapState} from 'vuex'
import CarService from '@/services/CarService'

export default {
  name: 'singleCar',
  data () {
    return {
    }
  },
  
  async mounted () {
    if (!this.isUserLoggedIn) {
      this.$router.push({name: 'Login'})
      return
    }
  },

  props: [
    'id',
    'producer',
    'model',
    'prodDate',
    'purchaseDate',
    'mileage',
    'recCreated',
    'recUpdated'
  ],

  computed: {
    ...mapState([
      'isUserLoggedIn',
    ])
  },

  methods: {
    navigateTo (route) {
    this.$router.push(route)
    },

    async deleteCar () {
      if(confirm("Are you sure you want to delete?")) {
      try {
        await CarService.deleteCar(this.id)
        console.log()
        if(this.$router.currentRoute.fullPath=='/')this.$router.push('/?search=')
        else this.$router.push('/')
        
      }
      catch(err) {
        console.log(err)
      }
      }

    },
  }
}
</script>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 150px;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.8);
    text-align: center;
    margin-top: 10px;
    background-color:#2c3e50;
}
.content {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.item h3 {
  margin-left: 10px;
  text-align:start;
  width: 100%;
  color: #3C3C3C;  
}
.item h4 {
  padding: 10px;
  text-align:start;
  width: 100%;
  color: #3C3C3C;
}
.data {
    padding: 3px;
}
span {
  font-size: 30px;
  cursor: pointer;
  padding: 15px;
  color: #000;
  transition: 0.5s;
}
.delete {
  color: #fff;
}
.edit {
    color: #fff;
}
.delete:hover {
  color: #901919;
}
.edit:hover {
  color: #606060;
}
</style>