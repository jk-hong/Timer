function settime () {
	var rettime=0;
	if(rettime=prompt("要设置的定时时间'单位为ms'：","0")){
//					alert(typeof(rettime));查看rettime的类型	
	setTimeout("winclos()",parseInt(rettime));
	}
}
function winclos () {
	window.close();
	window.open("","_self").close();	
}
