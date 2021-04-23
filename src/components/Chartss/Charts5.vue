<template>
	<div id="charts5">

		<!-- 下面是地图 -->
		<el-container>
			<el-header style="height: 70px;">
				<div id="div1">
						<span><strong>巡检人员</strong></span>
						<span>30</span>
				</div>
				<div id="div2">
					<span><strong>巡检车辆</strong></span>
					<span>0</span>
				</div>
				<div id="div3">
					<span><strong>配电房数量</strong></span>
					<span>5</span>
				</div>
				<div id="div4">
					<span><strong>变压器数量</strong></span>
					<span>1750</span>
				</div>
				<div id="div5">
					<span><strong>总用电量</strong></span>
					<span>77.5</span>
				</div>
				<div id="div6">
					<span><strong>当前总功率</strong></span>
					<span>327.7</span>
				</div>
				<div id="div7">
					<span><strong>总检测点(个)</strong></span>
					<span>159(61)</span>
				</div>
			</el-header>
			<el-container>
				<el-aside style="width: 650px;height: 600px;margin: 10px 0px 0px 10px;">
					<baidu-map class="map" center="上海" zoom="10">
						<bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
						<bm-marker :position="markerPoint1" :dragging="true" @click="infoWindowOpen">
							<bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
								<h5>
									<pre>
				    站点名称：郑州站点1 
				    负责人：王经理
				    状态：运行中
				  			  </pre>
								</h5>
								<div align="center">
									<button class="btn btn-primary" @click="dian()">进入</button>
								</div>

							</bm-info-window>
						</bm-marker>
						<!--  -->
						<bm-marker :position="markerPoint2" :dragging="true" @click="infoWindowOpen">
							<bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
								<h5>
									<pre>
				  	站点名称：郑州站点2 
				  	负责人：李经理
				  	状态：运行中
				  						  </pre>
								</h5>
								<div align="center">
									<button class="btn btn-primary" @click="dian()">进入</button>
								</div>

							</bm-info-window>
						</bm-marker>
						<bm-marker :position="markerPoint3" :dragging="true" @click="infoWindowOpen">
							<bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
								<h5>
									<pre>
				  	  站点名称：郑州站点3 
				  	  负责人：王经理
				  	  状态：运行中
				  	  					  </pre>
								</h5>
								<div align="center">
									<button class="btn btn-primary" @click="dian()">进入</button>
								</div>

							</bm-info-window>
						</bm-marker>
						<!--  -->
					</baidu-map>
				</el-aside>
				<!-- 主体 -->
				<el-main>
					<div class="table1">
						<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'warningnum', order: 'descending'}">
							<el-table-column prop="name" label="变配电站名称" sortable width="180">
							</el-table-column>
							<el-table-column prop="warningnum" label="警告数目" sortable width="180">
							</el-table-column>
							<el-table-column prop="pdnum" label="派单数">
							</el-table-column>
							<el-table-column prop="finishnum" label="任务完成率">
							</el-table-column>
						</el-table>
					</div>
						<el-pagination
						  background
						  layout="prev, pager, next"
						  :total="1">
						</el-pagination>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				show: false,
				markerPoint1: {
					lat: 34.817299,
					lng: 113.516217
				},
				markerPoint2: {
					lat: 34.84207,
					lng: 113.493939
				},
				markerPoint3: {
					lat: 34.86703,
					lng: 113.536217
				},
				tableData: [{
					name: '配电站1',
					warningnum: '4351',
					pdnum: '61',
					finishnum: '12%'
				}, {
					name: '配电站2',
					warningnum: '2136',
					pdnum: '61',
					finishnum: '12%'
				}, {
					name: '配电站3',
					warningnum: '12276',
					pdnum: '61',
					finishnum: '12%'
				}, {
					name: '配电站4',
					warningnum: '2345',
					pdnum: '61',
					finishnum: '12%'
				}],

			}
		},
		methods: {
			formatter(row, column) {
				return row.address;
			},
			infoWindowClose() {
				this.show = false
			},
			infoWindowOpen() {
				this.show = true
			},
			dian() {
				this.$router.push({
					path: '/home'
				});
			}
		}
	}
</script>

<style>
	#charts5 .table1{
		width: 90%;
		height: 90%;
	}
	#charts5 .map {
		width: 100%;
		height: 100%;
	}

	.BMap_cpyCtrl {
		display: none;
	}

	.anchorBL {
		display: none;
	}

	#charts5 {
		padding: 0px;
		margin: 0px;
	}

	.charts5_1 {
		width: 400px;
		height: 300px;
	}

	#charts5 .el-header,
	.el-footer {
		background-color: #bbc9da;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	#charts5 .el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
		width: 400px;
		height: 50%;
	}

	#charts5 .el-main {
		background-color: #ffffff;
		color: #333;
		padding: 0px;
		margin: 10px;
		text-align: center;
		/* line-height: 160px; */
	}

	#charts5 body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
	#div1{
		background-image: url(../../assets/peopleGreen.svg);
	}
	#div2{
		background-image: url(../../assets/carNum.svg);
	}
	#div3{
		background-image: url(../../assets/transNumGreen.svg);
	}
	#div4{
		background-image: url(../../assets/transCapacityGreen.svg);
	}
	#div5{
		background-image: url(../../assets/powerGreen.svg);
	}
	#div6{
		background-image: url(../../assets/pfGreen.svg);
	}
	#div7{
		background-image: url(../../assets/subNumGreen.svg);
	}
	#charts5 .el-container>.el-header>div{
		width: 200px;
		height: 40px;
		display: inline-block;
		background-repeat: no-repeat;
		background-position: left left;
		background-size: 40px 40px;
		padding: 0px;
	}

	#charts5 .el-container>.el-header div span{
		line-height: 20px;
		display: block;
		font-size: small;
		text-indent: -35px;
	}
/* 	#charts5 .table1 el-table el-table-column{
		background-color: #000066;
	} */
</style>
