const array = [1, 11, 234, "hello", 23, 14, 5, 7];
function removeElement(array, item) {
	return array.filter(element => element !== item);
}
alert(removeElement(array, 234));
