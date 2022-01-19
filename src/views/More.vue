<template>
  <div class="more">
    <div class="top">
      <div class="top_pic"></div>
      <div class="learn_about" @click="jumpToSchool">
        <a :href="link_school">{{ learnMore }}</a>
      </div>
    </div>

    <div class="bottom_info">
      <img src="../assets/lcds_full.png" />
      <div class="tsa">
        <p class="lcd" v-html="TSA"></p>
        <p class="desc" v-html="desc"></p>
      </div>
      <div class="email_button_div">
        <div class="email_button" @click="jumpToEmail">
          <a :href="link_mail">{{ email }}</a>
        </div>
      </div>
    </div>

    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "More",
  data: function () {
    return {
      TSA: "LCDS TSA Group",
      desc:
        "LCDS TSA Group<br/>" +
        "725 Hamilton Road<br/>" +
        "Lancaster PA, 17603",
      email: "Email Us",
      link_mail: "https://www.bilibili.com",
      learnMore: "Learn More About LCDS",
      link_school: "https://lancastercountryday.org",
    };
  },
  methods: {
    jumpToEmail() {
      window.navigate("https://www.bilibili.com");
    },
    jumpToSchool() {
      window.navigate("https://www.lancastercountryday.org");
    },
  },
};
</script>

<style scoped>
.learn_about {
  position: absolute;
  z-index: 1000;
  width: 30vw;
  height: 10vh;
  background: rgba(230, 228, 215, 0.6);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
}
.learn_about:hover {
  transform: scale(1.03);
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);

}
.more a {
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vw;
  color: #a42121;
}
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
  text-align: center;
}
.top_pic {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 110%;
  left: -10px;
  height: 100%;
  background-image: url(../assets/more_pic.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(13px);
  transform: scale(1.02);
}
.more {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #e6e4d7;
}
.bottom_info {
  justify-content: center;
  z-index: 100;
  background-color: #e6e4d7;
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
}
.bottom_info img {
  object-fit: cover;
  height: 15vw;
  max-height: 200px;
}

.footer {
  background-color: #a42121;
  width: 100%;
  height: 150px;
  position: relative;
  bottom: 0;
}
.tsa {
  margin-left: 2vw;
  height: 13vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.desc {
  width: 25vw;
  height: auto;

  font-size: 1.5vw;
  line-height: 1.5vw;
  /* or 167% */

  color: #000000;
}
.lcd {
  width: 25vw;
  font-size: 2vw;
  line-height: 2vw;
  display: flex;
  align-items: center;
  color: #a42121;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.email_button_div {
  display: flex;
  align-items: center;
  height: 25vh;
  width: 20vw;
}

.email_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 10vh;
  border: 0.15vw solid #a42121;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
}
.email_button:hover {
  transform: scale(1.03);
  box-shadow: 0px 6px 6px;
}
.email_button a {
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
  color: #a42121;
}
</style>
