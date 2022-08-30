<template>
  <div class="container">
    <div class="panel">
      <div class="flex2">
        <router-link to="/">
          <span class="material-icons"> arrow_back </span>
        </router-link>
        <h1>Your Car</h1>
      </div>
      <span class="error" v-if="errors.ServerError">{{
        errors.mainError
      }}</span>
      <h3>Producer</h3>
      <input
        type="text"
        id="producer"
        name="producer"
        class="btn"
        v-model="car.producer"
        required
      />
      <span class="error" v-if="errors.producerError">{{
        errors.producerError
      }}</span>

      <h3>Model</h3>
      <input
        type="text"
        id="model"
        name="model"
        class="btn"
        v-model="car.model"
        required
      />
      <span class="error" v-if="errors.modelError">{{
        errors.modelError
      }}</span>

      <h3>Production Date</h3>
      <input
        type="number"
        id="prodDate"
        name="prodDate"
        class="btn"
        v-model="car.prodDate"
        required
      />
      <span class="error" v-if="errors.prodDateError">{{
        errors.prodDateError
      }}</span>

      <h3>Date of purchase by the company</h3>
      <input
        type="date"
        id="purchaseDate"
        name="purchaseDate"
        class="btn"
        v-model="car.purchaseDate"
        required
      />
      <span class="error" v-if="errors.purchaseDateError">{{
        errors.purchaseDateError
      }}</span>

      <h3>Car Mileage (km)</h3>
      <input
        type="number"
        id="mileage"
        name="mileage"
        class="btn"
        v-model="car.mileage"
        required
      />
      <span class="error" v-if="errors.mileageError">{{
        errors.mileageError
      }}</span>

      <input
        type="submit"
        class="send"
        name="add"
        value="Save"
        @click="checkInput"
      />
    </div>
  </div>
</template>

<script>
import CarService from "@/services/CarService";
import { mapState } from "vuex";
export default {
  name: "carInput",
  data() {
    return {
      car: {
        producer: null,
        model: null,
        prodDate: null,
        purchaseDate: null,
        mileage: null,
      },
      errors: {
        mainError: null,
        producerError: null,
        modelError: null,
        prodDateError: null,
        purchaseDateError: null,
        mileageError: null,
      },

      required: (value) => !!value || "Required.",
    };
  },
  props: {
    method: { type: Function },
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user", "cars"]),
  },

  async mounted() {
    if (!this.isUserLoggedIn) {
      this.$router.push({ name: "Login" });
      return;
    }
    if (this.$route.params.carId) {
      try {
        const carId = this.$route.params.carId;
        this.car = (await CarService.show(carId)).data;
        delete this.car.UserId;
        delete this.car.id;
        delete this.car.createdAt;
        delete this.car.updatedAt;
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  },

  methods: {
    async checkInput() {
      const areAllFilled = Object.keys(this.car).every(
        (key) => !!this.car[key]
      );

      if (!areAllFilled) {
        this.errors.mainError = "You need to fill in all required fields";
      }
      else this.errors.mainError = null;

      if (!this.car.producer) {
        this.errors.producerError = "Producer name is required";
      }
      else this.errors.producerError = null;

      if (!this.car.model) {
        this.errors.modelError = "Model name is required";
      }
      else this.errors.modelError = null;

      let today = new Date().toISOString().slice(0, 10);
      let year = new Date().getFullYear();
      if (this.car.prodDate > year || this.car.prodDate < 1900) {
        this.errors.prodDateError =
          "Production date cant be in the future, nor before 1900";
      }
      else this.errors.prodDateError = null;

      if (
        this.car.purchaseDate > today ||
        this.car.purchaseDate < "1970-00-00" ||
        !this.car.purchaseDate
      ) {
        this.errors.purchaseDateError =
          "Purchase date cant be in the future, nor before 1970";
      }
      else this.errors.purchaseDateError = null;

      if (this.car.mileage < 0 || !this.car.mileage) {
        this.errors.mileageError =
          "You must insert mileage, which can't be negative number";
      }
      else this.errors.mileageError = null;
      
      const valid = Object.values(this.errors).every((value) => {
        if (value === null) {
          return true;
        }
        return false;
      });

      if (valid) {
        this.method(this.car);
      } else return;
    },
  },
};
</script>

<style scoped>
.flex2 {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}
h1 {
  align-self: flex-end;
  margin-left: 30%;
}
.material-icons {
  font-size: 30px;
  align-self: flex-start;
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
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
