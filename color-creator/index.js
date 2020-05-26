(function(){
	var colorBoxes = $('.textbox');
	var box = $('.box');
	colorBoxes.on('change', changeColor);

	var red = 255, green = 0, blue = 255;

	$(colorBoxes[0]).val(red);
	$(colorBoxes[1]).val(green);
	$(colorBoxes[2]).val(blue);

	updateBgColor(box, red, green, blue);

	function changeColor(e) {
		var targetParent = $(e.target).parent();
		var box = targetParent.find('.box');
		var red = $(colorBoxes[0]).val() || 0;
		var green = $(colorBoxes[1]).val() || 0;
		var blue = $(colorBoxes[2]).val() || 0;

		
		updateBgColor(box, red, green, blue);

		//box.style.backg
		//var boxClassName = targetParent.hasClass('section-special') ? 'safe' : 'danger';

		//box.toggleClass(boxClassName);
	}

	function updateBgColor(element, red, green, blue) {
		$(element).css({ 'background': 'rgb('+ red + ',' + green + ',' + blue + ')' });
	}

})();