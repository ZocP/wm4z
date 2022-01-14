<template>
  <div class="about">
    <NavBar location=1>
    </NavBar>
    <div class = pic_about>
      <div class="button_about previous"></div>
      <div class="button_about next"></div>
    </div>

  </div>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  name:'About',
  components: {
    NavBar,
  },
  methods: {

  }
}
</script>

<style scoped>
  .pic_about{
    position: absolute;
    width: 1680px;
    height: 787px;
    left: 128px;
    top: 197px;
  }
  .
  .button_about{

    position: absolute;
    width: 80px;
    height: 80px;
    top: 35%;
    border-radius: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: #E6E4D7;
  }
  .previous{
    left: 0;
  }
  .next{
    right: 0;
  }
  .about{
    height: 100vh;
    background-color: #98012E;
  }
</style>