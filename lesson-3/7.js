/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение
function getDivisors(n) {
    let array=[];
    if(typeof n === 'number' && n > 0) {
        for (let i=0; i<=n; i++) {
            if(n%i === 0) {
                array.push(i);
            }
        }
    console.log(evenNumber(n));
    } else if (n == 0) {
        throw new Error('parameter can\'t be a 0');
    } else {
        throw new Error('parameter type is not a Number');
    }
    console.log(array);
}

function evenNumber(num) {
    if(num%2 === 0) {
        return true;
    } else {
        return false;
    }
}

/* не удалять */
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

export { getDivisors };
/* не удалять */
