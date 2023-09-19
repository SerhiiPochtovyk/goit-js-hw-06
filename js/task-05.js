const nameInput = document.getElementById('name-input');  
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    if (nameInput.value === '') {
      nameOutput.textContent = 'Anonymous';
    } else {
      nameOutput.textContent = nameInput.value;
    }
  });



//   Створюється змінна "nameInput" за допомогою методу "getElementById", яка отримує доступ до елемента з id "name-input".
// створюється змінна "nameOutput" за допомогою методу "getElementById", яка отримує доступ до елемента з id "name-output".
// Встановлюється прослуховувач події "input" для елемента "nameInput". Це означає, що коли користувач вводить текст у поле, спрацьовує функція зворотного виклику.
// В середині функції перевіряється значення поле з id "name-input". Якщо воно рівне пустому рядку, то присвоюється значення 'Anonymous' полю з id "name-output". В іншому випадку, присвоюється значення змінної "nameInput" полю "nameOutput".
// Таким чином, коли користувач вводить текст в поле з id "name-input", ці дані тут же виводяться у поле з id "name-output". Якщо поле пусте, то у поле "name-output" встановлюється значення 'Anonymous'.