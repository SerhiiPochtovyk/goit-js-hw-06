const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
  const length = parseInt(input.getAttribute('data-length'));
  const value = input.value.length;

  if (value === length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});

// Якщо введена правильна кількість символів, бордер інпуту змінюється на зелений, а якщо неправильна кількість - на червоний. У коді використовуються класи CSS .valid та .invalid, які знаходяться в CSS-файлі.
