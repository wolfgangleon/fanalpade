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

	//Set google maps
	var mapOptions = {
	    center: new google.maps.LatLng(38.4694497,-98.6489868),
	    zoom: 5,
	    streetViewControl: false,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    zoomControlOptions: {
	      style: google.maps.ZoomControlStyle.SMALL
	    }
	};

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	//$('#carouselHeader .thumbnail').height( screenHeight ) //Set screen size
});