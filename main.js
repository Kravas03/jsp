let num = 42;
		let str = "hello";
		let bull = true;
		let bigN = 1246876523958639856192846984356912836;
		let und;
		let unicalIdent = Symbol('description');
		let noValue = null;
		console.log(num);
		console.log(str);
		console.log(bull);
		console.log(bigN);
		console.log(und);
		console.log(unicalIdent);
		console.log(noValue);

let userName = prompt("Enter your name");
let userSurname = prompt("Enter your surname");
let userAge = prompt("Enter your age");
alert(`Is this information is correct: name: ${userName}, surname: ${userSurname}, age:${userAge} ?`);

let number = prompt("Введіть п'ятизначне число:");
let digits = number.split("");
alert(digits.join(" "));