<template>
  <div class="home flex-col">
    <router-link class="weather" to="/weather">
        <img src="static/image/home/weather01.png" alt=""> <span>天气</span>
      </router-link>
    <div class="logo flex-row"><img src="static/image/home/logo-txt.png" alt=""></div>
    <ul class=" flex-row">
      <li class="flex-col" v-for="(item,index) in menu" :key="item.id" :name="item.href"> 
        <router-link :to="{ path:'Homepage',query:{href:item.href}}"><span><i class="icon nav" :id="'icon'+index"></i></span></router-link>
        <p class="fz0875">{{item.name}}</p>
        <p class="fz075">{{item.kind}}</p>
      </li>
    </ul>
    <div class="login">
      <router-link to="/login">
        <input class="button" type="button" name="" value="用户登录">
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      menu: [{id:'0', "name" : '建设单位' , "kind" : "项目管理系统","href":"1"},
      {id:'1', "name" : '施工企业', "kind" : "项目管理系统","href":"2"},
      {id:'2', "name" : '监理企业', "kind" : "项目管理系统","href":"3"},
      {id:'3', "name" : '勘察设计', "kind" : "项目管理系统","href":"4"}]
    }
  },
  created: function () {
    console.log()
    for (let i = 0; i < this.menu.length; i++) {
      // console.log(this.menu[i].key)
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*.home{display:flex; height: 100%; flex-direction: column; align-items: center}*/
</style>
