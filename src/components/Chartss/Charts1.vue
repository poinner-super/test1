<template>
	<div id="app" class="demo1">
			
		<div class="mydiv1">
			<el-card class="box-card" > 
			  <div slot="header" class="clearfix">
			   <span class="span_head">概况</span>
			  </div> 
			 <div class="input-group  mydiv1_2 " >
			   <span class="input-group-addon" id="basic-addon1" style="margin-top: 0.25rem;" >配电站名称：</span>
			   <input type="text" class="form-control" value="郑州轻工业大学配电站"  readonly="true"  disabled="true" style="cursor: not-allowed;">
			 </div><br><br>
			 <div>
			   <div class="mydiv1_3">
				   <div class="my_top"><span>电压等级</span></div>
				   <div class="my_bottom"><span>10/0.4KV</span></div>
			   </div>
			   <div class="mydiv1_3">
				   <div class="my_top"><span>变压器台数</span></div>
				   <div class="my_bottom"><span>3台</span></div>
			   </div>
			   <div class="mydiv1_3" style="margin-right:-20px">
				   <div class="my_top"><span>负荷率</span></div>
				   <div class="my_bottom"><span>22.11%</span></div>
			   </div>
			   </div>
		
			<div style="padding-top:7rem">
				<div class="mydiv1_4">
					<div class="my_top"><span>装机容量</span></div>
					<div class="my_bottom"><span>600KVA</span></div>
				</div>
				 <div class="mydiv1_4">
					 <div class="my_top"><span>申报需量</span></div>
					 <div class="my_bottom"><span>400KW</span></div>
				 </div>
				  <div class="mydiv1_4" style="margin-right:-20px">
					  <div class="my_top"><span>测控装置</span></div>
					  <div class="my_bottom"><span>60个</span></div>
				  </div>
			</div>
			   
			</el-card> 
		</div>
		<div class="mydiv2">
			<el-card class="box-card" >
			  <div slot="header" class="clearfix">
			   <span class="span_head">运行状态</span>
			  </div> 
			  <div class="mydiv1_2"><input type="text" class="form-control" value="更新时间:   2021-04-21 19:45:00"  readonly="true"  disabled="true" ></div>
			 <br><br>  <div style="margin-left: 0.125rem;">
			     <div class="mydiv2_3" >
			   				   <div class="my_top" style="background-color: #FF605F;"><span>有功功率</span></div>
			   				   <div class="my_bottom"><span>45.98KV</span></div>
			     </div>
			     <div class="mydiv2_3">
			   				   <div class="my_top" style="background-color: #4E80FF;"><span>无功功率</span></div>
			   				   <div class="my_bottom"><span>-5.5kVar</span></div>
			     </div>
			     <div class="mydiv2_3" >
			   				   <div class="my_top" style="background-color: #22DBB0;"><span>环境温度</span></div>
			   				   <div class="my_bottom"><span>20.3C</span></div>
			     </div>
				 <div class="mydiv2_3" style="margin-right:-20px">
				 			   	<div class="my_top" style="background-color: #FFC858"><span>环境湿度</span></div>
								<div class="my_bottom"><span>70.2%</span></div>	
								 </div>
			     </div>
				 
				 <div style="padding-top:7rem ;margin-left: 0.125rem;">
				 	<div class="mydiv2_3">
				 		<div class="my_top2" ><span>配电图</span></div>
				 		<div class="my_bottom2"><span></span></div>
				 	</div>
				 	 <div class="mydiv2_3">
				 		 <div class="my_top2"><span>视频</span></div>
				 		 <div class="my_bottom2"><span></span></div>
				 	 </div>
				 	  <div class="mydiv2_3" >
				 		  <div class="my_top2"><span>变压器</span></div>
				 		  <div class="my_bottom2"><span></span></div>
				 	  </div>
					  <div class="mydiv2_3" style="margin-right:-20px">
					  		 <div class="my_top2"><span>通讯</span></div>
					  		 <div class="my_bottom2"><span></span></div>
					  </div>
				 </div>
				 <div>
					 
				 </div>
			  
			</el-card> 
		</div>
		<div class="mydiv3" >
			<div class="mydiv3_1">
				<el-card class="box-card" >
				  <div slot="header" class="mydiv3_head">
				   <span class="span_head">当日事件记录</span>
				  </div> 
				  <div >
				    <div class="mydiv3_2" >
				  				   <div class="my_top3" ><span>遥测越限</span></div>
				  				   <div class="my_bottom3"><span>1次</span></div>
				    </div>
				    <div class="mydiv3_2">
				  				   <div class="my_top3"><span>遥信变位</span></div>
				  				   <div class="my_bottom3"><span>2次</span></div>
				    </div>
				    <div class="mydiv3_2" style="margin-right:-20px">
				  				   <div class="my_top3"><span>失联装置</span></div>
				  				   <div class="my_bottom3"><span>4次</span></div>
				    </div>
				    </div>
				  
				</el-card> 
			</div>
			<div class="mydiv3_two">
				<el-card class="box-card" >
				  <div slot="header" class="mydiv3_head">
				   <span class="span_head">近期巡检记录</span>
				  </div> 
				  <div class="mydiv3_span">
					  <span >
						 巡检时间：2020-10-20 17:57 - 2020-12-14 09:25
					  </span><br>
					  <span>
					  	巡 检 项：0 项
					  </span><br>
					  <span>
					  	 缺 陷 项：0 项
					  </span><br>
					  <span>
					  	巡检人员：用户
					  </span>
					  
				  </div>
				</el-card> 
			</div>
		</div>
		<div class="mydiv4">
			<el-card class="box-card" >
			  <div slot="header" class="clearfix">
			   <span class="span_head">用电曲线</span>
			  </div> 
			  <div id="mychar1" class="mychar1"></div>
			</el-card> 
		</div>
		<div class="mydiv5">
			<el-card class="box-card" >
			  <div slot="header" class="clearfix">
			   <span class="span_head">用电概况</span>
			  </div> 
			 <div class="mydiv5_2">
				 <div class="mydiv5_R1" >
				 <dvi class="mydiv5_r1"><span class="myspan4">当日用电</span></dvi>
				 <div class="mydiv5_S"><span class="myspan5">810.4KW.h</span></div>
				 </div>
				 <div class="mydiv5_R2">
					 <dvi class="mydiv5_r2"><span class="myspan4">昨日同期</span></dvi>
					<div class="mydiv5_S"><span class="myspan5">810.4KW.h</span></div>
				 </div>
				 
				 <div class="mydiv5_R3">
					 <dvi class="mydiv5_r3"><span class="myspan4">环比</span></dvi>
					<div class="mydiv5_S"><span class="myspan5">-4.61%</span></div>
				 </div>
			 </div>
			 <div class="mydiv5_3">
				 <div class="mydiv5_two">
					<div style="border-right: 0.0625rem solid #9FA0A0;margin-top:0.25rem;">
					 <span class="myspan2">08:45-09:00</span><br>
					 <span class="myspan3" >最大用电时间</span>
					</div> 
					
				 </div>
				 <div class="mydiv5_two">
					 <div style="margin-top:0.25rem;">
						 <span class="myspan2">92.8KW</span><br>
						 <span class="myspan3">该时段平均功率</span>
					 </div>
					
				 </div>
			 </div>
			</el-card> 
		</div> 
	</div>

