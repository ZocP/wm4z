<template>
  <div class="whole">
    <img class="nav-img" src="../assets/school.png">
    <div class = "parts">
      <div class="cell" :class="{cell_enhance_red: nowActive===0}" @click="navigatePage(0)">
        <a href="#/home">About&nbsp;LCDS</a>
      </div>
      <div class="cell" :class="{cell_enhance_red: nowActive===1}" @click="navigatePage(1)">
        <a href="#/home">Tour</a>
      </div>
      <div class="cell" :class="{cell_enhance_red: nowActive===2}" @click="navigatePage(2)">
        <a href="#/home">Calender</a>
      </div>
      <div class="cell" :class="{cell_enhance_red: nowActive===3}" @click="navigatePage(3)">
        <a href="#/more">More</a>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data:function(){
      return{
        nowActive:0
      }
    },
    methods: {
      navigatePage(pageId){
        this.nowActive =pageId
      }
    },
    computed:{

    },

  }
</script>

<style scoped>
  .nav-img{
    position: absolute;
  }
  .parts{
    flex: 1;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    height:100%;
  }
  .cell_enhance_red{
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;
    background-color: #89012E;
    box-shadow: 0px 7px 40px 15px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .cell {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;
    flex: 0 0 17%;
    text-align: center;
  }
  .cell a{
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 36px;
    color: #89012E;
    text-decoration: none;
    text-align: center;
  }
  .cell_enhance_red a{
    color: #E6E4D7;
  }
  .whole{
    display: flex;

    align-items: center;
    width: 100%;
    padding-left: 0.5em;
    margin: 0;
    background: #E6E4D7;
    height: 80px;


    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 10px 10px;
  }

  h1{
    margin: 0;
  }
</style>