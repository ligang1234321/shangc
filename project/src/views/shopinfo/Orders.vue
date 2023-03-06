<template>
	<div class="Orders">
		<div class="index">
			<p @click="back1()"><返回</p>
			<h2>商品订单</h2>
			<img @click="cars()" src="../../assets/图标 23.svg" alt="">
		</div>
		<div class="conten" v-for="item5,index1 in msg">
			<div class="time">
				<p>时间：{{item5.time}}</p>
				<p>状态：{{item5.states}}</p>
			</div>
			<ul class="myshops" v-for="item3,index in item5.info">
				<li>
					<img :src="item3.src" alt="">
					<p>{{item3.shopname}}</p>
					<p>x{{item3.num}}</p>
					<p>{{item3.pic}}元</p>
				</li>
			</ul>
			<p>实付金额：{{item5.allpic}}元</p>
			<button>查看物流</button>
		</div>
		<!-- <div class="kongbai2"></div> -->
	</div>
</template>

<script>
	export default{
		name:'Orders',
		data(){
			return {
				msg:[]
			}
		},
		methods:{
			//返回我的
			back1(){
				history.back()
			},
			//跳转到购物车
			cars(){
				this.$router.push({name:'shopcar'})
			}
		},
		beforeMount() {
			//数据库查找订单
			this.$http.get('/orders',{name:window.localStorage.getItem('user')}).then(data=>{
				if(data.data!='还没有订单噢'){
					var arr2=[]
					//循环找到时间
					let arr=data.data.data
					for(var i=0;i<arr.length;i++){
						//同一时间内购买的商品订单
						let obj={
							time:'',
							states:'',
							info:[]
						}
						let alls=0
						let m=0
						for(var j=0;j<arr.length;j++){
							
							if(arr[i].time==arr[j].time){
								//把订单页面所需要的转换成数组形式
								//找到总价
								alls+=arr[j].pic*arr[j].num
								
								obj.time=arr[j].time
								obj.states=arr[j].states
								
								obj.info[m]=arr[j]
								m++	
							}
						}
						//总价添加进数组
						obj.allpic=alls
						arr2[i]=obj
					}
					console.log(arr2)
					//数组去重复
					for(var i=0;i<arr2.length;i++){
						let m=0
						for(var j=0;j<arr2.length;j++){
							if(arr2[i].time==arr2[j].time){
								m++
								if(m>1){
									arr2.splice(j,1)
								}
							}
						}
					}
					this.msg=arr2
					console.log(arr2)
				}else{
					console.log(data.data)
				}
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style scoped>
	.index{
		width: 100%;
		height: 52px;
		color: rgba(80, 80, 80, 1);
		font-size: 18px;
		/* line-height: -50px; */
		text-align: center;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		background: #ccc;
	}
	.index img{
		width: 23px;
		height: 23px;
		margin-top: 15px;
	}
	.index>h2{
		margin-top: 5px;
	}
	.conten{
		width: 90%;
		height: auto;
		background-color: rgba(255, 255, 255, 1);
		border: 1px solid #ccc;
		margin: 40px auto 0;
		text-align: right;
	}
	.time{
		width: 90%;
		height: 50px;
		margin: 10px auto 0;
		border-bottom:1px solid orange ;
		display: flex;
		justify-content: space-between;
		
	}
	.myshops{
		width: 90%;
		height: auto;
		background-color: rgba(255, 255, 255, 1);
		margin: 10px 0 0 20px;
		/* padding-right: 20px; */
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
	.conten>p{
		text-align: right;
		margin-top: 20px;
		padding-right: 30px;
	}
	.conten>button{
		width: 89px;
		height: 33px;
		color: rgba(128, 128, 128, 1);
		background-color: rgba(255, 255, 255, 1);
		box-shadow: rgba(166, 166, 166, 1) solid 1px;
		font-size: 13px;
		line-height: 33px;
		text-align: center;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-right: 10px;
	}
	.kongbai2{
		height: 50px;
	}
</style>