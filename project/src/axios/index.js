import axios from 'axios';
// import Vue from 'vue';
//创建axios实例
var instance = axios.create({
	baseURL:'http://localhost:3000'
})
//请求封装
var http={
	get(url,config={}){
		return new Promise(function(resolve,reject){
			instance.get(url,{params:config}).then((data)=>{
				resolve(data)
			}).catch(err=>{
				reject(err)
			})
		})
	},
	post(url,config={}){
		return new Promise(function(resolve,reject){
			instance.get(url,config).then((data)=>{
				resolve(data)
			}).catch((err)=>{
				reject(err)
			})
		})
	}
}
//请求拦截器
instance.interceptors.request.use(function(config){
	if(window.localStorage.getItem('token')){
			// 设置请求头携带token token必须设置给Authorization
			config.headers.Authorization = 'Bearer '+window.localStorage.getItem('token')
		}
	return config},
function(err){
	return err})

export default http;