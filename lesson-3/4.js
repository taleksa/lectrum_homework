/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение
function f(n) {
  if (typeof n === 'number' ) {
    switch (n) {
      case 1:
        console.log('Понедельник');
        break;
      case 2:
        console.log('Вторник');
        break;
      case 3:
        console.log('Среда');
        break;
      case 4:
        console.log('Четверг');
        break;
      case 5:
        console.log('Пятница');
        break;
      case 6:
        console.log('Суббота');
        break;
      case 7:
        console.log('Воскресенье');
        break;
      default:
        throw new Error('parameter should be in the range of 1 to 7')
    }
  } else {
    throw new Error('parameter type is not a Number')
  }
}

/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

export { f };
/* не удалять */