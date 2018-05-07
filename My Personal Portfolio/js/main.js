$(document).ready(function()
{
	//Move to the parts
	$('.act1').click(function()
	{
		$('html,body').animate({
			scrollTop:$('.about').offset().top
		},1000); 
	});

	$('.act2').click(function()
	{
		
		$('html,body').animate({
			scrollTop:$('.portfolio').offset().top
		},1000); 
	});
	$('.act3').click(function()
	{
		$('html,body').animate({
			scrollTop:$('.contact').offset().top
		},1000); 
	});
	//Make navbar transparent
	$(window).scroll(function()
	{
    if($(window).scrollTop()>100)
    {
    	$(".navbar").css({"background-color" : "rgba(114,40,114,.6)"});
	}
    else
    $(".navbar").css({"background-color" : "rgba(114,40,114,1)"});
    });

    
   

    	//Top Button
       $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.scroll').fadeIn(); 
        } else { 
            $('.scroll').fadeOut(); 
        } 
    }); 
    $('.scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    });

    //Show hidden Portfolios
	$('.show-more').click(function()
	{
			$('.h1').fadeIn(2000);
	});
});
