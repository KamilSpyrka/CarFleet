<template>
  <div>
    <carInput :method="add" />
  </div>
</template>

<script>
import carInput from "@/components/carInput.vue";
import CarService from "@/services/CarService";
export default {
  components: { carInput },
  name: "newCar",

  methods: {
    async add(car) {
      try {
        await CarService.addCar(car);
        this.$router.push({ name: "/" });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>
