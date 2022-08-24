<template>
    <div class="container">
        <div class="panel">
            <h1>Edit Car</h1>
            <h3>Producer</h3><input type="text" id="producer" name="producer" class="btn" required>
            <h3>Model</h3><input type="text" id="model" name="model" class="btn"  required>
            <h3>Production Date</h3><input type="date" id="prodDate" name="prodDate" class="btn" required>
            <h3>Date of purchase by the company</h3><input type="date" id="purchaseDate" name="purchaseDate" class="btn" required>
            <h3>Car Mileage (km)</h3><input type="number" id="mileage" name="mileage" class="btn" required>
            <input type="submit" class="send" name="add" value="Edit" 
            @click="edit">
                
        </div>
    </div>
</template>

<script>
export default {
    name: 'editCar',
    data () {
        return {
        }
    },
    methods: {
        async edit () {

        }
  }
}
</script>

<style scoped>
h1 {
    text-align: center;
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