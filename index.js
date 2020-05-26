
(function() {
	var btnSquare = document.getElementById('btnSquare');
	var txtInput = document.getElementById('txtInput');
	var txtFibonacciInput = document.getElementById('txtFibonacciInput');
	var btnFibonacci = document.getElementById('btnFibonacci');
	var lblMsg = document.getElementById('lblMsg');
	var lblfbMsg = document.getElementById('lblfbMsg');

	btnSquare.addEventListener('click', getSqaure);
	btnFibonacci.addEventListener('click',getFibonacciSeries);

	function getSqaure() {
		var num = txtInput.value;

		if(isNaN(num)) {
			lblMsg.innerText="Invalid Input!!!";
		}
		else {
			lblMsg.innerText = num * num;
		}
	}

	// [0, 1, 1, 2, 3, 5] 
	function getFibonacciSeries() {
		var noOfTerms = txtFibonacciInput.value;

		if(isNaN(noOfTerms) || noOfTerms === 0) {
			lblfbMsg.innerText="Invalid Input!!!";
		}
		else {
			var result = [];
			
			for(var i = 0; i < noOfTerms; i++) {
				if (i <= 1) {
					result.push(i);
				}
				else {
					var nextTerm = result[i-1] + result[i-2];
					result.push(nextTerm);
				}

				lblfbMsg.innerText = result;
			}
			
		}
	}

	function isPrime() {
		var a;
		//
		//
		//
	}
})(); // iife - immedialtely invoked fucntion expression
