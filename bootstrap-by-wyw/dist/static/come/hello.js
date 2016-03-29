define(function(require,exports,moudle){
	function hi(){
		require('./hello2.js').hi();
	}

	exports.hi=hi;
})