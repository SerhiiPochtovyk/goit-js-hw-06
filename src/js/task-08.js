const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailInput = loginForm.nextElementSibling.email;
  const passwordInput = loginForm.nextElementSibling.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert('Всі поля повинні бути заповнені');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);

    loginForm.reset();
  }
});
