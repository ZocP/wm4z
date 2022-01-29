<template>
  <div class = "tour">
    <div class = "container_tour">

      <div class="pic_tour">
        <div class="button_tour previous">
          <img
              src="../assets/elements/arrow_next_white.svg"
              alt=""
          />
        </div>

        <div class="swiper_tour">
          <Swiper :options="swiperOptions">
            <swiper-slide v-for="item in getSlide()" :key="item">
              <div class="drager">
                <img :src=item.pic>
              </div>
            </swiper-slide>
          </Swiper>
        </div>


        <div class="button_tour next">
          <img src="../assets/elements/arrow_next_white.svg" alt=""
               style="transform: rotateY(180deg)">
        </div>
      </div>


      </div>
    <div>
      <div class="container_map">
        <div class = "pic">
          <img src="../assets/first_floor.png">
        </div>
        <a-dropdown-button>
          abc
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1"> <a-icon type="bars" />First Floor</a-menu-item>
            <a-menu-item key="2"> <a-icon type="bars" />Second Floor</a-menu-item>
            <a-menu-item key="3"> <a-icon type="bars" />Third Floor</a-menu-item>
          </a-menu>
        </a-dropdown-button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios"
import {Swiper, SwiperSlide} from "vue-awesome-swiper"
import 'swiper/css/swiper.css'

import "ant-design-vue/lib/dropdown/style/css"

export default {
  data: function(){
    return {
      swiperOptions:{
        navigation: {
          nextEl : '.next',
          prevEl : '.previous',
        },
      },
      floors: [{content:[]},{content:[]},{content:[]}],
      defaultFloor: 0,
    }
  },
  name: "Tour",
  computed:{
  },
  components:{
    Swiper,
    SwiperSlide,

  },
  methods:{
    getSlide(){
      let actual = [];
      console.log(this.floors[this.defaultFloor].content)
      setTimeout(()=>{
        for(let i = 0; i < this.floors[this.defaultFloor].content.length; i ++){
          if(this.floors[this.defaultFloor].content[i] !== undefined){
            actual.push(this.floors[this.defaultFloor].content[i])
          }
        }
      },500)
      console.log(actual)
      return actual
    },
    request(){
      axios.get('http://localhost:8080/tour',{
        params:{
          floor:0,
          from: 1,
          to: 2,
        }
      }).then(response =>{
        if(response.data.code !== 0){
          console.log("not found ")
          return
        }
        response.data.Data.forEach(element =>{
          this.floors[0].content[element.ID] = {pic : element.Picture, map : element.Map, fl : element.Floor_number}
        })
      })
    },
    handleMenuClick({key}){
      switch(key){
        case "1":
          console.log("default change to 0")
          this.defaultFloor = 0;
          break
        case "2":
          console.log("default change to 1")
          this.defaultFloor = 1;
          break;
        case "3":
          console.log("default change to 2")
          this.defaultFloor = 2;
          break;
          default:
            this.defaultFloor = 0;
      }
    },
  },
  mounted(){
    this.request()
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
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

}
.pic_tour{
  padding: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
.button_tour {
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  top: 45%;
  border-radius: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #A42121;
  transition: all 0.3s;
}

.button_tour:hover{
  transform: scale(1.05);
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
}


.next {
  right: 0;
}
.previous {
  left: 0;
}
.swiper_tour{
  height:100%;
  width : 70%;
  background-color: #A42121;
  border-radius : 10px;
}

.container_map{
  padding: 1vw;
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  width: 30vw;
  height:80vh;
  margin-right: 5vw;
}

.pic{
  overflow: hidden;

}
.pic img{
  width: 100%;
  object-fit: cover;
}

.drager{

}
</style>
