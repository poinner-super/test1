<template>
	<div class="login_container vf">
		<div class="login_box">
			<div class="avatar_box">
				<img src="../assets/logo.png" alt="hahaa" />
			</div>
			<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login_form" label-width="0">
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" prefix-icon="iconfont iconcherry"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" v-model="loginForm.password" prefix-icon="iconfont iconorange"></el-input>
				</el-form-item>
				<el-form-item class="btns">
					<el-button class="left" type="primary" @click="login()" round>登录</el-button>
					<el-button type="infor" @click="resetLoginForm()" round>重置</el-button>
				</el-form-item>
			</el-form>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loginForm: {
					username: "poinner",
					password: "123456"
				},
				//校验规则
				loginRules: {
					username: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						}, //必填项
						{
							min: 2,
							max: 10,
							message: '长度在 3 ~ 12 个字符',
							trigger: 'blur'
						}
					],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							min: 6,
							max: 12,
							message: '长度在 6 ~ 12 个字符',
							trigger: 'blur'
						}
					],
				},
			};
		},
		methods: {
			//重置表单
			resetLoginForm() {
				this.$refs.loginFormRef.resetFields();
			},
			login() {

				this.$refs.loginFormRef.validate(async valid => {
					//验证校验规则
					if (!valid) return;
					window.sessionStorage.setItem("user", this.loginForm.username);
					this.$message.success("登录成功！");
					this.$router.push({
						path: '/home'
					}); //跳到站点选择界面


				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.login_container {
		background-color: #2b4b6b;
		height: 100%;
	}

	.login_box {
		width: 450px;
		height: 300px;
		background-color: #fff;
		border-radius: 3px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.avatar_box {
		width: 130px;
		height: 130px;
		border: 1px solid #eee;
		border-radius: 50%;
		padding: 10px;
		box-shadow: 0 0 10px #ddd;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	img {
		width: 100%;
		border-radius: 50%;
		background-color: #eee;
	}

	.btns {
		display: flex;
		justify-content: flex-end;

	}

	.login_form {
		position: absolute;
		bottom: 0%;
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
	}

	.left {
		margin-right: 250px;
	}

	.vf {
		height: 100vh;
		/*占屏幕高度的一半，不管div有没有内容填充*/
		width: 100vw;
		/*占屏幕宽度的一半，不管div有没有内容填充*/
		background-image: url(../assets/bg.jpg);
		/* border: 1px solid black; */
		background-repeat: repeat;
		background-position: center center;
		background-position: 100% 100%;
		background: rgba(255,255,255,0.4);//背景色半透明

	}
</style>
