var express = require('express');
var router = express.Router();
var sql = require('../cofig/mysql.js')
var http = require('http')
var fs = require('fs')
var upload=require('../cofig/upload')

/* GET home page. */
//显示用户信息
router.get('/', function(req, res) {
	
	sql.query('select * from users',function(err,data){
		if(err) return console.error(err);
	
		console.log(data)
		res.render('houtai',{data:JSON.stringify(data)});
	})
});
//删除用户
router.post('/users1/delete1', function(req, res) {
	//接收ajax传送过来的数据
	req.on('data',function(data1){	
		let {name,phone}=JSON.parse(data1.toString())
		sql.query('delete from users where name=? and phone=?',[name,phone],function(err,data){
			if(err) return console.error(err);
			
			res.send('删除成功')
		})
	})
});

//商品信息管理
router.post('/shops', function(req, res) {
	
	//把数据传回页面
	sql.query('select * from shop',function(err,data){
		if(err) return console.error(err);
		
		res.send(data)
	})
});

//添加，删除，修改商品
//添加商品
router.post('/shops/add1', function(req, res) {
	//接收保存图片
	upload(req,res).then(imgSrc=>{
		console.log(imgSrc)
		let {shopname,pic,shoplei,title}=req.body
		sql.query('insert into shop(id,shopname,pic,src,shoplei,title) value(null,?,?,?,?,?)',[shopname,pic,imgSrc,shoplei,title],function(err,data){
			if(err) return console.error(err);
			
			res.send('添加成功')
		})
	}).catch(err=>{
		console.log(err)
	})
	
});
//删除商品
router.post('/shops/delete2', function(req, res) {
	//接收ajax传送过来的数据
	req.on('data',function(data1){	
		let {shopname}=JSON.parse(data1.toString())
		sql.query('delete from shop where shopname=?',[shopname],function(err,data){
			if(err) return console.error(err);
			
			console.log(shopname)
			res.send('删除成功')
		})
	})
});
//找到商品种类
router.post('/shops/shopleis', function(req, res) {
	//把数据传回页面
	sql.query('select * from shops',function(err,data){
		if(err) return console.error(err);
		
		res.send(data)
	})
});
//修改商品
router.post('/shops/xiugai', function(req, res) {
	upload(req,res).then(imgSrc=>{
		// console.log(imgSrc)
		// console.log(req.body)
		let {shopname,pic,shoplei,title}=req.body
		sql.query('update shop set shoplei=?,pic=?,src=?,shoplei=?,title=? where shopname=?',[shopname,pic,imgSrc,shoplei,title,shopname],function(err,data){
			if(err) return console.error(err);
			
			res.send('修改成功')
		})
	}).catch(err=>{
		console.log(err)
	})
});
//订单信息管理，搜索与修改订单状态
router.post ('/orders', function(req, res) {
	//把数据传回页面
	sql.query('select shop.pic,shop.src,orders.* from orders,shop where shop.shopname=orders.shopname',function(err,data){
		if(err) return console.error(err);
		
		res.send(data)
	})
});
//修改订单状态
router.post ('/orders/xiugai', function(req, res) {
	//接收ajax传送过来的数据
	req.on('data',function(data1){	
		let {states,time}=JSON.parse(data1.toString())
		sql.query('update orders set states=? where time=?',[states,time],function(err,data){
			if(err) return console.error(err);
			
			res.send('修改成功')
		})
	})
});

module.exports = router;