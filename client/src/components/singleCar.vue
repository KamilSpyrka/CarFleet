<template>
  <div class="item">
    <span class="error" v-if="error">{{ error }}</span>
    <div class="content">
      <div class="flexcol">
        <div class="data">ID: {{ id }}</div>
        <div class="data">Producent: {{ producer }}</div>
        <div class="data">Model: {{ model }}</div>
        <div class="data">Production Date: {{ prodDate }}</div>
        <div class="data">
          Date Of Purchase By The Company: {{ purchaseDate }}
        </div>
        <div class="data">Car Mileage (km): {{ mileage }}</div>
        <div class="data">Record Created At: {{ date(recCreated) }}</div>
        <div class="data">Record Updated At: {{ date(recUpdated) }}</div>
      </div>
      <div class="options">
        <span class="material-icons delete" @click="deleteCar">delete</span>
        <span
          class="material-icons edit"
          @click="navigateTo({ name: 'car', params: { carId: id } })"
          >edit</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarService from "@/services/CarService";
import dayjs from "dayjs";
export default {
  name: "singleCar",

  async mounted() {
    if (!this.isUserLoggedIn) {
      this.$router.push({ name: "Login" });
      return;
    }
  },

  data() {
    return {
      error: null,
    };
  },

  props: [
    "id",
    "producer",
    "model",
    "prodDate",
    "purchaseDate",
    "mileage",
    "recCreated",
    "recUpdated",
  ],

  computed: {
    ...mapState(["isUserLoggedIn"]),
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },

    async deleteCar() {
      if (confirm("Are you sure you want to delete?")) {
        try {
          await CarService.deleteCar(this.id);
          console.log();
          if (this.$router.currentRoute.fullPath == "/")
            this.$router.push("/?search=");
          else this.$router.push("/");
        } catch (err) {
          this.error = err.response.data.error;
        }
      }
    },
    date(date) {
      return dayjs(date);
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 150px;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  text-align: center;
  margin-top: 10px;
  background-color: #2c3e50;
}
.content {
  display: flex;
  justify-content: space-between;
  padding: 10px;
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
@media screen and (max-width: 768px) {
  .content {
    padding: 0;
    width: 100%;
    justify-content: left;
  }
  .item {
    padding: 15px;
  }
  .options {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    padding-right: 5px;
  }
}
</style>
