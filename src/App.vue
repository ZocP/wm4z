<template>
  <div id="app">
    <div id="nav">
      <NavBar></NavBar>
      <transition :name="transitionName">
        <router-view class="routerView"></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  data: function () {
    return {
      transitionName: "slide-left",
    };
  },
  name: "Calender",
  components: {
    NavBar,
  },

  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
};
</script>
<style>
@import url("./assets/font/Sansation.css");
* {
  margin: 0;
  border: 0;
}
html {
  font-family: Sansation, serif;
}
.routerView {
  padding-top: 80px;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-leave-active,
.slide-left-enter-active {
  position: absolute;
  width: 100%;
}

.slide-right-enter-active {
  animation: slideRightEnter 0.3s ease-out;
}

.slide-right-leave-active {
  animation: slideRightLeave 0.3s ease-out;
}

.slide-left-leave-active {
  animation: slideLeftLeave 0.3s ease-out;
}

.slide-left-enter-active {
  animation: slideLeftEnter 0.3s ease-out;
}

@keyframes slideRightEnter {
  from {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slideRightLeave {
  from {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

@keyframes slideLeftEnter {
  from {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes slideLeftLeave {
  from {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

/* .child-view {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
} */
</style>
