/**
  项目JS主入口
  以依赖layui的layer和form模块为例
**/
const Api = require('./config/api.js')
const request = require('request');

layui.define(['layer', 'laytpl'], function(exports){
  const layer = layui.layer
  ,laytpl = layui.laytpl;
  
  let data = {
	  "gNav": [{
	  	"title":"首页"
	  }, {
	  	"title":"精华"
	  }, {
	  	"title":"趣味"
	  }, {
	  	"title":"神马"
	  }, {
	  	"title":"我的"
	  }, {
	  	"title":"设置"
	  }]
	};
	let getTpl = navTpl.innerHTML
	,view = document.getElementById('g_nav');
	laytpl(getTpl).render(data, function(html){
	  view.innerHTML = html;
	});

	
	request(`${Api.host}${Api.home_schools}`, function(error, response, body) {
	  // console.log('error:', error); // Print the error if one occurred
	  // console.log('statusCode:', JSON.stringify(response)); // Print the response status code if a response was received
	  console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.

	  let data = {
		  "gHomeSchools": JSON.parse(body).data
		};
		console.log(data)
		let getTpl = home_schoolsTpl.innerHTML
		,view = document.getElementById('g_home_schools');
		laytpl(getTpl).render(data, function(html){
		  view.innerHTML = html;
		});
	});
  // layer.msg('Hello World');

  
  exports('index', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});    