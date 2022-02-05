<template>
  <div class = "tour">
    <div class = "container_tour">

      <div class="pic_tour">
        <div class="button_tour previous" @click=previous>
          <img
              src="../assets/elements/arrow_next_white.svg"
              alt=""
          />
        </div>

        <div class="swiper_tour">
          <div id="dragger"  class="drag">
            <img :src=currentPic @mouseleave="leave" @mousedown="holdDown" @mousemove="mouseMove" @mouseup="holdUp" :style="style" draggable="false" alt="">
          </div>
        </div>


        <div class="button_tour next" @click=next>
          <img src="../assets/elements/arrow_next_white.svg" alt=""
               style="transform: rotateY(180deg)">
        </div>
      </div>

      <div class="remind">
          <p>{{reminder}}</p>
      </div>
      </div>
    <div>
      <div class="container_map">
        <div class = "pic">
          <img :src=floorMap>
        </div>
        <a-dropdown-button>
          Current Floor: {{CurrentFloor}}
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1" style="display:none"> <a-icon type="bars" />Basement</a-menu-item>
            <a-menu-item key="2"> <a-icon type="bars" />First Floor</a-menu-item>
            <a-menu-item key="3"> <a-icon type="bars" />Second Floor</a-menu-item>
          </a-menu>
        </a-dropdown-button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios"
import 'swiper/css/swiper.css'
import "ant-design-vue/lib/dropdown/style/css"
// import test from "../test/F1N1.png"

export default {
  data: function(){
    return {
      swiperOptions:{
        navigation: {
          nextEl : '.next',
          prevEl : '.previous',
        },
      },
      store: [{content:[]},{content:[]},{content:[]}],
      currentIndex: 0,
      defaultFloor: 1,
      CurrentFloor: 1,
      Movable: false,
      moveStart: {x : 0, y : 0},
      trans : {x : 0, y : 0},
      style : null,
      floorMap: "https://wm4z.oss-us-east-1.aliyuncs.com/tours/floors/F1.png",
      reminder: "Try to drag around",
    }
  },
  name: "Tour",
  computed:{
    currentPic: function(){
      // return test
      return this.store[this.defaultFloor].content[this.currentIndex]?.Picture || "";
    }
  },
  methods:{
    previous(){
      if(this.store[this.defaultFloor].content[this.currentIndex - 1] !== undefined){
        this.currentIndex --;
        console.log("go to index: ", this.currentIndex)
        this.style = null;
      }
    },
    next(){
      if(this.store[this.defaultFloor].content[this.currentIndex + 1] !== undefined){
        this.currentIndex ++;
        console.log("go to index: ", this.currentIndex)
        this.style = null;
      }
    },
    request(floor){
      axios.get('http://www.lancastertsa.com:1001/tour',{
        params:{
          floor:floor,
        }
      }).then(response =>{
        console.log(response)
        if(response.data.code !== 0){
          console.log("not found ")
          return
        }
        this.store[response.data.Data.FloorNumber].content = response.data.Data.Positions
        console.log(response.data.Data.Positions)
      })
    },
    handleMenuClick({key}){
      switch(key){
        case "1":
          console.log("default change to 0")
          this.defaultFloor = 0;
          this.CurrentFloor = -1;
            this.currentIndex= 0;
            this.request(0);
            this.floorMap = "https://wm4z.oss-us-east-1.aliyuncs.com/tours/floors/F3.png"
          break
        case "2":
          console.log("default change to 1")
          this.defaultFloor = 1;
          this.CurrentFloor = 1;
          this.currentIndex= 0;
          this.request(1)
          this.floorMap = "https://wm4z.oss-us-east-1.aliyuncs.com/tours/floors/F1.png"
          break;
        case "3":
          console.log("default change to 2")
          this.defaultFloor = 2;
          this.CurrentFloor = 2;
          this.currentIndex= 0;
          this.request(2);
          this.floorMap = "https://wm4z.oss-us-east-1.aliyuncs.com/tours/floors/F2.png"
          break;
          default:
            this.defaultFloor = 0;
      }
   },
    holdDown(e) {
      this.Movable = true;
      this.moveStart.x = e.clientX
      this.moveStart.y = e.clientY
      this.Movable = true

    },
    //鼠标松开
    holdUp() {
      this.Movable = false;
    },
    //兼容后，返回X，Y
    mouseMove(e){
      e.preventDefault();

      if(this.Movable){
        let img = document.querySelector("#dragger img");
        let div = document.querySelector("#dragger")
        let rect1 = img.getBoundingClientRect();
        let rect2= div.getBoundingClientRect();
        this.trans.x = e.clientX;
        let x = this.moveStart.x - this.trans.x;
        if(img.offsetLeft - x + rect1.left > rect2.left || img.offsetLeft-x + rect1.right < rect2.right){
          return
        }
        this.style=`left:${img.offsetLeft-x}px`;
        this.moveStart.x = this.trans.x;
      }

    },

    leave(){
      this.Movable = false;
    }

  },

  mounted(){
    this.request(1);
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
  user-select: none;
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
  overflow:hidden;
}
.swiper_tour img{
  height: 100%;
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

.drag{
  height: 100%;
  z-index: 100;
  user-select: none;
  position: relative;

}
.drag img{
  position: absolute;
  left: 0;
  top: 0;
}

.remind{
  position: relative;
  top:40%;
  z-index: 1000;
  width : 10vw;
  height: 5vh;
  background: rgba(68, 56, 56, 0.49);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.remind p{
  margin: 0;
  height:100%;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  color: #e6e4d7;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1vw;
}

</style>
