<template>
  <div class="logininfo">
    <Menu></Menu>
    <div class="contment">
      <!-- <button v-on:click="show = !show">Toggle</button> -->
      <transition :name="transitionName">
      <div v-if="show">
        
        <form action="">
          <p class="flex-row">
            <img v-if="username" src="static/image/home/name2.png" alt="">
            <img v-else src="static/image/home/name.png" alt=""><span><input type="text" name="idnumber" v-model="username" v-on:input="getinfo" placeholder="请输入身份证号"></span></p>
          <p class="flex-row">
            <img v-if="pwd" src="static/image/home/pwd2.png" alt="">
            <img v-else src="static/image/home/pwd.png" alt=""><span><input type="password" name="pwd"  v-model="pwd" v-on:input="getinfo" placeholder="请输入密码"></span></p>


          <p v-show="!isActive" class="proving" v-on:click="proving"><a>登录</a></p>
          <router-link  v-show="isActive"  to="/list">
          <p class="proving active"  v-on:click="getajax" ><a href="">登录</a></p>
          </router-link>
         
        </form>
         <div class="flex-row funinfo">
          <router-link to="/Forgetpwd"  class="flex-row"><img src="static/image/home/fgpwd.png" alt=""><span class="col444" >忘记密码</span></router-link>
          <router-link to="/Register"  class="flex-row"><img src="static/image/home/newuser.png" alt=""><span class="col444">新用户注册</span></router-link>
          </div>

      </div>
    </transition>

    </div>
    <!-- <template>
      <div>
        <group>
          <cell title="title" value="value"></cell>
        </group>
      </div>
    </template> -->
  </div>
</template>
<script>
import { Loading } from 'vux'
var Child = {
  template: '<div class="header"><ul class="flex-row" ><li>用户登录</li><li></li><li> <router-link to="/" class="close"> 取消 </router-link></li></ul></div>'
}

export default {
  name: 'login',
  data() {
    return {
      username: '',
      pwd:'',
      isActive :false,
      show: true,
      transitionName:'fade',
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  created: function () {
    // console.log(this.username);
    this.$vux.loading.hide()
  },
  mounted(){
    // this.getDevice();
  },
  methods: {
    getinfo: function (e) {
        let vm = this;
        let uname = this.username;
        let pwd = this.pwd;
        if (!isNaN(uname)) {
          this.isActive = true;
        }else{
          // 显示
          this.$vux.alert.show({
            title: '',
            content: '您输入的身份证格式不正确',
            onShow () {
              console.log('Plugin: I\'m showing')
            },
            onHide () {
              vm.username = '';
              vm.isActive = false;
            }
          });
        }
        if (uname.length > 0 && pwd.length > 0) {
          this.isActive = true;
        }else{
          this.isActive = false;
        }
    },
    proving:function(e){
        let uname = this.username;
        let pwd = this.pwd;
        if(uname == '' || uname ==null ||　pwd == '' || pwd ==null){
          this.$vux.alert.show({
            title: '',
            content: '请键入账号密码',
          });
        };
        
    },
    getajax:function(e){
      console.log(this.username+','+this.pwd)
    }
  },
  components: {
    // <Menu> 将只在父组件模板中可用
    'Menu': Child,
    Loading
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>