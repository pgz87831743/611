import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import echarts from 'echarts'
import 'layui/dist/css/layui.css'
import 'ant-design-vue/dist/antd.css';
import VueRoute from 'vue-router';
import Router from "@/router";
// axios.defaults.baseURL = "http://101.43.179.120:5080/"
// axios.defaults.baseURL = "http://localhost:5080/"
// axios.defaults.baseURL = "http://192.168.137.1:5080/"
axios.defaults.baseURL = "http://47.115.200.30:9001/"
Vue.config.productionTip = false
//把axios挂载到vue上，并起一个叫$http的名字
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.use(VueRoute);


// axios.interceptors.response.use(response => {
//     console.log(response.data.data.expirationTime);
//     return response;
// })
//
// axios.interceptors.request.use(req => {
//     req.headers.token=''
//     return req;
// })


new Vue({
    render: h => h(App),
    router: Router
}).$mount('#app')

