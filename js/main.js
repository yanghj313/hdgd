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

$(function () {
	$('.snslist').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		dots: false,
		prevArrow: $('.prev.sns'),
		nextArrow: $('.next.sns'),
	});

	$(document).on('click', '.play.sns', function () {
		$(this).attr('class', 'stop sns');
		$('.snslist').slick('slickPlay');
		return false;
	});

	$(document).on('click', '.stop.sns', function () {
		$(this).attr('class', 'play sns');
		$('.snslist').slick('slickPause'); // <-- slickPlay/slickPause 짝 맞추기
		return false;
	});

	$('.snslist').on('afterChange', function (event, slick, currentSlide) {
		$('.snslist .item').removeClass('active');
		$('.snslist .slick-current').addClass('active');
	});
});
