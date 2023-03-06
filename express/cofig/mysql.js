var mysql = require('mysql');
// 创建mysql的连接
var connection = mysql.createConnection({
	// 主机名
	host: 'localhost',
	// 用户名
	user: 'root',
	// 密码
	password: '123456',
	// 操作的数据库名
	database: 'users'
});
// 进行连接
connection.connect();

module.exports = connection