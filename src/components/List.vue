<template>
	<div >
		<div class="container">
			<hr />
				<el-select placeholder="机构选择">
					
				</el-select>
				<div class="col-md-1" style="display:inline;"></div>
				<el-select placeholder="区域选择">
					
				</el-select>
				<div class="col-md-1" style="display:inline;"></div>
				<el-select placeholder="地址选择">
					
				</el-select>
				<div class="col-md-1" style="display:inline;"></div>
				<el-select placeholder="状态选择">
					
				</el-select>
				<hr />
			<div class="list-group list-group-flush">
			  <div class="list-group-item list-group-item-action " v-for="(item,idx) in siteList">
				<div class="row" @click="dian()">
					<div class="col-md-2">
						{{item.sitename}}
					</div>
					<div class="col-md-2">
						{{item.siteobj}}
					</div>
					<div class="col-md-2">
						{{item.sitearea}}
					</div>
					<div class="col-md-2">
						{{item.siteaddress}}
					</div>
					<div class="col-md-2">
						{{item.siteman}}
					</div>
					<div class="col-md-2">
						{{item.sitestate}}
					</div>
				</div>
			  </div>
				
			
			</div>	
				  <div class="block" align="center">
				    <hr/>
				    <el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="currentPage4"
				      :page-sizes="[5, 10, 20, 30]"
				      :page-size="10"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="8">
				    </el-pagination>
				  </div>
		</div>
	</div>
	
</template>

<script>
	
	export default{
		data(){
			return{
				siteList:[
					{	
						sitename:"第一个站点",
						siteobj:"机构名称1",
						sitearea:"区域1",
						siteaddress:"地址1",
						siteman:"经理1",
						sitestate:"运行中"
					},
					{
						sitename:"第二个站点",
						siteobj:"机构名称1",
						sitearea:"区域1",
						siteaddress:"地址1",
						siteman:"经理1",
						sitestate:"运行中"
					},
					{
						sitename:"第三个站点",
						siteobj:"机构名称1",
						sitearea:"区域1",
						siteaddress:"地址1",
						siteman:"经理2",
						sitestate:"运行中"
					},
					{
						sitename:"第四个站点",
						siteobj:"机构名称1",
						sitearea:"区域1",
						siteaddress:"地址1",
						siteman:"经理1",
						sitestate:"维护中"
					},
					{
						sitename:"第五个站点",
						siteobj:"机构名称1",
						sitearea:"区域1",
						siteaddress:"地址1",
						siteman:"经理3",
						sitestate:"运行中"
					},
					{
						sitename:"第六个站点",
						siteobj:"机构名称1",
						sitearea:"区域1",
						siteaddress:"地址1",
						siteman:"经理3",
						sitestate:"运行中"
					},
					{
						sitename:"第七个站点",
						siteobj:"机构名称1",
						sitearea:"区域1",
						siteaddress:"地址1",
						siteman:"经理4",
						sitestate:"运行中"
					},
					{
						sitename:"第八个站点",
						siteobj:"机构名称1",
						sitearea:"区域1",
						siteaddress:"地址1",
						siteman:"经理4",
						sitestate:"运行中"
					},
				],
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4
			}
		},
		methods:{
			dian(){
				this.$router.push({path:'/home'});
			},
		  handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			  },
			  handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			  }
		}
	}
	
	
</script>

<style>
	
</style>
