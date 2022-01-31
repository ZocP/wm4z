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
          <div class="drag">
            <img :src=currentPic @mousedown="holdDown" @mouseup="holdUp" :style="'top: '+imgtop+'px;left: '+imgleft+'px;'" border="0" cellpadding="0" cellspacing="0" style="margin:0 auto;">
          </div>
        </div>


        <div class="button_tour next" @click=next>
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
      store: [{content:[]},{content:[]},{content:[]}],
      currentIndex: 0,
      defaultFloor: 0,

      imgtop: 0, //图片距离左边的距离
      imgleft: 0, //图片距离上边的距离
      imgheight: 100, //图片高度百分比
      DownUp: false, //用来判断鼠标是否长按
    }
  },
  name: "Tour",
  computed:{
    currentPic: function(){
      return this.store[this.defaultFloor].content[this.currentIndex]?.Picture || "";
    }
  },
  methods:{
    previous(){
      if(this.store[this.defaultFloor].content[this.currentIndex - 1] !== undefined){
        this.currentIndex --;
        console.log("go to index: ", this.currentIndex)
      }
    },
    next(){
      if(this.store[this.defaultFloor].content[this.currentIndex + 1] !== undefined){
        this.currentIndex ++;
        console.log("go to index: ", this.currentIndex)
      }
    },
    request(floor){
      axios.get('http://localhost:8080/tour',{
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
    holdDown() {
      this.DownUp = true;
    },
    //鼠标松开
    holdUp() {
      this.DownUp = false;
    },
    //ev：鼠标对象，id：盒子的id 判断鼠标是否在盒子内
    inBoxIsoutbox(id, ev = event || window.event) {
      let map = document.getElementById(id);
      if (
          this.mousePosition(ev).x > map.offsetLeft + map.offsetWidth ||
          this.mousePosition(ev).x < map.offsetLeft ||
          this.mousePosition(ev).y > map.offsetTop + map.offsetHeight ||
          this.mousePosition(ev).y < map.offsetTop
      ) {
        return false;
      } else {
        return true;
      }
    },
    //兼容后，返回X，Y
    mousePosition(ev) {
      if (ev.pageX || ev.pageY) {
        return { x: ev.pageX, y: ev.pageY };
      }
      return {
        x:
            ev.clientX +
            document.body.scrollLeft -
            document.body.clientLeft,
        y:
            ev.clientY +
            document.body.scrollTop -
            document.body.clientTop,
      };
    },
    // 鼠标移动触发该方法
    mouseMove(ev) {
      ev = ev || window.event;
      if (this.inBoxIsoutbox("mapbox", ev)) {
        // 鼠标在盒子内
        this.runWheel(true);
      } else {
        // 鼠标在盒子外
        this.runWheel(false);
        this.holdUp();
      }
      if (this.DownUp) {
        // 鼠标长按时改变图片位置
        this.imgtop = this.imgtop + ev.movementY;
        this.imgleft = this.imgleft + ev.movementX;
      }
    },
  },

  mounted(){
    this.request(0);
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
  -webkit-user-drag: none;
}


</style>
