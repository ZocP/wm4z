<template>
  <div id="app">
    <div id="nav">
      <NavBar></NavBar>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "Calender",
  components: {
    NavBar,
  },
};
</script>
<style>
@import url("./assets/font/Sansation.css");
* {
  margin: 0;
  border: 0;
}
html {
  font-family: Sansation, serif;
}
</style>
