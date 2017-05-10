$(function() {
	
	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		$(".dropdown-phone").hide();
	});

	// $(".phone").hover(function() {		
	// 	// $(".dropdown-phone").slideToggle();
	// 	$(".dropdown-phone").toggle();
	// });

	$(".phone").click(function() {		
		// $(".dropdown-phone").slideToggle();
		$(".dropdown-phone").toggle();
		var main_menu = $(".main-menu").css('display'); // состояние меню (видно/не видно)
		
		if($(".wrap-button > a").hasClass('on') && (main_menu == 'block')) {
			$(".main-menu").slideToggle();
			$(".toggle-menu").removeClass("on");
		}
	});

	$(".dropdown-phone").click(function() {
		return false;
	});

	
	
	/*--- LavaLamp Menu ---*/

	
	var lavalamp = $('.main-menu > ul');
	var lavalamp_li = $('.main-menu > ul > li');

	lavalamp.prepend('<li class="lava-item"></li>');
	var padding_val = parseInt($('.menu-active').css('padding-left'));
	var prePosX = $('.menu-active').position().left + padding_val - 5;
	var preWidthX = $('.menu-active').width() + 10;

	lavalamp_li.not('li.lava-item').click(function() {
		$(this).siblings().removeClass('menu-active');
		$(this).addClass('menu-active');

		padding_val = parseInt($(this).css('padding-left'));
		prePosX = $(this).position().left + padding_val - 5;
		preWidthX = $(this).width() + 10;
	});

	$('li.lava-item').css({
		left: prePosX + 'px',
		width : preWidthX + 'px'		
	});

	lavalamp_li.not('li.lava-item').hover(function() {
		var padding_val = parseInt($(this).css('padding-left'));
		var posX = $(this).position().left + padding_val - 5;
		var widthX = $(this).width() + 10;
		$('li.lava-item').css({
			left: posX + 'px',
			width : widthX + 'px'			
		});
	}, function() {
		$('li.lava-item').css({
			left: prePosX + 'px',
			width : preWidthX + 'px'			
		});
	});

	

	/*$('.lavalamp').prepend('<li class="lava-item"></li>');
	var prePosX = $('.menu-active').position().left;
	var preWidthX = $('.menu-active').width();

	$('.lavalamp > li').not('li.lava-item').click(function() {
		$(this).siblings().removeClass('menu-active');
		$(this).addClass('menu-active');

		prePosX = $(this).position().left;
		preWidthX = $(this).width();
	});

	$('li.lava-item').css({
		left: prePosX + 'px',
		width : preWidthX + 'px'
	});

	$('.lavalamp > li').not('li.lava-item').hover(function() {
		var posX = $(this).position().left;
		var widthX = $(this).width();
		$('li.lava-item').css({
			left: posX + 'px',
			width : widthX + 'px'
		});
	}, function() {
		$('li.lava-item').css({
			left: prePosX + 'px',
			width : preWidthX + 'px'
		});
	});*/

	/*--- END LavaLamp Menu ---*/

});