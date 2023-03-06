<template>
	<div class="Shopcar" :style="{display:dis}">
		<div class="one">
			<h2>购物车</h2>
			<p class="bianji" @click="bianji()">编辑</p>
		</div>
		<div class="contents" v-for="item2,index in msg">
			<input type="checkbox" name="select" :checked="item2.check" @click="checks(index)">
			<img :src="item2.src" alt="">
			<div>
				<p>{{item2.shopname}}</p>
				<p>白色</p>
				<p>{{item2.pic}}</p>
			</div>
			<div>
				<button @click="reduce(index)">-</button>
				<p>{{item2.num}}</p>
				<button @click="add(index)">+</button>
			</div>
			<img src="../assets/删除.png" :style="{display:display1}" alt="" @click="delete1(index)">
		</div>
		<div class="kongb"></div>
		<div class="footer">
			<input type="checkbox" name="all" :checked="checkall" @click="quan()"><span>全选</span>
			<div>
				<p>合计：￥{{all1}}</p>
				<button @click="jiesuan1()">结算</button>
			</div>
		</div>
		<div class="deletecg" :style="{display:display2}">删除成功</div>
		<div class="wu" :style="{display:display4}">
			<h3>你购物车还没有东西噢</h3>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'Shopcar',
		data(){
			return {
				msg:[],
				dis:'none',
				all1:0,
				checkall:false,
				display1:'none',
				flag1:false,
				display2:'none',
				display4:'none'
			}
		},
		methods:{
			jiesuan1(){
				//跳转结算页面前取得商品名，价格，总价，src，num
				//把勾选后的商品全部以数组对象的形式传过去
				var arr=[]
				let m=0
				for(var i=0;i<this.$data.msg.length;i++){
					if(this.$data.msg[i].check==true){
						arr[m]=this.$data.msg[i]
						m++
					}
				}
				if(m>0){
					//跳转到结算页面
					//,params:{id:arr}
					window.localStorage.setItem('shopsin',JSON.stringify(arr))
					this.$router.push({name:'jiesuan'})
				}else{
					console.log('请勾选')
				}
			},
			reduce(index){
				//减
				if(this.$data.msg[index].num>1){
					this.$data.msg[index].num--
					this.se()
				}
			},
			add(index){
				this.$data.msg[index].num++
				this.se()
			},
			//编辑
			bianji(){
				this.flag1=!this.flag1
				if(this.flag1==true){
					this.display1='block'
				}else{
					this.display1='none'
				}
			},
			//删除
			delete1(index){
				let shijian=this.msg[index]
				this.$http.get('/shopcar/delete1',shijian).then(data=>{
					if(data.data){
						this.display2='block'
						setTimeout(()=>{
							// this.display2='none'
							location.reload()
						},800)
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			//点击勾选商品
			checks(index){
				this.$data.msg[index].check=!this.$data.msg[index].check
				this.se()
				
				//循环判断是否全选
				let num=0
				for(var i=0;i<this.$data.msg.length;i++){
					if(this.$data.msg[i].check==true){
						num++

						if(num==this.$data.msg.length){
							this.$data.checkall=true
						}else{
							this.$data.checkall=false
						}
					}else{
						this.$data.checkall=false
					}
				}
			},
			//全选
			quan(){
				//全选
				this.$data.checkall=!this.$data.checkall
				for(var i=0;i<this.$data.msg.length;i++){
					this.$data.msg[i].check=this.$data.checkall
					//全选后商品跟着全选计算总价
					this.se()
				}
			},
			se(){
				// 总价=每个单个总价相加
				let alldan=0
				let all=0
				for(var i=0;i<this.$data.msg.length;i++){
					//判断是否选中
					if(this.$data.msg[i].check==true){
						alldan+=this.$data.msg[i].pic*this.$data.msg[i].num
						all+=alldan
					}
				}
				this.all1=all
				// console.log(this.msg)
			}
		},
		mounted() {
			//在购物车数据库查找数据
			var obj9={name:window.localStorage.getItem('user')}
			this.$http.get('/shopcar',obj9).then(data=>{
				console.log(data.data)
				if(data.data!='购物车没有商品噢'){
					this.display4='none'
					this.$data.msg=data.data.data
					//给msg添加check
					for(var i=0;i<this.$data.msg.length;i++){
						this.$data.msg[i].check=false
					}
					if(window.localStorage.getItem('token')){
						this.$data.dis='block'
					}
					console.log(this.$data.msg)
				}else{
					this.$data.display4='block'
				}
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style scoped>
	.wu{
		/* width: 100%;
		height: 80vh;
		background-color: antiquewhite; */
		display: none;
	}
	.deletecg{
		display: none;
		width: 200px;
		height: 50px;
		font-size: 24px;
		color:palevioletred;
		text-align: center;
		line-height: 50px;
		position: fixed;
		top:30%;
		left: 30%;
		background: rgba(166, 166, 166, 0.49673202614379086);
	}
	.one{
		width: 375px;
		height: 52px;
		color: rgba(80, 80, 80, 1);
		font-size: 18px;
		line-height: 150%;
		background-color: #ccc;
	}
	.one h2{
		margin: 0 auto;
		padding-top: 15px;
		text-align: center;
		font-weight: bold;
	}
	.one>p{
		text-align: right;
		margin-right: 40px;
		margin-top: -20px;
	}
	.contents{
		width: 375px;
		height: 94px;
		background-color: rgba(255, 255, 255, 1);
		display: flex;
		justify-content: space-around;
		border: 1px solid bisque;
		padding-top: 15px;
		/* background: antiquewhite; */
	}
	.contents input{
		width: 21px;
		height: 21px;
		line-height: 21px;
		margin-top: 20px;
	}
	.contents img{
		width: 75px;
		height: 75px;
		border-radius: 2px;
		border: rgba(229, 229, 229, 1) solid 1px;
	}
	.contents img:nth-of-type(2){
		width: 25px;
		height: 25px;
		display: none;
		background-color: antiquewhite;
		margin-top: 20px;
		border-radius: 2px;
		border: rgba(229, 229, 229, 1) solid 1px;
	}
	.contents div:nth-of-type(1)>p{
		font-size: 14px;
		line-height: 100%;
		text-align: left;
	}
	.contents div:nth-of-type(2){
		margin-top: 20px;
		width: 70px;
	}
	.contents div:nth-of-type(2)>button{
		width: 23px;
		height: 23px;
		color: rgba(166, 166, 166, 0.49673202614379086);
		background-color: rgba(255, 255, 255, 1);
		float: left;
	}
	.contents div:nth-of-type(2)>p{
		width: 23px;
		height: 23px;
		color: rgba(80, 80, 80, 1);
		font-size: 12px;
		line-height: 20%;
		float: left;
	}
	.footer{
		width: 100%;
		height: 52px;
		position: fixed;
		bottom: 50px;
		background-color: rgba(25, 255, 255, 1);
		display: flex;
		justify-content: space-between;
	}
	.footer input{
		width: 18px;
		height: 18px;
		margin-top: 20px;
	}
	.footer span{
		margin-left: -60px;
		margin-top: 17px;
	}
	.footer div{
		height: 52px;
		display: flex;
		justify-content: space-between;
		line-height: 52px;
	}
	.footer div>button{
		width: 103px;
		height: 52px;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(255, 112, 58, 1);
		font-size: 16px;
		line-height: 150%;
		text-align: center;
	}
	.kongb{
		height: 100px;
	}
</style>