var indexTpl = require("../tpl/index.string");

//定义一个视图

SPA.defineView('index',{
	html:indexTpl,
	//添加插件
	plugins:['delegated'],
	//绑定事件
	bindActions:{
		'exit':function(){
			this.hide();
		}
	}
})
