	window.onload = function() {
		$(".slider_son").bxSlider( {
				mode: "horizontal",
				autoControls: true,
				speed: 500,
				pause: 4000,
				auto: true,
			});
		$('.bxslider').bxSlider({
			nextSelector: '#slider-next',
			prevSelector: '#slider-prev',
					});
	}