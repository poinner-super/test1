import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Choice from '../components/Choice.vue'
import List from '../components/List.vue';
import Login from '../components/Login.vue'
import Map from '../components/Map.vue'
import Charts1 from '../components/Chartss/Charts1.vue';
import Charts2 from '../components/Chartss/Charts2.vue';
import Charts3 from '../components/Chartss/Charts3.vue';
import Charts4 from '../components/Chartss/Charts4.vue';
import Charts5 from '../components/Chartss/Charts5.vue';
import Charts6 from '../components/Chartss/Charts6.vue';
import Charts7 from '../components/Chartss/Charts7.vue';
import Charts8 from '../components/Chartss/Charts8.vue';
import Charts10 from '../components/Chartss/Charts10.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
	  path:'/choice',
	  name:'choice',
	  component:Choice
  },
  {
	  path:'/home',
	  name:'home',
	  component:Home,
	  redirect:'/home/charts1',
	  children:[
		  {
		  	  path:'/home/charts1',
		  	  name:'首页',
		  	  component:Charts1
		  },
		  {
		  	  path:'/home/charts2',
		  	  name:'用能月报',
		  	  component:Charts2
		  },
		  {
		  	  path:'/home/charts3',
		  	  name:'charts3',
		  	  component:Charts3
		  },
		  {
		  	  path:'/home/charts4',
		  	  name:'运维中心',
		  	  component:Charts4,
			  redirect:'/home/charts4/map',
			  children:[
				  {path:'/home/charts4/map',name:'站点地图',component:Map},
				  {path:'/home/charts4/list',name:'站点列表',component:List},
			  ]
		  },
		  {
		  	  path:'/home/charts5',
		  	  name:'运维中心2',
		  	  component:Charts5,
			  redirect:'/home/charts5/map',
			  children:[
				  {path:'/home/charts5/map',name:'站点地图2',component:Map},
			  ]
		  },
		  {
		  	  path:'/home/charts6',
		  	  name:'charts6',
		  	  component:Charts6
		  },
		  {
		  	  path:'/home/charts7',
		  	  name:'用能月报',
		  	  component:Charts7
		  },
		  {
		  	  path:'/home/charts8',
		  	  name:'运维中心',
			  component:Charts8,
			  redirect:'/home/charts8/map',
			  children:[
				  {path:'/home/charts8/map',name:'站点地图',component:Map},
				  {path:'/home/charts8/list',name:'站点列表',component:List},
			  ]
		  },
		  {
		  	  path:'/home/charts10',
		  	  name:'配电室',
		  	  component:Charts10
		  },
	  ],
	 
  },
]

const router = new VueRouter({
  routes
})

export default router
