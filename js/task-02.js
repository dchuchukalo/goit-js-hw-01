const numberInputRef = document.querySelector('.ordered');
const buttonRef = document.querySelector('.orderStatus');
buttonRef.addEventListener('click', () => {
  const total = 100;
  const ordered = Number(numberInputRef.value);

  if (ordered <= 0) {
    console.log('Количество товаров в заказе указано не верно');
  } else {
    ordered > total
      ? console.log('На складе недостаточно твоаров!')
      : console.log('Заказ оформлен, с вами свяжется менеджер');
  }
});
