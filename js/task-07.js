// отримуэмо посилання
const rangeLine = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
// читаемо початкове знаення
text.style.fontSize = `${rangeLine.value}px`;
// ставимо слухача на подію input
rangeLine.addEventListener("input", () => {
	text.style.fontSize = `${rangeLine.value}px`;
});
