// import { font as font_instance } from "fontSetting.js";

// 存放已创建的弹幕
var danmuPool = [];
var dm_window = document.getElementsByClassName("dm_window")[0];
var video = document.getElementsByTagName("video")[0];
// mock数据
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
	console.log(font);
	danmu = new Danmu(text, font);
	dm_window.appendChild(danmu.elem);
	// 初始位置
	channel_num = Math.round(Math.random() * 10);
	danmu.elem.style.top = dm_window.offsetHeight / 10 * channel_num + "px";
	danmu.elem.style.left = dm_window.offsetWidth + "px";
	danmu.elem.addEventListener("mouseover", function(){
        this.style.animationPlayState = "paused";
        danmu.elem.style.WebkitAnimationPlayState = "paused"; // 针对 Chrome 和 Safari 的代码
    });
	danmu.elem.addEventListener("mouseout", function(){
        this.style.animationPlayState = "running";
        danmu.elem.style.WebkitAnimationPlayState = "running"; // 针对 Chrome 和 Safari 的代码
    });
    danmuPool.push(danmu);
    renderDanmu();
	console.log(danmuPool);
	document.getElementsByTagName("input")[0].value = "";
}


var renderDanmu = function() {
    currentTime = video.currentTime;
    for(index in danmuPool) {
        danmu = danmuPool[index];
        if(danmu.time >= currentTime) {
            danmu.elem.style['transition-delay'] = danmu.time - currentTime + "s";
            danmu.elem.className = "danmu animation stop";
            console.log("sdhasj");
        }
    }
}

// 播放暂停，则弹幕停止移动
video.addEventListener("pause", function() {
    for(index in danmuPool){
        danmu = danmuPool[index];
        danmu.elem.style.animationPlayState = "paused";
        danmu.elem.style.WebkitAnimationPlayState = "paused"; // 针对 Chrome 和 Safari 的代码
    }
})

// 播放中，保持弹幕的运动
video.addEventListener("play", function() {
    for(index in danmuPool){
        danmu = danmuPool[index];
        danmu.elem.style.animationPlayState = "running";
        danmu.elem.style.WebkitAnimationPlayState = "running"; // 针对 Chrome 和 Safari 的代码
    }
})

document.addEventListener("fullscreenchange", function() {
    renderDanmu();
})

renderDanmu();

