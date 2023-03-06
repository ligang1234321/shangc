var express = require('express');
var router = express.Router();
var sql = require('../cofig/mysql.js')
var jwt = require('jsonwebtoken')
const connection = require('../cofig/mysql.js');
/* GET home page. */

router.get('/', function(req, res) {
	// var {key,outtime} = require('../cofig/store')
	var {name,pass,phone} = req.query
	console.log(name,pass,phone)
    sql.query('insert into users(id,name,pass,phone,vip) value(null,?,?,?,1)',[name[0],pass[0],phone[0]],function(err,data){
  		if(err) return console.error(err);
		res.send('注册成功')
		// sql.end()
  	})
});


module.exports = router;
