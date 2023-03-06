var express = require('express');
var router = express.Router();
var sql = require('../cofig/mysql.js')
var jwt = require('jsonwebtoken')
/* GET home page. */

router.get('/', function(req, res) {
	
	//数据库是否有东西
	sql.query('select * from shopcars',function(err,data1){

		if(data1.length>0){
			let {name} = req.query
			
			let m=0
			for(var i=0;i<data1.length;i++){
				m++
				if(data1[i].name==name){
					m--
					i=data1.length-1
					var {key,outtime} = require('../cofig/store')
					
					sql.query('select users.name,shop.shopname,shop.pic,shop.src,shopcars.num,shopcars.time from users,shop,shopcars where users.name=? and shopcars.name=users.name and shopcars.shopname=shop.shopname',[name],function(err,data){
						if(err) return console.error(err);
						console.log(name)
						let token = jwt.sign({phone:data[0].phone},key,{expiresIn:outtime})
						let obj={
							data:data,
							token:token
						}
						console.log(obj)
						res.send(obj)
					})
				}
			}
			console.log('购物车有这么多条数据：'+m)
			console.log(m,data1.length)
			if(m==data1.length){
				console.log('购物车没有商品噢')
				res.send('购物车没有商品噢')
			}
		}else{
			console.log('购物车没有商品噢')
			res.send('购物车没有商品噢')
		}
	})
    
});

//删除购物车数据
router.get('/delete1', function(req, res) {
	var {time} = req.query
    sql.query('delete from shopcars where time=?',[time],function(err,data){
  		if(err) return console.error(err);
		res.send('删除成功')
  	})
});

module.exports = router;
