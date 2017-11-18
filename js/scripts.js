$(document).ready(function(){

	$('.carousel').flickity({
		  // options
		autoPlay: 3000
	});

	$(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    $('#navbar3').navScroll();

	$("#lightgallery").lightGallery(); 

	
    
});
