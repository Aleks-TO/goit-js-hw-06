const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
// отримуємо спочатку посилання на елемент дом інгрідієнти
const ingredientsList = document.querySelector("#ingredients");

// проходимось методом фор ич по всьому масиву
// ingredients.forEach(item => {
// 	// створюємо елемент
// 	const ingredientItem = document.createElement("li");
// 	// додаэмо текстовий контент
// 	ingredientItem.textContent = item;
// 	// додаэмо клас
// 	ingredientItem.classList.add("item");
// 	// додаемо в дом
// 	ingredientsList.append(ingredientItem);
// 	// console.log(ingredientsList);
// });
// проходимось методом map по всьому масиву
const createItems = ingredients.map(item => {
	const ingredientItem = document.createElement("li");
	ingredientItem.textContent = item;
	ingredientItem.classList.add("item");
	return ingredientItem;
});
//отримуємо масив, і розпилюємо в атрибути методу append
ingredientsList.append(...createItems);
