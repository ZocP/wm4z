<template>
  <div class = "tour">
    <div class = "container_tour">
      <div class="button_tour previous">
        <img
            src="../assets/elements/arrow_next_white.svg"
            alt=""
        /></div>

        <div class="swiper_tour"></div>

        <div class="button_tour next">
          <img src="../assets/elements/arrow_next_white.svg" alt=""
               style="transform: rotateY(180deg)">
        </div>

      </div>
      <Map class="container_map">
      </Map>
  </div>
</template>

<script>
import Map from "../components/Map"
export default {
  name: "Tour",
  components:{
    Map,
  }
};
</script>

<style scoped>
.tour{
  position:absolute;
  height: 100vh;
  width: 100%;
  background-color: #e6e4d7;
  display: flex;
  justify-content: center;
  align-items: center;

}
.container_tour{
  position: relative;
  overflow: hidden;
  width: 70vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button_tour {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 45%;
  border-radius: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #A42121;
}
.next {
  right: 0;
}
.previous {
  left: 0;
}
.swiper_tour{
  height:100%;
  width: 80%;
  background-color: #A42121;
  border-radius : 10px;
}
.container_map{
  width: 25vw;
  height: 0;

  padding-bottom: 37.5%;
  margin: 50px;
}
</style>
