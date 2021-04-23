import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js';
import  './plugins/element.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
// import echarts from 'echarts';//这个加上之后效果。。。。
import * as echarts from 'echarts'
import 'echarts/lib/chart/line'       //绘制不同的图表要引入不同的chart和component
import 'echarts/lib/component/polar'
import BaiduMap from 'vue-baidu-map';
// 下面是echarts的模块
import axios from 'axios';
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(BaiduMap,{
	ak:'E3cTzf6fpFkTtjEFAv8KPpDnAWsmSydM'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
