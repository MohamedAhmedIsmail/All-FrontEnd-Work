$(document).ready(function()
{
		$('.carousel').carousel(
	{
		interval:3000
	});

	//Show Color Option Div When Click On The Gear
	$(".gear-check").click(function()
	{
		$('.color-option').fadeToggle();
	});
	//Change The Color On Click
	var colorLi=$(".color-option ul li");
	colorLi
		.eq(0).css("backgroundColor","#E41B17").end()
		.eq(1).css("backgroundColor","#E426D5").end()
		.eq(2).css("backgroundColor","#009AFF").end()
		.eq(3).css("backgroundColor","#FFD500");
	colorLi.click(function()
	{
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));
	});
	//Cashing the scroll top element
	var ScrollButton=$("#scroll-top");
	$(window).scroll(function()
	{
		if($(this).scrollTop()>=700)
		{
			ScrollButton.show();
		}
		else
		{
			ScrollButton.hide();
		}
		//Click On Button To Scroll
		ScrollButton.click(function()
		{
			$("html,body").animate({ scrollTop: 0 }, 600);
			return false;
		});
	});

});

// Loading Screen
$(window).load(function()
{
	// Loading Elements
	$(".loading-overlay .spinner").fadeOut(3000,function()
	{
		$(this).parent().fadeOut(3000,function()
			{
				// show the scroll
				$("body").css("overflow","auto");
				$(this).remove();
			});
	});
});
$(function()
{
$('html').niceScroll();

});