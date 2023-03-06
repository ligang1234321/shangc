<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
		<router-link to="/">首页</router-link>
		<router-link to="/shop">商品</router-link>
		<!-- <router-link to="/discover">福利</router-link> -->
		<router-link to="/shopcar">购物车</router-link>
		<router-link to="/my">我的</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
	text-decoration: none;
}
nav {
	width:100%;
	height:50px;
	background:sandybrown;
	position:fixed;
	left: 0;
	bottom:0;
	z-index: 222;
	line-height: 50px;
	display: flex;
	justify-content: space-around;
	a {
		font-size: 20px;
		font-weight: bold;
		color: aliceblue;

		&.router-link-exact-active {
			color: red;
		}
	}
	/* router-link{
		color: white;
	} */
}
</style>
