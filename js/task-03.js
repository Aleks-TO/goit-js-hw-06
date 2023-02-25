const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

// отримуємо посилання на наш список
const galleryList = document.querySelector(".gallery");
console.log(galleryList);

// Написати функцію яка створить розмітку

const imgItem = ({ url, alt }) => `<li><img src = '${url}' alt = "${alt}"></li>`;

// Cтворити масив із розмітки і вставити у список .gallery

const markup = images.map(el => imgItem(el)).join("");
console.log(markup);
galleryList.insertAdjacentHTML("afterbegin", markup);
