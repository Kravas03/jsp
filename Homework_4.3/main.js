const London = "Лондон";
const Kyiv = "Київ";
const Washington = "Вашингтон";

let userAge = prompt("Якого ви року народження?");
if (userAge == null) {
	alert("Шкода, що Ви не захотіли ввести свій вік");
} 
let userAdress = prompt("Де ви проживаєте ?");
if (userAdress == null) {
	alert("Шкода, що Ви не захотіли ввести свою адресу");
}

if (userAdress == London && userAge == true) {
	alert(`Ваш вік: ${userAge}, ви проживаєте в столиці Англії!`);
} else if (userAdress == London && userAge == null || userAdress == London && userAge == "") {
	alert(`Ви не вказали свій вік, ви проживаєте в столиці Англії!`);
} else if (userAdress == Kyiv && userAge == true) {
	alert(`Ваш вік: ${userAge}, ви проживаєте в столиці України!`);
} else if (userAdress == Kyiv && userAge == null || userAdress == Kyiv && userAge == "" ) {
	alert(`Ви не вказали свій вік, ви проживаєте в столиці України!`);
} else if (userAdress == Washington && userAge !== null) {
	alert(`Ваш вік: ${userAge}, ви проживаєте в столиці США!`);
} else if (userAdress == Washington && userAge == null || userAdress == Washington && userAge == "") {
	alert(`Ви не вказали свій вік, ви проживаєте в столиці США	!`);
} else if (userAdress == null && userAge !== null || userAdress == "" && userAge !== "" ) {
	alert(`Нажаль, ви не вказали вашу адресу, ваш вік - ${userAge}`)	
}	else if (userAdress !== null && userAge == null || userAdress !== "" && userAge == "" || userAdress !== "" && userAge == null || userAdress !== null && userAge == "") {
		alert(`Нажаль, ви не вказали ваш вік, ваша адреса ${userAdress}`);
} else if (  userAge == null && userAdress == null || userAdress == "" && userAge == "" || userAge == null && userAdress == "" || userAge == "" && userAdress == null) {
	alert("Нажаль, ви не вказали свої данні!");
} else if (userAdress !== London || userAdress !== Kyiv || userAdress !== Washington || userAdress !== "" && userAge !== null || userAge !== "") {
	alert(`Ваш вік ${userAge}, ви проживаєте у місті ${userAdress} `);
}


// const sportsChampions = { "Футбол": "Ліонель Мессі", "Теніс": "Рафаель Надаль", "Бокс": "Василь Ломаченко" };
// let chosenSport = prompt("Який із цих видів спорту вам подобається: Футбол, Теніс, Бокс?");
// if (chosenSport in sportsChampions){
// 	alert(`Круто! Хочеш стати як ${sportsChampions[chosenSport]} ?`);
// } else if (chosenSport == null || chosenSport == "") {
// 	alert("Ви не вибрали жоден вид спорту!");
// } else {
// 	alert("Вибачте, такого виду спорту у списку немає.");
// }