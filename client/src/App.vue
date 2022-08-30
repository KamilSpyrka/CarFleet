<template>
  <div id="app">
    <head>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </head>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  background: #141e30;
  background: -webkit-linear-gradient(to top, #2c5481, #141e30);
  background: linear-gradient(to top, #2c5481, #141e30);
  background-repeat: repeat;
  color: #fff;
}
body {
  line-height: 1.3;
  font-family: "Lato", sans-serif;
}
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.panel {
  min-height: 450px;
  width: 500px;
  background-color: #2c3e50;
  border-radius: 8px;
  margin: 0 auto;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
}
input {
  min-height: 50px;
  width: 100%;
  padding: 12px 20px;
  margin: 15px 0;
  display: inline-block;
  border-radius: 6px;
  box-sizing: border-box;
  border: 0;
  background-color: #141e30;
  color: #fff;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #fff !important;
}

input:focus {
  outline: 1px solid #000;
}
::placeholder {
  color: #ccc;
}
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid red;
  border-radius: 4px;
  box-sizing: border-box;
  color: #fff;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
a {
  color: #fff;
  text-decoration: none;
  text-align: center;
  margin-top: 20px;
  font-size: 30px;
}
a:visited:hover {
  color: #ccc;
  cursor: pointer;
}
a:hover {
  color: #ccc;
  cursor: pointer;
}
a:visited {
  color: #fff;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.flexcol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: flex-start;
}
.error {
  color: #b41c1c;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .panel {
    width: 100%;
  }
}
</style>
