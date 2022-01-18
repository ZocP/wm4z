<template>
  <div class="about">
    <div class="container_about">
      <div class="pic_about">
        <div class="button_about previous">
          <img
            src="../assets/elements/arrow_next.svg"
            alt=""
          />
        </div>
        <div class="swiper_pics">
          <img
              class=""
              :src= "aboutBackGround"
              alt=""
          />
        </div>
        <div class="button_about next">
          <img src="../assets/elements/arrow_next.svg" alt=""
          style="transform: rotateY(180deg)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import about from "../assets/about_pic.png"
import axios from "axios"
export default {
  name: "About",
  data:function(){
    return{
      aboutBackGround : about
    }
  },
  methods: {
    requestAbouts(){
      axios.get('http://localhost:8080/about',{params:{
          from : 4,
          to : 4,
        }}).then(response =>{
        this.aboutBackGround = response.data.Data[0].picture
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted(){
    this.requestAbouts()
  }
}
</script>

<style scoped>
.swiper_pics {
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 100%;
  width: 80%;
  background-color: #e6e4d7;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.swiper_pics img{
  height: 100%;
  z-index: 100;
  border-radius:10px;
}

.container_about {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #A42121;
  height: 100%;

  width: 100%;
  top:10%
}
.pic_about {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 80%;
  height: 70%;
}

.button_about {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 45%;
  border-radius: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #e6e4d7;
}

.button_about:hover {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 45%;
  border-radius: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: blue;
}



.previous {
  left: 0;
}

.next {
  right: 0;
}

.about {
  height: 100vh;
}
</style>
