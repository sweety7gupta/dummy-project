(function(){
	$('.btn').on('click', changeColor);

	function changeColor(e) {
		var targetParent = $(e.target).parent();
		var box = targetParent.find('.box');

		var boxClassName = targetParent.hasClass('section-special') ? 'safe' : 'danger';

		box.toggleClass(boxClassName);
	}
})();