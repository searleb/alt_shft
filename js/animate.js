$(document).ready(function(){
	// randomize background-image
	// var images = ['reunder1.jpg', 'reunder2.jpg', 'reunder3.jpg', 'reunder4.jpg', 'reunder5.jpg'];
	// $('.logo').css({'background-image': 'url(img/reprintUnder/' + images[Math.floor(Math.random() * images.length)] + ')'});
	// fade logo in from opacity: 0 in .css
	$('.logo').fadeTo(1000, 0.8)
	// on click fade logo out and move page right
	$('.logo').click(function() {
		$('.logo').fadeTo(400, 0);
		parallax.about.right();
		// fading the logo back to 1 after click so it is visable when you return to the home page
		$('.logo').fadeTo(500, 0.8);
	});

		// hint button
		$('#hint-button').click(function() {
			$('#hint').show( "bounce", 1000);
		});

		// project links
		$('#reprintlnk').click(function(){
			parallax.reprint.bottom();
		});
		$('#undergroundlnk').click(function(){
			parallax.underground.bottom();
		});
		$('#comeGetItlnk').click(function(){
			parallax.comeGetIt.bottom();
		});
		$('#seductionlnk').click(function(){
			parallax.seduction.bottom();
		});
		$('.backbtn').click(function(){
			parallax.projects.top();
		});

// slide project links 
// Mouse Over 
$('ul li').mouseenter(function(){
	$(this).animate({paddingLeft:"+=20px"});
}),
// Mouse Out
$('ul li').mouseleave(function(){
	$(this).animate({paddingLeft:"-=20px"});
});

// back button
// Mouse Over 
$('.backbtn').mouseenter(function(){
	$(this).animate({paddingRight:"+=20px"});
}),
// Mouse Out
$('.backbtn').mouseleave(function(){
	$(this).animate({paddingRight:"-=20px"});
	});
});