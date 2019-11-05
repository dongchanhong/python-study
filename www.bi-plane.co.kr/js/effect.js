$(function(){	
	/* nav #gnv */
	$("#lnb").on("mouseover focusin", function(){
		$("#scroll_nav").stop().animate({height:"160px"},500);
	});
	$("nav").on("mouseleave focusout", function(){
		$("#scroll_nav").stop().animate({height:"0px"},500);
	});


	$('.smbm_table td').mouseenter(function(){
		var onClass = $(this).hasClass('on');
		if(onClass != true){
			$(this).css('background-color','#89d0ee').children('a').css('color','#fff');

		}
	});
	$('.smbm_table td').mouseleave(function(){
		var onClass = $(this).hasClass('on');
		if(onClass != true){
		$(this).css('background-color','#fff').children('a').css('color','#464646');
		
		}
	});

//	var orgClass=$('.smbmt3 td').hasClass('on');
//	if(orgClass==true){
//		var on_change = $('.smbmt3 .on a .sm_icon').find('img').attr('src');
//		$('.smbmt3 .on a .sm_icon').find('img').attr('src', on_change.replace('_off','_on'));
//	}
//	else{
//		var on_change = $('.smbmt3 td a .sm_icon').find('img').attr('src');
//		$('.smbmt3 td a .sm_icon').find('img').attr('src', on_change.replace('_on','_off'));
//	}

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
	
});