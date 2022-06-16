jQuery(function ($) {
	let windowHeight = $(window).height();
	let navbarHeight = $(".navbar").height();
	let footerHeight = $(".site-footer").height();
	let hostName = location.hostname;

	// Search feature
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

	// Sliders
	// Videos slider
	const videosSwiper = new Swiper("#videos-section .swiper", {
		speed: 400,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		spaceBetween: 20,
		loop: true,
		// number of slides per view
		slidesPerView: 5,
	});

	$("#videos-section .swiper").videosSwiper;

	// Testimonials slider
	const testimonialsSwiper = new Swiper("#testimonial-area .swiper", {
		slidesPerView: 1,
	});

	$("#testimonial-area .swiper").testimonialsSwiper;

	// Circular slider
	$(".client-single").on("click", function (e) {
		e.preventDefault();
		var active = $(this).hasClass("active");
		var parent = $(this).parents(".testi-wrap");

		if (!active) {
			var activeBlock = parent.find(".client-single.active");
			var currentPos = $(this).attr("data-position");
			var newPos = activeBlock.attr("data-position");

			activeBlock
				.removeClass("active")
				.removeClass(newPos)
				.addClass("inactive")
				.addClass(currentPos);
			activeBlock.attr("data-position", currentPos);

			$(this)
				.addClass("active")
				.removeClass("inactive")
				.removeClass(currentPos)
				.addClass(newPos);
			$(this).attr("data-position", newPos);
		}
	});
});
