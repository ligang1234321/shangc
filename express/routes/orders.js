var express = require('express');
var router = express.Router();
var sql = require('../cofig/mysql.js')
var jwt = require('jsonwebtoken')
/* GET home page. */

router.get('/', function(req, res) {
	//判断是否有订单
	sql.query('select * from orders',function(err,data1){
		if(data1.length>0){
			var {key,outtime} = require('../cofig/store')
			let {name}=req.query
			
			let m=0
			for(var i=0;i<data1.length;i++){
				m++
				if(data1[i].name==name){
					m--
					i=data1.length
					sql.query('select * from orders,shop,users where users.name=? and users.name=orders.name and shop.shopname=orders.shopname',[name],function(err,data){
						if(err) return console.error(err);
						console.log(data)
						let token = jwt.sign({phone:data[0].phone},key,{expiresIn:outtime})
						let obj={
							data:data,
							token:token
						}
						res.send(obj)
					})
				}
			}
			console.log('订单页面有这么多条数据：'+m)
			if(m==data1.length){
				console.log('还没有订单噢')
				res.send('还没有订单噢')
			}
		}else{
			console.log('还没有订单噢')
			res.send('还没有订单噢')
		}
	})
	
});

router.get('/jia', function(req, res) {
	let obj=req.query
	console.log(obj)
    sql.query('insert into orders(id,name,shopname,time,states,allpic,num) value(null,?,?,?,?,?,?)',[obj.name,obj.shopname,obj.time,obj.states,obj.allpic,obj.num],function(err,data){
  		if(err) return console.error(err);
		console.log(data)
		res.send('加入成功')
  	})
});

router.get('/xiugai', function(req, res) {
	let obj=req.query
    sql.query('update orders set states=? where shopname=? and name=? and time=? and allpic=? and num=?',[obj.states,obj.shopname,obj.name,obj.time,obj.allpic,obj.num],function(err,data){
  		if(err) return console.error(err);
		console.log(data)
		res.send('加入成功')
  	})
});


module.exports = router;
