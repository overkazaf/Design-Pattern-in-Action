var getSingletonInstance = function (fn){
	var obj;
	return function (){
		return obj || (obj = fn.apply(this, arguments))
	}
}

var createDiv = function (){
	var div = document..createElement('div');
	div.innerHTML = 'new';
	document.body.appendChild(div);
	return div;
};