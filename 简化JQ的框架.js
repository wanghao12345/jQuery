(function(){
	(21, 94) 定义了一些变量和函数  jQuery = function () {};
	
	(96, 283) 给JQ对象，添加一些方法和属性
	
	(285, 347) extend: JQ的继承方法
	
	(349, 817) jQuery.extend():扩展一些工具方法
	
	(877, 2856) Sizzle: 复杂选择器的实现
	
		$('div span p a')、$('#box .oMyClass').....
	
	(2880, 3042) Callbacks: 回掉对象（函数的统一管理）
	
		function fn1() { alert(1) }
		function fn2() { alert(2) }
		
		var cb = $.Callbacks();
		cb.add(fn1);
		cb.add(fn2);
		
		cb.fire();  // 1, 2
		cb.remove(fn2);
		cb.fire(); //1
	
	(3043, 3183) Deferred: 延迟对象（对异步的统一管理）
		//第一种：
		setTimeout(function(){
			alert(1);
		}, 1000);
		alert(2);
		//结果：先会弹出2，后弹出1
		
		//第二种：
		var dfd = $.Deferred();
		setTimeout(function(){
			alert(1);
			dfd.resolve();
		}, 1000);
		dfd.done(function(){
			alert(2);
		})
		//结果：先弹出1，后弹出2
	
	(3184, 3295) support: 功能检测
	
	(3308, 3652) data(): 数据缓存
	
		$('#div1').data(name: 'hello');
		$('#div1').data('name');//hello
	
	(3653, 3797) queue():队列管理
		/**
		 * 先使用queue()将如下运动存储起来，然后调用dequeue()方法依次移除
		 */
		$('#div1').animate({left: 100})
		$('#div1').animate({top: 100})
		$('#div1').animate({width: 300})
		//结果：依次执行
		
	(3803, 4299) attr() prop() val() addClass()...等：对元素属性的操作
	
	(4300, 5128) on() trigger()...等：事件操作的相关方法
		
	(5140, 6057) DOM操作: 添加 删除 获取 包装
		
	(6058, 6620) css(): 样式的操作

	(6621, 7854) 提交的数据和ajax()的操作：ajax() load() getJSON()
		
	(7855, 8584) animate(): 运动的方法	
		
		
		
		
		
	
	(8826) window.jQuery = window.$ = jQuery
})();
