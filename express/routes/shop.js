var express = require('express');
var router = express.Router();
var sql = require('../cofig/mysql.js')

/* GET home page. */

router.get('/', function(req, res) {

    sql.query('select shoplei from shops',function(err,data){
  		if(err) return console.error(err);
		res.send(data)
  	})
});
router.get('/shops', function(req, res) {

    sql.query('select shop.shopname,shop.pic,shop.src,shop.title,shop.shoplei from shop,shops where shop.shoplei=shops.shoplei',function(err,data){
  		if(err) return console.error(err);
		console.log(data)
		res.send(data)
  	})
});

//加入购物车
router.get('/jiaru', function(req, res) {
	var jia = req.query
	console.log(jia)
    sql.query('insert into shopcars(id,name,shopname,num,time) value(null,?,?,?,?)',[jia.name,jia.shopname,jia.num,jia.time],function(err,data){
  		if(err) return console.error(err);
		res.send('加入成功')
  	})
});

//搜索商品
router.get('/search', function(req, res) {
	var se = req.query
	console.log(se)
    sql.query('select * from shop where shopname like "%'+se.serch+'%"',function(err,data){
  		if(err) return console.error(err);
		console.log(data)
		res.send(data)
  	})
});

module.exports = router;
