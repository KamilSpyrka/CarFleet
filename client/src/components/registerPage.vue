<template>
    <div class="container">
        <div class="panel">
            <h1>Register now</h1>
            <span class="error" v-if="error">{{error}}</span>
            <div id="name">
                <input type="text" id="firstName" name="firstName" class="btn" 
                placeholder="First Name" v-model="firstName" required>

                <input type="text" id="lastName" name="lastName" class="btn" 
                placeholder="Last Name" v-model="lastName" required>
            </div>

            <input type="text" id="email" name="email" class="btn" 
            placeholder="Email" maxlength="255" v-model="email" required>

            <input type="password" id="password" name="password" class="btn" 
            placeholder="Password" minlength="6" v-model="password" required>

            <input type="submit" class="send" name="Send" value="Sign up" 
            @click="register">
                
            <router-link to="login">Login here </router-link>
        </div>
    </div>
</template>

<script>
import Auth from '@/services/Auth.js'

export default {
    name: 'registerPage',
    data () {
        return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: null
        }
    },
    methods: {
        async register () {
            try {
            const response = await Auth.register({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            })

            this.$store.dispatch('setToken',response.data.token)
            this.$store.dispatch('setUser',response.data.user)
            this.$router.push({name: '/'})
            } 
            catch (error) {
            this.error = error.response.data.error 
            }
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