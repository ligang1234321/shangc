var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs')
var cors = require('cors')
var {key} = require('./cofig/store')
var expressJwt = require('express-jwt')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var shopRouter = require('./routes/shop');
var shopcarRouter = require('./routes/shopcar');
var ordersRouter = require('./routes/orders');
var houtaiRouter = require('./routes/houtai');

var app = express();

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express)
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 解token
app.use(expressJwt.expressjwt({
	secret:key,
	algorithms:['HS256'],
}).unless({
	path:['/login','/register','/shop','/shop/shops','/shop/jiaru',
	'/shopcar','/shopcar/delete1','/orders',
	'/orders/jia','/shop/search','/houtai','/houtai/users1/delete1',
	'/houtai/shops','/houtai/shops/add1','/houtai/shops/delete2',
	'/houtai/shops/shopleis','/houtai/shops/xiugai','/houtai/orders',
	'/images','/houtai/orders/xiugai','/orders/xiugai']
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/shop', shopRouter);
app.use('/shopcar', shopcarRouter);
app.use('/orders', ordersRouter);
app.use('/houtai', houtaiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
 if (err.name === 'UnauthorizedError') { // 未经授权的 错误
 		// res.status(401).send('invalid token...');  //无效的token
 		res.send('token验证失败');
 	} else {
 		// set locals, only providing error in development
 		res.locals.message = err.message;
 		res.locals.error = req.app.get('env') === 'development' ? err : {};
 
 		// render the error page
 		res.status(err.status || 500);
 		res.render('error');
 	}

});

module.exports = app;
