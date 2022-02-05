<template>
  <div class="map">


  </div>
</template>

<script>
import FirstFloor from "../assets/first_floor.png"
export default {
  name: "Map",
  data:function(){
    return{
      floor : FirstFloor,
    }
  }

}
</script>

<style scoped>
.image{
  width:auto;
}
.map{
  background-image:url(../assets/first_floor.png);
  background-size: contain;
  background-repeat : no-repeat;
}
</style>