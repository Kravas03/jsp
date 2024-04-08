function promptNumbers() {
	for (let i = 0; i < 10; i++) {
			let input = prompt(`Enter a number greater than 100 (attempt ${i + 1}/10):`);
			if (!isNaN(input)) {
					input = Number(input); 
					if (input > 100) {
							console.log(`Number entered: ${input}`);
							return; 
					} else {
							alert("Please enter a number greater than 100.");
					}
			} else {
					alert("Invalid input. Please enter a number.");
			}
	}
	console.log(`Last number entered: ${input}`);
}
promptNumbers();