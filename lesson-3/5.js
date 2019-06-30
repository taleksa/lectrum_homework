/**
 * Задача 5.
 *
 * Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
 * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
 * Создайте для этого вспомогательную функцию `isPositive(-3)`,
 * которая параметром будет принимать число и возвращать true,
 * если число положительное, и false — если отрицательное.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 */

const array = [1, 2, -4, 3, -9, -1, 7];
let positiveArray = [];
for(item of array) {
    if(item > 0) {
        positiveArray.push(item);
    }
}

function isPositive(n) {
    console.log(positiveArray);
    if(typeof n === 'number') {
        if (n > 0) {
            positiveArray.push(n);
            return true;
        } else {
            return false;
        }
    } else {
        throw new Error('parameter type is not a Number');
    }
}
// Решение

/* не удалять */
isPositive(-3); // false
isPositive(3); // true
isPositive('s'); // Error: parameter type is not a Number

export { isPositive };
/* не удалять */
