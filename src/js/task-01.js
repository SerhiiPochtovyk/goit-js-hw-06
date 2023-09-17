const ul = document.querySelector("#categories");
const items = ul.querySelectorAll(".item");

console.log("Number of categories: " + items.length);

items.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;

  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});