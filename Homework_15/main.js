function promptNumbers() {
	for (let i = 0; i < 10; i++) {
		var input = prompt(`Enter a number greater than 100 (attempt ${i + 1}/10):`);

		if (input === null || input === '') {
			console.log(`The user did not enter a value`);
			return;
		}
		if (input === null || input === 0 || isNaN(input) || input === '') {
			console.log(`Last input entered: ${input} `);
			return;
		}
		if (!isNaN(input)) {
			input = Number(input);
			if (typeof input === 'number') {
				if (input > 100) {
					console.log(`Last input entered: ${input}`);
					return;
				} else {
					alert("Please enter a number greater than 100.");
				}
			} else {
				alert("Invalid input. Please enter a number.");
			}
		}
		
	}
	console.log(`Last input entered: ${input}`);
}
promptNumbers();


