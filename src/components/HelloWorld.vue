
<template>

<div class="listinfo" style="height:100%;">
    <x-header transition="" :right-options="{showMore: false}" @on-click-more="showMenus = true">列表详情</x-header>
    <view-box ref="viewBox">
        <group class="itembox">

          <flexbox orient="vertical">
            <flexbox-item><div class="flex-demo infobg"><img src="static/image/home/logoinfo.png" alt=""></div></flexbox-item>
          </flexbox>

           <flexbox orient="vertical">
            <flexbox-item><div class="flex-demo"><h3>{{position}}</h3> <h3>{{pageinfo}}</h3> </div></flexbox-item>
          </flexbox>

           <flexbox>
            <flexbox-item :span="1/12"><div class="flex-demo">　</div></flexbox-item>
            <flexbox-item :span="10/12"><div class="flex-demo"> <h5>{{job}}</h5></div></flexbox-item>
            <flexbox-item :span="1/12"><div class="flex-demo">　</div></flexbox-item>
          </flexbox>

          <group>
            <calendar @on-change="log" title="选择时间" v-model="value" placeholder="请选择开始时间"></calendar>
          </group>

          <group>
            <calendar @on-change="log" title="选择时间" v-model="valueend" placeholder="请选择结束时间"></calendar>
          </group>


        </group>
      <!-- <tabbar slot="bottom"></tabbar> -->
    </view-box>
</div>

</template>
<script>
import { XHeader,CellBox,Flexbox, FlexboxItem, Divider,Group,Calendar } from 'vux'
export default {
  name: 'listinfo',
  data() {
    return {
      uid: '',
      pageinfo:'',
      position:'',
      job:'',
      value:'',
      valueend:'',
      time1: 'TODAY',
    }
  },
  methods: {
      log (str) {
        console.log(this.$data.value)
        console.log(this.$data.valueend)
        if ((new Date(this.$data.value.replace(/-/g,"\/"))) > (new Date(this.$data.valueend.replace(/-/g,"\/")))) {
            
            this.$vux.alert.show({
              title: '',
              content: '结束时间应大于开始时间',
            });
            this.$data.valueend = '';

        } else {
          // alert(1)
        }
      }
    }
  ,
  mounted(){
      // console.log(this.$vm.$route.params)
      console.log(this.$route.query)
      this.uid = this.$route.query.id;
      this.pageinfo = this.$route.query.page,
      this.position = this.$route.query.position,
      this.job = this.$route.query.job
  },
  components: {
    XHeader,
    CellBox,
    Flexbox,
    FlexboxItem,
    Divider,
    Group,Calendar
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itembox {
    padding-top: 22px;
}
</style>