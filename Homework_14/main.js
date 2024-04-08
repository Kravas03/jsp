function currentMultiply(a) {
	return function (b){
		return a * b;
	}
} 
const multiplication = currentMultiply;
console.log(multiplication(4)(5));
console.log(multiplication(6)(1));
console.log(multiplication(2)(8));