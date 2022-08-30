<template>
    <div class="user">
        <div class="flex">
            <h1>Your profile</h1>
            <span class="material-icons" @click="logout">logout</span>
        </div>
        <h4>Profile ID: {{ user.id }}</h4>
        <h4>Name: {{ user.firstName }} {{ user.lastName }}</h4>
        <h4>Email: {{ user.email }}</h4>
        <h4>Created at: {{ user.createdAt }}</h4>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    
    export default {
      name: "leftMenu",
    
      computed: {
        ...mapState(["user",]),
      },
    
      methods: {
        logout() {
          this.$store.dispatch("setToken", null);
          this.$store.dispatch("setUser", null);
          this.$router.push({ name: "Login" });
        },
      },
    };
    </script>

<style scoped>
.user {
  background-color: #2c3e50;
  min-height: 210px;
  min-width: 420px;
  margin: 25px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  align-self: flex-start;
}
h1 {
  text-align: center;
}
h4 {
  padding: 5px;
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
@media screen and (max-width: 768px) {
  .user {
    width: 100%;
    align-self: center;
    margin: 0;
  }
  .search {
    width: 35%;
    align-self: flex-start;
  }
  .material-icons {
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 5px;
    margin-left: 0px;
    color: #fff;
    transition: 0.3s;
  }
}
    </style>