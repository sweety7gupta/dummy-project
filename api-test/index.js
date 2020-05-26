(function(){
	var button = $('.btn');
	var dataSection = $('.data');
	button.on('click',fetchdata);

	function fetchdata(){
		console.log("hi");
		$.ajax({
			url: "http://www.mocky.io/v2/5ecd12983200005700236666",
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.done(function(result) {
			// var names = result.names.join('<br/>');
			var finalHtml= '';

			// for (var i=0; i<result.names.length; i++) {
			// 	finalHtml += '<li>' + result.names[i] + '</li>';
			// }

			finalHtml = result.names.map(function (name) {
				return '<li>' + name + '</li>';
			}).join('');

			dataSection.html(finalHtml);
		})
		.always(function () {
			console.log('Always with you!');
		});

		$(dataSection).addClass('fetch');
	}
})();
