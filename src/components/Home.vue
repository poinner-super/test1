<template>
	<div class="vf">
		<!-- 头部 -->
		  <el-container class="home-container">
				   <div class="aside">
					   <el-aside width="200px">
						  <div class="tou" >
						   <div class="row" style="margin-left: 2.625rem;">
							   <h5>
								   <a href="#">主题</a>
								   ||
								   <a href="#">语言</a>
							   </h5>
						   </div>
						   <div class="demo-basic--circle" style="margin-top: 40px;width: 160px;">
							  <div class="block"><el-avatar :size="80" :src="circleUrl" style="margin-left: 45px;"></el-avatar></div>
							</div>
							<div class="sub-title" style="position: absolute; margin-left: 70px;"><b>用户</b></div>
						  </div>
					   <el-menu
						 background-color="#545c64"
						 text-color="#fff"
						 active-text-color="#ffd04b"  :collapse-transition="false" 
						:router="true" :default-active="$route.path"
						:unique-opened="true" style="height: 20px; margin: 0;">
						 <el-submenu :index="item.id+''" v-for=" item in menuList" :key="item.id" style="170px;">
											<!--   -->
						   <template #title>
							 <i class="el-icon-location"></i>
							 <span>{{item.title}}</span>
						   </template>
							 <el-menu-item :index="it.path" v-for="it in item.sList" :key="it.id" 
									 style="color: yellow; min-width: 170px;">{{it.title}}</el-menu-item>
						 </el-submenu>
					   </el-menu>
						
					  </el-aside>
				   </div>
				  
			  
		    <el-container>
		      <el-header>
		      	<span>配电站控制系统</span>
				<div class="no_border">
					<el-tabs  
					          v-model="activeIndex"
					          type="card"
					          @tab-click="clickTab"
					          @tab-remove="removeTab"
					          closable>
					          <el-tab-pane
					            v-for="item of openTab"
					            v-if="openTab.length"
					            :key="item.name"
					            :label="item.name"
					            :name="item.route">
					          </el-tab-pane>
					        </el-tabs>
				</div>
				
						<div style="font-size: 30px;">
							<a><i class="el-icon-s-opportunity"></i></a>
							<span style="margin-right: 10px;"></span>
							<a><div id="exit"></div></a>
						</div>
						
		      	<!-- <button class="btn btn-primary" @click="to_choice(gnbtn)">{{gnbtn}}</button> -->
		      </el-header>
			  <!-- 主体 -->
		      <el-main style="padding: 0px;">
				  <router-view></router-view>
				  
			  </el-main>
		    </el-container>
		  </el-container>

	</div>
</template>

