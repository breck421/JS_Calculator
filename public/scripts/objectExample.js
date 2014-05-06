function makePerson(myName, myAge, myFavColor) {
		var person = {};

		if(myName) {
			preson.name = myName;
		}

		if(myAge) {

			if(typeof(myAge) === 'number') {
				person.age = myAge;
			}
			else {
				person.age = NaN;
			}

		}

		if(myFaveColor) {
			person.favColor = myFavColor;
		}

		return person;
	}


	var jordan = makePerson('Jordan', 34);
	jordan.spouse = makePerson("Andrea", 30);
	jordan.children = [
		makePerson("Gavin", 5),
		makePerson("Colton", 2),
		makePerson("Harper", 1)
	];

	var jordan = {
		name: "Jordan",
		age: 34,
		children: [
			'Gavin',
			'Colton',
			'Harper'
		],
		spouse: {
			name: 'Andrea',
			age: 30
		}
	};

	/*typeof(jordan) //object
	typeof(jordan.name) //string
	typeof(jordan.age) //number
	typeof(jordan.children[3]) //undefined
	typeof(jordan.spouse) //object
	typeof(jordan.favColor) //undefined*/