define(function(require,exports,module){
	console.log('hello,world');
	alert("123456");
	var $=require('jquery');
	$("#hi_btn").on('click',function(){
		require.async('../come/hello.js',function(a){
			a.hi();
		});
	})
})