let number = prompt("Введіть тризначне число", "");
let arr = number.split("");
if (number.length == 3) {
	alert("Проводимо перевірку!");
}
	else {
	alert("Ви ввели невірне число!");
	prompt("Введіть тризначне число!");
}

if (arr[0] == arr[1] && arr[1] == arr[2]) {
	alert(" Всі цифри однакові!");
} else if (arr[0] == arr[1] || arr[1] == arr[2]) {
	alert("Є однакові числа!");
} else {
	alert("Числа не однакові!");
}
