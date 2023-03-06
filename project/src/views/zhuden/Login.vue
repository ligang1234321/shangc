<template>
	<div class="Login">
		<h4>登录</h4>
		<form action="">
			姓名：<input type="text" name="name" ref="name"><br>
			密码：<input type="password" name="pass" ref="pass">
		</form>
		<button @click="den()">登录</button>
		<button @click="register()">注册</button>
		<div class="cg" :style="{display:di}">{{data}}</div>
	</div>
</template>

<script>
	export default{
		name:'Login',
		data() {
		    return {
				data:'',
				di:'none'
		    };
		  },
		  methods: {
			register(){
				this.$router.push({name:'register'})
			},
			den(){
				let obj={
					name:this.$refs.name.value,
					pass:this.$refs.pass.value
				}
				this.$http.get(`/login?name=${obj.name}&pass=${obj.pass}`).then(data=>{
					if(data.data.token){
						this.$data.di='block'
						this.$data.data='登录成功'
						window.localStorage.setItem('token',data.data.token);
						window.localStorage.setItem('user',obj.name);
						window.localStorage.setItem('infomation',JSON.stringify(data.data))
						console.log(data.data)
						setTimeout(function(){
							history.back()
						},2000)
					}else{
						this.$data.di='block'
						this.$data.data='账户或密码有误'
						console.log('错误')
					}
				}).catch(err=>{
					this.$data.di='block'
					this.$data.data='账户或密码有误'
					console.log(err)
				})
			}
		},
	}
</script>

<style scoped>
	.Login{
		width: 100%;
		height: 112vh;
		position: absolute;
		background-color: rgba(145, 231, 146, .5);
		top: -20%;
		left: 0;
		z-index: 99;
	}
	h4{
		font-size: 24px;
		margin-top: 75%;
	}
	input{
		width: 75%;
		height: 30px;
		margin: 10px auto;
	}
	button{
		width: 94%;
		height: 50px;
		background-color: deepskyblue;
		border-radius: 30px;
		margin-bottom: 10px;
	}
	.cg{
		width: 200px;
		height:auto;
		background: orange;
		position: fixed;
		top: 50%;
		left: 25%;
		font-size: 34px;
		display: none;
	}
</style>