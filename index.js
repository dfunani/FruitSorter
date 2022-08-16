let fruit = ["🍎", "🍊"];
let basket = [];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
let sort_button = document.getElementById('sort');
let fruit_counter = document.getElementById('fruit-count');
let min = 1;
let max = 30;
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

sort_button.addEventListener('click', Sort);
reset_button.addEventListener('click', Reset);

function CreateBasket() {
	basket = []
	basket_size = Math.floor(Math.random() * (max - min + 1)) + min;

	for (let i = 0; i < basket_size; i++) {
		random_fruit = Math.floor(Math.random() * 2);
		basket.push(fruit[random_fruit]);
	}
	return basket_size
}

function Sort() {
	basket_length = CreateBasket();
	appleShelf.innerHTML = '';
	orangeShelf.innerHTML = '';
	fruit_counter.innerHTML = basket_length;
	basket.forEach(element => {
		if (element === "🍎") {
			appleShelf.innerHTML += "🍎";
		}
		else {
			orangeShelf.innerHTML += "🍊";
		}
	})
}
