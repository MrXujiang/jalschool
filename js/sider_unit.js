$(document).ready(function(e){
	
	/*------侧边悬浮盒效果------*/
	var $sider_box = $('.sider-box'),
	    $app_box = $('.app-download'),
	    $weibo_box = $('.weibo'),
	    $wechat = $('.wechat'),
	    $back_top = $('.back-top');
	  //alert($('.sider-box:first > div').length);
	$('.sider-box:first > div:not(:last)').each(function(){
		$(this).hover(function(){
			$(this).css({
				"background-color" : "rgba(0,0,0,1)",
				"color" : "#fff" 
			});
			$(this).find(':last-child').fadeIn(480);
		}, function(){
			$(this).css({
				"background-color" : "rgba(0,0,0,.8)",
				"color" : "#888" 
			});
			$(this).find(':last-child').fadeOut(60);
		})
    })
	
	//实现平滑滚动到顶部
	$back_top.click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
	
})
