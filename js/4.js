var iIndex=1;//此时在我轮播屏里面的图片位置
var imgZhuanTai =false;
// 挡墙轮播屏是否在轮播
// imgLen=$(".ul1>img").length;
//获取图片的shuliang
function lBtn(){
	//判断状态锁，决定是否执行下面的代码
	if(imgZhuanTai){
		return;//结束函数，返回空
	}
	
	//从轮播屏往左边移动图片
	imgZhuanTai =true;//点击按钮，则此时轮播进入轮播状态
	
	$(".focus-item>img:nth-child("+iIndex+")").animate({
		left : "-345px"
	},1000,lBtnTwo());
}

function lBtnTwo(){
	
	if(iIndex==3){
		//让要移动的后续图片先移到指定位置
		$(".focus-item>img:nth-child(1)").css({
			left : "345px"
		});
		//才开时做移动效果
		$(".focus-item>img:nth-child(1)").animate({
			left : "0px"
		},1000,function(){
			iIndex=1;//表示当前轮播屏最新的图片位置
			imgZhuanTai=false;
		});
		setTimeout(function(){
			qieHuanA(1);
		},500);
	}else{
	//让要移动的后续图片先移到指定位置
		$(".focus-item>img:nth-child("+(iIndex+1)+")").css({
			left : "345px"
		});
	//才开时做移动效果
		$(".focus-item>img:nth-child("+(iIndex+1)+")").animate({
			left : "0px"
		},1000,function(){
			iIndex++;//表示当前轮播屏最新的图片位置
			imgZhuanTai=false;
		});
		setTimeout(function(){
			qieHuanA(iIndex+1);
		},500);
	}
}




function rBtn(){
	//判断状态锁，决定是否执行下面的代码
	if(imgZhuanTai){
		return;//结束函数，返回空
	}
	
	//从轮播屏往左边移动图片
	imgZhuanTai =true;//点击按钮，则此时轮播进入轮播状态
	
	$(".focus-item>img:nth-child("+iIndex+")").animate({
		left : "345px"
	},1000,rBtnTwo());
}

function rBtnTwo(){
	
	if(iIndex==1){
		//让要移动的后续图片先移到指定位置
		$(".focus-item>img:nth-child(3)").css({
			left : "-345px"
		});
		//才开时做移动效果
		$(".focus-item>img:nth-child(3)").animate({
			left : "0px"
		},1000,function(){
			iIndex=3;//表示当前轮播屏最新的图片位置
			imgZhuanTai=false;
		});
		setTimeout(function(){
			qieHuanA(3);
		},500);
	}else{
	//让要移动的后续图片先移到指定位置
		$(".focus-item>img:nth-child("+(iIndex-1)+")").css({
			left : "-345px"
		});
	//才开时做移动效果
		$(".focus-item>img:nth-child("+(iIndex-1)+")").animate({
			left : "0px"
		},1000,function(){
			iIndex--;//表示当前轮播屏最新的图片位置
			imgZhuanTai=false;
		});
		setTimeout(function(){
			qieHuanA(iIndex-1);
		},500);
	}
}

function qieHuanA(indexA){
	//对应位置的a标签也要出现
	$(".focus-title>a:nth-child("+indexA+")").css("display","block");
	//其他a标签隐藏起来
	$(".focus-title>a:nth-child("+indexA+")").siblings().css("display","none");
	
}