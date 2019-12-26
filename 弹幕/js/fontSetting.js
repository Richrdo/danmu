// //fontSetting
// 	var font = {
// 		font_color: "white",
// 		font_size: "32px",
// 		font_site:"roll"
// 	}
	//字体大小
	function changeFontSize(size){
		var fontSize='32px';
		var sizeButton=document.getElementsByClassName("sizeButton");
		if(size=='small'){
			sizeButton[0].style.background='#00a1d6';
			sizeButton[1].style.background='#fff';
		}else{
			sizeButton[0].style.background='#fff';
			sizeButton[1].style.background='#00a1d6';
			fontSize='38px';
		}
		font.font_size=fontSize;
		console.log(font);
	}
	//弹幕位置
	function changeFontSite(site){
		var fontSite='roll';
		var siteButton=document.getElementsByClassName("siteButton");
		if(site=='roll'){
			siteButton[0].style.background='#00a1d6';
			siteButton[1].style.background='#fff';
			siteButton[2].style.background='#fff';
		}else if(site=='top'){
			siteButton[0].style.background='#fff';
			siteButton[1].style.background='#00a1d6';
			siteButton[2].style.background='#fff';
			fontSite='top';
		}else{
			siteButton[0].style.background='#fff';
			siteButton[1].style.background='#fff';
			siteButton[2].style.background='#00a1d6';
			fontSite='bottom';
		}
		console.log(font);
	}
	//字体颜色
	function changeFontColor(color){
		if(color=='randomColor'){
			var randomColor0=['#0080ff','#ffff00','#00ffff','#ff00ff','#00ff00','#ff0080','#0000ff','#8000ff'];
			color=randomColor0[Math.floor(Math.random()*(randomColor0.length))];
			document.getElementById("randomColor").style.color=color;
		}
		font.font_color = color;
		console.log(font);
	}