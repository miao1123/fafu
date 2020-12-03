var ImgIndex=1;//此时在我轮播屏里面的图片位置
var imgZhuanTai =false;
// 挡墙轮播屏是否在轮播
imgLen=$(".ul2>li").length;
imgWidth=window.innerWidth;
//获取图片的
function preBtn(){
	//判断状态锁，决定是否执行下面的代码
	if(imgZhuanTai){
		return;//结束函数，返回空
	}
	
	//从轮播屏往左边移动图片
	imgZhuanTai =true;//点击按钮，则此时轮播进入轮播状态
	
	$(".ul2>li:nth-child("+ImgIndex+")").animate({
		left : "-"+imgWidth+"px"
	},1000,function(){
		imgZhuanTai =false;
	//动画执行玩，把状态改为未轮播状态
	});
	
	if(ImgIndex==imgLen){
		//让要移动的后续图片先移到指定位置
		$(".ul2>li:nth-child(1)").css({
			left : imgWidth+"px"
		});
		//才开时做移动效果
		$(".ul2>li:nth-child(1)").animate({
			left : "0px"
		},1000,function(){
			ImgIndex=1;//表示当前轮播屏最新的图片位置
		});
	}else{
	//让要移动的后续图片先移到指定位置
		$(".ul2>li:nth-child("+(ImgIndex+1)+")").css({
			left : imgWidth+"px"
		});
	//才开时做移动效果
		$(".ul2>li:nth-child("+(ImgIndex+1)+")").animate({
			left : "0px"
		},1000,function(){
			ImgIndex++;//表示当前轮播屏最新的图片位置
		});
	}
}



function nextBtn(){
	//判断状态锁，决定是否执行下面的代码
	if(imgZhuanTai){
		return;//结束函数，返回空
	}
	
	//从轮播屏往左边移动图片
	imgZhuanTai =true;//点击按钮，则此时轮播进入轮播状态
	
	$(".ul2>li:nth-child("+ImgIndex+")").animate({
		left : imgWidth+"px"
	},1000,function(){
		imgZhuanTai =false;
	//动画执行玩，把状态改为未轮播状态
	});
	
	if(ImgIndex==1){
		//让要移动的后续图片先移到指定位置
		$(".ul2>li:nth-child(4)").css({
			left : "-"+imgWidth+"px"
		});
		//才开时做移动效果
		$(".ul2>li:nth-child(4)").animate({
			left : "0px"
		},1000,function(){
			ImgIndex=4;//表示当前轮播屏最新的图片位置
		});
	}else{
	//让要移动的后续图片先移到指定位置
		$(".ul2>li:nth-child("+(ImgIndex-1)+")").css({
			left : "-"+imgWidth+"px"
		});
	//才开时做移动效果
		$(".ul2>li:nth-child("+(ImgIndex-1)+")").animate({
			left : "0px"
		},1000,function(){
			ImgIndex--;//表示当前轮播屏最新的图片位置
		});
	}
}
	