<template>
  <div>
    <carInput :method="edit"/>
  </div>
</template>

<script>
import carInput from "@/components/carInput.vue"
import CarService from "@/services/CarService";
export default {
  components: { carInput },
  name: "editCar",

  methods: {
    async edit(car) {
      try {
        await CarService.edit(car, this.$route.params.carId);
        this.$router.push({ name: "/" });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
}
</script>



