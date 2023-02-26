function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// отримуэмо посилання
const btnChangeColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

// ставимо слухача на подію input
btnChangeColor.addEventListener("click", changeColorBg);

// пишемо функцію для зміни кольору бг
function changeColorBg() {
	const randomColor = getRandomHexColor(); // рандом колір викликаємо ф-ю
	document.body.style.backgroundColor = randomColor; //
	colorText.textContent = randomColor; // підставляємо в спан наш код кольору
}
