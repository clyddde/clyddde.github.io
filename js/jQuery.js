//SITEBAR
$(document).ready(function(){
	$('.menu').click(function(){
		$('.sitebar').show(300);
		$('.menu').hide(300);
		$('.closeMenu').show(300);
	});
});
$(document).ready(function(){
	$('.closeMenu').click(function(){
		$('.sitebar').hide(300);
		$('.menu').show(300);
		$('.closeMenu').hide(300);
	});
});
$(document).ready(function(){
    $('body').keydown(function(eventObject=27){
        $('.sitebar').hide(300);
		$('.menu').show(300);
		$('.closeMenu').hide(300);
    });
});

//Telegram
$(document).ready(function(){
	$('.telega').click(function(){
		$('.modal_window_telegram').show(200);
	});
});

$(document).ready(function(){
    $('body').keydown(function(eventObject=27){
        $('.modal_window_telegram').hide(200);
    });
});

$(document).ready(function(){
	$('.close_telegram').click(function(){
		$('.modal_window_telegram').hide(200);
	});
});

//scroll
$(document).ready(function(){
    $('.backtotop').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });
});

//feedback
$(document).ready(function(){
    $('.button_1').click(function(){
        $('.first_review').show(300);
        $('.two_review').hide();
        $('.three_review').hide();
        $('.pic_avatar1').css('width', '110%');
        $('.pic_avatar1').css('height', '110%');
        $('.pic_avatar2').css('width', '100%');
        $('.pic_avatar2').css('height', '100%');
        $('.pic_avatar3').css('width', '100%');
        $('.pic_avatar3').css('height', '100%');
    });
});
$(document).ready(function(){
    $('.button_2').click(function(){
        $('.first_review').hide();
        $('.two_review').show(300);
        $('.three_review').hide();
        $('.pic_avatar2').css('width', '110%');
        $('.pic_avatar2').css('height', '110%');
        $('.pic_avatar1').css('width', '100%');
        $('.pic_avatar1').css('height', '100%');
        $('.pic_avatar3').css('width', '100%');
        $('.pic_avatar3').css('height', '100%');
    });
});
$(document).ready(function(){
    $('.button_3').click(function(){
        $('.first_review').hide();
        $('.two_review').hide();
        $('.three_review').show(300);
        $('.pic_avatar3').css('width', '110%');
        $('.pic_avatar3').css('height', '110%');
        $('.pic_avatar2').css('width', '100%');
        $('.pic_avatar2').css('height', '100%');
        $('.pic_avatar1').css('width', '100%');
        $('.pic_avatar1').css('height', '100%');
    });
});
