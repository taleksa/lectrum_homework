/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
 * и возвращать новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 * 
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];


// Решение

function inspect(arr) {
    if(!Array.isArray(arr) || arr === 'undefined') {
        throw new Error('The argument should be an array');
    }
    let filterResult = arr.filter(element => {
        if(typeof element === 'string') {
            return element.length;
        }
    })
    let mapResult = filterResult.map(item => {
        return item.length;
    })
    return filterResult, mapResult;
}

const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

exports.inspect = inspect;
