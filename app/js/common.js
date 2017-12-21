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
	

	$(".phone").click(function() {		
		
		// с использованием easing		
		/*if($(".dropdown-phone").css('visibility') == 'hidden') {			
			$(".dropdown-phone").css('visibility', 'visible').animate({top: '70px', opacity: 1}, 700, 'easeOutExpo');
		} else {
			$(".dropdown-phone").css('visibility', 'hidden').animate({top: '80px', opacity: 0}, 100);
		}*/

		// с использованием animate.css
		$(".dropdown-phone").toggle();
		// $(".dropdown-phone").addClass('animated fadeInDown');
		/*if($(".dropdown-phone").hasClass('animated')) {			
			$(".dropdown-phone").removeClass('animated fadeIn');
		} else {
			$(".dropdown-phone").addClass('animated fadeIn');
		}*/
		
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

		// появление меню каталога при клике по кнопке на разрешении меньше 768px
		if(dw > 767) {
			$('.menu_content').css({'opacity':1, 'left':'0'});
		} else {
			if(!$('.toggle-menu-short').hasClass('short-click')) {
				$('.menu_content').css({'opacity':0, 'left':'-400px'});	
			}
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

	/*--- Слайдер Slick.js ---*/
	$('.slider-wrap').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		cssEase: 'ease-in-out',

		// lazyLoad: 'ondemand'		
		// centerMode: true,
		// centerPadding: '10px'
		// dots: true,
		// arrows: false
		fade: true
	});

	/*--- поведение описания слайда при прокрутке (см. документацию плагина)---*/
	$('.slider-wrap').on('beforeChange', function(){		
		$('.slick-slide > h2').animate({opacity: 0, left: '-150px'}).animate({left: '150px'});
		$('.slick-slide > p').animate({opacity: 0, left: '-150px'}).animate({left: '150px'});		
	});

	$('.slider-wrap').on('afterChange', function(){		
		$('.slick-current > h2').animate({left: '70px', opacity: 1}, 1000, 'easeOutExpo');
		$('.slick-current > p').delay(200).animate({left: '70px', opacity: 1}, 1000, 'easeOutExpo');		
	});
	
	/*--- END Слайдер Slick.js ---*/


	$('.tab').click(function() {
		if(!$(this).attr('checked')) {
			$(this).attr('checked', true);
			$('.tab').not($(this)).removeAttr('checked');
		}		
	});	

	/*--- Submenu каталога ---*/
	$('.toggle-menu-arrow').click(function(e) {		
	    // отменянем событие для родителя
	    e.stopPropagation();	

		if($(this).hasClass('tma-click')) {
			$(this).removeClass('tma-click');
			$(this).next().slideUp(50);
			// $(this).next().hide();
			$(this).parent().removeClass('tab-arrow');
		} else {
			$(this).addClass('tma-click');
			$(this).next().slideDown(50);
			// $(this).next().show();
			$(this).parent().addClass('tab-arrow');
		}
	});	

	/*--- открытие меню каталога на маленьких экранах ---*/
	$('.menu_short').click(function(e) {		
	    // отменянем событие для родителя
	    // e.stopPropagation();

	    toggle_menu = $(this).children('.toggle-menu-short');
		if(toggle_menu.hasClass('short-click')) {
			toggle_menu.removeClass('short-click');			
			$('.menu_content').animate({left: '-400px', opacity: 0}, 100);			
		} else {
			toggle_menu.addClass('short-click');			
			$('.menu_content').animate({left: '0', opacity: 1}, 100);			
		}
	});

	// открытие tab'а по умолчанию
    if($('#tab' + '1').attr('checked') == 'checked') {    	
    	$('.tab__content').eq(0).addClass('tab_view');
    }

	$('.tab + label').click(function(e) {
		// не дает распространять событие click() на дочерние элементы		
		var target = e.target;		
		if(target != this) {
			// кроме <i> и <span>
			if((target.nodeName != 'I') && (target.nodeName != 'SPAN')) {
				return true;
			}			
		}
		// end

		$('.tab + label ul').hide();
		// $('.tab + label ul').css('display','block');
		$('.toggle-menu-arrow').removeClass('tma-click');
		$('.tab + label').removeClass('tab-arrow');
		$('.sub-menu').find('a.active').removeClass('active');

		// узнаем номер tab'а
		label_for = $(this).attr('for')
		label_num = label_for.charAt(label_for.length - 1);		
		// смена tab'ов
		$('.tab__content').removeClass('tab_view');
		$('.tab__content').eq(label_num - 1).addClass('tab_view');
	});	

	// скрытие списка при клике по элементу списка
	$('.tab + label > ul li').click(function(e) {
		// кроме элементов, имеющих вложенное меню
		if($(this).hasClass('sub-menu')) {
			return true;
		}
		$(this).parent().hide();
		$('.toggle-menu-arrow').removeClass('tma-click');
		$('.tab + label').removeClass('tab-arrow');		
		$('.tab + label ul').hide();
		$('.sub-menu').find('a.active').removeClass('active');
	});

	
	$('.sub-menu a').click(function(e) {
        //находим все p, которые находятся внутри li - родителя a
        var dropDown = $(this).closest('li').find('ul');

        // //сворачиваем все p, кроме dropDown, т.е. который открываем. Получаем эффект открытия нужного и закрытия всех остальных
        	$('.sub-menu').find('ul').not(dropDown).slideUp(700);
        	dropDown.stop(false, true).slideToggle();

        // с помощью класса .active управляем стрелочкой >
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {            
            $('.sub-menu').find('a.active').removeClass('active');
            $(this).addClass('active');
        }        

        // отменяем стандартное поведение события
        e.preventDefault();
    });


	

});