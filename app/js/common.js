$(function() {
	
	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		$(".dropdown-phone").hide();
	});

	$(".search").click(function(e) {
		e.stopPropagation();    
		$('#search-form').animate({top: 0, opacity: 1}, 10);
		$('#popup-search').focus();
	});	

	// чтобы при клике на input'е не сворачивалась форма
	$('#search-form input').click(function(e) {
		e.stopPropagation();
	});

	$('#search-form').click(function() {
		$(this).animate({top: '-200px'}, 100);
	});

	// сворачивание поиска при клике вне формы
	$(document).click( function(e){
		if( $(event.target).closest("#search-form").length ) 
			return;
		$("#search-form").animate({top: '-200px'}, 100);
		e.stopPropagation();
	});

	// сворачивание поиска при нажатии клавиши ESC
	$(document).keydown(function(eventObject){
		var top = parseInt($('#search-form').css('top'));
		if (eventObject.which == 27 && top == 0) {
			$('#search-form').animate({top: '-200px'}, 100);  
		}
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

	/* изменение размера окна браузера */
	$(window).resize(function() {
		
		$('li.lava-item').remove();

		var dw = $(document).width();
		if(dw > 991) {
			var lavalamp = $('.main-menu > ul');
			lavalamp.prepend('<li class="lava-item"></li>');	
			var padding_val = parseInt($('.menu-active').css('padding-left'));
			prePosX = $('.menu-active').position().left + padding_val - 5;
			preWidthX = $('.menu-active').width() + 10;	

			$('li.lava-item').css({
				left: prePosX + 'px',
				width : preWidthX + 'px'		
			});
		}
	});

	/* выполнение скрипта при разрешении экрана >=992px */
	var dw = $(document).width();		
	if(dw > 991) {

		var lavalamp = $('.main-menu > ul');
		var lavalamp_li = $('.main-menu > ul > li');

		lavalamp.prepend('<li class="lava-item"></li>');	
		var padding_val = parseInt($('.menu-active').css('padding-left'));
		var prePosX = $('.menu-active').position().left + padding_val - 5;
		var preWidthX = $('.menu-active').width() + 10;

		lavalamp_li.not('li.lava-item').click(function() {
			$(this).siblings().removeClass('menu-active');
			$(this).addClass('menu-active');

			var padding_val = parseInt($(this).css('padding-left'));
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
	}

	/*--- END LavaLamp Menu ---*/

});