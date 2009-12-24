$(document).ready(function(){
	var size = 13, sizeMin = 10, sizeMax = 30, eInc = "#main", eChangeFontSize = "#main", setCookie = true, cookieExpiresDays = 365;
	var html = "<div id=\"fontsize\"><span id=\"small\"><a href=\"javascript:;\">A-</a></span><span id=\"large\"><a href=\"javascript:;\">A+</a></span></div>";
	$(eInc).before(html);
	if (setCookie) { 
		if ($.cookie("resque_fontsize")){
			size = $.cookie("resque_fontsize");
			$(eChangeFontSize).css("font-size", size +"px");
		}
		$("#large").click(function(){
			if (size < sizeMax){
				size = size + 1;
				$(eChangeFontSize).css("font-size", size +"px");
				$.cookie("resque_fontsize", size, { expires:cookieExpiresDays });
			}
		});
		$("#small").click(function(){
			if (size > sizeMin){
				size = size - 1;
				$(eChangeFontSize).css("font-size", size +"px");
				$.cookie("resque_fontsize", size,{ expires:cookieExpiresDays });
			}
		});
	}
});