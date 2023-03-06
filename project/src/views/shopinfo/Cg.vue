<template>
	<div class="Cg">
		<h1><span>√</span>付款成功</h1>
	</div>
</template>

<script>
	export default{
		name:'Cg',
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	li{list-style: none;}
	a{text-decoration: none;}
	.Cg{
		display: flex;
		justify-content: space-evenly;
	}
	h1{
		margin: 30% auto;
		
	}
	span{
		display: block;
		float: left;
		width: 40px;
		height: 40px;
		background-color: green;
		color: aliceblue;
		border-radius: 50%;
	}
</style>