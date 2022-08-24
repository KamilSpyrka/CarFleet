<template>
    <div class="container">
        <div class="user">
            <div class="flex">
                <h1>Your profile</h1>
                <span class="material-icons logout">logout</span>
            </div>
            <h3>Profile ID: 1</h3>
            <h3>Name: Jan Kowalski</h3>
            <h3>Email: testemail@gmail.com</h3>
            <h3>Created at: 25.08.2022</h3>
        </div>
        <div class="flexcol">
            <div class="main">
                <div class="search">
                    <input type="text" id="search" name ="search" class="btn"
                    placeholder="Search for car by name"
                    v-model="search" maxlength="50">
                    <span class="material-icons add">add</span> 
                </div>   
            </div>
            <SingleCar />
            <SingleCar />

        </div>

    </div>
</template>

<script>
import singleCar from '@/components/singleCar'
import SingleCar from './singleCar.vue';
export default {
    name: 'carsList',
    components: {
    singleCar,
    SingleCar
},
}
</script>

<style scoped>
.container {
    flex-direction: row;
}
.user {
    background-color: #2c3e50;
    height:210px;
    width: 420px;
    margin: 25px;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.8);
    align-self: flex-start;
}
h1 {
    text-align: center;
}
h3 {
    padding: 5px;
}
.main {
    min-width: 1100px;
    background-color:#2c3e50;
    min-height: 100px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.8);
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
</style>