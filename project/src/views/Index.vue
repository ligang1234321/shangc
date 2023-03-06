<template>
	<div class="Index">
		<div class="shouTu">
			<img src="../assets/图片 2.png" alt="">
		</div>
		<div class="xiaomi">
			<ul>
				<li>小</li>
				<li>米</li>
				<li>感</li>
				<li>恩</li>
				<li>季</li>
			</ul>
		</div>
		<div class="hotshop">
			<h4>热品买爆，火热感恩</h4>
			<p>千元全面屏现货抢</p>
			<ul v-for="item in msg">
				<li>
					<img src="../assets/图片 3.jpg" alt="">
					<p>{{item.p1}}</p>
					<p>{{item.p2}}</p>
					<p>{{item.p3}}</p>
					<button>立即购买</button>
				</li>
			</ul>
			<div v-for="item in msg">
				<p>今日热卖</p>
				<p>立减100</p>
				<img src="../assets/图片 3(1).jpg" alt="">
				<div>
					<p>{{item.p1}}</p>
					<p>{{item.p2}}</p>
				</div>
				<div>
					<p>{{item.p3}}</p>
					<button>立即购买</button>
				</div>
			</div>
		</div>
		<div class="fuli">
			<p>附加福利送手机感恩里</p>
			<div>领取福利</div>
			<div>挑选手机</div>
			<div>福利</div>
			<div></div>
		</div>
		<div class="ganen">
			<p>旗舰手机感恩特惠</p>
			<p>多款手机享花呗6期 / 小米分期12期免息</p>
			<div>
				<p>优惠补贴</p>
				<img src="../assets/图片 3(1).jpg" alt="">
				<div>
					<p>小米MIX 2 全面屏2.0</p>
					<p>全面屏2.0 骁龙835旗舰处理器</p>
				</div>
				<div>
					<p>999起</p>
					<button>立即购买</button>
				</div>
			</div>
			<ul v-for="item1 in msg">
				<li>
					<img src="../assets/图片 3(2).jpg" alt="">
					<p>{{item1.p1}}</p>
					<p>{{item1.p2}}</p>
					<p>{{item1.p3}}</p>
					<button>立即购买</button>
				</li>
			</ul>
			<p style="font-size: 24px;margin: 20px 0;">千元全面屏 红米国民手机</p>
			<div>
				<p>用券低至999</p>
				<img src="../assets/图片 3(3).jpg" alt="">
				<div>
					<p>小米MIX 2 全面屏2.0</p>
					<p>全面屏2.0 骁龙835旗舰处理器</p>
				</div>
				<div>
					<p>999起</p>
					<button>立即购买</button>
				</div>
			</div>
			<div class="foot">
				<img src="../assets/图片 17.png" alt="">
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'Index',
		data(){
			return {
				msg:[
					{p1:'红米5 Plus',p2:'千元全面屏，前置柔光自拍',p3:'999起'},
					{p1:'红米5 Plus',p2:'千元全面屏，前置柔光自拍',p3:'999起'},
					{p1:'红米5 Plus',p2:'千元全面屏，前置柔光自拍',p3:'999起'},
					{p1:'红米5 Plus',p2:'千元全面屏，前置柔光自拍',p3:'999起'},
				]
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	li{list-style: none;}
	.Index{
		width: 100%;
		height: 100vh;
		position: relative;
	}
	.shouTu{
		width: 100%;
		height: 303px;
	}
	.shouTu>img{
		width: 100%;
		height: 303px;
	}
	.xiaomi{
		width: 359px;
		height: 59px;
		background-color: deeppink;
		margin-left: 10px;
	}
	.xiaomi ul{
		width: 359px;
		height: 59px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.xiaomi li{
		width: 38px;
		height: 38px;
		background-color: aliceblue;
		color: rgba(206, 37, 82, 1);;
		border-radius: 19px;
		font-size: 16px;
		line-height: 38px;
		border: rgba(171, 37, 72, 1) solid 2px;
		text-align: center;
		font-weight: bold;
	}
	.hotshop{
		width: 100%;
		height: auto;
		background-color: orange;
		overflow: hidden;
	}
	.hotshop>h4{
		width: 197px;
		height: 33px;
		left: 89px;
		top: 192px;
		color: rgba(126, 77, 29, 1);
		font-size: 19px;
		margin: 10px auto;
		text-align: center;
		font-weight: bold;
	}
	.hotshop>ul{
		width: 100%;
		height: auto;
	}
	.hotshop>ul>li{
		width: 177px;
		height: 264px;
		margin-top: 10px;
		margin-left: 10px;
		background-color: rgba(255, 255, 255, 1);
		float: left;
	}
	.hotshop>ul>li>img{
		width: 177px;
		height: 131px;
		left: -23px;
	}
	.hotshop>ul>li>p:nth-of-type(1){
		width: 103px;
		height: 28px;
		color: rgba(80, 80, 80, 1);
		font-size: 16px;
		line-height: 150%;
		margin: 0 auto;
		font-weight: bold;
	}
	.hotshop>ul>li>p:nth-of-type(2){
		width: 162px;
		height: 18px;
		color: rgba(80, 80, 80, 1);
		font-size: 12px;
		margin: 5px auto;
	}
	.hotshop>ul>li>p:nth-of-type(3){
		color: rgba(245, 87, 78, 1);
		font-size: 16px;
		margin: 0 auto;
		font-weight: bold;
	}
	.hotshop>ul>li>button{
		width: 96px;
		height: 29px;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(245, 87, 78, 1);
		font-size: 13px;
		line-height: 150%;
		margin: 0 auto;
		margin-top: 10px;
	}
	.hotshop>div{
		width: 361px;
		height: 393px;
		background-color: rgba(255, 255, 255, 1);
		float: left;
		margin-top: 5px;
		margin-left: 10px;
		position: relative;
	}
	.hotshop>div>img{
		width: 361px;
		height: 268px;
	}
	.hotshop>div>div:nth-of-type(1){
		color: rgba(80, 80, 80, 1);
		font-size: 18px;
		font-weight: bold;
		margin-top: 20px;
		float: left;
	}
	.hotshop>div>div:nth-of-type(2){
		color: rgba(245, 87, 78, 1);
		font-size: 24px;
		float: right;
	}
	.hotshop>div button{
		width: 96px;
		height: 29px;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(245, 87, 78, 1);
		font-size: 13px;
		line-height: 150%;
		margin: 0 auto;
		margin-top: 10px;
	}
	.hotshop>div>p:nth-of-type(1){
		width: 67px;
		height: 24px;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(236, 52, 96, 1);
		font-size: 13px;
		text-align: center;
	}
	.hotshop>div>p:nth-of-type(2){
		width: 56px;
		height: 56px;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(245, 87, 78, 1);
		border-radius: 50%;
		font-size: 14px;
		text-align: center;
		line-height: 56px;
		font-weight: bold;
		position: absolute;
		bottom: 100px;
		right: 0;
	}
	.fuli{
		width: 375px;
		height: 172px;
		margin: 0 auto;
		background-color: rgba(245, 87, 78, 1);
		overflow: hidden;
		position: relative;
	}
	.fuli p{
		width: 103px;
		height: 56px;
		color: rgba(255, 242, 239, 1);
		font-size: 16px;
		line-height: 130%;
		text-align: left;
		font-weight: bold;
		margin: 20px 20px 0;
	}
	.fuli div:nth-of-type(1){
		width: 103px;
		height: 38px;
		color: rgba(245, 87, 78, 1);
		background-color: rgba(255, 242, 239, 1);
		font-size: 14px;
		text-align: center;
		font-weight: bold;
		line-height: 38px;
		margin: 0px 20px 10px;
	}
	.fuli div:nth-of-type(2){
		width: 103px;
		height: 38px;
		color: rgba(245, 87, 78, 1);
		background-color: rgba(255, 242, 239, 1);
		font-size: 14px;
		line-height: 38px;
		text-align: center;
		font-weight: bold;
		margin: 0px 20px;
	}
	.fuli div:nth-of-type(3){
		width: 145px;
		height: 76px;
		color: rgba(245, 197, 172, 1);
		background-color: rgba(222, 76, 68, 1);
		font-size: 31px;
		text-align: center;
		position: absolute;
		top: 20%;
		left: 50%;
		font-weight: bold;
	}
	.fuli div:nth-of-type(4){
		width: 183px;
		height: 56px;
		color: rgba(80, 80, 80, 1);
		background-color: rgba(245, 197, 172, 1);
		position: absolute;
		top: 45%;
		left: 45%;
		font-weight: bold;
	}
	.ganen{
		width: 100%;
		height: auto;
		background-color: orange;
		overflow: hidden;
	}
	.ganen>p:nth-of-type(1){
		width: 197px;
		height: 33px;
		left: 89px;
		top: 192px;
		color: rgba(126, 77, 29, 1);
		font-size: 19px;
		margin: 20px auto 0px;
		text-align: center;
		font-weight: bold;
	}
	.ganen>p:nth-of-type(2){
		margin-bottom: 15px;
	}
	.ganen>ul{
		width: 100%;
		height: auto;
	}
	.ganen>ul>li{
		width: 177px;
		height: 264px;
		margin-top: 10px;
		margin-left: 10px;
		background-color: rgba(255, 255, 255, 1);
		float: left;
	}
	.ganen>ul>li>img{
		width: 177px;
		height: 131px;
		left: -23px;
	}
	.ganen>ul>li>p:nth-of-type(1){
		width: 103px;
		height: 28px;
		color: rgba(80, 80, 80, 1);
		font-size: 16px;
		line-height: 150%;
		margin: 0 auto;
		font-weight: bold;
	}
	.ganen>ul>li>p:nth-of-type(2){
		width: 162px;
		height: 18px;
		color: rgba(80, 80, 80, 1);
		font-size: 12px;
		margin: 5px auto;
	}
	.ganen>ul>li>p:nth-of-type(3){
		color: rgba(245, 87, 78, 1);
		font-size: 16px;
		margin: 0 auto;
		font-weight: bold;
	}
	.ganen>ul>li>button{
		width: 96px;
		height: 29px;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(245, 87, 78, 1);
		font-size: 13px;
		line-height: 150%;
		margin: 0 auto;
		margin-top: 10px;
	}
	.ganen>div{
		width: 361px;
		height: 393px;
		background-color: rgba(255, 255, 255, 1);
		float: left;
		margin-top: 5px;
		margin-left: 10px;
		position: relative;
	}
	.ganen>div>img{
		width: 361px;
		height: 268px;
	}
	.ganen>div>div:nth-of-type(1){
		color: rgba(80, 80, 80, 1);
		font-size: 18px;
		font-weight: bold;
		margin-top: 20px;
		float: left;
	}
	.ganen>div>div:nth-of-type(2){
		color: rgba(245, 87, 78, 1);
		font-size: 24px;
		float: right;
	}
	.ganen>div button{
		width: 96px;
		height: 29px;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(245, 87, 78, 1);
		font-size: 13px;
		line-height: 150%;
		margin: 0 auto;
		margin-top: 10px;
	}
	.ganen>div>p{
		width: 56px;
		height: 56px;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(245, 87, 78, 1);
		border-radius: 50%;
		font-size: 14px;
		text-align: center;
		line-height: 56px;
		font-weight: bold;
		position: absolute;
		bottom: 120px;
		right: 0;
	}
	.foot{
		width: 361px;
		height: 310px
	}
	.foot>img{
		width: 100%;
		height: 310px;
	}
</style>