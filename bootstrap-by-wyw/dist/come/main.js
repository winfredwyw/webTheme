define(function(require){
	//var $=require('jquery');
	console.log('hello,world');
	alert("123456");
	//var $=
	//require('jquery');
	$("#hi_btn").on('click',function(){
		require.async('./hello.js',function(a){
			a.hi();
		});
	})
})

