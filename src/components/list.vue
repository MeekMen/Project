
<template>

<div class="list" style="height:100%;" v-cloak>
     <x-header transition="" :right-options="{showMore: true}" @on-click-more="showMenus = true">列表</x-header>
  <view-box ref="viewBox">
      <div class="tianqi"></div>
      <group name="listitem" class="itembox">
        <cell-box is-link v-for="(item,index) in datalist" :key="item.id">
          <!-- anything -->
          <router-link :to="{path:'/HelloWorld',query:{id:item.id,page:item.title,position:item.position,job:item.job}}">
<!--             <router-link :to="{path:'/HelloWorld/'+item.title}"> -->
            <flexbox  wrap="wrap" class="listitem">
              <flexbox-item :span="3/4">
                <flexbox  orient="vertical">
                      <flexbox-item><span> {{item.date}}</span> 
                        <span v-if="item.state == 1" class="keep">已保存<img src="static/image/home/keep.png" alt=""></span> 
                         <span v-else class="putin">已提交 <img src="static/image/home/yes.png" alt=""></span> 

                      </flexbox-item>
                      <flexbox-item>{{item.title}}</flexbox-item>
                      <flexbox-item>{{item.position}}</flexbox-item>
                      <flexbox-item>{{item.job}}</flexbox-item>
                </flexbox>
              </flexbox-item>
              <flexbox-item :span="1/4">
                <div v-if="item.state == 1" class="flex-demo">
                    <img src="static/image/home/set.png" alt="">
                </div>
                <div v-else class="flex-demo"></div>
              </flexbox-item>
            </flexbox>
          </router-link>
        </cell-box>
    </group>
    <!-- <tabbar slot="bottom"></tabbar> -->
    <divider>我是有底线的</divider>
  </view-box>
</div>

</template>
<script>
import { XHeader,CellBox,Flexbox, FlexboxItem, Divider,Group } from 'vux';
export default {
  name: 'list',
  data() {
    return {
      datalist: [{"id": "0","date": "2017-05-22 星期五 10:18","state": "1","title": "防水防漏排水工程检测","position": "主体建筑","job": "卫生器具安装，涂饰功能质量验收，防水防漏排水工程检测"},{"id": "1","date": "2018-08-12 星期五 08:23","state": "2","title": "涂饰功能质量验收","position": "展板墙面","job": "面漆粉刷"},{"id": "2","date": "2017-05-22 星期五 10:18","state": "1","title": "防水防漏排水工程检测","position": "主体建筑","job": "卫生器具安装"},{"id": "3","date": "2018-08-12 星期五 08:23","state": "2","title": "涂饰功能质量验收","position": "展板墙面","job": "面漆粉刷"},{"id": "4","date": "2017-05-22 星期五 10:18","state": "1","title": "防水防漏排水工程检测，涂饰功能质量验收","position": "主体建筑","job": "卫生器具安装"},{"id": "5","date": "2018-08-12 星期五 08:23","state": "2","title": "涂饰功能质量验收","position": "展板墙面","job": "面漆粉刷"},{"id": "6","date": "2017-05-22 星期五 10:18","state": "1","title": "防水防漏排水工程检测","position": "主体建筑","job": "卫生器具安装"},{"id": "7","date": "2018-08-12 星期五 08:23","state": "2","title": "涂饰功能质量验收","position": "展板墙面","job": "面漆粉刷"}]
    }
  },
  created: function () {
    // console.log(this.datalist)
    // Vue.component('x-header', XHeader)
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