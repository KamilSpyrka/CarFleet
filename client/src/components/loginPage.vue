<template>
  <div class="container">
    <div class="panel">
      <h1>Login</h1>
      <span class="error" v-if="error">{{ error }}</span>
      <input
        type="text"
        id="email"
        name="email"
        class="btn"
        placeholder="email"
        v-model="email"
        required
      />

      <input
        type="password"
        id="password"
        name="password"
        class="btn"
        placeholder="Password"
        v-model="password"
        required
      />

      <input
        type="submit"
        class="send"
        name="Send"
        value="Login"
        @click="login"
      />

      <router-link to="register">Register here </router-link>
    </div>
  </div>
</template>

<script>
import Auth from "@/services/Auth.js";

export default {
  name: "loginPage",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        const response = await Auth.login({
          email: this.email,
          password: this.password,
        });

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({ name: "/" });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.panel {
  min-height: 350px;
}
#name {
  display: flex;
  justify-content: space-between;
}
#name input {
  width: 48%;
}
</style>
