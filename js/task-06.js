// отримуэмо посилання
const inputField = document.querySelector("#validation-input");

// ставимо слухача на подію input
inputField.addEventListener("blur", handleCheckInput);

// Знаходимо значення атрибута data-length
const dataLength = parseInt(inputField.getAttribute("data-length"));
console.log(inputField.value.length);

// пишемо функцію
function handleCheckInput(e) {
	if (inputField.value.length === dataLength) {
		inputField.classList.add("valid");
		inputField.classList.remove("invalid");
	} else {
		inputField.classList.remove("valid");
		inputField.classList.add("invalid");
	}
	// console.log(e);
}
