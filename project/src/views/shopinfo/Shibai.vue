<template>
	<div class="Shibai">
		<div class="index">
			<p @click="back2()"><返回</p>
			<h1><img src="../../assets/图标 209.svg" alt="">付款失败</h1>
		</div>
		<div class="bian">
			<p>订单编号：12325345433514</p>
			<p>实付金额：{{msg}}</p>
		</div>
		<p>支付遇到问题请选择再次支付</p>
		<ul class="zhifu">
			<li>
				<img src="../../assets/图片 86.png" alt="">
				<p>微信支付</p>
				<p>工行信用卡支付，享随机立减</p>
				<input type="checkbox" name="select" class="select">
			</li>
			<li>
				<img src="../../assets/图片 88.png" alt="">
				<p>支付宝</p>
				<p>支付订单，赢1999元红包</p>
				<input type="checkbox" name="select" class="select">
			</li>
			<li>
				<img src="../../assets/图片 90.png" alt="">
				<p>小米钱包</p>
				<p>绑新卡支付，享最高立减99元</p>
				<input type="checkbox" name="select" class="select">
			</li>
			<li>
				<img src="../../assets/图片 91.png" alt="">
				<p>银联在线支付</p>
				<input type="checkbox" name="select" class="select">
			</li>
			<li>
				<img src="../../assets/图片 92.png" alt="">
				<p>翼支付</p>
				<input type="checkbox" name="select" class="select">
			</li>
		</ul>
		<div class="fore">
			<button @click="chankan()">查看订单</button>
			<button @click="zaic()">再次付款</button>
		</div>
		<div class="kongbai"></div>
	</div>
</template>

<script>
	export default{
		name:'Shibai',
		data(){
			return {
				msg:''
			}
		},
		methods:{
			zaic(){
				//返回付款
				history.back()
			},
			//查看订单页面
			chankan(){
				this.$router.push({name:'orders'})
			},
			//返回我的
			back2(){
				this.$router.push({name:'my'})
			}
		},
		beforeMount() {
			var arr=JSON.parse(localStorage.getItem('shopsin1'))
			this.msg=arr[arr.length-1].money
		}
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	li{list-style: none;}
	a{text-decoration: none;}
	.index{
		width: 100%;
		height: 258px;
		color: rgba(80, 80, 80, 1);
		background-color: rgba(226, 71, 71, 1);
		font-size: 16px;
		line-height: 150%;
		text-align: left;
		overflow: hidden;
	}
	.index>p{
		margin: 20px 20px;
	}
	h1{
		width: 100%;
		height: 56px;
		color: rgba(255, 255, 255, 1);
		font-size: 28px;
		line-height:56px;
		text-align: center;
		font-weight: bold;
	}
	h1>img{
		width: 38px;
		height: 38px;
		margin-top: 15px;
		
	}
	.bian{
		width: 100%;
		height: 56px;
		color: rgba(56, 56, 56, 1);
		font-size: 12px;
		margin: 10px 10px;
		text-align: left;
	}
	.Shibai>p{
		width: 309px;
		height: 38px;
		text-indent: 14px;
		color: rgba(80, 80, 80, 1);
		font-size: 14px;
		line-height: 38px;
		text-align: left;
	}
	.zhifu{
		width: 90%;
		height: auto;
		background-color: rgba(255, 255, 255, 1);
		margin: 0 auto;
	}
	.zhifu li{
		width: 100%;
		height: 47px;
		background-color: rgba(255, 255, 255, 1);
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		line-height: 47px;
		font-size: 14px;
		position: relative;
		padding-right: 20px;
	}
	.select{
		width: 18px;
		height: 18px;
		position: absolute;
		top: 15px;
		right: 0;
	}
	.fore{
		width: 100%;
		height: 42px;
	}
	.fore>button:nth-of-type(1){
		width: 50%;
		height: 42px;
		color: rgba(80, 80, 80, 1);
		font-size: 15px;
		line-height: 42px;
		text-align: center;
	}
	.fore>button:nth-of-type(2){
		width: 50%;
		height: 42px;
		color: white;
		background-color: orange;
		font-size: 15px;
		line-height: 42px;
		text-align: center;
	}
	.kongbai{
		height: 50px;
	}
</style>