</template>

<script>
	import * as echarts from 'echarts'
	  export default {
	     name: '',
	       data () {
	           return {
	               charts: ''
	           }
	       },
	       methods:{
	           drawPie(id){
	              this.charts = echarts.init(document.getElementById(id))
	              this.charts.setOption( {
    backgroundColor: '#fff',
    title: {
        text: "kw/h",
        left: "18px",
        top: "0",
        textStyle: {
            color: "#999",
            fontSize: 12,
            fontWeight: '400'
        }
    },
    color: ['#73A0FA', '#73DEB3',],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            },
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid: {
        left: '25',
        right: '25',
        bottom: '24',
        top: '75',
        containLabel: true
    },
    legend: {
        data: ['今天', '昨天'],
       
    },
    xAxis: {
        type: 'category',
        data: ['00:00', '01:30', '03:00', '04:30', '06:00', '07:30', '09:00','10:30','12:00','13:30','15:00','16:30','18:00','19:30','21:00','22:30'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true
        },
        boundaryGap:false
    },
    yAxis: {
        type: 'value',
        // max: max_value>=100? max_value + 100: max_value+10,
        // max: max_value > 100 ? max_value * 2 : max_value + 10,
        // interval: 10,
        // nameLocation: "center",
        axisLabel: {
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F3F4F4'
            }
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true
        },
    },
    series: [{
            name: '今天',
            type: 'line',
            smooth: true,
            data: [13,1,4,21,12,13,9,2,4,5,6,18,2,3,4,2]
        },
        {
            name: '昨天',
            type: 'line',
            smooth: true,
            data: [10,2,3,4,12,16,21,23,14,22,10,8,12,14,2,13,21]
        },
      
    ]
})
	           }
	       },
	     //调用
	       mounted(){
	           this.$nextTick(function() {
	               this.drawPie('mychar1')
	           })
	       }
	      
	  }
