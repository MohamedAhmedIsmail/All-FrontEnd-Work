function set_body_height() { // set body height = window height
    $('body').height($(window).height());
  }
$(document).ready(function(){
  $('.slider4').bxSlider({
    slideWidth: 300,
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    controls:true,
  });

   $(window).bind('resize', set_body_height);
    set_body_height();

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

    	//Check Testimonials
	var leftArrow=$('.test .fa-chevron-left'),
		rightArrow=$('.test .fa-chevron-right');
	function checkClients()
	{
		$('.client:first').hasClass('active')?leftArrow.fadeOut():leftArrow.fadeIn(2000);
		$('.client:last').hasClass('active')?rightArrow.fadeOut():rightArrow.fadeIn(2000);
	}
	checkClients();
	$('.test i').click(function()
	{
		if($(this).hasClass('fa-chevron-right'))
		{
			$('.test .active').fadeOut(100,function()
			{
				$(this).removeClass('active').next('.client').addClass('active').removeClass('hidden').fadeIn();
				checkClients();
			});
		}
		else
		{
			$('.test .active').fadeOut(100,function()
			{
				$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
				checkClients();
			});
		}
		
	});
});