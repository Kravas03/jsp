const array = [1, 11, 234, "hello", 23, 14, 5, 7];
let x = prompt("Введите порядковый номер элемента, который хотите убрать")
function removeElement(array, x) {
	array.splice(x, 1);
	return array;
}
alert(removeElement(array, x));