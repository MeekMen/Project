<template>
  <div class="Homepage1 flex-col">
     <!-- {{pagehref}} -->
    <router-link class="" to="login">返回主页</router-link>
  </div>
</template>
<script>
export default {
  name: 'Homepage1',
  data() {
    return {
      // pagehref:'Homepage1',
    }
  },
  created: function () {
    let vm = this;
    
  },
  methods:{

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.home{display:flex; height: 100%; flex-direction: column; align-items: center}*/
</style>
