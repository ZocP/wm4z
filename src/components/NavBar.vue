<template>
  <div class="whole">
    <img class="nav-img" src="../assets/school.png" />
    <div class="parts" ref="refCell">
      <div
        @click="toRoute(item, index)"
        v-for="(item, index) in navList"
        :key="item.name"
        class="cell"
        :style="active === index ? 'color: #e6e4d7;' : ''"
      >
        <div class="cell-item">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  watch:{
    $route: {
      // 深度观察监听
      handler:function(){
        this.setFirst()
      },
      deep: true
    }
  },
  methods: {
    setFirst(){
      switch (this.$route.path){
        case "/home":
          this.setCellStyle(0);
          return
        case "/about":
          this.setCellStyle(1);
          return
        case "/tour":
          this.setCellStyle(2);
          return
        case "/calender":
          this.setCellStyle(3);
          return
        case "/more":
          this.setCellStyle(4);
          return
      }
    },
    setCellStyle(index){
      this.active = index;
      this.$refs.refCell.style.setProperty("--Index", `${index}`);
    },
    toRoute(item, index) {
      if (this.$route.path === item.path) {
        return;
      }
      this.$router.push(item.path);
      console.log(index);
    },
  },
};
</script>

<style scoped>
.whole {
  display: flex;
  align-items: center;
  padding-left: 0.5em;
  margin: 0;
  background: #e6e4d7;
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
  color: #e6e4d7;
  background-color: #A42121;
  /* background-color: rgba(255, 255, 255, 0.6); */

  border-radius: 22px;
  transform: translateX(calc(var(--Index) * 100%));
  transition: 0.5s ease;
  z-index: -1;
}
.cell {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 36px;
  color: #89012e;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}

.cell-item {
}
/* .cell_enhance_red a {
  color: #e6e4d7;
} */

h1 {
  margin: 0;
}
</style>
