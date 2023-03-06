<template>
	<div class="Register">
		<h3>注册</h3>
		<form action="" method="POST">
			用户名：<input type="text" name="name" @blur="name1()" ref="name"><br>
			<div :style="{display:msg.dis}">
				<p :style="{color:msg.p1}">用户名不能为空</p>
				<p :style="{color:msg.p2}">长度不得大于8</p>
			</div>
			密码：<input type="password" name="pass" @blur="pass1()" ref="pass"><br>
			<div :style="{display:msg1.dis}">
				<p :style="{color:msg1.p1}">密码不能为空</p>
				<p :style="{color:msg1.p2}">密码必须包含数字，字母，特殊符合</p>
				<p :style="{color:msg1.p3}">长度不得大于14</p>
			</div>
			确认密码：<input type="password" name="phone" @blur="confirm()" ref="confirm"><br>
			<div :style="{display:msg2.dis}">
				<p :style="{color:msg2.p1}">密码不一致</p>
			</div>
			电话：<input type="tel" name="phone" @blur="phone()" ref="phone"><br>
			<div :style="{display:msg3.dis}">
				<p :style="{color:msg3.p1}">请输入正确的电话号码</p>
			</div>
			<input type="button" value="注册" @click="btn()" :disable="disable">
		</form>
		<div class="cg" :style="{display:di}">{{data}}</div>
	</div>
</template>

<script>
	export default{
		name:'Register',
		data(){
			return {
				msg:{
					dis:'none',
					p1:'black',
					p2:'black',
				},
				msg1:{
					dis:'none',
					p1:'black',
					p2:'black',
					p3:'black',
				},
				msg2:{
					dis:'none',
					p1:'black',
				},
				msg3:{
					dis:'none',
					p1:'black',
				},
				disable:'',
				data:'',
				di:'none'
			}
		},
		methods:{
			name1(){
				//判断用户名是否为空，长度是否大于8
				if(this.$refs.name.value && this.$refs.name.value.length<=8){
					this.$data.msg.p1='black'
					this.$data.msg.p2='black'
					this.$data.msg.dis='none'
				}else if(this.$refs.name.value==''){
					this.$data.msg.dis='block'
					this.$data.msg.p1='red'
					this.$data.msg.p2='black'
				}else if(this.$refs.name.value.length>8){
					this.$data.msg.dis='block'
					this.$data.msg.p2='red'
					this.$data.msg.p1='black'
				}
			},
			pass1(){
				//密码不能为空，长度不能大于14
				if(this.$refs.pass.value && this.$refs.pass.value.length<=14){
					this.$data.msg1.p1='black'
					this.$data.msg1.p3='black'
					this.$data.msg1.dis='none'
				}else if(this.$refs.pass.value==''){
					this.$data.msg1.dis='block'
					this.$data.msg1.p1='red'
					this.$data.msg1.p3='black'
				}else if(this.$refs.pass.value.length>14){
					this.$data.msg1.dis='block'
					this.$data.msg1.p3='red'
					this.$data.msg1.p1='black'
				}
				//判断密码是否符合条件
				var tem = /(?!^\d+$)(?!^[A-Z]+$)(?!^[a-z]+$)(?!^_+$)(?!^[!@#%^&*]+$)^\w{1,}[!@#$%^&*]{1,}$/
				var str = this.$refs.pass.value.trim()
				var res = tem.test(str)
				if(res){
					this.$data.msg1.dis='none'
					this.$data.msg1.p2='black'
				}else{
					this.$data.msg1.dis='block'
					this.$data.msg1.p2='red'
				}
			},
			confirm(){
				//判断与上面的密码是否一致
				if(this.$refs.pass.value==this.$refs.confirm.value){
					this.$data.msg2.dis='none'
					this.$data.msg2.p1='black'
				}else{
					this.$data.msg2.dis='block'
					this.$data.msg2.p1='red'
				}
			},
			phone(){
				//判断电话是否符合条件
				var tem = /^[1][3,4,5,7,8][0-9]{9}$/
				var str = this.$refs.phone.value.trim()
				var res = tem.test(str)
				if(res){
					this.$data.msg3.dis='none'
					this.$data.msg3.p1='black'
				}else{
					this.$data.msg3.dis='block'
					this.$data.msg3.p1='red'
				}
			},
			btn(){
				if(this.$data.msg.dis=='none' && this.$data.msg1.dis=='none'
			    && this.$data.msg2.dis=='none' && this.$data.msg3.dis=='none'){
				    this.$data.disable=''
					let obj={
						name:this.$refs.name.value,
						pass:this.$refs.pass.value,
						phone:this.$refs.phone.value
					}
					this.$http.get(`/register?name=${obj.name}&pass=${obj.pass}&phone=${obj.phone}`,obj).then((data)=>{
						this.$data.di='block'
						this.$data.data=data.data
						setTimeout(function(){
							history.back()
						},1000)
					}).catch(err=>{
						console.log(err)
						console.log('注册失败')
					})
			    }else{
					this.$data.disable='disabled'
				}
			}
		}
	}
</script>

<style scoped>
	.Register{
		width: 100%;
		height: 92vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 90;
		/* margin-top: -30%; */
		background-color: rgba(145, 231, 146, .5);
	}
	h3{
		font-size: 24px;
		margin: 25% auto 0;
	}
	form{
		width: 100%;
		margin: 0 auto;
		text-align: left;
		font-size: 18px;
	}
	input:nth-of-type(1){
		width: 68%;
		height: 30px;
		margin: 10px 0 10px;
		margin-left: 20px;
	}
	input:nth-of-type(2),input:nth-of-type(4){
		width: 68%;
		height: 30px;
		margin: 20px 0 10px;
		margin-left: 38px;
	}
	input:nth-of-type(3){
		width: 68%;
		height: 30px;
		margin: 20px 0 10px;
		margin-left: 3px;
	}
	input:nth-of-type(5){
		width: 90%;
		height: 40px;
		color: aliceblue;
		border-radius: 50px;
		margin: 10px 0 10px;
		background-color: aquamarine;
		margin-left: 15px;
	}
	form div{
		margin-bottom: 20px;
		margin-left: 100px;
		display: none;
	}
	.cg{
		width: 200px;
		height: 50px;
		background: orange;
		position: fixed;
		top: 50%;
		left: 25%;
		font-size: 34px;
		display: none;
	}
</style>