<script>
	export default{
		created() {
			var name=window.sessionStorage.getItem("user");
			if(name=="poinner")this.gnbtn="登出";
		},
		computed: {
		    openTab () {
		      return this.$store.state.openTab
		    },
		    activeIndex: {
		      get () {
		        return this.$store.state.activeIndex
		      },
		      set (val) {
		        this.$store.commit('set_active_index', val)
		      }
		    },
			
		  },
		  watch: {
		      '$route' (to, from) {
		        let flag = false
		        for (let item of this.openTab) {
		          if (item.name === to.name) {
		            this.$store.commit('set_active_index', to.path)
		            flag = true
		            break
		          }
		        }
		  
		        if (!flag) {
		          this.$store.commit('add_tabs', {route: to.path, name: to.name})
		          this.$store.commit('set_active_index', to.path)
		        }
		        
		      }
		    },
			mounted () {
			    // 刷新时以当前路由做为tab加入tabs
			    // 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
			    // 当当前路由是首页时，添加首页到store，并设置激活状态
			    if (this.$route.path !== '/' && this.$route.path !== '/home/chatrs1') {
			      this.$store.commit('add_tabs', {route: '/home' , name: '首页'})
			      this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name })
			      this.$store.commit('set_active_index', this.$route.path)
			      
			    } else {
			      this.$store.commit('add_tabs', {route: '/home', name: '首页'})
			      this.$store.commit('set_active_index', '/home')
			      
			    }
			  },
		data(){
			return{
				TabName:[
					'变配电站状态',
					'用能月报',
					'变压器状态',
				],
				gnbtn:"登出",
				circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
				sizeList: ["large", "medium", "small"],
				menuList:[
					// 第一项
					{
						id:1,
						title:"概况",
						sList:[
							{title:"变配电站状态",path:"/home/charts1"},
							{title:"用能月报",path:"/home/charts2"},
							{title:"变压器状态",path:"/home/charts3"},
							{title:"运维中心",path:"/home/charts4"},
							{title:"运维中心二",path:"/home/charts5"},
							{title:"看板",path:""},
							{title:"看板二",path:""},
							{title:"看板三",path:""},
							{title:"配电室",path:"/home/charts10"},
						]
					},
					{
						id:2,
						title:"电力监测",
						sList:[
							{title:"电力数据",path:""},
							{title:"变压器检测",path:""},
							{title:"电力运行报表",path:""},
							{title:"配电图",path:""},
							{title:"电力极值报表",path:""},
							{title:"电力运行日报",path:""},
							{title:"平均功率因数",path:""},
						]
					},
					{
						id:3,
						title:"电能质量",
						sList:[{title:"谐波检测",path:""},]
					},
					{
						id:4,
						title:"用电分析",
						sList:[
							{title:"用能报表",path:""},
							{title:"同比分析",path:""},
							{title:"环比分析",path:""},
							{title:"配电图",path:""},
							{title:"电能集抄",path:""},
							{title:"自定义用电报表",path:""},
							{title:"分时段用电",path:""},
							{title:"最大需量报表",path:""},
							{title:"企业负荷",path:""},
							{title:"实时需量",path:""},
							{title:"用能及电费报表",path:""},
							{title:"整点集抄",path:""},
						]
					},
					{
						id:5,
						title:"事件记录",
						sList:[
							{title:"遥信事件",path:""},
							{title:"越限事件",path:""},
							{title:"操作日志",path:""},
							{title:"短信日志",path:""},
							{title:"平台运行日志",path:""},
							{title:"报警信息",path:""},
							{title:"推送记录",path:""},
							{title:"报警分析",path:""},
						]
					},
					{
						id:6,
						title:"安全用电",
						sList:[
							{title:"线缆及母排测温",path:""},
							{title:"漏电检测",path:""},
						]
					},
					{
						id:7,
						title:"运行环境",
						sList:[
							{title:"环境检测",path:""},
							{title:"视频监控",path:""},
							{title:"环境温湿度",path:""},
							{title:"仪表通信状态",path:""},
							{title:"网关通信状态",path:""},
							{title:"视频监控",path:""},
							{title:"视频设备状态",path:""},
						]
					},
					{
						id:8,
						title:"设备控制",
						sList:[
							{title:"照明控制",path:""},
							{title:"控制操作日志",path:""},
						]
					},
					{
						id:9,
						title:"设备管理",
						sList:[
							{title:"设备定义",path:""},
							{title:"设备档案",path:""},
							{title:"设备报表",path:""},
							{title:"ABB断路器管理",path:""},
							{title:"二维码管理",path:""},
						]
					},
					{
						id:10,
						title:"运维管理",
						sList:[
							{title:"任务管理",path:""},
							{title:"巡检记录",path:""},
							{title:"缺陷记录",path:""},
							{title:"消警记录",path:""},
							{title:"抢修记录",path:""},
						]
					},
					{
						id:11,
						title:"用户报告",
						sList:[
							{title:"用户报告",path:""},
							{title:"文档管理",path:""},
							{title:"用户报告二",path:""},
							
						]
					},
				]
			}
		},
		methods: {
			tabName(pathName){
				let my=this;
				let s=pathName.substr(pathName.lenth-3,pathName.length-1)
				let i=parseInt(s);
				return my.TabTabName[i-1]
			},
			clickTab (tab) {
			      this.$router.push({path: this.activeIndex})
			      console.log(this.$route.path)
			    },
				removeTab (target) {
				      if(target == '/'||target == '/home'){
				         return
				       }
				      this.$store.commit('delete_tabs', target)
				      if (this.activeIndex === target) {
				        // 设置当前激活的路由
				        if (this.openTab && this.openTab.length >= 1) {
				          console.log('=============', this.openTab[this.openTab.length - 1].route)
				          this.$store.commit('set_active_index', this.openTab[this.openTab.length - 1].route)
				          this.$router.push({path: this.activeIndex})
				        }
				      }
				    },
			to_choice(name) {
				if(name=="切换站点")this.$router.push({path:"/choice"});
				else this.$router.push({path:"/"});
			},
			charts1(){
				this.$router.push({path:"/home/charts1"});
			},
			charts2(){
				this.$router.push({path:"/home/charts2"});
			},
			charts3(){
				this.$router.push({path:"/home/charts3"});
			},
			charts4(){
				this.$router.push({path:"/home/charts4"});
			},
			charts5(){
				this.$router.push({path:"/home/charts5"});
			},
			charts6(){
				this.$router.push({path:"/home/charts6"});
			},
		},
	}
</script>

<style lang="less">
	.tou{
		height: 200px;
		padding: 0;
		position: relative;
	}
	.home-container{
		height: 100%;
		width: 100%;
	  position: fixed;
	}
	.el-header, .el-footer {
	   background-color: #B3C0D1;
	   color: #333;
	   line-height: 60px;
		display: flex;//这个属性可以让组件排列的整齐
		justify-content: space-between;
		/* padding-left: 0%; */
		font-size: 20px;
		align-items: center;
	 }

	
	  .el-aside {
	    background-color: #D3DCE6;
	    color: #000000;
	    text-align: left;
	    line-height: 20px;
		height: 100%;
		overflow-y: hidden;
		overflow-x: hidden;
	  }
	
	  .el-main {
		  
		  margin: 0px;
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	  }
	
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	 .aside{
		 height: 105%;
		 overflow-y: hidden;
		 overflow-x: hidden;
		 width: 180px;
	 }
	 #exit{
		 width: 40px;
		 height: 30px;
		 background-image: url(../assets/exit-b.png);
		 background-repeat: no-repeat;
		 background-position: center;
		 display: inline-block;
	 }
	.vf	.el-tabs--card>.el-tabs__header .el-tabs__nav {
		    border: 4px solid #000000;
		    border-bottom: none;
		    border-radius: 4px 4px 0 0;
		    box-sizing: border-box;
		}
	.vf .el-tabs--card>.el-tabs__header .el-tabs__item {
		// border-bottom: 4px solid #FFF3CD;
		border-left: 4px solid #000000;
		transition: color .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1);
		
	}
	.vf .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
		border-bottom: 4px solid #00ffff;
	}
</style>