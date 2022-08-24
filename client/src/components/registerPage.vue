<template>
    <div class="container">
        <div class="panel">
            <h1>Register now</h1>
            <div id="name">
                <input type="text" id="name" name="name" class="btn" 
                placeholder="First Name" v-model="name" required>

                <input type="text" id="surname" name="surname" class="btn" 
                placeholder="Last Name" v-model="surname" required>
            </div>

            <input type="text" id="email" name="email" class="btn" 
            placeholder="Email" v-model="email" required>

            <input type="password" id="password" name="password" class="btn" 
            placeholder="Password" v-model="password" required>

            <input type="submit" class="send" name="Send" value="Sign up" 
            @click="register">
                
            <router-link to="login">Login here </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'registerPage',
    data () {
        return {
        name: '',
        surname: '',
        email: '',
        password: '',
        error: null
        }
    },
    methods: {
        async register () {

        }
  }
}
</script>

<style scoped>
h1 {
    text-align: center;
}
#name {
    display: flex;
    justify-content: space-between;
}
#name input {
    width: 48%;
}
</style>