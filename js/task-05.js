// отримуэмо посилання
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
// ставимо слухача на подію input
inputName.addEventListener("input", handleAddName);
// пишемо функцію
function handleAddName() {
	if (inputName.value.trim() === "") {
		// метод трім для видалення пробілів
		outputName.textContent = "Anonymous";
	} else {
		outputName.textContent = inputName.value.trim();
	}
}
