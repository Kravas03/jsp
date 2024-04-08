function create() {
	let sum = 0;
	return function addNumber(value) {
		sum += value;
		return sum;
	}
}
let newNumber = create();
console.log(newNumber(5));
console.log(newNumber(10));
console.log(newNumber(15));