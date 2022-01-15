<template>
  <div :class="{whole_white:whiteTheme, whole_red : redTheme}">
    <img class="nav-img" :src=logo_source />
    <div class="parts" ref="refCell">
      <div
        @click="toRoute(item, index)"
        v-for="(item, index) in navList"
        :key="item.name"
        :class="{cell_red : whiteTheme, cell_white : redTheme}"
        :style="active === index ? 'color:' + activeCell : ''"
      >
        <div class="cell-item">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import whiteRose from '../assets/rose_white.png'
import redRose from '../assets/rose_red.png'
export default {
  name: "NavBar",
  data() {
    return {
      navList: [
        {
          path: "/home",
          name: "Welcome",
        },
        {
          path: "/about",
          name: "About LCDS",
        },
        {
          path: "/tour",
          name: "Tour",
        },
        {
          path: "/calender",
          name: "Calender",
        },

        {
          path: "/more",
          name: "More",
        },
      ],
      active : 0,
      redTheme : false,
      whiteTheme : true,
      logo_source:  redRose

    };
  },
  watch:{
    $route: {
      handler:function(){
        console.log("abc")
        this.setTheme()
      },
      deep: true
    }
  },
  methods: {
    setTheme(){
      switch (this.$route.path){
        case "/home":
          this.setWhiteStyle(0);
          return
        case "/about":
          this.setWhiteStyle(1);
          return
        case "/tour":
          this.setRedStyle(2);
          return
        case "/calender":
          this.setWhiteStyle(3);
          return
        case "/more":
          this.setRedStyle(4);
          return
      }
    },
    setWhiteStyle(index){
      this.whiteTheme = true;
      this.redTheme = false;
      this.active = index;
      this.logo_source = redRose
      this.$refs.refCell.style.setProperty("--Index", `${index}`);
      this.$refs.refCell.style.setProperty("--cell_color", `#A42121`);
      this.$refs.refCell.style.setProperty("--font_color", `#E6E4D7`);
    },
    setRedStyle(index){
      this.redTheme = true;
      this.whiteTheme = false;
      this.active = index;
      this.logo_source = whiteRose
      this.$refs.refCell.style.setProperty("--Index", `${index}`);
      this.$refs.refCell.style.setProperty("--cell_color", `#E6E4D7`);
      this.$refs.refCell.style.setProperty("--font_color", `#A42121`);
    },
    toRoute(item, index) {
      if (this.$route.path === item.path) {
        return;
      }
      this.$router.push(item.path);
      console.log(index);
    },
  },
  computed:{
    activeCell: function(){
      if(this.redTheme){
        return '#A42121';
      }
      return '#e6e4d7';

    }
  },
  mounted() {
    this.setTheme()
  }
};
</script>

<style scoped>
.whole_white {
  display: flex;
  align-items: center;
  padding-left: 0.5em;
  margin: 0;
  background: #e6e4d7;
  height: 80px;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
}
.whole_red {
  display: flex;
  align-items: center;
  padding-left: 0.5em;
  margin: 0;
  background: #A42121;
  height: 80px;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
}

.nav-img {
  height: 100%;
  width: auto;
  margin: auto;
}
.parts {
  --font-color: white;
  --cell_color: #A42121;
  --Index: 0;
  position: relative;
  z-index: 0;
  flex: 1;
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  margin: 0 60px;
  transition: all 0.3s;
}
.parts::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  height: 100%;
  width: calc(1 / 5 * 100%);
  color: var(--font-color);
  background-color: var(--cell_color);
  border-radius: 22px;
  transform: translateX(calc(var(--Index) * 100%));
  transition: 0.5s ease;
  z-index: -1;
}
/*.cell_red:hover{*/
/*  border-radius: 22px;*/
/*  background-color: #A42121;*/
/*  color: #e6e4d7;*/
/*}*/
.cell_red {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 36px;
  color: #A42121;
  text-decoration: none;
  cursor: pointer;
}
.cell_white{
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 36px;
  color: #e6e4d7;
  text-decoration: none;
  cursor: pointer;
}
/*.cell_white:hover{*/
/*  border-radius: 22px;*/
/*  background-color: #e6e4d7;*/
/*  color: #A42121;*/
/*}*/
.cell-item {
}
</style>
