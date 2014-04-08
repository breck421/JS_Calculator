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

	// jQuery selector for .btn-opp class; creates a jQuery object
	// listening for the click event on this jQuery object
	// the .on() method takes 2 parameters
	// param1: 'click'
	// param2: call back function that passes the click event
		// evt is the object representing the event
	$('.btn-opp').on('click', function (evt) {
		console.info('evt', evt);

		// evt an object with many properties and methods
		// evt.currentTarget a property that represents the
		// html element that fired the event
		console.log('evt.currentTarget', evt.currentTarget);

		// $btn is a variable for this jQuery selcetor
		// $btn is the jQuery object of that html element
		var $btn = $(evt.currentTarget);
		console.log('$btn', $btn);

		// calling the jQuery data method on btn
		// passing in an attribute of opp
		// opperator is the string representing the data-opp attribute
		// attributes describe html elements
		var opperator = $btn.data('opp');

		// switch()
		// replaces an if else
		// takes any parameter and checks equality against multiple cases
		// break terminates the switch
		switch(opperator) {
			case 'add':
				add();
				break;
			case 'minus':
				minus();
				break;
			case 'divide':
				divide();
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

	function divide () {
		alert('divide button clicked');
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