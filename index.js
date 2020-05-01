
(function() {
	var btnSquare = document.getElementById('btnSquare');
	var txtInput = document.getElementById('txtInput');

	btnSquare.addEventListener('click', getAlert);

	function getAlert() {
		var num = txtInput.value;

		alert('Square Value is: '+  num * num);
	}
})(); // iife - immedialtely invoked fucntion expression
