$(function(){	
	/* nav #gnv */
	$("#lnb").on("mouseover focusin", function(){
		$("#scroll_nav").stop().animate({height:"160px"},500);
	});
	$("nav").on("mouseleave focusout", function(){
		$("#scroll_nav").stop().animate({height:"0px"},500);
	});

	var activeItemSub3= $('.smbmt3 td.on').find('.sm_icon img');
	if(activeItemSub3.size() > 0) {
		activeItemSub3.attr('src', activeItemSub3.attr('src').replace('_off', '_on'));	
	}

	$('.smbmt3 td').mouseenter(function(){
		var onClass = $(this).hasClass('on');
		if(onClass != true){
			$(this).css('background-color','#89d0ee').children('a').css('color','#fff');
			var s_change = $(this).find('img').attr('src');
			$(this).find('img').attr('src', s_change.replace('_off','_on'));
		}
	});
	$('.smbmt3 td').mouseleave(function(){
		var onClass = $(this).hasClass('on');
		if(onClass != true){
		$(this).css('background-color','#fff').children('a').css('color','#464646');
		var s_change = $(this).find('img').attr('src');
		$(this).find('img').attr('src', s_change.replace('_on','_off'));
		}
	});
	$(window).scroll(function(){	
		/* header */
		var position = $(window).scrollTop();
		if(position < 100){
			$("#header .header_box").css({"position":"relative", "top":"0px", "border-bottom":"0"});
		}
		else{
			$("#header .header_box").css({"position":"fixed", "top":"0px", "border-bottom":"1px solid #eee", "box-shadow":"0 0 30px 0 rgba(0,0,0,0.05)"});
		}
	});

	$('#content-more-button').on('click', function(event) {
		event.preventDefault();
		$(this).hide();
		$('#content-more-view').fadeIn();
	});
	
});