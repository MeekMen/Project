<template>
  <div class="logininfo">
    <Menu></Menu>
    <div class="contment">
      <div>
        <form action="">
          <p class="flex-row">
            <img v-if="username" src="static/image/home/name2.png" alt="">
            <img v-else src="static/image/home/name.png" alt=""><span><input type="number" name="idnumber" v-model="username" v-on:blur="getinfo" placeholder="请输入绑定的手机号"></span></p>
          <p class="flex-row">
            <img v-if="code" src="static/image/home/pwd2.png" alt="">
            <img v-else src="static/image/home/pwd.png" alt=""><span><input type="number" name="code"  v-model="code" v-on:input="getinfo" placeholder="请输入验证码"> <input type="button" @click="getCode" class="fz075 getcode" v-model="codeTxt" v-bind:disabled="disabled"> </span></p>
          <p v-show="!isActive" class="proving" v-on:click="proving"><a>立即找回</a></p>
          <router-link  v-show="isActive"  to="">
          <p class="proving active"  v-on:click="getajax" ><a href="">立即找回</a></p>
          </router-link>
         
        </form>
      </div>
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
let Menu = {
   data(){
      return{
        headMsg:{'name':'找回密码','linkTxt':'取消'}
      }
   },
  template: `<div class="header">
                <ul class="flex-row" >
                    <li>{{headMsg.name}}</li>
                    <li></li>
                    <li><router-link to="/login" class="close">{{headMsg.linkTxt}}</router-link></li>
                </ul>
            </div>`
}
export default {
  name: 'login',
  data() {
    return {
      username: '',
      code:'',
      isActive :false,
      count: '',
      timer: null,
      codeTxt:'获取验证码',
      disabled:true,
    }
  },
  created: function () {
    // console.log(this.username);

  },
  methods: {
    getinfo: function (e) {
        let vm = this;
        let uname = this.username;
        let code = this.code;
        let myreg=/^[1][3,4,5,7,8][0-9]{9}$/; 
        if (myreg.test(uname)) {
          this.isActive = true;
          this.disabled = false;
        }else{
          // 显示
          this.$vux.alert.show({
            title: '',
            content: '手机号格式为空或不正确',
            onShow () {
              console.log('Plugin: I\'m showing')
            },
            onHide () {
              vm.username = '';
              vm.isActive = false;
            }
          });
        }
        if (uname.length > 0 && code.length > 0) {
          this.isActive = true;
        }else{
          this.isActive = false;
        }
    },
    proving:function(e){
        let uname = this.username;
        let code = this.code;
        if(uname == '' || uname ==null ||　code == '' || code ==null){
          this.$vux.alert.show({
            title: '',
            content: '请键入手机号和验证码',
          });
        };
        
    },
    getajax:function(e){
      // 显示
      this.$vux.toast.show({
       text: '已发送请求'
      })
      console.log(this.$vux)
      console.log(this.username+','+this.code)
    },
    getCode:function(e){
      let vm = this;
        const TIME_COUNT = 60;
         if (!vm.timer) {
           vm.count = TIME_COUNT;
           vm.timer = setInterval(() => {
           if (vm.count > 0 && vm.count <= TIME_COUNT) {
              vm.disabled = true;
              vm.count--;
              vm.codeTxt = '有效期('+vm.count+')';
            } else {
              vm.codeTxt = '获取验证码';
              vm.disabled = false;
              clearInterval(vm.timer);
              vm.timer = null;
            }
           }, 1000)
          }
    }
  },
  components: {
    // <Menu> 将只在父组件模板中可用
    'Menu': Menu,
    Loading
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
