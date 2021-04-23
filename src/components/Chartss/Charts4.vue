<template>
	<div id="charts8">

		<!-- 下面是地图 -->
		<div class="row" style="margin-bottom: 20px;">
			<div class="col-md-3"></div>
			<div class="col-md-3 col-md-offset-5">
				<input type="text" class="form-control" v-model="searchText" placeholder="请输入站点名称" />
			</div>
			<div class=" btn btn-primary col-md-1" @click="search()">搜索</div>
			<div class="col-md-3"></div>
			<div class="btn btn-primary col-md-1 col-md-offset-4" @click="choice_list()">从列表选择</div>
		</div>
		<div>

			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				searchText:"",
			}
		},
		methods: {
			choice_list() {
				this.$router.push({
					path: '/home/charts4/list'
				});
			},
			search(){
				
			},
		}
	}
</script>

<style>

</style>
