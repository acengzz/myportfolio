$(document).ready(function() {
	$(".about-me-link").click(function() {
		$("body,html").animate(
		  {
			scrollTop: $(".about-me").offset().top
		  },1000);
	});
	$(".contact-link").click(function() {
		$("body,html").animate(
		  {
			scrollTop: $("footer").offset().top
		  },1000);
	});
});