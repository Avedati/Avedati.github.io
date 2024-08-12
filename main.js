$(document).ready(function() {
	$('.menu-home').click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $('.home').offset().top
		}, 200);
	});

	$('.menu-experience').click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $('.experience').offset().top
		}, 500);
	});

	$('.menu-projects').click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $('.projects').offset().top
		}, 500);
	});

	$('.bit-project').click(function() {
		window.open('https://github.com/avedati/bit', '_blank');
	});

	$('.chat-project').click(function() {
		window.open('https://github.com/avedati/EncChatPy', '_blank');
	});
});
