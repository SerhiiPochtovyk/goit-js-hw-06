const counterValue = document.getElementById("value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let currentValue = 0;

decrementButton.addEventListener("click", () => {
  currentValue--;
  updateCounterValue();
});

incrementButton.addEventListener("click", () => {
  currentValue++;
  updateCounterValue();
});

function updateCounterValue() {
  counterValue.textContent = currentValue;
}
