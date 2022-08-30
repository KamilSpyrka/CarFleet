<template>
  <div class="container">
    <leftMenu />
    <div class="flexcol">
      <div class="main">
        <div class="search">
          <input
            type="text"
            id="search"
            name="search"
            class="btn"
            placeholder="Search for car by producer or model"
            v-model="search"
            maxlength="50"
          />
          <span class="material-icons add" @click="add">add</span>
        </div>
      </div>
      <div class="wide" v-for="car in cars" :key="car.id">
        <singleCar
          :id="car.id"
          :producer="car.producer"
          :model="car.model"
          :prodDate="car.prodDate"
          :purchaseDate="car.purchaseDate"
          :mileage="car.mileage"
          :recCreated="car.createdAt"
          :recUpdated="car.updatedAt"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import singleCar from "@/components/singleCar";
import leftMenu from "@/components/leftMenu.vue";
import { mapState } from "vuex";
import CarService from "@/services/CarService";
import { debounce } from "lodash";
export default {
  name: "carsList",

  components: {
    singleCar,
    leftMenu,
  },

  data() {
    return {
      search: "",
    };
  },

  computed: {
    ...mapState(["isUserLoggedIn", "user", "cars"]),
  },

  mounted() {
    if (!this.isUserLoggedIn) {
      this.$router.push({ name: "Login" });
      return;
    }
  },

  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: "/",
      };
      if (this.search !== "") {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
    }, 300),

    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },

    "$route.query.search": {
      immediate: true,
      async handler(value) {
        const cars = await CarService.getCars(value);
        this.$store.dispatch("setCars", cars.data.cars);
      },
    },
  },

  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({ name: "Login" });
    },
    add() {
      this.$router.push({ name: "Add" });
    },
  },
};
</script>

<style scoped>
.container {
  flex-direction: row;
}
h1 {
  text-align: center;
}
h4 {
  padding: 5px;
}
.material-icons {
  font-size: 30px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
  color: #fff;
  transition: 0.3s;
}
.material-icons:hover {
  color: #901919;
  cursor: pointer;
}
.main {
  min-width: 1100px;
  background-color: #2c3e50;
  min-height: 100px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 25px;
}
.search {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.search input {
  margin: 0;
  width: 100%;
}
.add {
  align-self: end;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 40px;
}
.add:hover {
  color: green;
}
.flexcol {
  align-self: flex-start;
}
.wide {
  width: 100%;
}
@media screen and (max-width: 768px) {
  .container {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #141e30;
  }
  .user {
    width: 100%;
    align-self: center;
    margin: 0;
  }
  .search {
    width: 45%;
    align-self: flex-start;
  }
  .material-icons {
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 5px;
    margin-left: 0px;
    color: #fff;
    transition: 0.3s;
  }
}
</style>
