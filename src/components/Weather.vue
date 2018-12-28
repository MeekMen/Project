
<template>

<div class="weabox" style="height:100%;">
  <x-header transition="" :right-options="{showMore: false}" @on-click-more="showMenus = true"></x-header>
     <img v-if="weathertype == '多云'" src="static/image/home/duoyun.gif" @click="greet" alt="">
     <img v-else-if="weathertype == '阵雨' || weathertype == '雷阵雨'" src="static/image/home/zhenyu.gif" v-on:click="greet" alt="">
     <img v-else-if="weathertype == '晴'" src="static/image/home/qing.gif" v-on:click="greet" alt="">
     <img v-else src="static/image/home/yu.gif" v-on:click="greet" alt="">

     <div class="wea-info" :style="{ height:infoheight + 'px' }" v-if="weather">
        <div class="pm25"><span><img src="static/image/home/weather/zhiliang.png" alt=""></span><b>{{weather.data.pm25}}</b> <b>{{weather.data.quality}}</b></div>
       <h4>{{weather.city}}</h4>
       <h2>{{weathertype}}</h2>
       <h1><span>{{wendu}}</span><i>°</i></h1>
     </div>
     <div class="wea-info" v-else>
       <!-- <h4>{{weather.city}}</h4> -->
       <!-- <h2>{{weather.data.ganmao}}</h2> -->
       <!-- <h1><span>{{weather.data.wendu}}</span><i>°</i></h1> -->
     </div>

     <flexbox :gutter="0" class="wea-list">

      <flexbox-item v-for="(item,index) in forecast" :key="index" ><div class="flex-demo" :class="{thisday:daystate[index]}" @click="selitem($event,index)">
        <p v-html="item.date"></p>
        <p>
          <span v-if="item.type == '多云'"><img src="static/image/home/weather/duoyun.png" alt=""><strong>{{item.type}}</strong></span>
          <span v-else-if="item.type == '晴'"><img src="static/image/home/weather/qing.png" alt=""><strong>{{item.type}}</strong></span>
          <span v-else-if="item.type == '阵雨'"><img src="static/image/home/weather/zhenyu.png" alt=""><strong>{{item.type}}</strong></span>
          <span v-else-if="item.type == '小雨'"><img src="static/image/home/weather/xiaoyu.png" alt=""><strong>{{item.type}}</strong></span>
          <span v-else-if="item.type == '雷阵雨'"><img src="static/image/home/weather/leizhenyu.png" alt=""><strong>{{item.type}}</strong></span>
          <span v-else><img src="static/image/home/weather/qing.png" alt=""> <strong>{{item.type}}</strong> </span>
        </p>
        <p v-html="item.high"></p>
        <p v-html="item.low"></p>
        <p>{{item.fx}} <br>{{item.fl}}</p>
      </div></flexbox-item>

    </flexbox>

</div>

</template>
<script>
import { XHeader,CellBox,Flexbox, FlexboxItem, Divider,Group } from 'vux';
import axios from 'axios';
export default {
  name: 'weabox',
  data() {
    return {
      weather:'',
      infoheight:200,
      ajaxend:false,
      weathertype:'',
      forecast:[],
      wendu:0,
      today:0,
      daystate:[true,false,false,false,false],
    }
  },
  created: function () {
    // console.log(this.datalist)
    // Vue.component('x-header', XHeader)
    this.getData(this.today)
    // this.greet(event)
  },
  mounted(){
     this.greet(event)
  },
  methods: {
    getData:function(today){
      let vm = this
       axios({
            method:'get',
            // header:{'Access-Control-Allow-Origin:*'},
            url:'https://www.sojson.com/open/api/weather/json.shtml?city=北京',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(resp){
            let data = resp.data.data.forecast;
            vm.forecast = data;
            vm.weather = resp.data;
            // console.log(vm.weather)
            for (var i = 0; i < data.length; i++) {
              data[i].wendu = data[i].high.slice(2,5) - 4;
              data[i].date = data[i].date.slice(0,3) + '<br/>' + data[i].date.slice(3);
              data[i].high = data[i].high.slice(0,2) + '<br/>' + data[i].high.slice(2);
              data[i].low = data[i].low.slice(0,2) + '<br/>' + data[i].low.slice(2)
            }
            
            vm.weathertype = data[today].type;
            vm.wendu = data[today].wendu;
            // 隐藏
            vm.$vux.loading.hide()
            // 存储：
            localStorage.setItem('forecast', JSON.stringify(vm.forecast))
            // console.log(data[today].wendu)
        }).catch(resp => {
            // console.log('请求失败：'+resp.message);
            // 显示
            this.$vux.loading.show({
             text: '正在获取数据'
            })
            // this.getData(0)
        });
    },
    greet: function (event) {
      if (event == undefined) {
        // console.log(this)
         // this.greet(event)
      } else {
        console.log(event.target.height)
        this.infoheight = event.target.height;
      }
      
    },
    selitem:function(event,num){
      // daystate创建新数组
      let newday = [false,false,false,false,false];
      // 修改下标数组
      newday[num] = true;
      // 获取本地天气
      let jsonStr = localStorage.getItem('forecast');
      let data = JSON.parse(jsonStr);
      this.weathertype = data[num].type;
      this.wendu = data[num].wendu;
      this.daystate = newday;
      console.log(this)
      // this.delete(this.daystate, 0 )
    }
  },
  components: {
    XHeader,
    CellBox,
    Flexbox,
    FlexboxItem,
    Divider,
    Group
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vux-header{background-color: initial!important;}
</style>