<template>
	<div id="charts7">
		  <el-container>
		    <el-header>
					<div class="demo-input-suffix">
						<div class="row">
								<div class="col-md-5">
									<label style="font-size: small;">起始日期</label>
								</div>
								<div class="col-md-6">
									<el-date-picker
									      v-model="startime"
									      type="date" style="width: 140px;margin-left: -30px;">
									    </el-date-picker>
									</el-input>
							</div>
							
					 </div>
					</div>
				<div class="demo-input-suffix">
					<div class="row">
							<div class="col-md-5">
								<label style="font-size: small;margin-left: 10px;">截止日期</label>
							</div>
							<div class="col-md-7">
								<el-date-picker
								      v-model="endtime"
								      type="date" style="width: 140px;margin-left: -20px;">
								    </el-date-picker>
								</el-input>
						</div>
						
				 </div>
				 
				</div>
				<div class="demo-input-suffix">
					<div class="row">
							<div class="col-md-5">
								<label style="font-size: small;margin-left: 10px;">排序字段</label>
							</div>
							<div class="col-md-6">
								<el-select placeholder="总用电量" style="margin-left: -35px;">
									
								</el-select>
								</el-input>
						</div>
						
				 </div>
				</div>
				<div class="demo-input-suffix">
					<div class="row">
							<div class="col-md-5">
								<label style="font-size: small;margin-left: -40px;">排序方式</label>
							</div>
							<div class="col-md-7">
								<el-select placeholder="倒序" style="margin-left: -45px;">
									
								</el-select>
								</el-input>
						</div>
						
				 </div>
				</div>
					<el-button style="margin-left: 20px;">查询</el-button>
					<el-button>导出</el-button>
					<b style="margin-left: 150px; font-size: small;">(单位：kW·h)</b>
			</el-header>
			<!-- 主题表格 -->
		    <el-main>
				  <el-table
				    :data="tableData"
				    border
				    style="width: 100%">
				    <el-table-column
				      fixed
				      prop="date"
				      label="变配电站名称"
				      width="150">
				    </el-table-column>
					<el-table-column v-for="(item,idx) in monthlist"
					 :prop="item" :label="item" width="100">
					</el-table-column>
					
				  </el-table>
			</el-main>
			<!-- 页脚 -->
		    <el-footer>
				<label style="font-size: small;">显示第1到第4条记录，一共4条记录</label>
			</el-footer>
		  </el-container>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
					startime:"2021-4-21",
					endtime:"2021-4-21",
					sortzi:"总用电量",
					sortfang:"倒序",
					monthlist:["04-01","04-02","04-03","04-04","04-05","04-06","04-07","04-08","04-09","04-10","04-11","04-12",],
					tableData0:[],
				    tableData: [{
				          date: '郑州一号',
				          "04-01": '919.02',
						  "04-02": '919.02',
						  "04-03": '919.02',
						  "04-04": '919.02',
						  "04-05": '919.02',
						  "04-06": '919.02',
						  "04-07": '919.02',
						  "04-08": '919.02',
						  "04-09": '919.02',
						  "04-10": '919.02',
						  "04-11": '919.02',
						  "04-12": '919.02',
				        }, {
				          date: '郑州二号',
				          "04-01": '919.02',
						  "04-02": '919.02',
						  "04-03": '919.02',
						  "04-04": '919.02',
						  "04-05": '919.02',
						  "04-06": '919.02',
						  "04-07": '919.02',
						  "04-08": '919.02',
						  "04-09": '919.02',
						  "04-10": '919.02',
						  "04-11": '919.02',
						  "04-12": '919.02',
				        },{
				          date: '郑州三号',
				          "04-01": '919.02',
						  "04-02": '919.02',
						  "04-03": '919.02',
						  "04-04": '919.02',
						  "04-05": '919.02',
						  "04-06": '919.02',
						  "04-07": '919.02',
						  "04-08": '919.02',
						  "04-09": '919.02',
						  "04-10": '919.02',
						  "04-11": '919.02',
						  "04-12": '919.02',
				        }, {
				          date: '郑州四号',
				          "04-01": '919.02',
						  "04-02": '919.02',
						  "04-03": '919.02',
						  "04-04": '919.02',
						  "04-05": '919.02',
						  "04-06": '919.02',
						  "04-07": '919.02',
						  "04-08": '919.02',
						  "04-09": '919.02',
						  "04-10": '919.02',
						  "04-11": '919.02',
						  "04-12": '919.02',
				        },
						{
						  date: '合计',
						  "04-01": '3676.08',
						  "04-02": '3676.08',
						  "04-03": '3676.08',
						  "04-04": '3676.08',
						  "04-05": '3676.08',
						  "04-06": '3676.08',
						  "04-07": '3676.08',
						  "04-08": '3676.08',
						  "04-09": '3676.08',
						  "04-10": '3676.08',
						  "04-11": '3676.08',
						  "04-12": '3676.08',
						},],
						
			}
		},
		methods:{
			search(){
				
			}
		}
	}
</script>

<style lang="less">
	//加id选择器使在这个界面的修改不影响其它界面
	 #charts7 .el-header {
	    background-color: #B3C0D1;
	    // color: #333;
	    line-height: 60px;
		justify-content: flex-start //左对齐
	  }
	  #charts7 .el-footer {
	     background-color: #ffffff;
	     // color: #333;
	     line-height: 60px;
	  		justify-content: flex-start //左对齐
	   }
	 #charts7 .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
		height: 550px;
	  }
	
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	
</style>
