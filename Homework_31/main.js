function deleteLetter(text, letters) {
	for (let i = 0; i < text.length; i++) {
		for (let j = 0; j < letters.length; j++) {
			text = text.replace(letters[j], ''); 
		}
	}
	return text;
}
let text = prompt("Enter text");
let x = prompt("Enter letter");
let y = prompt("Enter letter");
let z = prompt("Enter letter");
let letters = [x, y, z];
alert(deleteLetter(text, letters)); 
