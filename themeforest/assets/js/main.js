$(document).ready(function(){
    
    $(".top-area").sticky({topSpacing:0});
    
    $(function() {
        $('.main-menu ul li a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '75';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutCirc');
            event.preventDefault();
        });
    });
    
    $('body').scrollspy({
		target: '.navbar-collapse',
		offset: 95
	});
    
    //active mixitUp plugin
    $(".gallery_item").mixItUp();
    
});