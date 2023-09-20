const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ul = document.getElementById('ingredients'); // Знаходимо список ul по його id
// ingredients.forEach(ingredient => { // Проходимо по кожному інгредієнту в масиві
//   const li = document.createElement('li'); // Створюємо новий елемент li
//   li.innerText = ingredient; // Встановлюємо текстовий вміст елементу li
//   li.classList.add('item'); // Додаємо клас "item" до елементу li
//   ul.appendChild(li); // Додаємо елемент li до списку ul
// });

const ulIngredients = document.getElementById("ingredients");

const listIngredients = ingredients.map((ingredient) => {
  const listIngredient = document.createElement("li");
  listIngredient.textContent = ingredient;
  listIngredient.classList.add("item");
  return listIngredient;
});

ulIngredients.append(...listIngredients);
