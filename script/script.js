$(document).ready(function(){
	
	var screenHeight = $(window).height();

	$('#contactLink').on('click', function() {
		$('html, body').animate({ 
	      scrollTop: $('#contact').offset().top 
	  	}, 1000);
	});

	//reviews section masonry --->
	var container = $('#reviews .container');
	// initialize
	container.masonry({
	  columnWidth: 200,
	  itemSelector: '.panel',
	  isFitWidth: true
	});

	//$('#carouselHeader .thumbnail').height( screenHeight ) //Set screen size
});