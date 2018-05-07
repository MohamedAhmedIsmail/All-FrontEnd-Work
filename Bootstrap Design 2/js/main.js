$(function()
{
	'use strict';
	var navbar=$('.navbar');
	$(window).scroll(function(){
		
		if($(window).scrollTop()>=navbar.height())
		{
			navbar.addClass('scrolled');
		}
		else
		{
			navbar.removeClass('scrolled');
		}
	});
	// Deal with tabs section
	$('.tab-switched li').click(function()
	{
		//Add Selected Class To Active Link
		$(this).addClass('selected').siblings().removeClass('selected');
		//Hide All Divs
		$('.tabs-section .tabs-content > div').hide();	
		//Show Div Connected With This Div
		$('.' + $(this).data('class')).show();
	});
});
