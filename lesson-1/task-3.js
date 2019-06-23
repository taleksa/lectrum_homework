/* Задача 3

Перепишите код, заменив оператор `switch` на оператор `if..else`:*/

const value = 'c';

if (value == 'a') {
  console.log('a');
} else if (value == 'b' || value == 'c' || value == 'd' || value == 'e') {
  console.log('others')
} else {
  console.log('unknown');
}