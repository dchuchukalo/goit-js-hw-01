const passwordInputRef = document.querySelector('.passwordInput');
const buttonRef = document.querySelector('.confirmPassword');
buttonRef.addEventListener('click', () => {
  const passwordInput = passwordInputRef.value;
  let message;
  const ADMIN_PASSWORD = 'jqueryismyjam';

  switch (passwordInput) {
    case ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;

    default:
      message = 'Доступ запрещен, неверный пароль!';
  }

  alert(message);
});
