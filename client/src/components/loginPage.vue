<template>
    <div class="container">
        <div class="panel">
            <h1>Login</h1>

            <input type="text" id="email" name="email" class="btn" 
            placeholder="email" v-model="email" required>

            <input type="password" id="password" name="password" class="btn" 
            placeholder="Password" v-model="password" required>

            <input type="submit" class="send" name="Send" value="Sign up" 
            @click="register">
                
            <router-link to="register">Register here </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loginPage',
        data () {
            return {
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
.panel {
    min-height:350px;
}
#name {
    display: flex;
    justify-content: space-between;
}
#name input {
    width: 48%;
}
</style>