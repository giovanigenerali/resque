$(document).ready(function(){
	var size = 13, sizeMin = 10, sizeMax = 30, objIncludeAfter = ".header", objChangeFontSize = "#main";
	var html = "<div id=\"fontsize\"><span id=\"small\"><a href=\"javascript:;\">A-</a></span><span id=\"large\"><a href=\"javascript:;\">A+</a></span></div>";
	$(objIncludeAfter).after(html);
	$("#large").click(function(){if (size < sizeMax){ size = size + 1; $(objChangeFontSize).css("font-size", size +"px"); } });
	$("#small").click(function(){if (size > sizeMin){ size = size - 1; $(objChangeFontSize).css("font-size", size +"px"); } });
});