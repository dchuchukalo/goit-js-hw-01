const passwordInputRef = document.querySelector('.passwordInput');
const buttonRef = document.querySelector('.confirmPassword');
buttonRef.addEventListener('click', () => {
  const passwordInput = passwordInputRef.value;
  let message;
  const ADMIN_PASSWORD = 'jqueryismyjam';

  if (passwordInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  alert(message);
});
