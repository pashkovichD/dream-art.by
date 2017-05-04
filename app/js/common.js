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

});