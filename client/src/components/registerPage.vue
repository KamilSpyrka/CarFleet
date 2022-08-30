<template>
  <div class="container">
    <div class="panel">
      <h1>Register now</h1>
      <span class="error" v-if="mainError">{{ mainError }}</span>
      <div id="name">
        <input
          type="text"
          id="firstName"
          name="firstName"
          class="btn"
          placeholder="First Name"
          v-model="firstName"
          required
        />

        <input
          type="text"
          id="lastName"
          name="lastName"
          class="btn"
          placeholder="Last Name"
          v-model="lastName"
          required
        />
      </div>
      <span class="error" v-if="errors.firstNameError">{{
        errors.firstNameError
      }}</span>
      <span class="error" v-if="errors.lastNameError">{{
        errors.lastNameError
      }}</span>

      <input
        type="text"
        id="email"
        name="email"
        class="btn"
        placeholder="Email"
        maxlength="255"
        v-model="email"
        required
      />
      <span class="error" v-if="errors.emailError">{{
        errors.emailError
      }}</span>

      <input
        type="password"
        id="password"
        name="password"
        class="btn"
        placeholder="Password"
        minlength="6"
        v-model="password"
        required
      />
      <span class="error" v-if="errors.passwordError">{{
        errors.passwordError
      }}</span>

      <input
        type="submit"
        class="send"
        name="Send"
        value="Sign up"
        @click="register"
      />

      <router-link to="login">Login here </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Auth from "@/services/Auth.js";

export default {
  name: "registerPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mainError: null,
      errors: {
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        passwordError: null,
      },
    };
  },

  methods: {
    async register() {
      //validate
      if (!this.firstName) {
        this.errors.firstNameError = "First name is required";
      } else this.errors.firstNameError = null;
      if (!this.lastName) {
        this.errors.lastNameError = "Last name is required";
      } else this.errors.lastNameError = null;
      if (!this.email) {
        this.errors.emailError = "E-mail is required";
      } else this.errors.emailError = null;
      //password validation
      function containsSpecialChars(str) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
      }
      function hasNumber(myString) {
        return /\d/.test(myString);
      }
      if (
        !this.password ||
        !containsSpecialChars(this.password) ||
        !hasNumber(this.password) ||
        this.password.length < 6
      ) {
        this.errors.passwordError =
          "Password should be at least 6 characters long, contain 1 number and 1 special sign";
      } else this.errors.passwordError = null;

      const valid = Object.values(this.errors).every((value) => {
        if (value === null) {
          return true;
        }
        return false;
      });
      if (valid) {
        try {
          const response = await Auth.register({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
          });

          this.$store.dispatch("setToken", response.data.token);
          this.$store.dispatch("setUser", response.data.user);
          this.$router.push({ name: "/" });
        } catch (error) {
          this.mainError = error.response.data.error;
        }
      } else return;
    },
  },
};
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
.error {
  align-self: center;
  justify-self: center;
}
</style>
