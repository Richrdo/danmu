let danmuPool = [];
let dm_window = document.getElementsByClassName("dm_window")[0];
// 存放已创建的弹幕
// function Danmu(content, color) {
// 	// 创建弹幕对象
// 	this.content = content;
// 	this.color = color;
// }

let send = function (){
	text = document.getElementsByTagName("input")[0].value;
	// danmu = new Danmu(text, "red");
	node = dm_window;
	danmuNode = document.createElement("p");
	danmuNode.innerText = text;
	moveObj(danmuNode);
	document.getElementsByTagName("input")[0].value = "";
}

var clean = function() {
	let node = document.getElementsByClassName("dm_window")[0];
	while(node.firstChild) {
		node.removeChild(node.firstChild);
	}
}

var topMin = dm_window.offsetTop;
var topMax = dm_window.offsetHeight;
var _top = topMin;

var moveObj = function (obj){
	var _left = dm_window.offsetWidth - obj.offsetWidth;
	_top += 50;
	// obj.style.display = "inline-block";
	obj.style.left = _left + "px";
	obj.style.top = _top + "px";
	obj.style["font-size"] = "30px";
	obj.style.color = getRandomColor();
	var time = 7000 + 1000 * Math.random();
	obj.animate([
		{transform: 'translateX('+_left+'px)'},
		{transform: 'translateX(-20px)'}
	], time, function(){
		obj.remove();
	});
	dm_window.appendChild(danmuNode);
	setTimeout(
		function(){
		obj.remove();
	},time+1000);
}

var getRandomColor = function() {
	return '#' + (function(h) {
		return new Array(7 - h.length).join("0") + h
	})((Math.random() * 0x1000000 << 0).toString(16))
}

