/* Задача 12

Найдите сумму положительных элементов массива.

Использовать встроенные методы массивов — нельзя.*/

const array = [2, -1, -3, 15, 0, 4];
let result = 0;

for(item of array) {
  if(item > 0) {
    result = result + item;
  }
}