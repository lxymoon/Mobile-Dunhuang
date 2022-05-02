import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import { UserFilled } from '@element-plus/icons-vue'
// Vue.use(ElementUI);

let vue = createApp(App);

vue.use(store).use(router).use(ElementPlus).mount('#app')


axios.defaults.baseURL = '/api'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

