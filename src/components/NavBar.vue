<template>
  <div
    class="nav_base"
    :class="whiteTheme ? 'back_color_white' : 'back_color_red'"
  >
    <div
      class="whole_base"
      :class="whiteTheme ? 'back_color_white' : 'back_color_red'"
    >
      <img class="nav-img" :src="logo_source" />
      <div class="parts" ref="refCell">
        <div
          @click="toRoute(item, index)"
          v-for="(item, index) in navList"
          :key="item.name"
          class="cell"
          :style="active === index ? 'color:' + activeCell : ''"
        >
          <div class="cell-item">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import whiteRose from "../assets/rose_white.png";
import redRose from "../assets/rose_red.png";
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
      active: 0,
      whiteTheme: true,
      logo_source: redRose,
    };
  },
  mounted() {
    this.setStyle();
  },
  methods: {
    setStyle() {
      const path = this.$route.path;
      const index = this.$route.meta.index;
      this.active = index;
      this.$refs.refCell.style.setProperty("--Index", `${index}`);
      if (path === "/home" || path === "/about" || path === "/calender") {
        this.whiteTheme = true;
        //动画优化
        setTimeout(() => {
          this.logo_source = redRose;
        }, 150);
        this.$refs.refCell.style.setProperty("--cell_color", `#A42121`);
        this.$refs.refCell.style.setProperty("--font_color", `#E6E4D7`);
      } else {
        this.whiteTheme = false;
        this.logo_source = whiteRose;
        this.$refs.refCell.style.setProperty("--cell_color", `#E6E4D7`);
        this.$refs.refCell.style.setProperty("--font_color", `#A42121`);
      }
    },
    toRoute(item) {
      if (this.$route.path === item.path) {
        return;
      }
      this.$router.push(item.path);
      this.setStyle();
    },
  },
  computed: {
    activeCell: function () {
      if (this.whiteTheme) {
        return "#e6e4d7";
      }
      return "#A42121";
    },
  },
};
</script>

<style scoped>
.nav_base {
  z-index: 1000;
  height: 80px;
  position: absolute;
  width: 100%;
}
.back_color_red {
  background-color: #a42121;
}
.back_color_white {
  background-color: #e6e4d7;
}
.whole_base {
  display: flex;
  align-items: center;
  padding-left: 0.5em;
  height: 80px;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
}

.nav-img {
  height: 100%;
  width: auto;
  margin: auto;
}
.parts {
  --font_color: white;
  --cell_color: #a42121;
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
  color: var(--font_color);
  background-color: var(--cell_color);
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
  color: var(--cell_color);
  text-decoration: none;
  cursor: pointer;
}
</style>
