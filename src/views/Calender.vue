<template>
  <div class = "calender">
    <div class = "">
      <Calendar class ="calender_container" mode="month" :validRange=range>
        <ul slot="dateCellRender" slot-scope="value" class="events">
          <li v-for="item in getListData(value)" :key="item.content">
            <Abadge :status="item.type" :text="item.content" />
          </li>
        </ul>
      </Calendar>
    </div>
  </div>


</template>

<script>

import Calendar from 'ant-design-vue/lib/calendar';
import 'ant-design-vue/lib/calendar/style/css';
import Abadge from 'ant-design-vue/lib/badge'
import moment from 'moment'
import axios from "axios";

export default {
  data:function(){
    return{
      a : moment('2022-01-19'),
      b : moment('2022-01-22'),
    }
  },
  name: "Calender",
  components:{
    Calendar,
    Abadge,
  },
  methods: {
    getListData(value) {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            {type: 'warning', content: 'This is warning event.'},
            {type: 'success', content: 'This is usual event.'},
          ];
          break;
        case 10:
          listData = [
            {type: 'warning', content: 'This is warning event.'},
            {type: 'success', content: 'This is usual event.'},
            {type: 'error', content: 'This is error event.'},
          ];
          break;
        case 15:
          listData = [
            {type: 'warning', content: 'This is warning event'},
            {type: 'success', content: 'This is very long usual event。。....'},
            {type: 'error', content: 'This is error event 1.'},
            {type: 'error', content: 'This is error event 2.'},
            {type: 'error', content: 'This is error event 3.'},
            {type: 'error', content: 'This is error event 4.'},
          ];
          break;
        default:
      }
      return listData || [];
    },
    getEvents(){
      axios.get('http://localhost:8080/calendar',{params:{
          month: new Date().getMonth() + 1,
        }}).then(response =>{
        this.monthEvents = JSON.parse(response.data)
        console.log(this.monthEvents)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  computed:{
    range:()=>{
     return [moment().startOf('month'),moment().endOf('month')]
    },
  },
  mounted(){
    this.getEvents()
  }
};
</script>

<style lang="less">
  .calender{
    display: flex;
    justify-content: center;
    align-items: center;
    height : 100vh;
    width: 100%;
    background-color: #A42121;

    .calender_container{
      box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      width: 80vw;
      background-color: #e6e4d7;
    }
    .ant-radio-group{
      display:none;
    }
    .columnheader{
      display: flex;
      justify-content: center;
    }
    .ant-select{
      display: none;
    }
  }

</style>
