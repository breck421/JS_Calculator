// App variables
	// variable for the final value
	var finalValue = 0;

	// temp variable for equations
	var tempValue = "";

	// variable function state
	var calcOperator = "";
// END App variables


// Bind events events
	$('.btn-num').on('click', function (evt) {
		var $el = $(evt.currentTarget);
		var num = $el.data('num');

		updateTempValue(num);
	});

	$('.btn-clear').on('click', function (evt) {
		console.log('Clear CLicked', evt);

		tempValue = "";
		setDisplay("0");
	});


	$(document).keyup(function (evt) {
		switch(evt.keyCode) {
			case 48:
			case 96:
				updateTempValue(0);
				break;
			case 49:
			case 97:
				updateTempValue(1);
				break;
			case 50:
			case 98:
				updateTempValue(2);
				break;
			case 51:
			case 99:
				updateTempValue(3);
				break;
			case 52:
			case 100:
				updateTempValue(4);
				break;
			case 53:
			case 101:
				updateTempValue(5);
				break;
			case 54:
			case 102:
				updateTempValue(6);
				break;
			case 55:
			case 103:
				updateTempValue(7);
				break;
			case 56:
			case 104:
				updateTempValue(8);
				break;
			case 57:
			case 105:
				updateTempValue(9);
				break;
			default:
		}
	});
// END Bind events events


// Display functions
	function updateTempValue(val) {
		var stringValue = val.toString();

		if(tempValue === "0") {
			tempValue = stringValue;
		}
		else {
			tempValue += stringValue;
		}

		setDisplay(tempValue);
	};

	// Displays a string in the calculator output
	function setDisplay(val) {
		$('.calc-val').val(val);
	};
// END Display functions