</script>

<style>
	.demo1{
		position: relative;
		width: 100%;
		height: 100%;
		margin: 0 0;
		
	}
	.mydiv1{
		position: absolute;
		position: relative;
		top:0;
		left:0;
		width: 32.66%;
		height:49%;
	 /*	border: 0.0625rem solid gray; */
	}
	.mydiv1_2{
		  display: flex;
		  height: 2.5rem;
		  width: 100%;
		  float: left;
		}
	.mydiv1_3{
		  
		  float: left;
		  width: 8.75rem;
		  height: 6.25rem;
		  border: 0.0625rem solid #DCDCDC;
		  margin-right: 10px;
	 
		}
		.my_top3{
			width: 100%;
			height: 45%; 
			text-align: center;
			padding-top: 1rem;
		}
		.my_bottom3{
			width: 100%;
			height:55%;
			text-align: center;
			background-color: #F5F6FA;
			font-size:1.25rem;
			color: black;
			padding-bottom: 4%;
			padding-top: 0.625rem;
			
		}
		.mydiv1_4{
			  float: left;
			  width: 8.75rem;
			  height: 6.25rem;
			  border: 0.0625rem solid #DCDCDC;
			  margin-right: 10px;
			}
      .my_top{
		  width: 100%;
		  height: 4.0625rem;
		  text-align: center;
		  padding-top: 1rem;
		 
	  }
	  .my_bottom{
		  width: 100%;
		  height:2.1875rem;
		  text-align: center;
		  background-color: #5D676F;
		  font-size:1.25rem;
		  color: #FFFFFF;
		  }
	
	.mydiv2{
		position: absolute;
		top:0;
		left:33.66%;
		width: 33%;
		height:49%;
	/*	border: 0.125rem solid #00FFFF;*/
	}
	.mydiv2_3{
		float: left;
		width: 6.3125rem;
		height: 6.25rem;
		border: 0.0625rem solid #DCDCDC;
		margin-right: 10px;
	}
	.my_top2{
		width: 100%;
		height: 4.0625rem; 
		text-align: center;
		padding-top: 1rem;
	/*	background-color: #5D676F;*/
	}
	.my_bottom2{
		width: 100%;
		height:2.1875rem;
		text-align: center;
		background-color: #7D848C;
		font-size:1.25rem;
		color: #FFFFFF;
	}
	.mydiv3{
		position: absolute;
		top:0;
		left:67.66%;
		width: 32.46%;
		height:49%;
	/*	border: 0.125rem solid #00FFFF;*/
		
		}
	.mydiv3_1{
		 position: relative;
		 width: 100%;
		 height: 49%;	
		 margin-top: 0;
		 
	}
	.mydiv3_two{
		 width: 100%;
		 height: 49%; 
		 margin-top: 0.625rem;
	/*	 border: 1px solid #01ADA8;*/
	}
	.mydiv3_head{
		 position: absolute;
		 top: 0;
		 left: 0;
		 height: 23%;
		 width: 100%;
		 background-color:#01ADA8;
	}
	.mydiv3_2{
		float: left;
		width: 8.75rem;
		height: 6.25rem;
		border: 0.0625rem solid #DCDCDC;
		margin-right: 10px;
		margin-top: -0.3125rem;
		margin-right: 0.25rem;
	}
	.mydiv3_span{
		text-align: left;
		margin-top: -0.625rem;
	}
	.mydiv4{
		position: absolute;
		top:51%;
		left:0;
		width: 66.66%;
		height:49%;
	/*	border: 0.0625rem solid gray; */
	}
	.mydiv5{
		position: absolute;
		top:51%;
		left:67.66%;
		width: 32.46%;
		height:49%;
		/* border: 0.125rem solid #00FFFF; */
		}
	.mydiv5_2{
		position: absolute;
		top: 15%;
		left: 0;
		width: 100%;
		height: 58%;
		
	}
	.mydiv5_3{
		position: absolute;
		top: 76%;
		left: 0;
		width: 100%;
		height: 24%;
		background-color: #5D676F;
	}
	.mydiv5_two{
		
		float: left;
		width: 50%;
		height: 100%;
		padding-top: 0.3125rem;
	}
	.myspan2{
		text-align: center;
		font-size:1.375rem;
		color: #FFFFFF;
	}
	.myspan3{
		text-align: center;
		font-size:0.9375rem;
		color: #9FA0A0;
	}
	.mydiv5_R1{
		position: relative;
		width: 96%;
		height:30%;
		border: 0.0625rem solid #D5CCF3;
		margin: 0 2% 0.625rem 2%;
		border-radius:10px;
		background-color: #F7F6FD;
	}
	.mydiv5_r1{
		 position: absolute;
		 top: 0;
		 left: 0;
		 width: 40%;
		 height: 100%;
		 border-radius:10px;
		 background-color: #B4A3E9;
		 text-align: center;
		 padding-top: 0.625rem;
		}
	.mydiv5_R2{
		position: relative;
		width: 96%;
		height:30%;
		border: 0.0625rem solid #BE19FE;
		margin: 0 2% 0.625rem 2%;
		border-radius:10px;
		background-color: #EAF9FB;
	}
	.mydiv5_r2{
		 position: absolute;
		 top: 0;
		 left: 0;
		 width: 40%;
		 height: 100%;
		 border-radius:10px;
		 background-color: #2DC4D9;
		 text-align: center;
		 padding-top: 0.625rem;
		}
		
	.mydiv5_R3{
		position: relative;
		width: 96%;
		height:30%;
		border: 0.0625rem solid #D6EFA0;
		margin: 0 2% 0.625rem 2%;
		border-radius:10px;
		background-color: #F4FBE5;
	}
	.mydiv5_r3{
		 position: absolute;
		 top: 0;
		 left: 0;
		 width: 40%;
		 height: 100%;
		 border-radius:10px;
		 background-color: #92D400;
		 text-align: center;
		 padding-top: 0.625rem;
		}
		.myspan4{
			text-align: center;
			font-size:1.125rem;
			color: #FFFFFF;
			
		}
		.mydiv5_S{
			position: absolute;
			top: 0;
			left: 40%;
			width: 60%;
			height: 100%;
			text-align: center;
			padding-top: 0.3125rem;
		}
		.myspan5{
			text-align: center;
			font-size: 1.625rem;
		}
	
	  .clearfix:before,
	  .clearfix:after {
	    display: table;
	    content: "";
	  }
	  .clearfix:after {
	    clear: both
	  }
	  .clearfix{
		  position: absolute;
		  top: 0;
		  left: 0;
		  height: 12%;
		  width: 100%;
		  background-color:#01ADA8;
		 
	  }
	  
	 .span_head{
		 font-size: 0.9375rem;
		 color: #FFFFFF;
	 }
	  .box-card   {
		position: absolute;
		position: relative;
		top: 0;
		left: 0;
	    width: 100%;
		height: 100%;
		background-color: #00FFFF;
		
	  }
	 .mychar1{
		  height: 16.25rem;
		  width: 56.25rem;
		  margin-right: 1.25rem;
		  margin-bottom: 2.5rem;
	  }
     
</style>
