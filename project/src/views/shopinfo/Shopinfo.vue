<template>
	<div class="Shopinfo">
		<img :src="na.src" alt="">
		<div class="jia">
			<div class="na">
				<p>
					<span>品牌：{{na.shopname}}</span><br>
					<span>标题：{{na.title}}</span>
				</p>
				<p>价格：{{na.pic}}</p>
			</div>
			<div>
				<!-- <p>数量：</p> -->
				<button @click="reduce()">-</button>
				<p>{{num}}</p>
				<button @click="add()">+</button>
			</div>
			<!-- <button >加入购物车</button> -->
			<van-goods-action style="bottom: 50px; ">
			  <van-goods-action-icon icon="chat-o" text="客服" dot />
			  <van-goods-action-icon icon="cart-o" text="购物车"  />
			  <van-goods-action-icon icon="shop-o" text="店铺"  />
			  <van-goods-action-button type="warning" @click="jiaru()" text="加入购物车" />
			  <van-goods-action-button type="danger" @click="immeadiate()" text="立即购买" />
			</van-goods-action>

		</div>
	
		<!-- <div class="kong"></div> -->
	</div>
</template>

<script scoped>
	export default{
		name:'Shopinfo',
		data(){
			return {
				//接收传参的值
				na:this.$route.params.id,
				num:0
			}
		},
		methods:{
			jiaru(){
				if(this.num>0){
					//加入购物车
					var time=new Date()
					var year=time.getFullYear()
					var month=time.getMonth()+1
					var day = time.getDate()
					var hours=time.getHours()
					var min = time.getMinutes()
					var sec = time.getSeconds()
					let times=year+'/'+month+'/'+day+' '+hours+':'+min+':'+sec
					console.log(times)
					//把顾客名字加入进购物车
					this.$data.na.name=window.localStorage.getItem('user');
					this.$data.na.num=this.$data.num
					this.$data.na.time=times
					
					this.$http.get('/shop/jiaru',this.$data.na).then(data=>{
						console.log(data)
					}).catch(err=>{
						console.log(err)
					})
				}
			},
			//立即购买
			immeadiate(){
				var arr=[]
				this.na.num=this.num
				this.na.allpic=this.na.num*this.na.pic
				this.na.name=window.localStorage.getItem('user')
				arr[0]=this.na
				//跳转到结算页面
				//,params:{id:arr}
				window.localStorage.setItem('shopsin',JSON.stringify(arr))
				this.$router.push({name:'jiesuan'})
			},
			reduce(){
				//减
				if(this.$data.num>1){
					this.$data.num--
				}
			},
			add(){
				this.$data.num++
			}
		},
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	li{list-style: none;}
	a{text-decoration: none;}
	img{
		width: 100%;
		height: 60vh;
	}
	.jia{
		width: 100%;
		height: 40vh;
	}
	.na{
		width: 100%;
		margin: 20px 0 20px;
		/* padding: 10px; */
		display: flex;
		font-size: 18px;
		font-weight: bolder;
		justify-content: space-around;
		text-align: left;
	}
	.jia div:nth-of-type(2){
		margin-top: 20px;
		width: 70px;
		float: right;
		margin-top: -30px;
		margin-right: 40px;
	}
	.jia div:nth-of-type(2)>button{
		width: 23px;
		height: 23px;
		color: rgba(166, 166, 166, 0.49673202614379086);
		background-color: rgba(255, 255, 255, 1);
		float: left;
	}
	.jia div:nth-of-type(2)>p{
		width: 23px;
		height: 23px;
		color: rgba(80, 80, 80, 1);
		font-size: 12px;
		line-height: 150%;
		float: left;
	}
</style>