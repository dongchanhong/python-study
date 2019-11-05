/**
 * @author KB IBOSS 2016 02 01
 * 초 간단 rhqh12@i-boss.co.kr  

1. margin값이 있으면 그만큼 전체 wrap의 width값을 뺌 (하나제외)
2. hover의 this 명은 무조건 class 
3. t_cont은 무조건 tab컨텐츠 hover와 동시에 none처리
4. tab은 무조건 ID

 */
(function ($) {
	'use strict';
    $.fn.kbstab = function (options) {
        var defaults = {
            tabname : ".kb_lst_tab",
            t_width : "1180",
            t_margin : "0",
            t_cont : ".tab_cont",
        	imgreplace : false,
        	imgon : '_on.jpg',
        	imgoff : '.jpg',
        	imgpart : null,
        	tabrun : true,
        	tab_div : true,
        	tabon : 'on',
        	on_tab : 'data-rel'
        };
        options = $.extend(defaults, options);
        return this.each(function () {
        	var self = $(options.tabname).children();
        	var tab_div = function()
        	{
            	if(options.t_margin>0)
        		{
            		var a = self.length-1;
            		if(options.t_width)
            		{
            			options.t_width = (options.t_width) - (options.t_margin * a);
            		}
            		self.css("margin-right", options.t_margin+"px");
            		self.last().css("margin-right", "0");
        		}
            	if(options.t_width)
            	{
	        		var t_width = options.t_width / self.length;
	        		self.css("width", t_width+"px");
            	}
        	}
    		var tabrun = function()
    		{
    			var tabremove = options.tabclass+options.tabon;
    	        $(this).parents().find(options.t_cont).hide();
    	        
    	        if(options.imgreplace) {
    	        	if(options.imgpart) var part = options.imgpart+" img"; else var part = "img";
    	        	var img_dom = $(this).parent().children("."+options.tabon);
    	        	if(img_dom.length>0) $(part, img_dom).attr("src",$(part, img_dom).attr("src").replace(options.imgon, options.imgoff));
    	        }
    	        $(this).parent().children().removeClass(options.tabon);     
    	        if(options.imgreplace) {
    	        	$(part, this).attr("src",$(part, this).attr("src").replace(options.imgoff, options.imgon));
    	        }
    	        $(this).addClass(options.tabon);
    	        var on_tab = $(this).attr(options.on_tab);
    	        $("#"+on_tab).show();
    	        return false;    			
    		}
    		if(options.tab_div) tab_div();
        	if(options.tabrun) self.bind('hover', tabrun);
        });
    };
})(jQuery);