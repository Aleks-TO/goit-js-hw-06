// отримуэмо посилання
const rangeLine = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
console.log(rangeLine.value);
// ставимо слухача на подію input
rangeLine.addEventListener("input", () => {
	text.style.fontSize = `${rangeLine.value}px`;
});
