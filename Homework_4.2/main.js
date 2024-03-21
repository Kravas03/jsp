let number = prompt("Введіть тризначне число", "");
let arr = number.split("");
if (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] == arr[2]) {
	alert(" Всі цифри однакові!");
} else if (arr[0] == arr[1] || arr[1] == arr[2] || arr[0] == arr[2]) {
	alert("Є однакові числа!");
} else {
	alert("Числа не однакові!");
}
