$(document).ready(function(){

	// Mobile nav
	$('.menu-opener').bigSlide({
		side: 'right',
		easyClose: true,
		menuWidth: '260px'
	});

	// Top Nav
	$('.top-nav li').hover(function(){
		clearTimeout($.data(this,'timer'));
		$(this).children('ul').stop().slideDown(200).css({'z-index': 110});
	}, function(){
		$.data(this,'timer', setTimeout($.proxy(function() {
			$(this).children('ul').stop().slideUp(200).css({'z-index': 50});
		}, this), 200));
	});

	// $('.top-nav > li').hover(function(){
	// 	clearTimeout($.data(this,'timer'));
	// 	$('ul',this).stop(true,true).slideDown(200);
	// 	$('ul',this).css({'z-index': 55});
	// }, function(){
	// 	$.data(this,'timer', setTimeout($.proxy(function() {
	// 		$('ul',this).stop(true,true).slideUp(200);
	// 		$('ul',this).css({'z-index': 50});
	// 	}, this), 200));
	// });

	// Sliders
	$('.main-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		// responsive: [
		// 	{
		// 		breakpoint: 992,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			dots: true,
		// 			arrows: true
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			dots: true,
		// 			arrows: false
		// 		}
		// 	}
		// ]
	});

	$('.advantages-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
					infinite: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
					infinite: true
				}
			}
		]
	});

	// Equipment Rent Slider
	var equipmentSliderFlag = false;

	function equipmentSliderInit(){
		if ( $(window).width() <= 991 && !equipmentSliderFlag) {
			$('.equipment-rent-slider').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true,
				arrows: false,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 831,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							dots: true,
							arrows: false,
							infinite: true
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true,
							arrows: false,
							infinite: true
						}
					}
				]
			});

			equipmentSliderFlag = true;
		} else if($(window).width() > 991 && equipmentSliderFlag) {
			$('.advantages-slider').slick('unslick');
			equipmentSliderFlag = false;
		}
	}

	if ( $(window).width() <= 991 ){
		equipmentSliderInit();
	}

	$(window).resize(function(){
		equipmentSliderInit();
	});
	// End of Equipment Rent Slider

	$('.projects-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
					infinite: true
				}
			}
		]
	});

	$('.brands-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					dots: true,
					arrows: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					variableWidth: true,
					slidesToShow: 1,
					dots: true,
					arrows: true
				}
			}
		]
	});

	// Parallax
	$('[id*="parallax-viewport"]').each(function(){
		var scene = document.getElementById( $(this).attr('id') );
		var parallaxInstance = new Parallax(scene);
	});

	// Scroll to anchor
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = $('.header').innerHeight();
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
		e.preventDefault();
	});

	// Sticky Header
	var isSticky = false;

	$(window).scroll(function(){
		if( !isSticky && $(window).scrollTop() > 170 ){
			$('.sticky-header').addClass('visible');
			isSticky = true;
		} else if(isSticky && $(window).scrollTop() <= 170){
			$('.sticky-header').removeClass('visible');
			isSticky = false;
		}
	});

	// Tilt JS
	// $('.add-tilt').tilt({
	// 	perspective: 1500
	// });

	// TODO: ↓↓↓ remove this script ↓↓↓
	// Current menu item highlithing
	$(function () {
		var location = window.location.href;
		var cur_url = location.split('/').pop();

		$('.top-nav li, .panel-nav li, .footer-nav li').each(function () {
			var link = $(this).find('a').attr('href');

			// console.log(link);

			if (cur_url == '') {
				cur_url = 'index.php';
			}

			if (cur_url == link)
			{
				$(this).addClass('current-menu-item');
				$(this).parents('li').addClass('current-menu-parent');
			}
		});
	});
});