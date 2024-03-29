/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
function f(n) {
    if (typeof n === 'number') {
        console.log(n**3);
    } else {
        throw new Error('parameter is not a number type');
    }
}
/* не удалять */
f(2); // 8
f('Content'); // Error: parameter is not a number type

export { f };
/* не удалять */
