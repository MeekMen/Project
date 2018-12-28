// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //路由
import { AlertPlugin, ToastPlugin,ViewBox,Tabbar, TabbarItem,LoadingPlugin  } from 'vux' //UI

// muse-ui
import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI) //UI

Vue.use(LoadingPlugin)//UI
Vue.use(AlertPlugin)//UI
Vue.use(ToastPlugin)//UI
Vue.config.productionTip = false
Vue.component('view-box', ViewBox)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
