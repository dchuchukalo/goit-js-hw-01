let total = 0;
let input;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  input = Number(input);
  const isNaN = Number.isNaN(input);

  if (isNaN) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }

  total += input;
}
