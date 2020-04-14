import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/css/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small' });
Vue.config.productionTip = false;
Vue.prototype.$siteSet = {
  name: '管理系统',
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
