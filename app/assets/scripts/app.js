jQuery(function ($) {
	let windowHeight = $(window).height();
	let navbarHeight = $(".navbar").height();
	let footerHeight = $(".site-footer").height();
	let hostName = location.hostname;

	// Search feature
	// Search feature
	$(document).ready(function(){
		var scrollTop =0;
		$(window).scroll(function(){
			scrollTop = $(window).scrollTop();
			if (scrollTop > 100){
				$('.navbar').addClass ('scrollNavbar');
				$('.backTop').addClass ('visible');
				
			}else if (scrollTop < 100){
				$('.navbar').removeClass('scrollNavbar');
				$('.backTop').removeClass ('visible');
			};
		});
		$('.backTop').click (function(){
			$('body , html').animate({
				scrollTop:0
			},800);
		});
	});
	function openSearchOverlay() {
		$(".search-btn").click(function (e) {
			$(".search-overlay").addClass("search-overlay--active");
			$("body").addClass("body-no-scroll");
		});

		$(document).keyup(function (e) {
			if (e.keyCode == 83 && !$("input, textarea").is(":focus")) {
				$(".search-overlay").addClass("search-overlay--active");
				$("body").addClass("body-no-scroll");
			}
		});

		$(".search-input").focus();
	}

	function closeSearchOverlay() {
		$(".search-overlay__close").click(function () {
			$(".search-overlay").removeClass("search-overlay--active");
			$("body").removeClass("body-no-scroll");
		});

		$(document).keyup(function (e) {
			if (e.keyCode == 27) {
				$("body").removeClass("body-no-scroll");
				$(".search-overlay").removeClass("search-overlay--active");
				$("body").removeClass("body-no-scroll");
			}
		});
	}

	openSearchOverlay();
	closeSearchOverlay();

	// DOM actions
	// When saving a story to favorites
	$(".stories-section__item-save").click(function () {
		$(this).html(
			$(this).html() === '<span>حفظ</span><i class="far fa-bookmark"></i>'
				? '<span>محفوظ</span><i class="fas fa-bookmark"></i>'
				: '<span>حفظ</span><i class="far fa-bookmark"></i>'
		);
	});

	// When searching for a keyword
	$(".search-overlay__search-input form").submit(function (e) {
		if (
			$(".search-overlay__search-input form input.form-control").val() !== ""
		) {
			location.hostname = `${hostName}/search.html`;
		}
	});

	// Videos owl carousel
	$("#videos-section .owl-carousel").owlCarousel({
		loop: true,
		rtl: true,
		margin: 15,
		// rewind: true,
		center: true,
		stagePadding: 1,
		autoplay: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 4,
			},
			1200: {
				items: 6,
			},
		},
	});

	// Testimonials owl carousel
	$("#testimonials .owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		responsive: {
			0: {
				items: 1,

				
			},
			600: {
				items: 1,
			},
			1000: {
				items: 2,
			},
		},
	});
});
$('.testimonialSection .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})