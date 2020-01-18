const countryRef = document.querySelector('.country');
const buttonRef = document.querySelector('.deliveyConfirm');

buttonRef.addEventListener('click', () => {
  let country =
    countryRef.value.charAt(0).toUpperCase() +
    countryRef.value.substr(1).toLowerCase();

  let message = `Доставка в ${country} будет стоить`;

  switch (country) {
    case 'Китай':
      console.log(`${message} 100 кредитов`);
      break;

    case 'Чили':
      console.log(`${message} 250 кредитов`);
      break;

    case 'Австралия':
      console.log(`${message} 170 кредитов`);
      break;

    case 'Индия':
      console.log(`${message} 80 кредитов`);
      break;

    case 'Ямайка':
      console.log(`${message} 120 кредитов`);
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
});
