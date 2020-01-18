const credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt('Сколько дроидов вы хотите купить?');
let totalPrice;

if (quantity === null) {
  console.log('Отменено пользователем!');
} else if (quantity <= 0) {
  console.log('Количество товаров в заказе указано не верно');
} else {
  totalPrice = Number(quantity) * pricePerDroid;
  totalPrice > credits
    ? console.log('Недостаточно средств на счету!')
    : console.log(
        `Вы купили ${quantity} дроидов, на счету осталось ${credits -
          totalPrice} кредитов.`,
      );
}
