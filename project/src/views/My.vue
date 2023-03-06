<template>
	<div class="My">
		<div class="info">
			<img src="../assets/图片 71.png" alt="" @click="login()">
			<p>{{msg.name}}</p>
			<p>{{msg.phone}}</p>
			<p>会员积分</p>
		</div>
		<div class="orders">
			<p>我的订单</p>
			<p @click="orde()">全部订单 ></p>
		</div>
		<div class="staus">
			<div>
				<img src="../assets/图标 88.svg" alt="">
				<p @click="nomoney()">待付款</p>
			</div>
			<div @click="shouhuo()">
				<img src="../assets/图标 88(1).svg" alt="">
				<p>待收货</p>
			</div>
			<div>
				<img src="../assets/图标 88.svg" alt="">
				<p>待付款</p>
			</div>
			<div>
				<img src="../assets/图标 88(2).svg" alt="">
				<p>退换休</p>
			</div>
		</div>
		<div class="tu">
			<img src="../assets/图片 72.png" alt="">
		</div>
		<ul class="one">
			<li>
				<img src="../assets/图标 24.svg" alt="">
				<p>优惠券<span>></span></p>
			</li>
			<li>
				<img src="../assets/图标 250.svg" alt="">
				<p>会员福利<span>></span></p>
			</li>
			<li>
				<img src="../assets/图标 250(1).svg" alt="">
				<p>我的钱包<span>></span></p>
			</li>
		</ul>
		<ul class="two">
			<li>
				<img src="../assets/图标 24(1).svg" alt="">
				<p>服务中心<span>></span></p>
			</li>
			<li>
				<img src="../assets/图标 250(2).svg" alt="">
				<p>小米之家<span>></span></p>
			</li>
			<li>
				<img src="../assets/图标 250(3).svg" alt="">
				<p>更多功能<span>></span></p>
			</li>
		</ul>
		<div class="shezhi">
			<img src="../assets/图标 24(2).svg" alt="">
			<p>设置<span>></span></p>
		</div>
		<div class="kongbai4"></div>
	</div>
</template>

<script>
	export default{
		name:'My',
		data(){
			return {
				msg:''
			}
		},
		methods:{
			login(){
				this.$router.push({name:'login'})
			},
			//跳转订单页面
			orde(){
				//跳转订单页面
				this.$router.push({name:'orders'})	
			},
			shouhuo(){
				//跳转到待收货界面
				
			},
			//跳转到未付款的订单
			nomoney(){
				this.$router.push({name:'daifuk'})
			}
		},
		beforeMount() {
			var information=JSON.parse(window.localStorage.getItem('infomation'))
			if(information){
				this.msg=information
			}else{
				this.msg={
					name:'请登录',
					phone:'000000'
				}
			}
			console.log(this.msg)
		}
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	li{list-style: none;}
	a{text-decoration: none;}
	.My{
		width: 100%;
		height: 100vh;
	}
	.info{
		width: 100%;
		height: 145px;
		color: rgba(80, 80, 80, 1);
		background-color: rgba(226, 106, 60, 1);
		font-size: 16px;
		text-align: center;
		position: relative;
		overflow: hidden;
	}
	.info img{
		width: 56px;
		height: 56px;
		position: absolute;
		left: 14px;
		top: 64px;
		border-radius: 28px;
	}
	.info p:nth-of-type(1){
		position: absolute;
		left: 77px;
		top: 65px;
		color: rgba(255, 255, 255, 1);
		font-size: 16px;
		text-align: left;
	}
	.info p:nth-of-type(2){
		position: absolute;
		left: 77px;
		top: 90px;
		color: rgba(255, 255, 255, 1);
		font-size: 16px;
		text-align: left;
	}
	.info p:nth-of-type(3){
		width: 109px;
		height: 31px;
		position: absolute;
		left: 293px;
		top: 86px;
		text-indent: 28px;
		color: rgba(126, 77, 29, 1);
		background-color: rgba(255, 190, 0, 1);
		border-radius: 16px;
		font-size: 13px;
		line-height: 31px;
		text-align: left;
	}
	.orders{
		width: 375px;
		height: 42px;
		border-bottom: 1px solid #ccc;
	}
	.orders p:nth-of-type(1){
		width: 103px;
		height: 37px;
		color: rgba(80, 80, 80, 1);
		font-size: 16px;
		line-height: 37px;
		text-align: left;
		float: left;
	}
	.orders p:nth-of-type(2){
		width: 103px;
		height: 37px;
		color: rgba(166, 166, 166, 1);
		font-size: 13px;
		line-height: 37px;
		text-align: right;
		float: right;
	}
	.staus{
		margin-top: 15px;
		width: 100%;
		height: 57px;
		display: flex;
		justify-content: space-around;
	}
	.staus div{
		width: 56px;
		height: 57px;
	}
	.staus div>img{
		width: 28px;
		height: 28px;
	}
	.tu{
		margin-top: 10px;
		width: 100%;
		height: 104px;
	}
	.tu img{
		width: 100%;
		height: 104px;
	}
	.one{
		width: 375px;
		height: 142px;
		background-color: rgba(255, 255, 255, 1);
		margin: 15px 0;
	}
	.one li{
		width: 350px;
		height: 28px;
		display: flex;
		padding: 10px;
		text-align: left;
	}
	.one li:hover{
		background-color: orange;
	}
	.one li>img{
		width: 28px;
		height: 28px;
		font-size: 28px;
		color: rgba(255, 112, 58, 1);
		margin-right: 7px;
	}
	.one li>p{
		width: 322px;
		height: 28px;
		border-bottom: 1px solid #ccc;
	}
	.one li>p>span{
		float: right;
	}
	.two{
		width: 375px;
		height: 142px;
		background-color: rgba(255, 255, 255, 1);
		margin: 15px 0;
	}
	.two li{
		width: 350px;
		height: 28px;
		display: flex;
		padding: 10px;
		text-align: left;
	}
	.two li:hover{
		background-color: orange;
	}
	.two li>img{
		width: 28px;
		height: 28px;
		font-size: 28px;
		color: rgba(255, 112, 58, 1);
		margin-right: 7px;
	}
	.two li>p{
		width: 322px;
		height: 28px;
		border-bottom: 1px solid #ccc;
	}
	.two li>p>span{
		float: right;
	}
	.shezhi{
		width: 350px;
		height: 28px;
		display: flex;
		padding: 10px;
		text-align: left;
		margin-top: 20px;
	}
	.shezhi:hover{
		background-color: orange;
	}
	.shezhi img{
		width: 28px;
		height: 28px;
		font-size: 28px;
		color: rgba(255, 112, 58, 1);
		margin-right: 7px;
	}
	.shezhi>p{
		width: 322px;
		height: 28px;
		border-bottom: 1px solid #ccc;
	}
	.shezhi>p>span{
		float: right;
	}
	.kongbai4{
		height: 50px;
	}
</style>