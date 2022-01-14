<template>
  <div class="about">
    <div class="container_about">
      <div class="pic_about">
        <div class="button_about previous">
          <img
            src="../assets/elements/arrow_next.svg"
            alt=""
            style="transform: rotateY(180deg)"
          />
        </div>
        <div class="swiper_pics"></div>
        <div class="button_about next">
          <img src="../assets/elements/arrow_next.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  methods: {},
};
</script>

<style scoped>
.swiper_pics {
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 100%;
  width: 80%;
  background-color: #e6e4d7;
}
.container_about {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #98012e;
  height: 100%;
  width: 100%;
}
.pic_about {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 1680px;
  height: 787px;
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
