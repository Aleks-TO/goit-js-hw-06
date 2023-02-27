// отримуэмо посилання
const formEl = document.querySelector(".login-form");
// console.log(formEl.elements);
const emailInput = formEl.elements.email;
const passInput = formEl.elements.password;
const btnSubmit = formEl.lastElementChild;

// ставимо слухача на подію submit
formEl.addEventListener("submit", handleCheckForm);

// пишемо функцію
function handleCheckForm(event) {
	event.preventDefault(); // відключаємо перезавантаження

	if (emailInput.value === "" || passInput.value === "") {
		// emailInput.style.border = `1px solid red`;
		return alert("ERROR!!!  Please fill oll fields");
	}
	const dataForm = {};
	dataForm["email"] = emailInput.value;
	dataForm["password"] = passInput.value;

	console.log(dataForm);
	formEl.reset();
}
