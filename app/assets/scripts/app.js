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


});
$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    items: 1,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        320: {
            items:1 
        },
        481: {
            items: 1
        },
        991: {
            items: 3
        },
        1025: {
            items: 5
        }
    }
});
