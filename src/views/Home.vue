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
  display:flex;
  justify-content: space-between;
  align-items: center;

}
.intro {
  margin-left: 15vw;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45vw;
  height: 45vh;

  background: rgba(80, 80, 80, 0.67);
  background-blend-mode: luminosity;
  box-shadow: 0px 4px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
}
.button p {
  height: 100%;
  margin: 0;
  width: 100%;
  font-size: 1.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a42121;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.button {

  margin-right: 15vw;
  margin-top: 35vh;
  width: 15vw;
  height: 5vw;

  display: flex;
  align-items: center;

  background: #e6e4d7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: all 0.3s;
}

.button:hover{
  transform: scale(1.05);
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
}

.title {
  overflow: hidden;
  display: flex;
  align-items:center;
  width: 100%;
  padding: 3vh 3vw;
  margin: 1vh 1vw;
  font-style: normal;
  font-weight: normal;
  font-size: 3vw;
  line-height: 1vw;
  /* or 126% */

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.info {
  display: flex;
  align-items:center;
  padding: 3vh 3vw;
  margin: 1vh 1vw;
  height: 100%;
  font-size: 1.5vw;
  line-height: 3.5vh;
  /* or 135% */

  color: #e6e4d7;
}
</style>
