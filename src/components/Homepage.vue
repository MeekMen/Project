<template>
  <div class="Homepage flex-col">
    <input v-model="pagehref">
    {{pagehref}}
  </div>
</template>
<script>
export default {
  name: 'Homepage',
  data() {
    return {
      pagehref:'Homepage1'
    }
  },
  created:function () {
    let vm = this;
    var hrefName = this.$route.query.href;
    console.log(hrefName)
    vm.pagehref = hrefName;
    vm.hrefJump(vm,hrefName);
  },
  methods:{
    hrefJump: function (vm,hrefName) {
      if(hrefName == 1){
        vm.$router.push({ name: 'Homepage1'})
      }else if (hrefName == 2) {
        vm.$router.push({ name: 'Homepage2'})
      } else {}

    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*.home{display:flex; height: 100%; flex-direction: column; align-items: center}*/
</style>
