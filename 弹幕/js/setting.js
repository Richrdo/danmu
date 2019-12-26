// JavaScript Document

function changeDanmuArea(){
    var account=document.getElementById("dm-area").value;
    document.getElementById("show-num").innerHTML=account+"%屏";
    if (account==25){
        //TODO 展示1/4的弹幕
    } else if (account==50){
        //TODO 展示2/4的弹幕
    } else if(account=100){
        //TODO 展示3/4的弹幕
    }else{
        // TODO 全屏展示弹幕
    }
}

function changeDanmuSpeed(){
    var speed=document.getElementById("dm-speed").value;
//    TODO 设置弹幕速度
}

function changeDanmuFontClarity() {
    var clarity=document.getElementById("dm-font-clarity").value;
    var danmuFont=document.getElementById("")      //获取弹幕弹道组件
    danmuFont.style.filter='alpha(opacity:'+clearity+')';   //设置IE透明度
    danmuFont.style.opacity=clarity/100;    //设置其他浏览器
}