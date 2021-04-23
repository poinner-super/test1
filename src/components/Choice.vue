<template>
	<div class="vf">
		<div class="row">
			<div class="col-md-2"></div>
			<div class="col-md-3">
				<button class="temp" @click="choice_map()">
					从地图上选择
				</button>
			</div>
			<div class="col-md-2"></div>
			<div class="col-md-2">
				<button class="temp" @click="choice_list()">
					从列表中选择
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			choice_map(){
				this.$router.push({path:'/map'});
			},
			choice_list(){
				this.$router.push({path:'/list'});
			},
		},
	}
	
</script>

<style lang="less">
	.temp{
		margin-top: 300px;
		color:#ffffff;
		background-color: #424bff;
		margin-top: 200px;
		width: 130px;
		height: 130px;
		border: 1px solid #eee;
		border-radius: 50%;
		padding: 10px;
		box-shadow: 0 0 10px #ddd;
		position: absolute;
		left: 50%;
		transform: translate(-50%,-50%);
	}

	.vf{
	    height:100vh;    /*占屏幕高度的一半，不管div有没有内容填充*/
	    width: 100vw;    /*占屏幕宽度的一半，不管div有没有内容填充*/
		background-image: url(../assets/bg.jpg);
		/* border: 1px solid black; */
		background-repeat: no-repeat;
		background-position: center center;
		background-position: 100% 100%;
		
	
	}
</style>
