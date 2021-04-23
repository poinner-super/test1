<template>
	<div id="map0">
		<baidu-map class="map" center="郑州轻工业大学" :zoom="12">
			<bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
		    <bm-marker :position="markerPoint1" :dragging="true" @click="infoWindowOpen">
		      <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen" >
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
			    <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen" >
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
			      <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen" >
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
			
	</div>
	
</template>

<script>
	export default {
	  data () {
	    return {
	      show: false,
		  markerPoint1:{lat:34.817299,lng:113.516217},
		  markerPoint2:{lat:34.84207,lng:113.493939},
		  markerPoint3:{lat:34.86703,lng:113.536217},
		 
	    }
	  },
	  methods: {
	    infoWindowClose () {
	      this.show = false
	    },
	    infoWindowOpen () {
	      this.show = true
	    },
		dian(){
			this.$router.push({path:'/home'});
		}
	  }
	}
	
	
</script>

<style>
	#map0 .map {
	  width: 100%;
	  height: 1200px;
	}
	.BMap_cpyCtrl {
	    display: none;
	}
	.anchorBL {
	    display: none;
	}
</style>
