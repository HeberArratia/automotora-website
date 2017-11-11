$(document).ready(function(){
	$('.carousel').flickity({
		  // options
		autoPlay: 3000
	});

	$(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
    /*

	if ($(window).width() > 960) {
	   $('#menu').css({'display' : 'block'});
	}
	else {
	   //alert('More than 960');
	}
    
    $(window).scroll(function() {
	    if($(window).scrollTop() > 400){
	    	$('#menu').css({'opacity' : '1'});
	    } else {
	    	$('#menu').css({'opacity' : '0'});
	    }
    });

   $("#modal").iziModal({
	  headerColor: '#FF5766', //ヘッダー部分の色
	  width: '50%', //横幅
	  overlayColor: 'rgba(0, 0, 0, 0.5)', //モーダルの背景色
	  transitionIn: 'fadeInUp', //表示される時のアニメーション
	  transitionOut: 'fadeOutDown' //非表示になる時のアニメーション
	});

   $(document).on('click', '.trigger', function (event) {
    	event.preventDefault();
    	$('#modal').iziModal('open');
	});*/
});
