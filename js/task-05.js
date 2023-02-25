// отримуэмо посилання
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
// ставимо слухача на подію input
inputName.addEventListener("input", handleAddName);
// пишемо функцію
function handleAddName() {
	if (inputName.value === "") {
		outputName.textContent = "Anonymous";
	} else {
		outputName.textContent = inputName.value;
	}
}
