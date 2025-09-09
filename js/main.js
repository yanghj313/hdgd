$(function () {
	// GNB 메뉴 클릭시
	$('.gnb > ul > li > a').on('click', function (e) {
		if (window.innerWidth <= 1024) {
			e.preventDefault();
			$(this).parent().toggleClass('active').siblings().removeClass('active');
		} else {
			$('.gnb > ul > li').removeClass('active');
			$(this).parent().addClass('active');
		}
	});

	// 검색 버튼 클릭 시
	$('.search_btn').on('click', function () {
		$('.search_popup').toggleClass('active');
	});
	$('.close_search').on('click', function () {
		$('.search_popup').removeClass('active');
	});

	// 모바일 햄버거 메뉴
	$('.menu_btn').on('click', function () {
		$('.gnb').toggleClass('active');
	});

	// 바깥 클릭 시 닫힘 (데스크탑 전용)
	$(document).on('click', function (e) {
		if (!$(e.target).closest('.gnb, .menu_btn').length && window.innerWidth > 1024) {
			$('.gnb > ul > li').removeClass('active');
		}
	});
});
