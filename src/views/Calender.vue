<template>
  <keep-alive>
  <div class = "calender">
    <div class = "">
        <a-calendar class ="calender_container" mode="month" :validRange=range>
          <ul slot="dateCellRender" slot-scope="value" class="events">
            <li v-for="item in getListData(value)" :key="item.content">
              <a-badge :status="item.type" :text="item.content" />
            </li>
          </ul>
        </a-calendar>
    </div>
  </div>
</keep-alive>
</template>

<script>

import 'ant-design-vue/lib/calendar/style/css';
import 'ant-design-vue/lib/badge/style/css'
import moment from 'moment'
import axios from "axios";

export default {
  data:function(){
    return{
      monthEvents :[],

    }
  },
  name: "Calender",
  methods: {
    getListData(value) {
      let listData;
      this.monthEvents.forEach(element =>{
        if(element.date === value.date()){
          console.log("put")
          listData = [
            {type: 'default', content: element.event},
          ]
        }
      })
      return listData || [];
    },
    getEvents(){
      axios.get('http://localhost:8080/calendar',{params:{
          month: new Date().getMonth() + 1,
        }}).then(response =>{
          this.monthEvents = response.data.Data;
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

    }
  }

</style>
