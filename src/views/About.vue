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
          <Swiper class="swiper" :options="swiperOptions">
            <swiper-slide v-for="item in slides" :key="item.length">
              <img :src="item.background" alt="about_picture" class="slide_picture">
              <div class="slide_div">
                <p class="slide_title">{{item.title}}</p>
                <p class="slide_intro">{{item.intro}}</p>
              </div>
            </swiper-slide>
          </Swiper>
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
import {Swiper, SwiperSlide} from "vue-awesome-swiper"
import 'swiper/css/swiper.css'


export default {
  name: "About",
  data:function(){
    return{
      aboutBackGround : about,
      slides:[],
      swiperOptions:{
        navigation:{
          nextEl : '.next',
          prevEl : '.previous'
        }
      }
    }
  },
  components:{
    Swiper,
    SwiperSlide,
  },
  methods: {
    requestAbouts(){
      axios.get('http://www.lancastertsa.com:1001/about',{params:{
          from : 1,
          to : 5,
        }}).then(response =>{
          console.log(response)
          response.data.Data.forEach(element =>{
              this.slides.push({background: element.Picture, title: element.Title ,intro: element.Intro})
          })
        this.aboutBackGround = response.data.Data[0].picture

      }).catch(error => {
        console.log(error)
      })
    }
  },

  mounted(){
    this.requestAbouts()
  },

}
</script>

<style lang="less">
.swiper-container{
  margin: 0;
  width: 100%;
  height: 100%;
}
.swiper-slide{
  border-radius:10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper_pics {
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 100%;
  width: 80%;
  background-color: #e6e4d7;

}

.swiper_pics img{
  height: 100%;
  z-index: 100;
  border-radius:10px;
  position: absolute;
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
  transition: all 0.3s;
}

.button_about:hover {
  transform: scale(1.03);
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
}

.slide_picture{
  object-fit: cover;
  border-radius :10px;
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

.slide_div{
  z-index:100;
  display: flex;

  flex-direction: column;
  margin-right: 10vw;
  margin-top: 15vh;
  width: 35vw;
  height: 30vh;
  background: #323232c4;
  background-blend-mode: luminosity;
  box-shadow: 0px 4px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
}

.slide_title{
  margin: 3vh 3vw;
  font-size: 3vh;

  /* or 126% */
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.slide_intro{
  height: 100%;
  margin: 3vh 3vw;
  font-size: 2vh;

  /* or 126% */
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
