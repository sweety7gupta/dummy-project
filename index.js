
(function() {
	var btnSquare = document.getElementById('btnSquare');
	var txtInput = document.getElementById('txtInput');

	btnSquare.addEventListener('click', getAlert);

	function getAlert() {
		var num = txtInput.value;

		if(isNaN(num)) {
			document.getElementById('lblMsg').innerText="Invalid Input!!!";
		}
		else {
			document.getElementById('lblMsg').innerText=  num * num;
		}
	}
})(); // iife - immedialtely invoked fucntion expression
