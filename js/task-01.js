const listEl = document.querySelectorAll(".item");

console.log("Number of categories:", listEl.length);
console.log(listEl);

listEl.forEach(item => {
	const nameCategory = item.firstElementChild;
	const nameList = item.lastElementChild.children;
	console.log("Category:", nameCategory.textContent);
	console.log("Elements:", nameList.length);
});
