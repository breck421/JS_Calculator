// App variables
	// variable for the final value
	var finalValue = 0;

	// temp variable for equations
	var tempValue = "";
// END App variables


// Bind events events
	$('.btn-num').on('click', function (evt) {
		var $el = $(evt.currentTarget);
		var num = $el.data('num');

		updateTempValue(num);
	});

	$('.btn-clear').on('click', function (evt) {
		tempValue = "";
		setDisplay("0");
	});

	$(document).on('keyup', function (evt) {
		switch(evt.keyCode) {
			//0
			case 48:
			case 96:
				updateTempValue(0);
				break;
			//1
			case 49:
			case 97:
				updateTempValue(1);
				break;
			//2
			case 50:
			case 98:
				updateTempValue(2);
				break;
			//3
			case 51:
			case 99:
				updateTempValue(3);
				break;
			//4
			case 52:
			case 100:
				updateTempValue(4);
				break;
			//5
			case 53:
			case 101:
				updateTempValue(5);
				break;
			//6
			case 54:
			case 102:
				updateTempValue(6);
				break;
			//7
			case 55:
			case 103:
				updateTempValue(7);
				break;
			//8
			case 56:
			case 104:
				updateTempValue(8);
				break;
			//9
			case 57:
			case 105:
				updateTempValue(9);
				break;
			default:
		}
	});

	$('.btn-opp').on('click', function (evt) {

		var $btn = $(evt.currentTarget);
		var opperator = $btn.data('opp');

		switch(opperator) {
			case 'add':
				add();
				break;
			case 'minus':
				minus();
				break;
		};
	});
// END Bind events events

	function add () {
		alert('add button clicked');
	};

	function minus () {
		alert('minus button clicked');
	};

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