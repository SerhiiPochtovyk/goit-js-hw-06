const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.addEventListener("input", function () {
  text.style.fontSize = fontSizeControl.value + "px";
});



// додаємо слухач подій input до елементу input, щоб викликати функцію кожен раз, коли змінюється значення. У цій функції ми оновлюємо стиль елемента span за допомогою властивості fontSize, присвоюючи йому значення, яке отримуємо з input.