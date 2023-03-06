<template>
	<div class="Jiesuan">
		<div class="address">
			<span>></span>
			<p class="p1">li  17882366920</p>
			<p class="p2">北京 北京市 朝阳区 xiaopiu秘密研究基地 xiaopiu大楼 (000000)</p>
		</div>
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
		<div class="three">
			<div><p>快速配送（免运费）</p><p>不限送货时间<span>></span></p></div>
			<div><p>电子发票</p><p>不限送货时间<span>></span></p></div>
			<div><p>优惠券</p><p>不限送货时间<span>></span></p></div>
		</div>
		<ul class="myshops" v-for="item3 in shopsin">
			<li>
				<img src="../../assets/图片 19.png" alt="">
				<p>{{item3.shopname}}</p>
				<p>x{{item3.num}}</p>
				<p>{{item3.pic}}元</p>
			</li>
		</ul>
		<div class="footer1">
			<p>应付金额：{{all}}元</p>
			<button @click="fukuan()">去付款</button>
		</div>
		<div class="kongbai1"></div>
	</div>
</template>

<script>
	export default{
		name:'Jiesuan',
		data(){
			return {
				msg:[],
				//this.$route.params.id
				shopsin:'',
				money1:''
			}
		},
		methods:{
			fukuan(){
				var time=new Date()
				var year=time.getFullYear()
				var month=time.getMonth()+1
				var day = time.getDate()
				var hours=time.getHours()
				var min = time.getMinutes()
				var sec = time.getSeconds()
				let times=year+'/'+month+'/'+day+' '+hours+':'+min+':'+sec
				console.log(times)
				//为每个商品添加时间,状态,总价
				for(var i=0;i<this.shopsin.length;i++){
					this.shopsin[i].time=times
					this.shopsin[i].allpic=this.shopsin[i].pic*this.shopsin[i].num
					this.shopsin[i].money=this.money1
				}
				//跳转到去付款页面
				//,params:{id:this.shopsin}
				//传参到localstorage
				window.localStorage.setItem('shopsin1',JSON.stringify(this.shopsin))
				this.$router.push({name:'money'})
			}
		},
		computed:{
			all(){
				//计算总价
				// 总价=每个单个总价相加
				let alldan=0
				let all1=0
				var sh=JSON.parse(window.localStorage.getItem('shopsin'))
				for(var i=0;i<sh.length;i++){
					//判断是否选中
					alldan+=sh[i].pic*sh[i].num
					all1+=alldan
				}
				this.money1=all1
				return all1
			}
		},
		beforeMount() {
			this.shopsin=JSON.parse(window.localStorage.getItem('shopsin'))
			console.log(this.shopsin)
		}
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	li{list-style: none;}
	a{text-decoration: none;}
	.address{
		width: 90%;
		height: 98px;
		background-color:#ccc;
		padding: 10px;
		margin: 20px auto;
		padding-right: 10px;
	}
	.p1{
		width: 189px;
		height: 29px;
		color: rgba(80, 80, 80, 1);
		font-size: 16px;
		line-height: 150%;
		text-align: left;
		font-weight: bold;
		margin-top: 15px;
		margin-left: 20px;
	}
	.p2{
		width: 297px;
		height: 42px;
		color: rgba(128, 128, 128, 1);
		font-size: 13px;
		line-height: 150%;
		text-align: left;
		margin-left: 20px;
	}
	.address span{
		width: 28px;
		height: 28px;
		font-size: 28px;
		color: rgba(153, 153, 153, 1);
		float: right;
		margin-top: 30px;
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
	.three{
		width: 90%;
		height: 105px;
		background-color: rgba(255, 255, 255, 1);
		margin: 20px auto 55px;
	}
	.three div{
		width: 100%;
		height: 47px;
		background-color: wheat;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		line-height: 47px;
		font-size: 12px;
		padding-right: 20px;
	}
	.myshops{
		width: 96%;
		height: auto;
		background-color: rgba(255, 255, 255, 1);
		margin: 0 0 0 20px;
		display: flex;
		justify-content: space-evenly;
	}
	.myshops li{
		width: 100%;
		height: 47px;
		background-color: powderblue;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		line-height: 47px;
		font-size: 12px;
		padding-right: 20px;
	}
	.myshops li img{
		width: 38px;
		height: 38px;
		margin-top: 5px;
		margin-left: 5px;
	}
	.footer1{
		width: 90%;
		height: 52px;
		margin: 0 auto;
		/* position: fixed;
		bottom: 0px; */
		background-color: rgba(255, 255, 255, 1);
		display: flex;
		justify-content: space-evenly;
		color: rgba(255, 112, 58, 1);
		font-size: 14px;
		line-height: 52px;
	}
	.footer1 p{
		margin-left: -50px;
	}
	.footer1 button{
		width: 150px;
		height: 52px;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(255, 112, 58, 1);
		font-size: 15px;
		line-height: 52px;
		text-align: center;
		margin-right: -100px;
	}
	.kongbai1{
		height: 50px;
	}
</style>