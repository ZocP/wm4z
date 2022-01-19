<template>
  <div id="app">
    <div id="nav">
      <NavBar></NavBar>
      <transition name="transitionName">
        <router-view></router-view>
      </transition>

    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  data: function(){
    return{
    }
  },
  name: "Calender",
  components: {
    NavBar,
  },

  watch: {
    '$route'(to, from) {
      if(to.meta.index > from.meta.index){
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
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

 .slide-right-enter-active,
 .slide-right-leave-active,
 .slide-left-enter-active,
 .slide-left-leave-active {
   will-change: transform;
   transition: all 500ms;
   position: absolute;
 }

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.child-view {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/*.slide-left-enter,*/
/*.slide-right-leave-active {*/
/*  opacity: 0;*/
/*  -webkit-transform: translate(100%, 0);*/
/*  transform: translate(100%, 0);*/
/*}*/
/*.slide-left-leave-active,*/
/*.slide-right-enter {*/
/*  opacity: 0;*/
/*  -webkit-transform: translate(-100%, 0);*/
/*  transform: translate(-100%, 0);*/
/*}*/

</style>
