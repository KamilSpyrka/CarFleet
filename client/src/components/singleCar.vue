<template>
  <div class="item" >
    
    <div class="content">
        <div class="flexcol">
            <div class="data">ID: 1</div>
            <div class="data">Producent: Ford</div>
            <div class="data">Model: Mustang</div>
            <div class="data">Production Date: 2012</div>
            <div class="data">Date Of Purchase by the company: 2015</div>
            <div class="data">Car Mileage (km): 45000</div>
            <div class="data">Record Created At: 25.08.2022</div>
            <div class="data">Record Updated At: 25.08.2022</div>
        </div>
      <div class="options">
        <span class="material-icons delete">delete</span>
        <span class="material-icons edit">edit</span>
      </div>
    </div>
  </div>   
</template>

<script>

export default {
  name: 'singleCar',
  data () {
    return {
    }
  },
  
  async mounted () {

  },

  props: [

  ],

  computed: {

  },

  methods: {
    navigateTo (route) {
    this.$router.push(route)
    },

    async deleteItem () {
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