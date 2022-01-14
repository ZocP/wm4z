<template>
  <div class="home">
    <div class="main">
      <div class="intro">
        <p class="title">{{ title }}</p>
        <p class="info">{{ info }}</p>
      </div>
      <div class="button" @click="buttonTriggers()">
        <p>{{ learn }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      title: "Learn about our school",
      info:
        "As the COVID-19 pandemic spread among the world, students that are willing to join us are taking risk of being affected by corona virus to learn about our school.\n" +
        "That change from now. With the 360° pano picture technology, parents and students that have interest in our school can have a full experience being in school in person and walk around the campus.",
      learn: "Learn About LCDS",
    };
  },
  name: "Home",
  methods: {
    buttonTriggers() {
      this.$router.push("/about");
    },
  },
};
</script>

<style>
.home {
  height: 100vh;
}
.main {
  height: 100%;
  background-image: url(../assets/main_background.png);
  background-size: cover;
}
.intro {
  position: absolute;
  width: 700px;
  height: 500px;
  left: 15%;
  top: 35%;

  background: rgba(80, 80, 80, 0.67);
  background-blend-mode: luminosity;
  box-shadow: 0px 4px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
}
.button p {
  width: 100%;
  font-size: 36px;
  display: flex;
  justify-content: center;
  color: #a42121;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.button {
  position: absolute;
  width: 343px;
  height: 92px;
  left: 65%;
  top: 748px;
  display: flex;
  align-items: center;

  background: #e6e4d7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.title {
  position: absolute;
  width: 579px;
  height: 110px;
  left: 87px;
  top: 80px;

  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  /* or 126% */

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.info {
  position: absolute;
  width: 552px;
  height: 195px;
  left: 87px;
  top: calc(50% - 195px / 2 + 82px);

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  /* or 135% */

  color: #e6e4d7;
}
</style>
