const сapitals = {
	'Київ': 'України',
	'Вашингтон': 'США',
	'Лондон': 'Великобританії'
};
	
const sportsChampions = {
	"Футбол": "Ліонель Мессі",
	"Теніс": "Рафаель Надаль",
	"Бокс": "Василь Ломаченко"
};

const userAge = prompt("Якого ви року народження?");
const city = prompt("Де ви проживаєте ?");
let sport = prompt("Який вид спорту тобі подобається?");
let age = (2024 - userAge);
console.log(age);

let message = `Тобі ${age} роки(-ів). `;
message += (city in сapitals) ? (`Ти проживаєш у столиці ${сapitals[city]}.`) : (`Ти проживаєш у місті ${city}.`);
alert(message);

if (sport in sportsChampions){
	alert(`Круто! Хочеш стати як ${sportsChampions[sport]} ?`);
} else {
	alert(`Тобі подобається ${sport}!`);
}