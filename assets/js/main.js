//FLEXSLIDER
$( document ).ready(function() {
	$(".flexslider")
		.flexslider({
			slideshowSpeed: 15000,
			animation: "slide",
			smoothHeight: true,
			controlNav: false,
			directionNav: false
		});

	$(".flexslider.slider")
		.flexslider({
			animation: "slide",
			smoothHeight: true,
			directionNav: true,
			controlNav: true
		});

	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});

	jQuery(".bienv").fitText().fitText(0.7);

	ScrollReveal().reveal('#reveal', { delay: 2000 });

});
