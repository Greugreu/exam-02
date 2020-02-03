//FLEXSLIDER
$( document ).ready(function() {
	$(".flexslider")
		.flexslider({
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

});
