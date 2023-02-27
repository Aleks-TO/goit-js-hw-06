function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// отримуэмо посилання
const inputField = document.querySelector("input[type=number]");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
// ставимо слухача
btnCreate.addEventListener("click", handleCreateBoxes);
btnDestroy.addEventListener("click", () => {
	boxes.innerHTML = "";
	inputField.value = "";
});

// пишемо функцію
function handleCreateBoxes() {
	let amount = inputField.value;
	const minDefaultSize = 30;
	for (let i = 0; i < inputField.value; i++) {
		let colorBox = getRandomHexColor();
		let boxSize = i * 10 + minDefaultSize;
		const markup = `<div class="newBox" style= background:${colorBox};width:${boxSize}px;height:${boxSize}px ></div>`;
		// const markup = `<div class="newBox" style= background:${colorBox}; width:${boxSize}px; height:${boxSize}px ></div>`;

		boxes.insertAdjacentHTML("beforeend", markup);
	}
}
