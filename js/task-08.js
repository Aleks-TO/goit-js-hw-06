// отримуэмо посилання
const form = document.querySelector(".login-form");
console.log(form);

// ставимо слухача на подію submit
form.addEventListener("submit", handleCheckForm);

// пишемо функцію
function handleCheckForm(event) {
	event.preventDefault(); // відключаємо перезавантаження
}
