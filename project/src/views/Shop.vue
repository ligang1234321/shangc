<template>
	<div class="Shop">
		<!-- <form action="">
			
		</form> -->
		<van-search @cancel="onCancel" @search="onSearch" show-action v-model="value" placeholder="请输入搜索关键词" />
		<div  class="left" v-for="item,index in msg" :key="msg[index].shoplei">
			<div  @click="btn1(index)">{{msg[index].shoplei}}</div>
		</div>
		<div class="right">
			<div class="dingbu">
				<p>红米5</p>
				<p>5.7全面屏</p>
				<img src="../assets/图片 19.png" alt="">
			</div>
			<div class="content">
				<h2>{{content.shoplei}}</h2>
				<div>
					<div v-for="item1,index1 in content.information" @click="shopinfo(index1)">
						<!-- http://localhost:3000/images/0255d560fa1ebedbb04b70b6911f136f.jpg -->
						<img :src="item1.src" alt="">
						<p>{{content.information[index1].shopname}}</p>
					</div>
				</div>
			</div>
			<van-pagination :style="{display:disp}"  v-model="currentPage" :page-count="pages" mode="simple" />
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Search } from 'vant';
	import { Toast } from 'vant';
	Vue.use(Search);
	export default{
		name:'Shop',
		data(){
			return {
				//搜索
				value: '',
				//左边种类所有数据
				msg:[],
				//右边所有数据
				msgright:[],
				//页面渲染
				content:{shoplei:'',information:[{
					pic: "",
					shopname: "",
					src: "",
					title: ""
				}]},
				//分页功能使用
				currentPage: 1,
				arr:[],
				no:0,
				pages:4,
				disp:''
			}
		},
		methods:{
			// 分页
			pag(){
				//存进另外一个数组
				if(this.no==0){
					this.no++
					this.arr=this.content.information
				}
				//改变页码数量
				var pages=parseFloat(this.arr.length/4)
				if(pages%parseInt(pages)==0){
					this.pages=pages
				}else{
					this.pages=parseInt(pages)+1
				}
				
				for(var i=0;i<pages;i++){
					//判断当前页面
					if(this.currentPage-1==i){
						var con=this.arr.slice(i*4,i*4+4)
						console.log(this.arr)
						this.content.information=con
					}
				}
				// console.log(this.arr,this.currentPage)
			},
			btn1(index){
				this.no=0
				this.currentPage=1
				this.disp="block"
				this.disp="flex"
				//点击左边右边显示对应的数据
				for(var i=0;i<this.msgright.length;i++){
					if(this.msg[index].shoplei==this.$data.msgright[i].shoplei){
						this.$data.content.shoplei=this.$data.msgright[i].shoplei
						console.log(this.$data.msgright[i].shoplei,i)
						this.$data.content.information=this.$data.msgright[i].information
					}
				}
				
				//点击后颜色改变
				var leftdan = document.querySelectorAll('.left')
				for(var i=0;i<leftdan.length;i++){
					leftdan[i].style.background='antiquewhite'
				}
				leftdan[index].style.background='orange'
				
				this.pag()
			},
			shopinfo(index1){
				//传到商品详情页面
				this.$router.push({name:'shopinfo',params:{id:this.$data.content.information[index1]}})
				console.log(this.$data.content.information[index1])
			},
			onSearch(val) {
				this.no=0
				this.pag()
				//搜索数据库商品数据，如果有页面跳转到该商品的详情页面
				//如果没有弹出无商品
				let obj2={serch:val}
				this.$http.get('/shop/search',obj2).then(data=>{
					if(data.data.length>0){
						//判断是什么种类
						let zhong=''
						//删除目前页面显示的内容
						for(var m=0;m<this.$data.content.information.length;m++){
							this.$data.content.information.splice(0,1)
						}
						//循环后端传过来的数据,依次传入页面
						for(var n=0;n<data.data.length;n++){
							if(data.data[n].shopname){
								//改变页面显示的值,把data的值给页面显示的内容
								let dui={
									pic: data.data[n].pic,
									shopname: data.data[n].shopname,
									src: data.data[n].src,
									title: data.data[n].title
								}
								this.$data.content.shoplei=data.data[0].shoplei
								this.$data.content.information[n]=dui
								
								Toast('搜索成功');
								
								zhong=data.data[0].shoplei
								this.disp='none'
							}else{
								Toast('搜索失败');
							}
						}
						console.log(this.$data.content.information)
						//搜索完成左边对应的颜色改变
						var leftdan = document.querySelectorAll('.left')
						for(var i=0;i<leftdan.length;i++){
							if(zhong==this.$data.msgright[i].shoplei){
								leftdan[i].style.background='orange'
							}
							leftdan[i].style.background='antiquewhite'
						}
						
						// this.pag()
					}else{
						Toast('无此商品')
					}
					
				}).catch(err=>{
					console.log(err)
				})
				// Toast(val);
				console.log(val)
			},
			onCancel() {
				Toast('取消搜索');
			},
		},
		watch:{
			currentPage(){
				this.pag()
				// console.log(this.arr)
			}
		},
		beforeMount() {
			
			this.$http.get('/shop').then(data=>{
				this.$data.msg=data.data
				// console.log(this.msg)
			}).catch(err=>{
				console.log(err)
			})
			
			this.$http.get('/shop/shops').then(data=>{
				var arr=[]
				let shu=data.data
				// console.log(data.data)
				shu.forEach((value,i,shu)=>{
					//创建数组接收商品以及种类
					let obj={shoplei:'',information:[]}
					let m=0
					shu.forEach((value,j,shu)=>{
						//找到相同类型的数据
						if(shu[i].shoplei==shu[j].shoplei){
							let dui={
								shopname:shu[j].shopname,
								pic:shu[j].pic,
								src:shu[j].src,
								title:shu[j].title,
							}
							obj.shoplei=shu[i].shoplei
							obj.information[m++]=dui
						}
					})
					arr[i]=obj
					// console.log(obj)
				})
				// arr.splice(0,1)
				//数组去重	
				for(var i=0;i<arr.length;i++){
					let s=0
					for(var j=0;j<arr.length;j++){
						if(arr[i].shoplei==arr[j].shoplei){
							s++
							if(s>1){
								arr.splice(j,1)
							}
						}
					}	
				}
				this.$data.msgright=arr
				// console.log(arr)
				//一开始就把左边第一行的种类进行显示
				//右边显示对应的数据
				this.$data.content.shoplei=this.$data.msgright[0].shoplei
				console.log(this.$data.msgright[0].shoplei)
				this.$data.content.information=this.$data.msgright[0].information
				//颜色改变
				var leftdan = document.querySelectorAll('.left')
				for(var i=0;i<leftdan.length;i++){
					leftdan[i].style.background='antiquewhite'
				}
				leftdan[0].style.background='orange'
				
				//分页
				this.pag()
				// console.log(this.msgright)
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style scoped>
	.left{
		width: 30%;
		height: auto;
		/* background: red; */
		background-color: slateblue;
		margin-top: 3px;
	}
	.left>div{
		width: 100%;
		height: 38px;
		/* color: rgba(255, 112, 58, 1); */
		font-size: 16px;
		line-height: 38px;
		text-align: center;
		border-bottom: 1px solid sandybrown;
		
	}
	.right{
		width: 70%;
		height: auto;
		position: absolute;
		top: 63px;
		right: 0;
	}
	.dingbu{
		width: 100%;
		height: 70px;
		color: rgba(80, 80, 80, 1);
		background-color: rgba(222, 201, 187, 1);
		font-size: 16px;
		line-height: 150%;
		text-align: center;
		/* position: absolute;
		top: 70px; */
		
	}
	.dingbu p{
		color: rgba(56, 56, 56, 1);
		font-size: 14px;
		line-height: 150%;
		text-align: center;
		font-weight: bold;
		margin-top: 10px;
		margin-right: 120px;
	}
	.dingbu img{
		margin-left: 80px;
		margin-top: -130px;
		width: 65px;
		height: 80px;
	}
	.content{
		width: 100%;
		height: auto;
	}
	.content h2{
		margin: 20px auto;
	}
	.content>div{
		width: 100%;
		height: 250px;
	}
	van-pagination{
		float: left;
	}
	.content>div>div{
		width: 112px;
		height: 100px;
		margin-bottom: 20px;
		margin-left: 10px;
		float: left;
	}
	.content>div>div img{
		width: 82px;
		height: 77px;
		margin-top:10px;
	}
	.content>div>div p{
		color: rgba(128, 128, 128, 1);
		font-size: 13px;
		line-height: 150%;
		text-align: center;
	}
</style>