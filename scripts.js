
$(function() {
	$(".image-label").hide();
	
	$("img").bind("mouseover", showImageLabel);
	$("img").bind("click", showImageLabel);
	$("img").bind("mouseleave", hideImageLabel);
	
	function showImageLabel() {
		$(".image-label").fadeIn('fast');
	}
	
	function hideImageLabel() {
		$(".image-label").fadeOut('fast');
	}
});
