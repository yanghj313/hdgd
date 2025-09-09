$(function () {
	$('.gnb').hover(
		function () {
			if ($(window).width() > 1024) {
				$('.submenu_wrap').stop().slideDown(300);
				$('.header').addClass('active');
			}
		},
		function () {
			if ($(window).width() > 1024) {
				$('.submenu_wrap').stop().slideUp(300);
				$('.header').removeClass('active');
			}
		}
	);

	$('.menu_btn').on('click', function () {
		$('.gnb').toggleClass('active');
	});

	$('.search_btn').on('click', function () {
		$('.search_popup').stop().slideToggle(300);
	});

	$('.close_search').on('click', function () {
		$('.search_popup').slideUp(300);
	});

	$('.menu_btn').on('click', function () {
		$('.gnb').toggleClass('active');
	});

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 10) {
			$('.header').addClass('active');
		} else {
			$('.header').removeClass('active');
		}
	});
});
