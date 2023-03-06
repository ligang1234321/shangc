var express = require('express');
var router = express.Router();
var sql = require('../cofig/mysql.js')
var jwt = require('jsonwebtoken')
/* GET home page. */

router.get('/', function(req, res) {
	var obj = req.query

	var {key,outtime} = require('../cofig/store')
	
    sql.query('select * from users where name=? and pass=?',[obj.name,obj.pass],function(err,data){
  		if(err) return console.error(err);
		
		let token = jwt.sign({phone:data[0].phone},key,{expiresIn:outtime})
		obj.token=token
		obj.phone=data[0].phone
		console.log(obj.phone,data.phone)
		res.send(obj)
  	})
});

module.exports = router;
