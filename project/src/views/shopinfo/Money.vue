<template>
	<div class="Money">
		<div class="confirm">
			<p @click="fan()">取消</p>
			<h2>确认支付</h2>
		</div>
		<div class="dingdan">
			<h4>小米科技12325345433514号订单</h4>
			<h1>￥{{msg}}</h1>
		</div>
		<div class="gongsi">
			<p>收款方</p>
			<p>小米科技有限责任公司</p>
		</div>
		<button @click="cg()">立即支付</button>
		<p>支付安全由中国人民财产保险股份有限公司承保</p>
	</div>
</template>

<script>
	export default{
		name:'Money',
		data(){
			return {
				//this.$route.params.id.money
				//this.$route.params.id
				msg:'',
				shopsin:''
			}
		},
		methods:{
			fan(){
				//失败显示状态未付款
				for(var i=0;i<this.shopsin.length;i++){
					this.shopsin[i].states='未付款'
					this.$http.get('/orders/jia',this.$data.shopsin[i]).then(data=>{
						// JSON.stringify(window.localStorage.setItem('exist',this.$data.shopsin))
						console.log(data)
					}).catch(err=>{
						console.log(err)
					})
				}
				//返回付款失败页面
				//,params:{id:this.msg.money}
				this.$router.push({name:'shibai'})
			},
			cg(){
				//点击去付款，点击后加入到订单显示状态为已付款
				var cunzai=JSON.parse(window.localStorage.getItem('shopsin1'))
				if(cunzai){
					for(var i=0;i<cunzai.length;i++){
						cunzai[i].states='已付款'
						this.$http.get('/orders/xiugai',cunzai[i]).then(data=>{
							console.log(data)
						}).catch(err=>{
							console.log(err)
						})
					}
				}else{
					//加入订单数据库
					for(var i=0;i<this.shopsin.length;i++){
						this.shopsin[i].states='已付款'
						this.$http.get('/orders/jia',this.$data.shopsin[i]).then(data=>{
							console.log(data)
						}).catch(err=>{
							console.log(err)
						})
					}
				}
				
				//跳转到已付款界面
				this.$router.push({name:'cg'})
				
			}
		},
		beforeMount() {
			this.shopsin=JSON.parse(window.localStorage.getItem('shopsin1'))
			this.msg=this.shopsin[this.shopsin.length-1].money
			console.log(this.shopsin)
		}
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	li{list-style: none;}
	a{text-decoration: none;}
	.confirm{
		height: 82px;
		background-color: midnightblue;
		color: aliceblue;
		/* position: relative; */
		/* line-height: 82px; */
	}
	.confirm p{
		
		text-align: left;
		margin-left: 10px;
		/* position: fixed;
		top:30px; */
	}
	.dingdan{
		width: 100%;
		text-align: center;
		/* padding: 20px; */
		margin: 40px auto;
	}
	.gongsi{
		margin: 20px 0;
		width: 100%;
		height: 47px;
		text-indent: 18px;
		color: rgba(153, 153, 153, 1);
		background-color: rgba(255, 255, 255, 1);
		font-size: 15px;
		line-height: 47px;
		display: flex;
		justify-content: space-around;
		border-top: 1px solid rgba(153, 153, 153, 1);
		border-bottom: 1px solid rgba(153, 153, 153, 1);
	}
	button{
		width: 340px;
		height: 47px;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(26, 173, 25, 1);
		box-shadow: rgba(0, 0, 0, 0.2) solid 1px;
		border-radius: 6px;
		font-size: 19px;
		line-height: 150%;
		text-align: center;
	}
	.Money>p{
		width: 375px;
		height: 59px;
		color: rgba(128, 128, 128, 1);
		font-size: 14px;
		line-height: 150%;
		text-align: center;
		position: fixed;
		bottom: 40px;
	}
</style>