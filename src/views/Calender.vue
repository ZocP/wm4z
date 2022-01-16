<template>
  <div class = "calender">
    <div class = "">
      <Calendar class = "calender_container ">

      </Calendar>
    </div>
  </div>


</template>

<script>

import Calendar from 'ant-design-vue/lib/calendar';
import 'ant-design-vue/lib/calendar/style/css';

export default {
  data:function(){
    return{

    }
  },
  name: "Calender",
  components:{
    Calendar,
  }
};
</script>

<style scoped>
  .calender{
    display: flex;
    justify-content: center;
    align-items: center;
    height : 100vh;
    width: 100%;
    background-color: #A42121;
  }
  .calender_container{
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 80vw;
    background-color: #e6e4d7;
  }
  .ant-fullcalendar-header{
    display: none;
  }
</style>
