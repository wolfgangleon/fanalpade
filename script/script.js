$(document).ready(function(){
	
	var screenHeight = $(window).height();

	$('#contactLink').on('click', function() {
		$('html, body').animate({ 
	      scrollTop: $('#contact').offset().top 
	  	}, 1000);
	});

	$('#infoLink').on('click', function() {
		$('html, body').animate({ 
	      scrollTop: $('#info').offset().top 
	  	}, 1000);
	})

	//$('#carouselHeader .thumbnail').height( screenHeight ) //Set screen size
});