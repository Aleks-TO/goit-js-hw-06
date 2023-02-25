// отримуэмо посилання на кнопки та спан

const btnLess = document.querySelector('[data-action="decrement"]'); // кнопка -
const btnMore = document.querySelector('[data-action="increment"]'); // кнопка +
const spanValue = document.querySelector("#value"); // наше значення

let counterValue = 0;

// вішаємо слухача подій на кнопки

btnLess.addEventListener("click", () => {
	counterValue -= 1;
	spanValue.textContent = counterValue;
});

btnMore.addEventListener("click", () => {
	counterValue += 1;
	spanValue.textContent = counterValue;
});
