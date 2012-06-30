
$(function() {

	$(".image-label").hide();
	
	$(".image-box img").bind("mouseover", showImageLabel);
	$(".image-box img").bind("click", showImageLabel);
	$(".image-box img").bind("mouseleave", hideImageLabel);
	
	updateDateAndTime();
	
	function showImageLabel() {
		$(".image-label").fadeIn('fast');
	}
	
	function hideImageLabel() {
		$(".image-label").fadeOut('fast');
	}
	
	/**
	Add the fake date to the console image.
	*/
	function updateDateAndTime() {
		var currentDate = new Date();
		var month = currentDate.getMonth();
		var day = numberToStringWithAlgarisms(currentDate.getDate());
		var year = numberToStringWithAlgarisms(currentDate.getFullYear());
		var minute = numberToStringWithAlgarisms(currentDate.getMinutes());
		var hour = currentDate.getHours();
		if (hour >= 12) {
			addImageToPosition("images/dot.png", 514, 353);
			hour -= 12;
		}
		else {
			addImageToPosition("images/dot.png", 514, 388);
		}
		hour = numberToStringWithAlgarisms(hour);
		addImageToPosition(getMonthImageSrc(month), 71, 346);
		addImageToPosition(getAlgarismImageSrc(day.charAt(0)), 236, 348);
		addImageToPosition(getAlgarismImageSrc(day.charAt(1)), 275, 348);
		addImageToPosition(getAlgarismImageSrc(year.charAt(0)), 344, 350);
		addImageToPosition(getAlgarismImageSrc(year.charAt(1)), 385, 350);
		addImageToPosition(getAlgarismImageSrc(year.charAt(2)), 426, 350);
		addImageToPosition(getAlgarismImageSrc(year.charAt(3)), 467, 351);
		addImageToPosition(getAlgarismImageSrc(hour.charAt(0)), 552, 352);
		addImageToPosition(getAlgarismImageSrc(hour.charAt(1)), 592, 352);
		addImageToPosition(getAlgarismImageSrc(minute.charAt(0)), 659, 352);
		addImageToPosition(getAlgarismImageSrc(minute.charAt(1)), 701, 352);
	}
	
	/**
	Convertes the number to a string, adding zeros at left to complete two algarisms.
	*/
	function numberToStringWithAlgarisms(originalNumber) {
		var numberAsString = originalNumber.toString();
		if (numberAsString.length == 1) {
			return "0" + numberAsString;
		}
		else {
			return numberAsString;
		}
	}
	
	/**
	Returns the name of the image source of the algarism (0-9).
	*/
	function getAlgarismImageSrc(algarism) {
		return "images/" + algarism + ".png";
	}
	
	/**
	Returns the name of the image source of the month (0-11).
	*/
	function getMonthImageSrc(month) {
		switch (month) {
			case 0:
				return "images/jan.png";
			case 1:
				return "images/feb.png";
			case 2:
				return "images/mar.png";
			case 3:
				return "images/apr.png";
			case 4:
				return "images/may.png";
			case 5:
				return "images/jun.png";
			case 6:
				return "images/jul.png";
			case 7:
				return "images/aug.png";
			case 8:
				return "images/sep.png";
			case 9:
				return "images/oct.png";
			case 10:
				return "images/nov.png";
			case 11:
				return "images/dec.png";
		}
	}
	
	/**
	Creates a dom element with the image source and append to the image box.
	*/
	function addImageToPosition(imageSrc, x, y) {
		var imageDom = $("<img/>").attr("src", imageSrc).css("position", "absolute").css("left", x).css("bottom", y);
		$(".image-box").append(imageDom);
	}
});
