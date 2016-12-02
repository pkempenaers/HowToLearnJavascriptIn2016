(function() {
	var value = 0;
	var valueElement = document.querySelector('#value');
	var addButton = document.querySelector('#addButton');
	var subtractButton = document.querySelector('#subtractButton');
	
	addButton.addEventListener('click', add);
	subtractButton.addEventListener('click', subtract)

	updateValue();

	function updateValue() {
		valueElement.innerText = value;
	}

	function add() {
		value += 1;
		updateValue();
	}

	function subtract() {
		value -= 1;
		updateValue();
	}
})();