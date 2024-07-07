import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import router from "@/router";
// axios.defaults.baseURL="http://1.14.1.82:8088/api"
axios.defaults.baseURL="http://localhost:8088/api"

Vue.prototype.$http=axios
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
