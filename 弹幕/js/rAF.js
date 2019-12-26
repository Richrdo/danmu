// 存放已创建的弹幕
var danmuPool = [];
var dm_window = document.getElementsByClassName("dm_window")[0];
var video = document.getElementsByTagName("video")[0];
// var font_instance = {
// 	color: "white",
// 	font_size: "32px",
// 	type: "scroll"
// }

class Danmu {
	constructor(content, font) {
		// 创建弹幕对象
		this.content = content;
		this.type = font.type;
		this.elem = (function(content, font) {
			var danmuNode = document.createElement("span");
			var danmuTextNode = document.createTextNode(content);
			danmuNode.appendChild(danmuTextNode);
			danmuNode.className = "danmu";
			danmuNode.style.color = font.font_color;
			danmuNode.style["font-size"] = font.font_size;
			return danmuNode;
		})(this.content, font);
		this.time = video.currentTime;
		this.canMove = true;
		this.changeMove = function(status){
			this.canMove = status;
			console.log(this.canMove);
		}
	}
}

var send = function (){
	text = document.getElementsByTagName("input")[0].value;
	danmu = new Danmu(text, font);
	dm_window.appendChild(danmu.elem);
	// 初始位置
	channel_num = Math.round(Math.random() * 10);
	danmu.elem.style.top = dm_window.offsetHeight / 10 * channel_num + "px";
	danmu.elem.style.left = dm_window.offsetWidth + "px";
	danmu.elem.addEventListener("mouseup", danmu.changeMove(false));
	danmu.elem.addEventListener("mouseout", danmu.changeMove(true));
	danmuPool.push(danmu);
	console.log(danmuPool);
	document.getElementsByTagName("input")[0].value = "";
}

var clean = function() {
	danmuPool = [];
}

var moveObj = function (){
	var progress;
	// console.log(danmu);
	(function animeLoop(){
		for(i in danmuPool) {
			danmu = danmuPool[i];
			if(video.currentTime - danmu.time > 0) {
				danmu.elem.hidden = "";
				if(danmu.canMove){
					danmu.elem.style.left = dm_window.offsetWidth - (video.currentTime - danmu.time) * dm_window.offsetWidth / 11 + "px";
				}
			}else{
				danmu.elem.hidden = "hidden";
			}
		}
		progress = requestAnimationFrame(animeLoop);
	})();
}


// 解决浏览器不兼容的问题
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame || 
			window.oRequestAnimationFrame || 
			window.msRequestAnimationFrame || 
			function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element){
			  window.setTimeout(callback, 1000 / 60);
			};
})();


moveObj();